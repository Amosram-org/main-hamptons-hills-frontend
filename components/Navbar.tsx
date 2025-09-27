"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ClientNavbar from "./clientComponents/clientNavbar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between px-4 md:px-16 py-5 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Link href="/" className="text-xl font-semibold">
        <h1
          className={`flex items-center gap-0.5 text-sm transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          HAMPTONS HILLS
        </h1>
      </Link>

      <nav
        className={`hidden lg:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        <Link className="hover:underline transition duration-150" href="/">
          Home
        </Link>
        <Link
          className="hover:underline transition duration-150"
          href="/allProducts"
        >
          Products
        </Link>
        <Link
          className="hover:underline transition duration-150"
          href="/our-services"
        >
          Services
        </Link>
        <Link
          className="hover:underline transition duration-150"
          href="/#about-us"
        >
          About
        </Link>
        <Link
          className="hover:underline transition duration-150"
          href="/#blogs"
        >
          Blogs
        </Link>
        <Link
          className="hover:underline transition duration-150"
          href="/product-gallery"
        >
          Gallery
        </Link>
        <Link
          className="hover:underline transition duration-150"
          href="/#contact-us"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile sidebar toggle - no color inheritance issues */}
      <ClientNavbar />
    </header>
  );
};

export default Navbar;
