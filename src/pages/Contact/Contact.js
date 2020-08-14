import React, { Fragment } from "react";
import './Contact.css';
import line from '../../line.svg';

//import Nav from '../Nav/Nav';

const Contact = () => {
    return (
      <Fragment>
        <div className="Contact">
          {/*<Navigation />*/}

          <img src={process.env.PUBLIC_URL + "/images/lady-with-hat.png"} alt="Lady with hat in her hand walking" />
          <h1>
            Egy lépéssel <br/> 
            közelebb a találkozáshoz
          </h1>
          <p>
            Kérlek mesélj kicsit magadról! Ezzel segítesz nekem abban, hogy a fotózás előtt <br/> 
            rád hangolódjak - gy olyan képek készülhetnek majd, amelyeket igazán <br/> 
            magadénak érzel. 
          </p>

          <img src={line} className="div_line" alt="line" />
            <h3>+36 30 224 5167</h3>
          <img src={line} className="div_line" alt="line" />

          <h4>A fotózás típusa *</h4>
          <input type="checkbox"></input><h5>Portré</h5>
          <input type="checkbox"></input><h5>Pár</h5>
          <input type="checkbox"></input><h5>Család</h5>
          <input type="checkbox"></input><h5>Egyéb projekt</h5>

          <form>
            <label><h4>Név *</h4></label>
            <input type="text" id="fname" name="fname"/>
            <label><h4>Email *</h4></label>
            <input type="text" id="lname" name="lname"/>
            <label><h4>Mesélj az elképzeléseidről *</h4></label>
            <input type="text" id="message" name="message"/>
            <input type="submit" value="Submit"/>
          </form> 

          <h4>Név *</h4>
          <h4>Email *</h4>
          <h4>Mesélj az elképzeléseidről *</h4>

        </div>
      </Fragment>
    );
  }

export default Contact; 