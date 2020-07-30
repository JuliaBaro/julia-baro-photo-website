import React from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from 'react-router-dom/Route';

import line from '../../line.svg';

/* NAVIGATION BASED ON */
/* https://codesandbox.io/s/mq48rlj0pp?file=/src/components/Nav.js:4167-4177 */

import './Navigation.css';
import Galleries from '../Galleries/Galleries';
import Info from '../Info/Info';
import About from '../About/About';
import Contact from '../Contact/Contact';
//import Gallery from '../Gallery/Gallery';

//import App from '../../App';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isExpanded: false
        };
    }
    handleToggle(e) {
        e.preventDefault();
        this.setState({
          isExpanded: !this.state.isExpanded
        });
    }
    render() {
        const { isExpanded } = this.state;

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

                    {/*** add searchbox? */}
                    <div className="nav">
                        <nav className="navbar">
                            <i
                                className="fa fa-bars"
                                aria-hidden="true"
                                onClick={e => this.handleToggle(e)}
                            />
                            <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}> {/*"nav_no_search"*/}
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
                                /*render={() => {return (console.log('home'))}}*/
                                /*render={() => {return (component={})}}*/
                                /*component={App}*/
                            />
    
                            {/*http://localhost:3000/galeriak*/}
                            <Route 
                                path="/galeriak" 
                                exact 
                                strict 
                                component={Galleries}
                            />
    
                            {/*http://localhost:3000/info*/}
                            <Route 
                                path="/info" 
                                exact 
                                strict 
                                component={Info}
                            />
    
                            {/*http://localhost:3000/rolam*/}
                            <Route 
                                path="/rolam" 
                                exact 
                                strict 
                                component={About}
                            />
    
                            {/*http://localhost:3000/kapcsolat*/}
                            <Route 
                                path="/kapcsolat" 
                                exact 
                                strict 
                                component={Contact}
                            />
    
                        </nav>   
                    </div>
    
                    {/*<div className="hero_images">
                        <img className="hero_image" src={process.env.PUBLIC_URL + "/images/fashion-photo-1.png"} alt="Fashion blogger in little white dress" />
                        <img className="hero_image" src={process.env.PUBLIC_URL + "/images/portrait-photo-2.png"} alt="Musician girl with violin" />
                        <img className="hero_image" src={process.env.PUBLIC_URL + "/images/portrait-photo-3.png"} alt="Closeup portrait with jevellery" />
                        <img className="hero_image" src={process.env.PUBLIC_URL + "/images/couple-photo-4.png"} alt="Cute couple sitting on a bench" />
                    </div>
                    <div className="hero_image_caption">
                        <h3>művészi portré és párfotó</h3>
                        <h3>— Budapest —</h3>
                    </div>*/}
                </div>
            </Router>
        );
    }
}

export default Navigation;
