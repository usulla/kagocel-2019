import React, { Component } from "react";
import google_play from "../images/google_play.png";
import app_store from "../images/app_store.png";
import google_play_hover from "../images/google_play_hover.png";
import app_store_hover from "../images/app_store_hover.png";

class Stores extends React.Component {
    constructor() {
        super();
        this.state = {
            hover_googleBtn: false,
            hover_appleBtn: false
        };
        this.toggleHoverApple = this.toggleHoverApple.bind(this);
        this.toggleHoverGoogle = this.toggleHoverGoogle.bind(this);
    }
    toggleHoverApple() {
        this.setState({ hover_appleBtn: !this.state.hover_appleBtn });
    }
    toggleHoverGoogle() {
        this.setState({ hover_googleBtn: !this.state.hover_googleBtn });
    }
    render() {
        var storeGoogleStyle;
        var storeAppleStyle;
        if (this.state.hover_googleBtn) {
            storeGoogleStyle = {
                backgroundImage: `url(${google_play_hover})`
            };
        } else {
            storeGoogleStyle = {
                backgroundImage: `url(${google_play})`
            };
        }
        if (this.state.hover_appleBtn) {
            storeAppleStyle = {
                backgroundImage: `url(${app_store_hover})`
            };
        } else {
            storeAppleStyle = {
                backgroundImage: `url(${app_store})`
            };
        }
        return (
            <div className="stores">
                <a href="https://play.google.com/store/apps/details?id=com.finchmil.thtclub" target="_blank"
                    className="store google-play"
                    style={storeGoogleStyle}
                    onMouseEnter={this.toggleHoverGoogle}
                    onMouseLeave={this.toggleHoverGoogle}
                >
                </a>
                <a href="https://itunes.apple.com/ru/app/tnt-club/id911345730?mt=8" target="_blank"
                    className="store app-store"
                    style={storeAppleStyle}
                    onMouseEnter={this.toggleHoverApple}
                    onMouseLeave={this.toggleHoverApple}
                >
                </a>
            </div>
        );
    }
}
export default Stores;
