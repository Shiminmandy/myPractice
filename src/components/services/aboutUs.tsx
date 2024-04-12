import { forwardRef } from 'react';
import './aboutUs.scss';
import React, { useRef } from 'react';
type textType = {
    
}
// const ref = useRef<HTMLDivElement>(null);
//   function handleClick() {
//     ref.current?.scrollIntoView({behavior:'smooth'});
//   }
const AboutUs: React.ForwardRefRenderFunction<HTMLDivElement, textType> = (textType, ref) => {
    return (
        <div ref={ref} className='about-box'>
        <div className='text'>         
         <div className='aboutus'>About us</div>
         <div className='line'>Leading software development</div>
         <div className='textcontent'>
          <div className='paragraph'>
            ApexCode is a leading software development company based in 
            Bay area, specializing in cutting-edage solutions
            for businesses of all sizes. Our team of experts is dedicated to delivering high -quality, 
            innovative software that meets the unique needs of our clients.
            With a focus on efficiency and excellence, 
            we are committed to driving digital transformation 
            and empowering businesses to thrive in the modern world.
          </div>
         </div>
         <div className='getintouch'>Get in touch</div>
        </div>
        <div className='pic'>
          
            <img className="picimg" src={require('../../images/aboutus.png')}/>
         
          
        </div>
      </div>


      
    );
  };
  
export default forwardRef(AboutUs);