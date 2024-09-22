import React from 'react'
import ProjectInfo from './ProjectInfo'
import ProjectComp from './ProjectComp'

const CardComp = () => {
  return (
    <>
        <div>
            <ProjectComp details={ProjectInfo}/>
        </div>
    </>
  )
}

export default CardComp;