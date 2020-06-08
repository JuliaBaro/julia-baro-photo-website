import React from 'react';
import './App.css';

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
      <body>
      <React.Fragment>
        <Navigation />
        <Galleries />
        <Gallery />
        {/*<Info />
        <About />
        <Contact />
        <Footer />*/}
      </React.Fragment>
      </body>
    </div>
  );
}

export default App;

//COMPONENTS:
//nav
//galeriak
//galeria
//info
//rolam
//kapcsolat
//footer

