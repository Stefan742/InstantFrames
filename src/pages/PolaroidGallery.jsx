import { useState } from "react";
import "./Polaroid.css"
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const photos = [
    // LEFT CLUSTER
    {
        id: 1,
        image: "https://picsum.photos/400/500?random=1",
        caption: "This scene feels like home.",
        top: "150px",
        left: "110px",
        rotate: "-20deg",
    },
    {
        id: 2,
        image: "https://picsum.photos/400/500?random=2",
        caption: "Memories.",
        top: "120px",
        left: "250px",
        rotate: "13deg",
    },

    // CENTER BACK (behind CTA)
    {
        id: 3,
        image: "https://picsum.photos/400/500?random=3",
        caption: "A moment I’ll never forget.",
        top: "150px",
        left: "440px",
        rotate: "-23deg",
    },
    {
        id: 4,
        image: "https://picsum.photos/400/500?random=4",
        caption: "Turn moments in memories",
        top: "120px",
        left: "640px",
        rotate: "4deg",
        zIndex: 30,
    },

    // RIGHT CLUSTER
    {
        id: 5,
        image: "https://picsum.photos/400/500?random=5",
        caption: "Adventure awaits.",
        top: "180px",
        left: "870px",
        rotate: "18deg",
    },
    {
        id: 6,
        image: "https://picsum.photos/400/500?random=6",
        caption: "Adventure awaits.",
        top: "200px",
        left: "1070px",
        rotate: "-16deg",
        zIndex: 20,
    },
    {
        id: 7,
        image: "https://picsum.photos/400/500?random=7",
        caption: "Adventure awaits.",
        top: "150px",
        left: "1200px",
        rotate: "16deg",
        zIndex: 10,
    },
];

export default function PolaroidGallery() {
    const [active, setActive] = useState(null);

    return (
        <>
            <Header/>
            {/* GALLERY */}
            <div className="gallery">
                {photos.map((p) => (
                    <div
                        key={p.id}
                        className="polaroid"
                        style={{
                            top: p.top,
                            left: p.left,
                            zIndex: p.zIndex || 1,
                            transform: `rotate(${p.rotate})`,
                            "--startX": `${Math.floor(Math.random() * 800 - 400)}px`,
                            "--startY": `${Math.floor(Math.random() * 600 - 300)}px`,
                            "--rotate": p.rotate,
                        }}
                        onClick={() => setActive(p)}
                    >
                        <img src={p.image} alt="" />
                        <p>{p.caption}</p>
                    </div>
                ))}
            </div>

            {active && (
                <div className="overlay" onClick={() => setActive(null)}>
                    <div className="modal">
                        <img src={active.image} alt="" />
                        <p>{active.caption}</p>
                    </div>
                </div>
            )}
            <div className="cta">
                <Link to="/create">
                    <button>CREATE YOUR OWN</button>
                </Link>
            </div>
           <Footer/>


        </>
    );
}
