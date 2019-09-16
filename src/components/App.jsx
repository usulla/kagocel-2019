import React, { Component } from "react";
import logo_kagocel from "../images/kagocel_logo.png";
import logo_soyuz from "../images/logo_soyuz.png";
import logo from "../images/logo.png";
import bg1 from "../images/bg3.png";
import bg2 from "../images/bg2.png";
import bg2_mob from "../images/bg2_mob.png";
import google_play from "../images/google_play.png";
import app_store from "../images/app_store.png";
import btn_start from "../images/btn_start.png";
import plus16 from "../images/16plus.png";
import warning from "../images/warning.jpg";
import competition from "../images/competition.png";
import fig1 from "../images/fig1.png";
import fig2 from "../images/fig2.png";
import fig3 from "../images/fig3.png";
import fig4 from "../images/fig4.png";
import fig5 from "../images/fig5.png";
import fig6 from "../images/fig6.png";
import fig8 from "../images/fig8.png";
import fig9 from "../images/fig9.png";
import fig10 from "../images/fig10.png";
import fig11 from "../images/fig11.png";
import style from "./App.scss";

var storeGoogleStyle = {
    backgroundImage: `url(${google_play})`
};
var btnStyle = {
    backgroundImage: `url(${btn_start})`
};
var storeAppleStyle = {
    backgroundImage: `url(${app_store})`
};
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isMobile: false
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        var pageHeight = document.querySelector(".footer").offsetTop;
        document.querySelector(".letu").style.height = `${pageHeight}px`;
        console.log(pageHeight);
    }
    componentWillMount() {
        this.resize();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }
    resize() {
        this.setState({ isMobile: window.innerWidth <= 767 });
    }
    render() {
        const Menu = () => {
            return (
                <div className="menu">
                    <a href="" target="_blank">
                        <img className="kagocel-img" src={logo_kagocel} />
                    </a>
                    <a href="" target="_blank">
                        <img className="souz-img" src={logo_soyuz} />
                    </a>
                </div>
            );
        };
        const Button = () => {
            return (
                <div className="button" style={btnStyle}>
                    <a href="" target="_blank">
                        Участвовать
                    </a>
                </div>
            );
        };
        const Stores = () => {
            return (
                <div className="stores">
                    <div className="store google-play" style={storeGoogleStyle}>
                        <a href="" target="_blank"></a>
                    </div>
                    <div className="store app-store" style={storeAppleStyle}>
                        <a href="" target="_blank"></a>
                    </div>
                </div>
            );
        };
        const Footer = () => {
            return (
                <div className="footer">
                    <div className="footer_content">
                        <div className="text1">
                            Общий срок проведения акции с 23.09.2019 г. по
                            31.10.2019 г. Подробности об организаторе, партнере
                            акции, о правилах её проведения, результатах такого
                            мероприятия, сроках, месте и порядке её проведения
                            уточняйте в мобильном приложении ТНТ-CLUB. Внешний
                            вид призов может отличаться от изображения в
                            рекламных материалах.
                        </div>
                        <img className="plus16" src={plus16} />
                        <div className="text2">
                            <img className="warning" src={warning} />
                        </div>
                    </div>
                </div>
            );
        };
        const Competition = () => {
            return (
                <div className="competition">
                    <img className="bell" src={competition} />
                    <img className="fig fig1" src={fig1} />
                    <img className="fig fig2" src={fig2} />
                    <img className="fig fig3" src={fig3} />
                    <img className="fig fig4" src={fig4} />
                    <div className="competition-title">Условия конкурса</div>
                    <div className="competition-items">
                        <div className="competition-item">
                            <span className="num">1.</span>
                            <div className="text">
                                Заходи в приложение ТНТ-CLUB в раздел с игрой
                                «Студия Заботы Кагоцела»
                            </div>
                        </div>
                        <div className="competition-item">
                            <span className="num">2.</span>
                            <div className="text">
                                Участвуй в экстремальном караоке: тебе нужно
                                спеть песню и провести шарик через полосу
                                препятствий
                            </div>
                        </div>
                        <div className="competition-item">
                            <span className="num">3.</span>
                            <div className="text">
                                Чем громче голос – тем выше поднимается шарик
                            </div>
                        </div>
                        <div className="competition-item">
                            <span className="num">4.</span>
                            <div className="text">
                                Чем дальше продвинется шарик, тем больше баллов
                                ты получишь
                            </div>
                        </div>
                        <div className="competition-item">
                            <span className="num">5.</span>
                            <div className="text">
                                Каждый день участник, набравший максимальное
                                количество баллов, получает годовую подписку на
                                PREMIER
                            </div>
                        </div>
                    </div>
                </div>
            );
        };
        return (
            <div className="main" style={{ backgroundImage: `url(${bg1})` }}>
                <div
                    className="letu"
                    style={
                        this.state.isMobile
                            ? { backgroundImage: `url(${bg2_mob})` }
                            : { backgroundImage: `url(${bg2})` }
                    }
                ></div>
                <Menu />
                <div className="content">
                    <div className="center-block">
                        <img className="fig fig10" src={fig10} />
                        <img className="fig fig11" src={fig11} />
                        <img className="title" src={logo} />
                        <div className="description">
                            <img className="fig fig5" src={fig5} />
                            <img className="fig fig6" src={fig6} />
                            <img className="fig fig8" src={fig8} />
                            <img className="fig fig9" src={fig9} />
                            <span>
                                Проверь свои силы в караоке-игре «Вы орете
                                великолепно!»
                                <br />И выиграй{" "}
                                <b>годовую подписку на PREMIER!</b>
                            </span>
                            <br />
                            Позаботься о своем здоровье и хорошем настроении с
                            Кагоцелом!
                        </div>
                        <Button />
                        <Stores />
                        <Competition />
                        <Button />
                        <Stores />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
