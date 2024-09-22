import React from 'react'
import { useState } from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu,setMenu]=useState("Home");  
  const navData=['Home','About','Projects','Contact'];
  
  return (
    <div id='Home' className={`flex items-center flex-nowrap justify-around gap-[300px] my-[20px]`}>
         <div className='text-[30px] tracking-wide text-[#323232]'>Sachin Kalmani</div>
           <ul className='flex items-center list-none gap-[30px] text-center  text-lg text-[#534439] cursor-pointer '>
            {navData.map((navElements,index)=>(
            <li key={index} className='px-3 py-1 hover:bg-[#ff8f0080] rounded-md'><AnchorLink className='anchor-link' href={'#'+navElements} offset={navElements=='Home'?100:0} ><p onClick={()=>setMenu(navElements)}>{navElements}</p></AnchorLink>{menu===navElements?<div className='w-full rounded-full h-1 bg-[#ff8f00]'></div>:<></>}</li>
            ))}
        </ul>
    </div>
  )
}
export default Navbar
