import React, { useEffect, useRef } from 'react';
import './cursor.scss';

const CursorAction: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', moveCursor);

    // 每次鼠标移动时都创建新的 element，为了演示，这里仅创建一次
    const element = document.createElement('div');
    element.className = 'element';
    bodyRef.current?.appendChild(element); // 确保 bodyRef.current 不为 null

    setTimeout(() => {
      // 仅在确保 cursorRef.current 不为 null 时执行
      if (cursorRef.current) {
        const { left, top } = cursorRef.current.getBoundingClientRect();
        element.style.left = `${left}px`;
        element.style.top = `${top}px`;
      }

      element.innerText = 'hi'; // 在 setTimeout 内设置文本

      // 设置动画
      const directionX = Math.random() < 0.5 ? -1 : 1;
      const directionY = Math.random() < 0.5 ? -1 : 1;
      element.style.transform = `translate(${directionX * 100}px, ${directionY * 100}px) scale(0.25)`;
      element.style.opacity = '0';

      setTimeout(() => {
        element.remove();
      }, 2000); // 增加时间以观察动画效果
    }, 50); // 增加 setTimeout 来确保动画效果能够触发

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="cursorbody" ref={bodyRef}>
      <div className="cursor" ref={cursorRef}></div>
    </div>
  );
};

export default CursorAction;


// import React, { useEffect, useRef } from 'react';
// import './cursor.scss';

// const CursorAction = () => {
//   const cursorRef = useRef<HTMLSpanElement>(null);

//   useEffect(() => {
//     let timeout: NodeJS.Timeout; // 定义 timeout 变量用于存储 setTimeout 返回的标识

//     const moveCursor = (e: MouseEvent) => {
//       if (cursorRef.current) {
//         cursorRef.current.style.top = `${e.pageY}px`;
//         cursorRef.current.style.left = `${e.pageX}px`;
//         cursorRef.current.style.display = "block";
//         // 重置定时器
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//           if(cursorRef.current) {
//             cursorRef.current.style.display = "none";
//           }
//         }, 1000); // 如果1秒内没有移动，则隐藏cursor
//       }
//     };

//     const hideCursor = () => {
//       if (cursorRef.current) {
//         cursorRef.current.style.display = "none";
//       }
//     };

//     document.addEventListener("mousemove", moveCursor);
//     document.addEventListener("mouseout", hideCursor);
//     return () => {
//       document.removeEventListener("mousemove", moveCursor);

//       document.removeEventListener("mouseout", hideCursor);
//       clearTimeout(timeout); // 组件卸载时清除定时器
//     };
//   }, []);

//   return (
//     <div className='cursor'>
//       <div className='container'>
//         <span ref={cursorRef}></span>
//       </div>
//     </div>
//   );
// };

// export default CursorAction;



// import './cursor.scss';
// const CursorAction = () =>{

//   const cursor = document.querySelector(".cursor");
//   document.addEventListener("mousemove", (e) => {
//     let x = e.pageX;
//     let y = e.pageY;

//     cursor.style.top= y + "px";
//     cursor.style.left = x + "px";
//     cursor.style.display= "block";
//   })

//   document.addEventListener("mouseout", () => {
//     cursor.style.display= "none";
//   })
//   return (
//     <div className='cursor'>
//       <div className='container'>
//         <span></span>
//     </div>
//     </div>
//   )
// }

// export default CursorAction;