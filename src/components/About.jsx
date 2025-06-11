import React from 'react'

const About = () => {
  return (
    <div id='About' className='p-10 bg-[#E9FF97]'>
    <div className='aboutMe py-10 mt-10 flex justify-center tracking-wide items-center text-7xl font-semibold text-[#323232] drop-shadow-md'>About Me</div>
    {/* <div className='para hidden leading-[32px] text-[18px]  tracking-wider flex p-10 flex-col items-center text-[#000] text-center'> 
    <p className='mt-5 drop-shadow-md'>Hello! I'm Sachin Kalmani, a recent graduate with a BSc in Computer Science, specializing in both backend<br/>   
     and frontend development. I bring a strong foundation in Java and Python for backend programming, <br/>
     coupled with proficiency in designing scalable databases and APIs using frameworks like Spring and<br/>
     Express Js. On the frontend, I excel in creating responsive and intuitive user interfaces using HTML, CSS,<br/>
      and JavaScript, with hands-on experience in React for building dynamic web applications.</p>
      <p className='mt-10 drop-shadow-md'>During my academic journey, I developed a keen interest in crafting efficient solutions to complex<br/>
         problems and honed my skills in writing clean, maintainable code. I am eager to leverage my technical<br/>
         knowledge and passion for innovation to contribute effectively to software projects that push the <br/>
        boundaries of technology. I thrive in collaborative environments and look forward to working alongside<br/>
         talented individuals to create solutions that make a meaningful impact.</p>
    </div> */}
    <div className='my-16 para2 flex justify-around items-start gap-10'>
      <div className="skills basis-1/4">
        <h1 className='text-2xl font-bold mb-5 text-[#323232] drop-shadow-md'>Skills</h1>
        <h2 className='text-xl font-semibold text-[#323232] drop-shadow-md'>Technical Skills</h2>
        <ul className='text-[#323232] drop-shadow-sm'>
          <li className='py-1'>Languages: Java,Javascript,MySql</li>
          <li className='py-1'>Frameworks: Spring MVC, Spring Boot, Reactjs</li>
          <li className='py-1'>Tools: Git, Github, Postman</li>
          <li className='py-1'>Web Development: HTML, CSS, Tailwind</li>
        </ul>
      </div>
      <div className="experience basis-1/4">
        <h1 className='text-2xl font-bold mb-5 text-[#323232] drop-shadow-md'>Experience</h1>
        <h2 className='text-xl font-semibold text-[#323232] drop-shadow-sm'>Pravi Internship</h2>
        <p className='py-2 text-[#323232]'>Full Stack Developer</p>
      </div>
      <div className="education basis-1/4">
        <h1 className='text-2xl font-bold mb-5 text-[#323232] drop-shadow-md'>Education</h1>
        <h2 className='text-xl font-semibold text-[#323232] drop-shadow-sm'>Bachelor's in Computer Science</h2>
        <h3 className='py-2 text-[#323232]'>9.15 CGPA</h3>
        </div>  
    </div>
     </div>
  )
}

export default About
