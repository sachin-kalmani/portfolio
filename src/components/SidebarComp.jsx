import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage} from '@fortawesome/free-regular-svg-icons';
import {faHome,faListCheck,faLaptopCode,faUser} from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const SidebarComp = ({navbarComponent}) => {

  const [navbarHeight, setNavbarHeight] = useState(0); // State to hold navbar height
  const [isVisible, setIsVisible] = useState(false); // Initially visible

  useEffect(() => {
    const handleResize = () => {
      if (navbarComponent) {
        const navbarElement = navbarComponent();
        if (navbarElement) {
          const height = navbarElement.offsetHeight; // Get the height of the rendered navbar
          setNavbarHeight(height);
        }
      }
    };

    // Initial resize handling
    handleResize();

    // Listen to window resize events
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [navbarComponent]);
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Calculate the visibility based on scroll position and navbar visibility
      if ( scrollTop > navbarHeight) {
        setIsVisible(true); // Scroll down
      } else if (scrollTop > lastScrollTop && scrollTop < lastScrollTop || scrollTop <= navbarHeight) {
        setIsVisible(false); // Scroll up or at the top (show sidebar)
      }
      lastScrollTop = scrollTop;
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navbarHeight]);
  const [menu,setMenu]=useState("Home");
  const icons = {
    'Home': faHome,
    'About': faUser,
    'Projects': faLaptopCode,
    'Contact': faMessage
  };
  // const navData=['Home','About','Projects','Services','Contact'];
  return (
    <div className={`sidebar ${isVisible ? 'visible':'hidden'}`}>
             <ul className='sides flex flex-col items-center'>
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

export default SidebarComp

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