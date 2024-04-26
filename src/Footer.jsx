import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
   <div className='flex justify-between w-screen mt-[30px] items-center'>
    <ul className='list-none flex justify-center w-screen h-5'>
      <li className=' mx-[30px]'><a href="" className='text-[30px]'><FaInstagramSquare /></a></li>
      <li className='mx-[30px]'><a href="" className='text-[30px] '><FaFacebook></FaFacebook></a></li>
      <li className='mx-[30px]'><a href="" className='text-[30px]'><FaSquareXTwitter></FaSquareXTwitter></a></li>
    </ul>
   </div>
  )
}

export default Footer