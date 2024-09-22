import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faArrowUp, faUpLong} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram,faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright} from '@fortawesome/free-regular-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Contacts = () => {
    const emailAddress = 'sachinkalamani97@gmail.com';
  return (
    
    <div id='Contact' className='py-10 bg-[#CCD5AE]'>
    <div className='py-10 flex justify-center tracking-wide items-center text-7xl font-semibold text-[#323232] drop-shadow-lg'>Contact</div>
    <div className='social py-10 flex justify-around items-start gap-[100px] '>
    <div className='px-10 text-4xl flex justify-start leading-normal flex-col tracking-wide items-start text-left font-bold text-[#323232]'>
      <h1 className='drop-shadow-lg mb-6'>Let's <br /> <span className='text-[#534439] text-5xl'>Connect.</span></h1>
      <div className='py-3 flex justify-center items-center text-center text-[20px] font-normal gap-[30px]'>
        <div className='text-[25px]'><FontAwesomeIcon icon={faEnvelope} /></div>
        <div><a href={`mailto:${emailAddress}`}>{emailAddress}</a></div>
      </div>
      <div className='py-3 flex justify-center items-center text-center text-[20px] font-normal gap-[30px]'>
      <div className='text-[25px]'><FontAwesomeIcon icon={faWhatsapp} /></div>
      <div>+91 9850042746</div>
      </div>
    </div>
    <div className='px-10 flex justify-start leading-normal flex-col gap-[5px] tracking-wide items-start text-[#323232]'>
      <h1 className='drop-shadow-lg mb-6 text-4xl text-center ml-5 font-bold text-[#323232]'>Social</h1>
    <div className='flex justify-center items-center text-center text-[35px] font-normal gap-[30px]'>
        <div><a href="https://www.instagram.com/sachin_kalmani/"><FontAwesomeIcon icon={faInstagram}/></a></div>
        <div><a href="https://github.com/sachin-kalmani"><FontAwesomeIcon icon={faGithub}/></a></div>
        <div><a href="https://www.linkedin.com/in/sachin-kalmani-11948a256/"><FontAwesomeIcon icon={faLinkedin}/></a></div>
      </div>
      {/* <div className='block py-1 flex flex-col items-start gap-[3px]'>
        <label className='text-[20px] font-semibold text-[#323232] drop-shadow-md '>Email</label>
        <input type="email" className='w-[350px] p-3 outline-none hover:bg-[#F6F193] focus:bg-[#F6F193] rounded-[10px] text-[18px] font-0 bg-[#feffd2] text-[#323232] drop-shadow-lg placeholder:text-[#32323270] placeholder:italic' placeholder='example@xyz.com' /> 
      </div>
      <div className='block py-1 flex flex-col items-start gap-[3px]'>
        <label className='text-[20px] font-semibold text-[#323232] drop-shadow-md '>Subject</label>
        <input type="text"  className='w-[350px] p-3 outline-none hover:bg-[#F6F193] focus:bg-[#F6F193] rounded-[10px] text-[18px] font-0 bg-[#FEFFD2] text-[#323232] drop-shadow-lg placeholder:text-[#32323270] placeholder:italic' placeholder='Enter Subject'/>
      </div >
      <div className='block py-1 flex flex-col items-start gap-[3px]'>
      <label className='text-[20px] font-semibold text-[#323232] drop-shadow-md '>Message</label>
      <textarea className='h-[100px] w-[350px] p-3 outline-none hover:bg-[#F6F193] focus:bg-[#F6F193] rounded-[10px] text-[18px] font-0 bg-[#FEFFD2] text-[#323232] drop-shadow-lg placeholder:text-[#32323270] placeholder:italic' placeholder='Enter Message'/>
      </div> */}
    </div>
    </div>
      <div className="footer p-5 flex justify-center gap-[10px] items-center">
              <a href="http://" className='text-[20px] font-semibold text-[#323232] drop-shadow-md'>Sachin Kalmani</a><span className='text-[2rem] text-[#323232] drop-shadow-md'>/</span><span className='text-[#32323290] drop-shadow-md'><FontAwesomeIcon icon={faCopyright} /> Sachin Kalmani</span>
              <div className='arrow absolute left-32 text-[30px] font-0 text-[#32323290]'><AnchorLink className='anchor-link' offset={100} href='#Names'><FontAwesomeIcon icon={faArrowUp} /></AnchorLink></div>
      </div>
    </div>
  )
}

export default Contacts        