import React from 'react';
import './App.css';
import line from './line.svg';
//import leftArrow from './leftArrow';
//import rightArrow from './rightArrow';
//import quotemark from './quotemark';
 
//import Navigation from './Navigation';
//import Galleries from './Galleries';
//import Gallery from './Gallery';
//import Info from './Info';
//import About from './About';
//import Contact from './Contact';
//import Footer from './Footer';

//Use in index.html, head tag
//Nunito Sans, Open Sans, Playfair Display
//<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Open+Sans&family=Playfair+Display:wght@700&display=swap" rel="stylesheet"> 
//font-family: 'Nunito Sans', sans-serif; font-family: 'Open Sans', sans-serif;font-family: 'Playfair Display', serif;

//define grid on grid items / nested grids - grid applies only to direct children 

function App() {
  return (
    <div className="app_container">

      {/* ACCESS IMAGES IN PUBLIC FOLDER */}
      {/* https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder */}
      {/* png vs jpg format imgs? */}
      {/*** use image attributes like title, define language of naming https://imageseo.io/image-seo-alt-title-name-figcaption/*/}
      {/*** Use the same language in alt tag what you are using for 
      your page content. Obviously you don't want Arabic 
      language to show-up when image is missing; if your default page language is English. */}
      {/* https://www.seroundtable.com/google-do-not-translate-image-file-names-28903.html 
      In short, do not translate the image filename if the same image is being used elsewhere. Keep that 
      filename and URL for the image so Google does not need to consolidate the images on their end.
      */}
      {/*** create favicon */}

      
      <div className="navigation">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Julia Baro Photography Logo" />
        </div>

        {/*<hr className="horizontal_line" />*/}
        <img src={line} className="divLine" alt="line" />

        {/* navigation base: https://codepen.io/juliabaro/pen/JjGajvW */}
        {/* https://codepen.io/deyand/pen/pvmyjw */}
        {/* https://codepen.io/mzeenkala/pen/gBmwob */}
        {/*** add searchbox? */}
        <nav class="navbar">
            <div class="menu-toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <ul class="nav no-search">
            <li class="nav-item"><a href="#">GALÉRIÁK</a></li>
            <li class="nav-item"><a href="#">INFÓ</a></li>
            <li class="nav-item"><a href="#">RÓLAM</a></li>
            <li class="nav-item"><a href="#">KAPCSOLAT</a></li>
          </ul>
        </nav>   

        <div className="hero_images">
          <img className="hero_image" src={process.env.PUBLIC_URL + "/images/fashion-photo-1.png"} alt="Fashion photography in little white dress" />
          <img src={process.env.PUBLIC_URL + "/images/portrait-photo-2.png"} alt="Musician portrait with violin" />
          <img src={process.env.PUBLIC_URL + "/images/portrait-photo-3.png"} alt="Closeup fashion portraiture" />
          <img src={process.env.PUBLIC_URL + "/images/couple-photo-4.png"} alt="Cute couple photo" />
        </div>
        <h3>művészi portré és párfotó</h3>
        <h3>— Budapest —</h3>
      </div>

      <div className="philosophy"> {/*rename div to section for seo?*/}
        <div> {/*embedded css grid?*/}
          <img src={process.env.PUBLIC_URL + "/images/black-and-white-portrait.png"} alt="Black and white portrait of young lady" />
          <h1>Látásmódom</h1>
          <h2>Őszinte képvilág</h2>
          <p>Kíváncsi természetű vagyok, örök megfigyelő. Elbűvöl az emberek sokfélesége. Meggyőződésem, 
            hogy mindenkiről lehet jó képet készíteni. Hogy mitől jó számomra egy fotó? Néhány szóban: spontán, 
            őszinte, egyszerű. Minden mesterkéltségtől és álarcoktól mentes. Olyan, amelyen a fotózott igaz 
            önmagát látja viszont.
          </p>
          <h5>Tudj meg többet</h5>
          <img src={line} className="divLine" alt="line" />
        </div>
      </div>

      <div className="newestWork">
        <h1>Legújabb képeim</h1>
        <h2>Válogatott kedvencek</h2>
        <img src={process.env.PUBLIC_URL + "/images/man-portrait.png"} alt="Young man portrait" />
        <img src={process.env.PUBLIC_URL + "/images/couple-portrait.png"} alt="Kissing couple portrait" />
        <img src={process.env.PUBLIC_URL + "/images/fashion-portrait.png"} alt="Closeup fashion portrait" /> {/*** change this pic */}
        <img src={process.env.PUBLIC_URL + "/images/lifestyle-photo.png"} alt="Black and white portrait of spinning girl" />
        <img src={process.env.PUBLIC_URL + "/images/closeup-portrait.png"} alt="Portrait of daydreaming girl" />
        <h5>Összes galéria</h5>
      </div>

      <div className="categories">
        <img src={line} className="divLine" alt="line" />
        <div className="categories_flex">
          <div /* className="categories_flex_item" */>
            <h1>Portré</h1>
            <h2>Tovább</h2>
          </div>
          <div /* className="categories_flex_item" */>
            <h1>Párfotó</h1>
            <h2>Tovább</h2>
          </div>
          <div /* className="categories_flex_item"   */>
            <h1>Divatfotó</h1>
            <h2>Tovább</h2>
          </div>
        </div>
      <img src={line} className="divLine" alt="line" />
      </div>

      <div className="testimonials">
      portrait-with-glasses
        <img src={process.env.PUBLIC_URL + "/images/portrait-with-glasses.png"} alt="Red haired girl portrait with glasses" />
        <h1>Vélemények</h1>
        <p>Felülírtad eddigi fotózással kapcsolatos élményeimet, amiért nagyon hálás vagyok! Egy nagyon kellemes nappal 
          és sok őszinte képpel lettem gazdagabb (amiket szívesen nézek vissza). Szandra
        </p>
      </div>

      {/* <footer> */}
      <div className="followOnInsta">
        <img src={line} className="divLine" alt="line" />
        <h1>Kövess az Instagramon</h1> 
        <h2>@juliabarophoto</h2>
        {/*** is it possible to embed photos from insta */}
        <div className="insta_photos_flex">
          <img src={process.env.PUBLIC_URL + "/images/insta-portrait-in-nature-1.png"} alt="Moody portrait in nature" />
          <img src={process.env.PUBLIC_URL + "/images/insta-red-portrait-2.png"} alt="Red haired girl portrait" />
          <img src={process.env.PUBLIC_URL + "/images/insta-black-and-white-3.png"} alt="Black and white portrait of reading man" />
          <img src={process.env.PUBLIC_URL + "/images/insta-hand-details-4.png"} alt="Fashion photo hand details" />
          <img src={process.env.PUBLIC_URL + "/images/insta-closeup-portrait-5.png"} alt="Fashion portrait with scarf" />
          <img src={process.env.PUBLIC_URL + "/images/insta-musician-portrait-6.png"} alt="Musician portrait in monochrome" />
        </div>
      </div>

      {/*** add back to top arrow? */}
      <div className="footerBrowser">
        <div className="footer_flex"> 
          <div>
            <h1>Kereső</h1>
            <h2>Galériák</h2>
            <h2>Infó</h2>
            <h2>Rólam</h2>
            <h2>Kapcsolat</h2>  
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/bottom-logo.png"} alt="Julia Baro Photography Logo" />
          </div>
          <div>
            <h1>Kapcsolat</h1>
            <h6>+36 30 224 5167</h6>
          </div>
        </div>
      </div>

      <div className="copyright">
        <h4>© 2020 Julia Baro Photography</h4>
      </div>
      {/* </footer> */}
    </div>
  );
}

export default App;

