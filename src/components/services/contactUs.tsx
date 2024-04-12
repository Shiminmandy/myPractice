import { forwardRef } from 'react';
import './contactUs.scss';
import DesignInput from './designInput';
type textType = {
    
}

const ContactUs: React.ForwardRefRenderFunction<HTMLDivElement, textType> = (textType, ref) => {
    return (
        <div ref={ref} className='contact-box'>
         <div className='contactus'>Contact us</div>
         <div className='contacttitle'>
          Feel free to give us a call or send us an email with your questions or comments.
         </div>
         <div className='contacttext'>
          We would love to hear from you, whether you're interested in
          working with our team or pursuing a career with us.
         </div>
         <div className='login'>

          <DesignInput/>
         </div>

      </div>

      
    );
  };
  
export default forwardRef(ContactUs);