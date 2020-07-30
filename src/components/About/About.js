import React from 'react';
import './About.css';
//import Navigation from '../Navigation';
//import Footer from '../Footer';

function About() {
    return (
      <div className="About">

        <h2>Rólam</h2>
        <h5>Történetem</h5>

        <img src={process.env.PUBLIC_URL + "/images/girl-face.png"} alt="Beautiful face of a girl" />

        <div className="card">
          <p>
            Minden akkor kezdődött, amikor 16 évesen egy évet cserediákként töltöttem az Egyesült Államokban. 
            Meg akartam örökíteni az élményeimet, hogy megoszthassam őket a családommal. Ezzel a fotózás észrevétlenül 
            belopta magát az életembe. Hazatértem után természetfotókat készítettem délutáni séták és kirándulások alkalmával. 
            A fotózás megadta a lehetőséget, hogy egy időre mindenről megfeledkezzem. <br/>
            
            A portré és divatfotózás akkor keltette fel az érdeklődésem, amikor divattervezői tanulmányaim végeztével egyre sűrűbben 
            volt szükségem fotósra a kollekciók megörökítéséhez. Elkezdtem a saját tervezésű ruháimat magam fotózni és nagyon élveztem a 
            kihívást. Olyan divatfotókra vágytam, amelyek nem mesterkéltek vagy beállítottak, hanem emelkedettek és időtlenek, mint 
            az 1950-es évek divatfotói. <br/>
            
            Ma elsősorban művészi portré és párfotókat készítek. A fotózás számomra egy különleges 
            kapcsolódási lehetőség, a tánchoz hasonlítható. Argentin tangó táncosként pillanatok alatt hangolódom rá az aktuális 
            táncpartneremre, követem minden rezdülését. Ezt a képességem a fotózások alkalmával sem feledem otthon. Fotózáskor 
            természetességre törekszem, arra, hogy leomoljon a fényképezőgép jelentette fal és kibontakozzon az álarcok nélküli 
            őszinte pillanat. Az állandóan változó természetes fény a múzsám, amely kreativitásra ösztönöz.
          </p>
        </div>

        <h1>Infó </h1>
        <button type="button"><h5>Így dolgozom </h5></button>
        <h1>Kapcsolat</h1>
        <button type="button"><h5>Üzenj nekem</h5></button>

      </div>
    );
  }

export default About;  