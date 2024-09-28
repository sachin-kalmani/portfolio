import React from 'react'
// import FinTrack from '../assets/projects/FinTrack.jpeg'
import ProjectInfo from'./ProjectInfo.json'
// import { data } from 'autoprefixer';
import Image1 from '../assets/projects/FinTrack.jpeg'
import Image2 from '../assets/projects/TravelBuddy.jpeg'
import Image3 from '../assets/projects/StudySync.jpeg'


const ProjectComp = () => {
    let cardArr=ProjectInfo;
  const projectImages=[Image1,Image2,Image3];
  return (
     <div className='project p-10 bg-[#E1F0DA]'>
 <div id='Projects' className='pt-10 flex  justify-center tracking-wide items-center text-7xl font-semibold text-[#323232] drop-shadow-lg'>Projects</div>
 <div className='flex justify-center items-center'>
 <div className='container relative flex flex-wrap justify-center gap-[40px] items-center py-[100px] px-[10px]'>


      {cardArr.map((eachCard,index)=>
      (
        //  {/* From Here The cards starts  */}?
        <div className='card flex justify-center items-start'>
   <div className='imgBox absolute overflow-hidden top-[20px] w-[300px] h-[220px] bg-[#333] rounded-[12px] drop-shadow-md '>
     <img className='absolute top-0 left-0 w-[100%] h-[100%] object-cover' src={projectImages[index]} />
   </div>
   <div className='content absolute top-[252px] w-[100%] px-[30px] h-[35px] overflow-hidden text-center'>
     <h1 className={`text-[20px] font-bold text-[#524C42] drop-shadow-sm`}>{eachCard.title}</h1>
     <p className='mt-2'>{eachCard.description}</p>
     {/* <div className='py-5 flex justify-center items-center gap-[20px]'>
     <a href="#" className='px-5 py-2 bg-[#B60071] text-[#fff] rounded-[10px] drop-shadow-md font-semibold' >Github</a>
     <a href="#" className='px-5 py-2 bg-[#E4003A] text-[#fff] rounded-[10px] drop-shadow-md font-semibold' >Live</a>
     </div> */}
   </div>
 </div>
// {/* Here it ends */}
))}
</div>
</div>
 </div>
  )
}

export default ProjectComp



// <div className='p-10 bg-[#E1F0DA]'>
// <div className='m-20 flex justify-center tracking-wide items-center text-7xl font-semibold text-[#323232] drop-shadow-lg'>Projects</div>
