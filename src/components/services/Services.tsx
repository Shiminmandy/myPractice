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
         <DesignCards imageUrl={require('../../images/work1.png')} title="Custom software development"  description="Build tailored software solutions to meet your unique business needs."/>
         <DesignCards imageUrl={require('../../images/work2.png')} title="Mobile app development" description="Craft innovative mobile applications for iOS and Android platforms."/>
         <DesignCards imageUrl={require('../../images/work3.png')} title="Web development" description="Create stunning and responsive websites with cutting-edge technologies."/>
        </div>
        <div className='cards2'>
         <DesignCards imageUrl={require('../../images/work4.png')} title="Cloud integration services" description="Integrate cloud solutions for seamless business operations."/>
         <DesignCards imageUrl={require('../../images/work5.png')} title="Quality assurance and testing" description="Ensure the reliability and performance of your software products."/>
         <DesignCards imageUrl={require('../../images/work6.png')} title="UX/UI design" description="Craft intuitive and visually appealing user experiences for your software products."/>
        </div>
        
      </div>
      

      
    );
  };
  
export default forwardRef(Services);