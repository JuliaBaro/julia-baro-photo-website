import React from 'react';
import './Navigation.css';
//import logo from './logo.svg';
import line from './line.svg';

function Navigation() {
    return (
        <div className="navigation">
            <div className="logo_and_line">
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Julia Baro Photography" className="logo_image"/*max-width="382px"*//>
                </div>
                <img src={line} className="div_line_nav" alt="line" />
            </div>

            {/* navigation base: https://codepen.io/juliabaro/pen/JjGajvW */}
            {/* https://codepen.io/deyand/pen/pvmyjw */}
            {/* https://codepen.io/mzeenkala/pen/gBmwob */}
            {/*** add searchbox? */}
            <div className="nav">
                <nav className="navbar">
                    <div className="menu-toggle" id="mobile-menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className="nav no-search">
                        <li className="nav-item"><a href="#">GALÉRIÁK</a></li>
                        <li className="nav-item"><a href="#">INFÓ</a></li>
                        <li className="nav-item"><a href="#">RÓLAM</a></li>
                        <li className="nav-item"><a href="#">KAPCSOLAT</a></li>
                    </ul>
                </nav>   
            </div>

            <div className="hero_images">
                <img className="hero_image" src={process.env.PUBLIC_URL + "/images/fashion-photo-1.png"} alt="Fashion blogger in little white dress" />
                <img className="hero_image" src={process.env.PUBLIC_URL + "/images/portrait-photo-2.png"} alt="Musician girl with violin" />
                <img className="hero_image" src={process.env.PUBLIC_URL + "/images/portrait-photo-3.png"} alt="Closeup portrait with jevellery" />
                <img className="hero_image" src={process.env.PUBLIC_URL + "/images/couple-photo-4.png"} alt="Cute couple sitting on a bench" />
            </div>
            <div className="hero_image_caption">
                <h3>művészi portré és párfotó</h3>
                <h3>— Budapest —</h3>
            </div>
        </div>
    );
  }

export default Navigation;