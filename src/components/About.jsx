import "../pages/Polaroid.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function About() {
    return (
        <div className="about-page">
         <Header/>

            <div className="about-content">
                <div className="about-text-container">
                    <h1 className="film-text">About Instant Frames</h1>
                    <p>Instant Frames е место каде што твоите моменти се претвораат во вечни спомени. Секој кадар е инспириран од стари Polaroid фотографии и класични филмски ефекти.</p>
                    <p>Нашата мисија е да ти овозможиме лесен начин да креираш свој Polaroid со филмски vibe и да ги споделиш твоите спомени на уникатен начин.</p>
                    <p>Пробај го копчето "CREATE YOUR OWN" на галеријата за да креираш свој Polaroid и да додадеш текст и филтри за старински ефект.</p>
                </div>

                <div className="about-image-container">
                    <div className="polaroid small">
                        <img src="https://picsum.photos/200/250?random=7" alt="Example" />
                        <p>Memories</p>
                    </div>
                    <div className="polaroid small">
                        <img src="https://picsum.photos/200/250?random=8" alt="Example" />
                        <p>Adventure</p>
                    </div>
                </div>
            </div>


            <Footer/>
        </div>
    );
}
