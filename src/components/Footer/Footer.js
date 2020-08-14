import React from 'react';
//import { Link } from 'react-router';
//import { BrowserRouter as Router } from 'react-router-dom';
//import { Switch, Route } from 'react-router-dom';
import './Footer.css';
import line from '../../line.svg';

/*import Galleries from '../../pages/Galleries/Galleries';
import Info from '../../pages/Info/Info';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';*/

const Footer = () => {
    return (
      <div>

        {/* FOLLOW ON INSTA */}
        {/* is it possible to embed photos from insta */}
        <div className="followOnInsta">
          <img src={line} className="div_line" alt="line" />
          <h1>Kövess az Instagramon</h1> 
          <a href='https://www.instagram.com/juliabarophoto/' target="_blank" rel="noopener noreferrer"><h2>@juliabarophoto</h2></a>
          <div className="insta_photos_flex">
            <img src={process.env.PUBLIC_URL + "/images/insta-portrait-in-nature-1.png"} alt="Girl touching a tree" />
            <img src={process.env.PUBLIC_URL + "/images/insta-red-portrait-2.png"} alt="Red haired girl smiling" />
            <img src={process.env.PUBLIC_URL + "/images/insta-black-and-white-3.png"} alt="Reading man" />
            <img src={process.env.PUBLIC_URL + "/images/insta-hand-details-4.png"} alt="Hands of a tattooed girl" />
            <img src={process.env.PUBLIC_URL + "/images/insta-closeup-portrait-5.png"} alt="Girl with handvowen scarf" />
            <img src={process.env.PUBLIC_URL + "/images/insta-musician-portrait-6.png"} alt="Musician with her violin" />
          </div>
        </div>

        {/* FOOTER BROWSER */}
        <div className="footerBrowser">
          <div className="footer_flex"> 
            <div>
              {/*<Router>
                <Switch>
                  <h1>Kereső</h1>
                  <Route path='/galeriak' component={Galleries}></Route>
                  <Route path='/info' component={Info}><h2>Infó</h2></Route>
                  <Route path='/rolam' component={About}><h2>Rólam</h2></Route>
                  <Route path='/kapcsolat' component={Contact}><h2>Kapcsolat</h2></Route>
                </Switch>
              </Router>*/}
              <h1>Kereső</h1>
              <ul> 
                <li>
                  <a href='http://localhost:3000/galeriak'>Galériák</a>
                </li>
                <li>
                  <a href='http://localhost:3000/info'>Infó</a>
                </li>
                <li>
                  <a href='http://localhost:3000/rolam'>Rólam</a>
                </li>
                <li>
                  <a href='http://localhost:3000/kapscolat'>Kapcsolat</a>
                </li>
              </ul>
              {/*<h2>Galériák</h2>
              <h2>Infó</h2>
              <h2>Rólam</h2>
              <h2>Kapcsolat</h2>*/}
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + "/images/bottom-logo.png"} alt="Julia Baro Photography" />
            </div>
            <div>
              <h1>Kapcsolat</h1>
              <h2>+36 30 224 5167</h2>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="copyright">
          <h4>© 2020 Julia Baro Photography</h4>
        </div>

      </div>
    );
  }

export default Footer; 