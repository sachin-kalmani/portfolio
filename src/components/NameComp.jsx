import React from 'react'
import Name from './Name'
import Image from './Image'
import Navbar from './Navbar'

function NameComp() {
  return (
    <>
        <div id="Names" className='nameComp flex justify-center gap-[13rem] my-[7%] items-start'>
        <Name/>
        <Image/>
    </div>
    </>
  )
}

export default NameComp