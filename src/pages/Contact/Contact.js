//import React, { Component, Fragment } from "react";
import React, { Fragment } from "react";
import './Contact.css';
import emailjs from 'emailjs-com';
import line from '../../line.svg';

/*** emailjs.com IDs ***
service ID: gmail
template ID: template_TRIeMPav
user ID:  user_A0zYY7AVsDt0v7YXszuRl
*/

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_TRIeMPav', e.target, 'user_A0zYY7AVsDt0v7YXszuRl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <Fragment>
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

    <form className="contact-form" onSubmit={sendEmail}>
      <h4>A fotózás típusa *</h4>
      <input type="checkbox" name="portrait"></input><h5>Portré</h5>
      <input type="checkbox" name="couple"></input><h5>Pár</h5>
      <input type="checkbox" name="family"></input><h5>Család</h5>
      <input type="checkbox" name="other"></input><h5>Egyéb projekt</h5>

      <input type="hidden" name="contact_number" />
      <label>Név *</label>
      <input type="text" name="user_name" />
      <label>Email *</label>
      <input type="email" name="user_email" />
      <label>Mesélj az elképzeléseidről *</label>
      <textarea name="message" />
      <input type="submit" value="Küldés" />
    </form>
    </Fragment>
  );
}

export default Contact;


//*********************************************************//


//ORIGINAL

/*const Contact = () => {
    return (
      <Fragment>
        <div className="Contact">

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

export default Contact; */


//*********************************************************//


//VIDEO EXAMPLE OF EMAILJS-COM
//https://www.youtube.com/watch?v=Lm5OKvh31_s

/*import * as emailjs from "emailjs-com";

class Contact extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: "",
        phone: "",
        email: "",
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value});
    };
    handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm( //sendForm API
          "gmail", //service ID
          "template_TRIeMPav", //template ID
          ".contact_form_class",
          "user_A0zYY7AVsDt0v7YXszuRl"
        )
        .then()
        .catch();
      this.setState({
        name: "",
        phone: "",
        email: "",
      });
    };
    render() {
      return (
        <div>
          <Fragment>
            <form
              onSubmit={this.handleSubmit.bind(this)}
              className="contact_form_class"
            >
              <div>
                <label>Name: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  value={this.state.name}
                  onChange={this.handleChange.bind(this)}
                ></input>
              </div>
                <p></p>
                <label>Phone: </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone"
                  value={this.state.phone}
                  onChange={this.handleChange.bind(this)}
                ></input>
                <p></p>
                <label>Email: </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter mail"
                  value={this.state.email}
                  onChange={this.handleChange.bind(this)}
                ></input>
                <p></p>
                <input type="submit"></input>
            </form>
          </Fragment>
        </div>
      );
    }
  }

export default Contact;*/
