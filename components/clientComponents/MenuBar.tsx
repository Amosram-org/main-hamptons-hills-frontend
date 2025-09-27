'use client';

import React, { useEffect, useState } from 'react';
import { TbMenu } from "react-icons/tb";
import { useSidebar } from '../../context/SidebarContext';

const MenuBar = () => {
  const { toggleSidebar } = useSidebar();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={toggleSidebar}
      className="lg:hidden rounded-md transition-colors cursor-pointer"
      aria-label="Open menu"
    >
      <TbMenu
        className={`w-7 h-7 transition-colors duration-300 ${
          scrolled ? 'text-black' : 'text-white'
        }`}
      />
    </button>
  );
};

export default MenuBar;
