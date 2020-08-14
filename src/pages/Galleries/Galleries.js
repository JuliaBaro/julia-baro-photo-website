import React, { Fragment } from "react";
import './Galleries.css';

//import Nav from '../Nav/Nav';
import Footer from '../../components/Footer/Footer';

//import '../../../left-arrow.svg';
//import '../../../right-arrow.svg';


const Galleries = () => {
    return (
      <Fragment>
        <div className="Galleries">
          {/*<Navigation />*/}
          
          {/* SUB NAV - TYPE SELECTOR*/}
          <ul className="nav-second">
              <li className="nav-item"><a href="/#"><h4>összes</h4></a></li>
              <li className="nav-item"><a href="/#"><h4>portré</h4></a></li>
              <li className="nav-item"><a href="/#"><h4>pár</h4></a></li>
              <li className="nav-item"><a href="/#"><h4>család</h4></a></li>
              <li className="nav-item"><a href="/#"><h4>divat</h4></a></li>
          </ul>
        
          {/* CARD */}
          {/* used: https://www.w3schools.com/howto/howto_css_cards.asp */}
          <div className="card">
            <img src={process.env.PUBLIC_URL + "/images/girl-face.png"} alt="Beautiful face of a girl" />
            <div className="container">
              <h2>Portré</h2> {/* do not leave it hardcoded - make reusable component */}
              <h1>Evelin - <br/>
                Audrey <br/>
                Nyomában
              </h1>
            </div>
          </div>

          <img src={process.env.PUBLIC_URL + "/images/left-arrow.svg"} alt="Left arrow" />
          <button type="button">előző</button>
          <button type="button">következő</button>
          <img src={process.env.PUBLIC_URL + "/images/right-arrow.svg"} alt="Right arrow" />

          <Footer />
        </div>
      </Fragment>
    );
  }

export default Galleries;