import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-center">
                <Link to="/terms">Terms</Link>
                <span>·</span>
                <Link to="/privacy">Privacy</Link>
                <span>·</span>

                <a
                    href="https://instagram.com/s.stojanovski"
                    target="_blank"
                    rel="noreferrer"
                >
                    Instagram
                </a>

                <span>·</span>

                <a
                    href="https://linkedin.com/in/stefan-stojanovski-025b89264"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>

                <span>·</span>

            </div>
        </footer>
    );
}
