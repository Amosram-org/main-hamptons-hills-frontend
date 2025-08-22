'use client';

import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useSidebar } from '../../context/SidebarContext';

const CloseBar = () => {
  const { toggleSidebar } = useSidebar();
  return (
   <IoMdClose className='text-white w-6 h-6 font-light cursor-pointer' onClick={toggleSidebar} />
  )
}

export default CloseBar
