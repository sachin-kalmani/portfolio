import React from 'react'
import MyImage from '../assets/sachin2.jpeg'

function Image() {
  return (
    <div className=''>
    <img className='h-[300px] rounded-full' src={MyImage} alt="Description" />
    </div>
  )
}

export default Image