import { useState } from "react";
import "./CreatePolaroid.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import axios from "axios";

// Layout positions for 7 photos
export const POLAROID_LAYOUT = [
    { top: "150px", left: "110px", rotate: "-20deg", zIndex: 7 },
    { top: "120px", left: "250px", rotate: "13deg", zIndex: 6 },
    { top: "150px", left: "440px", rotate: "-23deg", zIndex: 5 },
    { top: "120px", left: "640px", rotate: "4deg", zIndex: 4 },
    { top: "180px", left: "870px", rotate: "18deg", zIndex: 3 },
    { top: "200px", left: "1070px", rotate: "-16deg", zIndex: 2 },
    { top: "150px", left: "1200px", rotate: "16deg", zIndex: 1 },
];

export default function CreatePolaroid() {
    const TOTAL = 7;
    const [current, setCurrent] = useState(0);
    const [photos, setPhotos] = useState(
        Array.from({ length: TOTAL }, () => ({ image: null, caption: "" }))
    );
    const [loading, setLoading] = useState(false);
    const [shareLink, setShareLink] = useState("");

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setPhotos((prev) => {
            const copy = [...prev];
            copy[current] = { ...copy[current], image: file };
            return copy;
        });
    };

    const handleCaption = (e) => {
        const value = e.target.value;
        setPhotos((prev) => {
            const copy = [...prev];
            copy[current] = { ...copy[current], caption: value };
            return copy;
        });
    };

    const next = () => {
        if (current < TOTAL - 1) setCurrent((c) => c + 1);
    };

    const create = async () => {
        try {
            setLoading(true);

            const uploadedPhotos = await Promise.all(
                photos.map(async (p, i) => {
                    if (!p.image) return null;

                    const formData = new FormData();
                    formData.append("file", p.image);
                    formData.append("upload_preset", "instantframes_upload"); // Unsigned preset

                    const res = await axios.post(
                        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
                        formData,
                        { headers: { "Content-Type": "multipart/form-data" } }
                    );

                    const layout = POLAROID_LAYOUT[i] || {};

                    return {
                        url: res.data.secure_url,
                        caption: p.caption,
                        top: layout.top,
                        left: layout.left,
                        rotate: layout.rotate,
                        zIndex: layout.zIndex,
                    };
                })
            );

            const finalPhotos = uploadedPhotos.filter((p) => p !== null);

            const docRef = await addDoc(collection(db, "polaroids"), {
                photos: finalPhotos,
                createdAt: serverTimestamp(),
            });

            const link = `${window.location.origin}/polaroid/${docRef.id}`;
            setShareLink(link);
        } catch (err) {
            console.error(err.response ? err.response.data : err);
            alert("Error creating the polaroid set");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <div className="create-page">
                <h1>Create your Polaroid set</h1>

                <div className="create-layout">
                    {/* LEFT STACK */}
                    <div className="stack-wrapper">
                        <div className="counter">{current + 1} of {TOTAL}</div>

                        <div className="stack">
                            {photos.map((p, i) => {
                                const pos = (i - current + TOTAL) % TOTAL;
                                return (
                                    <div
                                        key={i}
                                        className="polaroid-stack"
                                        style={{
                                            zIndex: TOTAL - pos,
                                            transform: `translate(${pos * 6}px, ${pos * 6}px) rotate(${pos * -2}deg) scale(${pos === 0 ? 1.06 : 1})`,
                                        }}
                                    >
                                        {p.image ? (
                                            <img
                                                src={typeof p.image === "string" ? p.image : URL.createObjectURL(p.image)}
                                                alt=""
                                            />
                                        ) : (
                                            <div className="placeholder">Empty</div>
                                        )}
                                        {p.caption && <p>{p.caption}</p>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT CONTROLS */}
                    <div className="controls">
                        <label className="upload-box">
                            {photos[current].image ? "Change photo" : "Upload photo"}
                            <input type="file" accept="image/*" hidden onChange={handleUpload} />
                        </label>

                        <input
                            type="text"
                            placeholder="Write a caption..."
                            value={photos[current].caption}
                            onChange={handleCaption}
                        />

                        {current < TOTAL - 1 ? (
                            <button onClick={next}>Next</button>
                        ) : (
                            <button className="create-btn" onClick={create} disabled={loading}>
                                {loading ? "Creating..." : "Create"}
                            </button>
                        )}

                        {shareLink && (
                            <div className="share-card">
                                <p>Your Polaroids are is ready ✨</p>
                                <a
                                    href={shareLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="share-btn"
                                >
                                    Open your Polaroid Set →
                                </a>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
