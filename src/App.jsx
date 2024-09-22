import React,{useRef} from 'react'
import NameComp from './components/NameComp';
import About from './components/About';
import ProjectComp from './components/ProjectComp';
import Contacts from './components/Contacts';
import SidebarComp from './components/SidebarComp';
import Navbar from './components/Navbar';

const App = () => {
  const NavbarRef = useRef(null);

  const getNavbarElement =()=>{
    return NavbarRef.current;
  };

  return (
    <>
        <Navbar ref={NavbarRef}/>
       <SidebarComp navbarComponent={getNavbarElement}/>
       <NameComp/>
       <About/>
       <ProjectComp/>
       <Contacts/>
    </>

  )
}

export default App













// function App = () => {
//   return (
//     <>
//       <NameComp/>
//       <About/>
//       <SidebarComp/>
//       <ProjectComp/>
//       <Skills/>
//       <Contacts/>
//     </>
//   )
// }

// export default App