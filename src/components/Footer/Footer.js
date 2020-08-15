import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import line from '../../line.svg';

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
              <h1>Kereső</h1>
              <ul> 
                <li>
                  <Link to='/galeriak'>Galériák</Link>
                </li>
                <li>
                  <Link to='/info'>Infó</Link>
                </li>
                <li>
                  <Link to='/rolam'>Rólam</Link>
                </li>
                <li>
                  <Link to='/kapcsolat'>Kapcsolat</Link>
                </li>
              </ul>
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