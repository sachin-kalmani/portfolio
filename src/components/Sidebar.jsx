import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage} from '@fortawesome/free-regular-svg-icons';
import {faHome,faLaptopCode,faUser} from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Sidebar = () => {


  const [menu,setMenu]=useState("Home");
  const icons = {
    'Names': faHome,
    'About': faUser,
    'Projects': faLaptopCode,
    'Contact': faMessage
  };
  // const navData=['Home','About','Projects','Services','Contact'];
  return (
    <div className='mobile-sidebar'>
             <ul className='mobile-sides flex flex-col items-center'>
              {
                Object.entries(icons).map(([key,iconValue],index)=>(
                  <li key={index} className='py-5 text-[20px] hover:scale-125'><AnchorLink className='anchor-link' href={'#'+key} offset={key=='Home'?100:0} ><p onClick={()=>setMenu(key)}><FontAwesomeIcon icon={iconValue} /></p></AnchorLink>{menu===key?<></>:<></>}</li>
                  // <FontAwesomeIcon icon={iconValue} />
                  // <li className='px-3 py-1 hover:bg-[#ff8f0080] rounded-md'>
                  // <AnchorLink className='anchor-link' href={'#'+navElements} offset={navElements=='Home'?100:0} >
                  // <p onClick={()=>setMenu(navElements)}>{navElements}</p></AnchorLink>{menu===navElements?<div className='w-full rounded-full h-1 bg-[#ff8f00]'></div>:<></>}</li>
                ))
              }
             </ul>
         </div>
  )
}

export default Sidebar

{/* <li className='px-3 py-1 hover:bg-[#ff8f0080] rounded-md'><AnchorLink className='anchor-link' href={'#'+navElements} offset={navElements=='Home'?100:0} ><p onClick={()=>setMenu(navElements)}>{navElements}</p></AnchorLink>{menu===navElements?<div className='w-full rounded-full h-1 bg-[#ff8f00]'></div>:<></>}</li> */}




{/* <li className='py-5 text-[20px] hover:scale-125'><FontAwesomeIcon icon={faHome} /></li>
<li className='py-5 text-[20px] hover:scale-125'><FontAwesomeIcon icon={faUser} /></li>
<li className='py-5 text-[20px] hover:scale-125'><FontAwesomeIcon icon={faLaptopCode} /></li>
<li className='py-5 text-[20px] hover:scale-125'><FontAwesomeIcon icon={faListCheck} /></li>
<li className='py-5 text-[20px] hover:scale-125'><FontAwesomeIcon icon={faMessage} /></li> */}
















// import React,{useState,useEffect} from 'react'
// function SidebarComp() {

//     const [isSidebarVisible, setIsSidebarVisible] = useState(true);
//   const [lastScrollTop, setLastScrollTop] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollTop = window.scrollY;
//       if (currentScrollTop > lastScrollTop) {
//         setIsSidebarVisible(false); // scrolled down
//       } else {
//         setIsSidebarVisible(true); // scrolled up
//       }
//       setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollTop]);



//   return (
//     <div className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'} fixed rounded-r-[25px] drop-shadow-xl top-2/4 -translate-y-[50%] bg-[#FFA62F] px-4 py-1 inline-block text-[#323232]`}>
//         <ul>
//             <li className='py-5 text-[20px] hover:scale-125'><FontAwesomeIcon icon={faHome} /></li>
//             <li className='py-5 text-[20px] hover:scale-125'><FontAwesomeIcon icon={faUser} /></li>
//             <li className='py-5 text-[20px] hover:scale-125'><FontAwesomeIcon icon={faLaptopCode} /></li>
//             <li className='py-5 text-[20px] hover:scale-125'><FontAwesomeIcon icon={faListCheck} /></li>
//             <li className='py-5 text-[20px] hover:scale-125'><FontAwesomeIcon icon={faMessage} /></li>
//         </ul>
//     </div>
//   )
// }

// export default SidebarComp






// // className=''