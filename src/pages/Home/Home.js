import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import './Home.css';
import line from '../../line.svg';

import Footer from '../../components/Footer/Footer';

const Home = () => {
  return(

    <Fragment>
      <div>

      <div className="hero_images">
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

      <div className="philosophy"> {/*rename div to section for seo?*/}
        <div className="philosophy_flex_container">
          <img 
            src={process.env.PUBLIC_URL + "/images/black-and-white-portrait.png"} 
            alt="Black and white portrait of young lady" 
            className="philosophy_image"
          />
          <div>
            <h1>Látásmódom</h1>
            <h2>Őszinte képvilág</h2>
            <p>Kíváncsi természetű vagyok, örök megfigyelő. Elbűvöl az emberek sokfélesége. Meggyőződésem, 
              hogy mindenkiről lehet jó képet készíteni. Hogy mitől jó számomra egy fotó? Néhány szóban: spontán, 
              őszinte, egyszerű. Minden mesterkéltségtől és álarcoktól mentes. Olyan, amelyen a fotózott igaz 
              önmagát látja viszont.
            </p>
            {/*<h5>Tudj meg többet</h5>*/}
            <Link to='/rolam'>Tudj meg többet</Link>
            <img src={line} className="div_line" alt="line" />
          </div>
        </div>
      </div>

      <div className="newestWork">
        <h1>Legújabb képeim</h1>
        <h2>Válogatott kedvencek</h2>
        <img src={process.env.PUBLIC_URL + "/images/man-portrait.png"} alt="Young gentleman" />
        <img src={process.env.PUBLIC_URL + "/images/couple-portrait.png"} alt="Kissing couple in the sunset" />
        <img src={process.env.PUBLIC_URL + "/images/fashion-portrait.png"} alt="Fashion jewellery" /> {/*** change this pic */}
        <img src={process.env.PUBLIC_URL + "/images/lifestyle-photo.png"} alt="Spinning girl" />
        <img src={process.env.PUBLIC_URL + "/images/closeup-portrait.png"} alt="Daydreaming girl" />
        {/*<h5>Összes galéria</h5>*/}
        <Link to='/galeriak'>Összes galéria</Link>
      </div>

      <div className="categories">
        <img src={line} className="div_line" alt="line" />
        <div className="categories_flex">
          <div>
            <h1>Portré</h1>
            <h2>Tovább</h2>
          </div>
          <div>
            <h1>Párfotó</h1>
            <h2>Tovább</h2>
          </div>
          <div>
            <h1>Divatfotó</h1>
            <h2>Tovább</h2>
          </div>
        </div>
        <img src={line} className="div_line" alt="line" />
      </div>

      <div className="testimonials">
        <img src={process.env.PUBLIC_URL + "/images/portrait-with-glasses.png"} alt="Red haired girl with glasses" />
        <h1>Vélemények</h1>
        <div className="testimonials_card">
          <img src={process.env.PUBLIC_URL + "/images/quotemark.svg"} alt="Quotemark" />
          <p>Felülírtad eddigi fotózással kapcsolatos élményeimet, amiért nagyon hálás vagyok! Egy nagyon kellemes nappal 
            és sok őszinte képpel lettem gazdagabb (amiket szívesen nézek vissza). <br/>
            Szandra
          </p>
        </div>
        <div className="testimonials_select">
          <img src={process.env.PUBLIC_URL + "/images/left-arrow.svg"} alt="Left arrow" />
          <h6>01\u07</h6>
          <img src={process.env.PUBLIC_URL + "/images/right-arrow.svg"} alt="Right arrow" />
        </div>
  </div>

      <Footer />
      </div>
    </Fragment>
  );
}

export default Home;