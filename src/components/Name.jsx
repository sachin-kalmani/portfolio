import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SachinResume from '../assets/Sachin_Kalmani_Resume.pdf'

function Name() {
    const [text]= useTypewriter({
        words:['Web Developer','Freelancer','Full Stack Developer'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:80,
      });
      
  return (
    <div className='name'>
    <h3 className=' text-[18px] text-[#323232] font-thin tracking-wider  text-center'>Hello, I'm</h3>
    <h1 className='name text-[100px] font-bold leading-[7rem] text-center text-[#534439] drop-shadow-md'>Sachin<br/><span className='text-[#323232]'>Kalmani</span></h1>
    <h2 className='text-[25px] font-semibold tracking-widest  text-center  text-[#32323290] drop-shadow-md'><span>{text}</span><span><Cursor/></span></h2>
    <div className='w-full flex justify-center mt-4 items-center'>   
    <div className='px-5 py-2 mr-2 rounded-full text-[#000] bg-[#FFA62F] cursor-pointer drop-shadow-md hover:bg-[#F7D716]'><button><a href={SachinResume}>Download CV</a></button></div>
    </div>
    <div className='w-full flex justify-center mt-1 items-center gap-[25px]'> 
      <a href="https://www.linkedin.com/in/sachin-kalmani-11948a256"><div className='text-[40px] text-[#323232] hover:text-[#EF4040] cursor-pointer drop-shadow-md'><FontAwesomeIcon icon={faLinkedin} /></div></a>
      <a href="https://github.com/sachin-kalmani"><div className='text-[40px] text-[#323232] hover:text-[#EF4040] cursor-pointer drop-shadow-md'><FontAwesomeIcon icon={faSquareGithub} /></div></a>
    </div>
    </div>
  )
}

export default Name