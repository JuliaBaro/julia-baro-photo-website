import React from 'react';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Route from 'react-router-dom/Route';
import './App.css';
import line from './line.svg';
//import leftArrow from './leftArrow';
//import rightArrow from './rightArrow';
//import quotemark from './quotemark';
 
import Navigation from './Navigation';
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


const Philosophy = () => {
  return(
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
          <h5>Tudj meg többet</h5>
          <img src={line} className="div_line" alt="line" />
        </div>
      </div>
    </div>
  );
}

const NewestWork = () => {
  return(
    <div className="newestWork">
      <h1>Legújabb képeim</h1>
      <h2>Válogatott kedvencek</h2>
      <img src={process.env.PUBLIC_URL + "/images/man-portrait.png"} alt="Young gentleman" />
      <img src={process.env.PUBLIC_URL + "/images/couple-portrait.png"} alt="Kissing couple in the sunset" />
      <img src={process.env.PUBLIC_URL + "/images/fashion-portrait.png"} alt="Fashion jewellery" /> {/*** change this pic */}
      <img src={process.env.PUBLIC_URL + "/images/lifestyle-photo.png"} alt="Spinning girl" />
      <img src={process.env.PUBLIC_URL + "/images/closeup-portrait.png"} alt="Daydreaming girl" />
      <h5>Összes galéria</h5>
    </div>
  );
}

const Categories = () => {
  return(
    <div className="categories">
      <img src={line} className="div_line" alt="line" />
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
    <img src={line} className="div_line" alt="line" />
    </div>
  );
}

const Testimonials = () => {
  return(
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
        <h6>01\u07</h6> {/*http://linterrors.com/js/dont-use-octal-a-use-instead*/}
        <img src={process.env.PUBLIC_URL + "/images/right-arrow.svg"} alt="Right arrow" />
      </div>
    </div>
  );
}

const FollowOnInsta = () => {
  return(
    <div className="followOnInsta">
      <img src={line} className="div_line" alt="line" />
      <h1>Kövess az Instagramon</h1> 
      <h2>@juliabarophoto</h2>
      {/*** is it possible to embed photos from insta */}
      <div className="insta_photos_flex">
        <img src={process.env.PUBLIC_URL + "/images/insta-portrait-in-nature-1.png"} alt="Girl touching a tree" />
        <img src={process.env.PUBLIC_URL + "/images/insta-red-portrait-2.png"} alt="Red haired girl smiling" />
        <img src={process.env.PUBLIC_URL + "/images/insta-black-and-white-3.png"} alt="Reading man" />
        <img src={process.env.PUBLIC_URL + "/images/insta-hand-details-4.png"} alt="Hands of a tattooed girl" />
        <img src={process.env.PUBLIC_URL + "/images/insta-closeup-portrait-5.png"} alt="Girl with handvowen scarf" />
        <img src={process.env.PUBLIC_URL + "/images/insta-musician-portrait-6.png"} alt="Musician with her violin" />
      </div>
    </div>
  );
}

const FooterBrowser = () => {
  return(
    /*** add back to top arrow? */
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
          <img src={process.env.PUBLIC_URL + "/images/bottom-logo.png"} alt="Julia Baro Photography" />
        </div>
        <div>
          <h1>Kapcsolat</h1>
          <h2>+36 30 224 5167</h2>
        </div>
      </div>
    </div>
  );
}

const Copyright = () => {
  return(
    <div className="copyright">
      <h4>© 2020 Julia Baro Photography</h4>
    </div>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "app"
    }
  }

  render() {
    return (
      <Router>
        <div className="app_container">
          
          {/****************************************************************/}
          {/* REACT ROUTER DEMO */}
          {/* https://www.youtube.com/watch?v=XRfD8xIOroA */}
          {/* https://codesandbox.io/s/mq48rlj0pp */}
          {/* https://www.google.com/search?client=firefox-b-d&q=responsive+navigation+with+react+router#kpvalbx=_pvMfX6vcEpaR1fAPqqerkAo30 */}

          {/* CODEPEN - (RESPONSIVE) REACT ROUTER NAV */}
          {/* https://codepen.io/borntofrappe/pen/gjzjrE */}
          {/* https://codepen.io/alexdevero/pen/XpjKGV */}

          <div>
            <ul>
              <li>
                <NavLink to="/" exact activeStyle={{ color:'green' }}>Home</NavLink>{/*with NavLink you can provide specific style - with Link no*/}
              </li>
              <li>
                <NavLink to="/galeriak"exact activeStyle={{ color:'green' }}>GALÉRIÁK</NavLink>
              </li>
              <li>
                <NavLink to="/info" exact activeStyle={{ color:'green' }}>INFÓ</NavLink>
              </li>
              <li>
                <NavLink to="/rolam" exact activeStyle={{ color:'green' }}>RÓLAM</NavLink>
              </li>
              <li>
                <NavLink to="/kapcsolat" exact activeStyle={{ color:'green' }}>KAPCSOLAT</NavLink>
              </li>
            </ul>

            {/*http://localhost:3000*/}
            <Route path="/" exact strict render={
              () => {
                return (<h1>Home</h1>)
              }
            }/>

            {/*http://localhost:3000/galeriak*/}
            <Route path="/galeriak" exact strict render={
              () => {
                return (<h1>Galeriak</h1>)
              }
            }/>

            {/*http://localhost:3000/info*/}
            <Route path="/info" exact strict render={
              () => {
                return (<h1>Info</h1>)
              }
            }/>

            {/*http://localhost:3000/rolam*/}
            <Route path="/rolam" exact strict render={
              () => {
                return (<h1>Rolam</h1>)
              }
            }/>

            {/*http://localhost:3000/kapcsolat*/}
            <Route path="/kapcsolat" exact strict render={
              () => {
                return (<h1>Kapcsolat</h1>)
              }
            }/>
          </div>

          {/****************************************************************/}

          <Navigation />
          <Philosophy />
          <NewestWork />
          <Categories />
          <Testimonials />
          <FollowOnInsta />
          <FooterBrowser />
          <Copyright />

        </div>
      </Router>
    );
  }
}

export default App;

