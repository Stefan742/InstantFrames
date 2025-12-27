import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Polaroid.css";

export const POLAROID_LAYOUT = [
    { top: "150px", left: "110px", rotate: "-20deg", zIndex: 7 },
    { top: "120px", left: "250px", rotate: "13deg", zIndex: 6 },
    { top: "150px", left: "440px", rotate: "-23deg", zIndex: 5 },
    { top: "120px", left: "640px", rotate: "4deg", zIndex: 4 },
    { top: "180px", left: "870px", rotate: "18deg", zIndex: 3 },
    { top: "200px", left: "1070px", rotate: "-16deg", zIndex: 2 },
    { top: "150px", left: "1200px", rotate: "16deg", zIndex: 1 },
];

export default function PolaroidView() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [modal, setModal] = useState({ open: false, photo: null });

    useEffect(() => {
        const fetchData = async () => {
            const snap = await getDoc(doc(db, "polaroids", id));
            if (snap.exists()) setData(snap.data());
        };
        fetchData();
    }, [id]);

    if (!data) return null;

    return (
        <>
            <Header />
            <div className="gallery">
                {data.photos.map((p, i) => {
                    const layout = POLAROID_LAYOUT[i] || {};
                    return (
                        <div
                            key={i}
                            className="polaroid"
                            style={{
                                top: layout.top,
                                left: layout.left,
                                zIndex: layout.zIndex || 1,
                                transform: `rotate(${layout.rotate})`,
                                '--rotate': p.rotate,
                            }}
                            onClick={() => setModal({ open: true, photo: p })}
                        >
                            <div className="polaroid-image-wrapper">
                                <img src={p.url} alt="" />
                            </div>
                            <p>{p.caption}</p>
                        </div>
                    );
                })}
            </div>

            {modal.open && (
                <div className="overlay" onClick={() => setModal({ open: false, photo: null })}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <img src={modal.photo.url} alt="" />
                        {modal.photo.caption && <p>{modal.photo.caption}</p>}
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}
