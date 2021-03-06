import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import './Info.css';

import Footer from '../../components/Footer/Footer';

const Info = () => {
    return (
      <Fragment>
        <div className="info_container">

          <h1>HASZNOS TUDNIVALÓK</h1>

          <h4>
            A fotózást leginkább egy közös sétaként, beszélgetésként érdemes elképzelned. Az a legfontosabb számomra, 
            hogy jó hangulatban teljen az együtt töltött idő, ez a derű a képeken is visszaköszön majd. Azt szeretném, 
            hogy a fotózás folyamata ugyanakkora örömet szerezzen, mint maguk a képek.
          </h4>
          
          <h3>01.</h3>
          <h2>Mikor fotózzunk?</h2>
          <p>
            Természetes fénnyel dolgozom, ezért fontos, hogy a megfelelő napszakban vágjunk bele a fotózásba. 
            A naplemente előtti órákban gyönyörűek a fények, de aki bevállalósabb az a napkelte utáni időszakot 
            is választhatja. A borús időtől nem kell megijedni, sőt. A fátyolfelhők szép szórt fényt adnak, ilyenkor 
            a nap bármely szakában jó fotózkodni.
          </p>

          <h3>02.</h3>
          <h2>Mit viseljek?</h2>
          <p>
            Olyan ruhát érdemes választanod, amelyben jól érzed magad. Ha pár vagytok célszerű összehangolnotok a ruhátok 
            színvilágát, stílusát. Biztos menni fog. Ha tanácstalanok vagytok szívesen segítek dönteni. Új cipőt vagy ruhát 
            nem javaslom, hogy a fotózáson viselj először. Ha új darabban érkezel legyen nálad tartalék.
            Aki alkalmi ruhára vágyik, annak ajánlom az általam készített ILLANGO ruhákat. Ezek 34-40 méretben kölcsönözhetők fotózáshoz. 
            A ruhákat itt tudod megnézni.
          </p>

          <h3>03.</h3>
          <h2>Hogyan válasszak helyszínt?</h2>
          <p>
            Érdemes olyan helyszínt választanod, amelyhez kötődsz, ahol otthon érzed magad. Lehet ez egy erdő, egy kedvenc 
            kávézó vagy éppen a lakásod. Összegyűjtöttem néhány lehetőséget inspirációnak arra az esetre, 
            ha nem lenne ötleted.
            Város: 
            Tóth Árpád sétány, Budai Várnegyed, Várkert Bazár, Fővám tér és környéke, Kopasz-gát, Óbuda
            Természet: 
            Normafa, Budaörsi kopárok, Gellért-hegy, Margit-sziget, Zsámbék, Zsíros-hegy, Nagy-szénás
          </p>

          <h3>04.</h3>
          <h2>Mikor kapom meg a képeket?</h2>
          <p>
            A kész képeket a fotózás utáni 2-3 hétben küldöm el nagy felbontású jpg-ként. A nyers képeket én válogatom. 
          </p>

          <h3>05.</h3>
          <h2>Mennyibe kerül?</h2>
          <p>
            Az aktuális árakért kérlek vedd fel velem a kapcsolatot. Minden project egyedi, így az árak is változók. 
            Támpontként megjelölök egy kezdőárat: 20 000 / óra.         
          </p>

          <h3>06.</h3>
          <h2>Milyen hosszú legyen a fotózás?</h2>
          <p>
            Többnyire másfél-két óra hosszú egy fotózás. Az a tapasztalatom, hogy ennyi idő bőven elég ahhoz, 
            hogy valami szépet alkossunk.
          </p>

          <h1>Rólam</h1>
          <Link to='/rolam'>Ismerj meg jobban</Link>
          <h1>Kapcsolat</h1>
          <Link to='/kapcsolat'>Üzenj nekem</Link>

          <Footer/>
        </div>
      </Fragment>
    );
  }

export default Info;