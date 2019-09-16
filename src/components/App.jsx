import React, { Component } from "react";
import logo_kagocel from "../images/kagocel_logo.png";
import logo_soyuz from "../images/logo_soyuz.png";
import logo from "../images/logo.png";
import bg1 from "../images/bg3.png";
import google_play from "../images/google_play.png";
import app_store from "../images/app_store.png";
import style from "./App.scss";

var storeGoogleStyle = {
    backgroundImage: `url(${google_play})`
};
var storeAppleStyle = {
backgroundImage: `url(${app_store})`
};
class App extends React.Component {
    constructor() {
        super(); 
        this.state = { 
            isMobile: false,
        };
    }   
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
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
                    <img className="kagocel-img" src={logo_kagocel}/>
                    <img className="souz-img" src={logo_soyuz}/>
                </div>
            )
        }
        const Button = () => {
            return (
                <div className="button">
                   Участвовать
                </div>
            )
        }
        const Stores = () => {
            return (
                <div className="stores">
                    <div className="store google-play" style={ storeGoogleStyle  }>
                    </div>
                    <div className="store app-store" style={ storeAppleStyle  }>
                    </div>
                </div>
            )
        }
     return(
     <div className="main" style={{ backgroundImage: `url(${bg1})` }}>
     <Menu/>
     <div className="content">
     <div className="center-block">
        <img className="title" src={logo}/>
        <div className="description">
                <span>Проверь свои силы в караоке-игре «Вы орете великолепно!»<br/>
                И выиграй <b>годовую подписку на PREMIER!</b></span><br/> 
                Позаботься о своем здоровье и хорошем настроении с Кагоцелом!   
        </div>
        <Button/>
        <Stores/>
     </div>
     </div>
     </div>
    );
  }
}   

export default App;
