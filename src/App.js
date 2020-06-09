import React from 'react';
import './App.css';
import line from './line.svg';
//import leftArrow from './leftArrow';
//import rightArrow from './rightArrow';
//import quotemark from './quotemark';
 
import Navigation from './Navigation';
import Galleries from './Galleries';
import Gallery from './Gallery';
//import Info from './Info';
//import About from './About';
//import Contact from './Contact';
//import Footer from './Footer';

//Use in index.html, head tag
//Nunito Sans, Open Sans, Playfair Display
//<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Open+Sans&family=Playfair+Display:wght@700&display=swap" rel="stylesheet"> 
//font-family: 'Nunito Sans', sans-serif; font-family: 'Open Sans', sans-serif;font-family: 'Playfair Display', serif;

function App() {
  return (
    <div className="App">

        <div className="navigation">
          <Navigation />
        </div>

        <div className="philosophy">
          <img alt="philosophy img"/>
          <h1>Látásmódom</h1>
          <h2>Őszinte képvilág</h2>
          <p>Kíváncsi természetű vagyok, örök megfigyelő. Elbűvöl az emberek sokfélesége. Meggyőződésem, 
            hogy mindenkiről lehet jó képet készíteni. Hogy mitől jó számomra egy fotó? Néhány szóban: spontán, 
            őszinte, egyszerű. Minden mesterkéltségtől és álarcoktól mentes. Olyan, amelyen a fotózott igaz 
            önmagát látja viszont.
          </p>
          <h2>Tudj meg többet</h2>
        </div>

        <img src={line} className="divLine" alt="line" />

        <div className="newestWork">
          <h1>Legújabb képeim</h1>
          <h2>Válogatott kedvencek</h2>
          <img alt="img1"/>
          <img alt="img2"/>
          <img alt="img3"/>
          <img alt="img4"/>
          <img alt="img5"/>
          <h2>Összes galéria</h2>
          <Galleries />
          <Gallery />
        </div>

        <img src={line} className="divLine" alt="line" />

        <div className="categories">
          <h1>Portré</h1>
          <h2>Tovább</h2>
          <h1>Párfotó</h1>
          <h2>Tovább</h2>
          <h1>Divatfotó</h1>
          <h2>Tovább</h2>
        </div>

        <img src={line} className="divLine" alt="line" />

        <div className="testimonials">
          <img alt="testimonial img"/>
           <h1>Vélemények</h1>
          <p>Felülírtad eddigi fotózással kapcsolatos élményeimet, amiért nagyon hálás vagyok! Egy nagyon kellemes nappal 
            és sok őszinte képpel lettem gazdagabb (amiket szívesen nézek vissza). Szandra
          </p>
        </div>

        <img src={line} className="divLine" alt="line" />

        <footer className="footer"> 
          <div className="followOnInsta">
            <h1>Kövess az Instagramon</h1> 
            <h2>@juliabarophoto</h2>
            <img alt="insta img1"/>
            <img alt="insta img2"/>
            <img alt="insta img3"/>
            <img alt="insta img4"/>
            <img alt="insta img5"/>
            <img alt="insta img6"/>
          </div>

          <div className="footerBrowser">
            <h1>Kereső</h1>
            <h2>Galériák</h2>
            <h2>Infó</h2>
            <h2>Rólam</h2>
            <h2>Kapcsolat</h2>  
            <img></img>
            <h1>Kapcsolat</h1>
            <p>+36 30 224 5167</p>
          </div>

          <div className="copyright">
            <h2>© 2020 Julia Baro Photography</h2>
          </div>
        </footer>

    </div>
  );
}

export default App;

//footer should be a separate component
//images should be embeded from insta

//COMPONENTS:
//nav
//galeriak
//galeria
//info
//rolam
//kapcsolat
//footer

//<Info />
//<About />
//<Contact />
//<Footer />