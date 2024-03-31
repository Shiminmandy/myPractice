import './styles/app.scss';
import Welcome from './components/banner/Welcome';
import Services from './components/services/Services';
import React, { useRef } from 'react';
import CursorAction from './components/cursor/CursorAction';

const App = () => {

  const ref = useRef<HTMLDivElement>(null);
  function handleClick() {
    ref.current?.scrollIntoView({behavior:'smooth'});
  }

  return (
    <div className="index-page">
      <CursorAction/>
      <div className="header-box" >
        
        <div className="container">
          
          <img className="container main-pic" src={require('./images/image 22apexcode.png')}/>
          
          <div className="container user">
            <button className="container-user services" onClick={handleClick}>Services</button>
            <div className="container-user industries">Industries</div>
            <div className="container-user company">Company</div>
            
          </div>
          <div className="container signin">
            <div className='container-signin contactus'>
              <p className='container-signin-contactus text'>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className='banner'>
        
        {/* <img className='banner ban' src={require('./images/Topbannerbanner2.png')}></img> */}
        <Welcome/>
      </div>
      <div className="content-box">
        
        <Services ref={ref} textone='What we do' texttwo='Beyond Boundaries, Together – Crafting Your Software Solutions.'/>
        <div className='content-box-part'>
          <div className="content-box-part-partOne">
            <h2 className='content-box-part-partOne-briefone'>Artificial Intelligence & Machine Learning</h2>
            <img className="content-box-part-partOne-iconone" src={require('./images/IconDoicon1.png')} alt='iconone'
          />
          </div>
          <div className="content-box-part-partTwo">
            <h2 className='content-box-part-partTwo-brieftwo'>Software Development</h2>
            <img className="content-box-part-partTwo-icontwo" src={require('./images/IconDoicon2.png')} alt='icontwo'/>
          </div>
          <div className="content-box-part-partThree">
            <h2 className='content-box-part-partThree-briefthree'>Embedded Teams</h2>
            <img className="content-box-part-partThree-iconthree" src={require('./images/IconDoicon3.png')} alt='iconone'/>
          </div>
          <div className="content-box-part-partFour">
            <h2 className='content-box-part-partFour-briefour'>Start-up Growth</h2>
            <img className="content-box-part-partFour-iconfour" src={require('./images/IconDoicon4.png')} alt='iconone'/>
          </div>
          
        </div>
      </div>
      <div className="foot-box">
      
      </div>
    </div>
  )
}

export default App;