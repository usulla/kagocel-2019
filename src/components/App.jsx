import React, { Component } from "react";
import logo_kagocel from "../images/kagocel_logo.png";
import logo_soyuz from "../images/logo_soyuz.png";
import logo from "../images/logo.png";
import bg1 from "../images/bg3.png";
import bg2 from "../images/bg2.png";
import bg2_mob from "../images/bg2_mob.jpg";
import btn_start from "../images/btn_start_3.png";
import arrow_left from "../images/arrow-left.png";
import arrow_right from "../images/arrow-right.png";
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
import Stores from "./SocButtons.jsx";

var btnStyle = {
    backgroundImage: `url(${ btn_start })`
};

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isMobile: false,
            hover_googleBtn: false,
            hover_appleBtn: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        var competitonTop = document.querySelector('.competition').offsetTop-180;
        console.log(competitonTop, 'ff');
        window.scroll({
        top: competitonTop, 
        left: 0, 
        behavior: 'smooth'
});
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        setTimeout(() => {
            var pageHeight = document.querySelector(".main").offsetHeight;
            document.querySelector(".letu").style.height = `${pageHeight}px`;
            console.log(pageHeight);
        }, 700);
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
                    <a href="https://www.kagocel.ru/about_drug/" target="_blank">
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
                <div className="button_outer">
                    <a href="//tnt-club.com" target="_blank" className="button" style={{btnStyle}}>
                        <span className="button_text button_text-active">Участвовать</span>
                        <span className="button_text button_text-hover">Участвовать</span>
                        <div className="button_hover">
                        </div>
                    </a>
                    
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
            <div
                className="main"
                style={
                    this.state.isMobile
                        ? { backgroundImage: `url(${bg2_mob})` }
                        : { backgroundImage: `url(${bg1})` }
                }
            >
                <div
                    className="letu"
                    style={{ backgroundImage: `url(${bg2})` }}
                ></div>
                <Menu />
                <img className="fig fig10" src={fig10} />
                <img className="fig fig11" src={fig11} />
                <div className="content">
                    <div className="center-block">
                        <img className="title" src={logo} />
                        <div className="description">
                            <img className="fig fig5" src={fig5} />
                            <img className="fig fig6" src={fig6} />
                            <img className="fig fig8" src={fig8} />
                            <img className="fig fig9" src={fig9} />
                            <span>
                                Проверь свои силы в караоке-игре «Вы орете
                                великолепно!»
                                <br />И выиграй
                                <b> годовую подписку на PREMIER!</b>
                            </span>
                            <p style={{marginBottom: '5px'}}>
                                Позаботься о своем здоровье и хорошем настроении
                                с Кагоцелом!
                            </p>
                            <div className="arrow_down" onClick={this.handleClick}></div>
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
