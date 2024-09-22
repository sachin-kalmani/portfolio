import React from 'react'
import { FaHome,FaUser,FaLaptopCode} from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage} from '@fortawesome/free-regular-svg-icons';

function Sidebar() {
  return (
    <div className='sticky rounded-md ml-12 top-2/4 left-0 -translate-y-[50%] bg-[#fff] px-4 py-1 inline-block'>
        <ul>
            <li className='py-5 text-[20px]'><FaHome/></li>
            <li className='py-5 text-[20px]'><FaUser/></li>
            <li className='py-5 text-[20px]'><FaLaptopCode/></li>
            <li className='py-5 text-[20px]'><FontAwesomeIcon icon={faMessage} /></li>
        </ul>
    </div>
  )
}

export default Sidebar