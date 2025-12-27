import "../pages/Polaroid.css";
import { Link } from "react-router-dom";

export default function Privacy() {
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
                    <h1>Privacy Policy</h1>
                    <p className="about-text">
                        Вашата приватност е важна за нас во Instant Frames. Еве како ги користиме вашите податоци:
                    </p>

                    <p className="about-text">
                        - Не собирааме лични податоци освен ако не ги внесете доброволно (на пример, при испраќање на Polaroid или контакт со нас).
                    </p>

                    <p className="about-text">
                        - Вашите креирани Polaroid фотографии не се споделуваат со трети лица без ваша согласност.
                    </p>

                    <p className="about-text">
                        - Апликацијата користи cookies само за технички цели, како да се памети сесијата на корисникот.
                    </p>

                    <p className="about-text">
                        - Секој корисник има право да побара бришење на своите податоци или да ги менува.
                    </p>

                    <p className="about-text">
                        - Промените на оваа политика ќе бидат објавувани на оваа страница.
                    </p>
                </div>

                <div className="legal-image-container">
                    <div className="polaroid small">
                        <img src="https://picsum.photos/200/250?random=10" alt="Example" />
                        <p>Privacy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
