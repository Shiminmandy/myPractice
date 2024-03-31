import { forwardRef } from 'react';
import './services.scss';
type textType = {
    textone: string;
    texttwo: string;
}
// function Services ({textone,texttwo,ref}:textType) {
//     return(
//         <div ref= {ref} className='box'>
//             <div className='box-textone'>{textone}</div>
//             <div className='box-texttwo'>{texttwo}</div>
//         </div>
//     )
// }
// 使用 React.ForwardRefRenderFunction 来定义组件函数的类型，第一个泛型参数是ref指向的元素类型（这里假设是HTMLDivElement），第二个是组件接收的props类型。
const Services: React.ForwardRefRenderFunction<HTMLDivElement, textType> = ({ textone, texttwo }, ref) => {
    return (
      <div ref={ref} className='box'>
        <div className='box-textone'>{textone}</div>
        <div className='box-texttwo'>{texttwo}</div>
      </div>
    );
  };
  
export default forwardRef(Services);