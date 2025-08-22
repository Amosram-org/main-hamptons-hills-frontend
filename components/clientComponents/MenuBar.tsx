'use client';

import React from 'react'
import { TbMenu } from "react-icons/tb";
import { useSidebar } from '../../context/SidebarContext';

const MenuBar = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <TbMenu className='w-6 h-6 lg:hidden cursor-pointer' onClick={toggleSidebar} />
  )
}

export default MenuBar
