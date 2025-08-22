'use client';

import React from 'react'
import MenuBar from './MenuBar';
import Sidebar from '../Sidebar';
import { SideBarProvider } from '../../context/SidebarContext';

const ClientNavbar = () => {
  return (
    <>
      <SideBarProvider>
        <MenuBar/>
        <Sidebar/>
      </SideBarProvider>
    </>
  )
}

export default ClientNavbar
