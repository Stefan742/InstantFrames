import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src="/LogoInsta.png" alt="Instant Frames" />
                </Link>
            </div>

            <button className="burger" onClick={() => setOpen(!open)}>
                ☰
            </button>

            <nav className={open ? "open" : ""}>
                <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            </nav>
        </header>
    );
}
