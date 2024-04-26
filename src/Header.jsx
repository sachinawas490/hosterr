import React from 'react'
import { FaBars } from "react-icons/fa";
function Header() {
  return (
   <>
   <div className="flex justify-between pt-1">
    <div className="flex gap-4 item-center justify-center  "><img src="./assets/Logo.svg" alt="" />
    <button className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-radius-30 px-5 rounded-xl'>Hosterr is Hiring</button>
    </div>
    <div className="float-end">
    <FaBars />
    </div>
   </div>
   </>
  )
}

export default Header