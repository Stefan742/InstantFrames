import "../pages/Polaroid.css";
import { Link } from "react-router-dom";

export default function Terms() {
    return (
        <div className="legal-page">
            <header className="header">
                <div className="logo">
                    <img src="/LogoInsta.png" alt="Instant Frames" />
                </div>
                <nav>
                    <Link to="/">Gallery</Link>
                    <Link to="/about">About</Link>
                    <Link to="/terms">Terms</Link>
                    <Link to="/privacy">Privacy</Link>
                </nav>
            </header>

            <div className="legal-content">
                <div className="legal-text-container">
                    <h1>Terms of Service</h1>
                    <p className="about-text">
                        Добредојде во Instant Frames! Со користење на нашата апликација се согласувате да ги следите овие правила.
                    </p>

                    <p className="about-text">
                        - Сите содржини што ги креирате ви припаѓаат на вас, но дозволувате на Instant Frames да ги прикажува во апликацијата.
                    </p>

                    <p className="about-text">
                        - Забрането е да поставувате содржини кои се навредливи, незаконски или нарушуваат туѓи права.
                    </p>

                    <p className="about-text">
                        - Instant Frames не презема одговорност за какви било директни или индиректни штети кои можат да произлезат од користење на апликацијата.
                    </p>

                    <p className="about-text">
                        - Промените на овие правила ќе бидат објавувани на оваа страница.
                    </p>
                </div>

                <div className="legal-image-container">
                    <div className="polaroid small">
                        <img src="https://picsum.photos/200/250?random=9" alt="Example" />
                        <p>Terms</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
