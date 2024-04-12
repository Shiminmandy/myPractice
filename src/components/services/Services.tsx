import { forwardRef } from 'react';
import DesignCards from './designCards';
import './services.scss';
type textType = {
    
}

const Services: React.ForwardRefRenderFunction<HTMLDivElement, textType> = (textType, ref) => {
    return (
        <div ref={ref} className="content-box">
        <div className='small'>
          <div className='lineone'>Services</div>
          <div className='linetwo'>Learn aboout our software development</div>
          <div className='linethree'>We provide a range of software development services for business of all sizes. </div>
          <div className='linefour'>Our services offer your company the solutions it needs to work more productively.</div>
        </div>
        <div className='cards'>
         <DesignCards imageUrl={require('../../images/work1.webp')} title="Custom software development"  description="Build tailored software solutions to meet your unique business needs."/>
         <DesignCards imageUrl={require('../../images/work2.webp')} title="Mobile app development" description="Craft innovative mobile applications for iOS and Android platforms."/>
         <DesignCards imageUrl={require('../../images/work3.webp')} title="Web development" description="Create stunning and responsive websites with cutting-edge technologies."/>
        </div>
        <div className='cards2'>
         <DesignCards imageUrl={require('../../images/work4.webp')} title="Cloud integration services" description="Integrate cloud solutions for seamless business operations."/>
         <DesignCards imageUrl={require('../../images/work5.webp')} title="Quality assurance and testing" description="Ensure the reliability and performance of your software products."/>
         <DesignCards imageUrl={require('../../images/work6.webp')} title="UX/UI design" description="Craft intuitive and visually appealing user experiences for your software products."/>
        </div>
        
      </div>
      

      
    );
  };
  
export default forwardRef(Services);