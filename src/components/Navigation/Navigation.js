import React from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from 'react-router-dom/Route';

import line from './line.svg';

import './Navigation.css';
//import Galleries from './Galleries';

function Navigation() {
    return (
        <Router>
            <div className="navigation">
                <div className="logo_and_line">
                    <div className="logo">
                        <NavLink to="/" exact>
                            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Julia Baro Photography" className="logo_image"/*max-width="382px"*//>
                        </NavLink>
                    </div>
                    <img src={line} className="div_line_nav" alt="line" />
                </div>

                {/* navigation base: https://codepen.io/juliabaro/pen/JjGajvW */}
                {/* https://codepen.io/deyand/pen/pvmyjw */}
                {/* https://codepen.io/mzeenkala/pen/gBmwob */}
                {/*** add searchbox? */}
                <div className="nav">
                    <nav className="navbar">
                        {/* this should be sandwitch nav */}
                        {/*<div className="menu_toggle" id="mobile_menu">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>*/}
                        <ul className="nav_no_search">
                            {/*<li className="nav-item"><a href="/galeriak">GALÉRIÁK</a></li>
                            <li className="nav-item"><a href="/info">INFÓ</a></li>
                            <li className="nav-item"><a href="/rolam">RÓLAM</a></li>
                            <li className="nav-item"><a href="/kapcsolat">KAPCSOLAT</a></li>*/}
                            {/*target="_blank" to open link in new tab*/}
                            <li className="nav_item">
                                <NavLink to="/galeriak" exact activeStyle={{ fontWeight:'800' }}>GALÉRIÁK</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink to="/info" exact activeStyle={{ fontWeight:'800' }}>INFÓ</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink to="/rolam" exact activeStyle={{ fontWeight:'800' }}>RÓLAM</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink to="/kapcsolat" exact activeStyle={{ fontWeight:'800' }}>KAPCSOLAT</NavLink>
                            </li>
                        </ul>

                        {/*http://localhost:3000*/}
                        <Route 
                            path="/" 
                            exact={true}
                            strict 
                            render={() => {return (console.log('home'))}
                            /*render={() => {return (component={})}}*/
                        }/>

                        {/*http://localhost:3000/galeriak*/}
                        <Route 
                            path="/galeriak" 
                            exact 
                            strict 
                            /*component={Galleries}*/
                            render={() => {return (<h1>Galeriak</h1>)}}
                            /*render={() => {return (component={Galleries})}}*/
                        />

                        {/*http://localhost:3000/info*/}
                        <Route 
                            path="/info" 
                            exact 
                            strict 
                            render={() => {return (<h1>Info</h1>)}}
                            /*render={() => {return (component={})}}*/
                        />

                        {/*http://localhost:3000/rolam*/}
                        <Route 
                            path="/rolam" 
                            exact 
                            strict 
                            render={() => {return (<h1>Rolam</h1>)}}
                            /*render={() => {return (component={})}}*/
                        />

                        {/*http://localhost:3000/kapcsolat*/}
                        <Route 
                            path="/kapcsolat" 
                            exact 
                            strict 
                            render={() => {return (<h1>Kapcsolat</h1>)}}
                            /*render={() => {return (component={})}}*/
                        />

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
        </Router>
    );
  }

export default Navigation;
