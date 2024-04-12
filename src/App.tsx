import './styles/app.scss';

import React, { useRef } from 'react';

import Services from './components/services/Services';
import AboutUs from './components/services/aboutUs';
import ContactUs from './components/services/contactUs';

const App = () => {

  const refone = useRef<HTMLDivElement>(null);
  function handleClickOne() {
    refone.current?.scrollIntoView({behavior:'smooth'});
  }
  const reftwo = useRef<HTMLDivElement>(null);
  function handleClickTwo() {
    reftwo.current?.scrollIntoView({behavior:'smooth'});
  }
  const refthree= useRef<HTMLDivElement>(null);
  function handleClickThree() {
    refthree.current?.scrollIntoView({behavior:'smooth'});
  }
  return (
    <div className="index-page">
      
      <div className="header-box" >
        
        <div className="container">
          
          <img className="container main-pic" src={require('./images/Frame 1.png')}/>
          
          <div className="container user">
            <button className='home'>Home</button>
            <button className="container-user services" onClick={handleClickOne}>Services</button>           
            <button className="container-user industries" onClick={handleClickTwo}>About us</button>
            <button className="container-user company" onClick={handleClickThree}>Contact us</button>
            
          </div>
          
        </div>
      </div>
      
      
      <div className='banner'>
      {/* <img className="banner picture" src={require('./images/backgroundPic.webp')}/>
         */}
         <div className='slogan'>
          <p>Boost your code</p>
          <h3>Elevate your development with Apexcode</h3>
          <button className="view" onClick={handleClickOne}> view services</button>
        </div>
        
        
      </div>
      
      <Services ref={refone}/>
      <AboutUs ref={reftwo}/>
      <ContactUs ref={refthree}/>
      
      <div className="foot-box">
      
      </div>
    </div>
  )
}

export default App;