import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { LiaIconsSolid } from "react-icons/lia";
import Image from 'next/image'


const ContactUs = () => {
  return (
      <section
      className="w-full min-h-[70vh] px-4 lg:px-16 py-12 pb-24"
      id="contact-us"
    >
      <div className="relative w-full min-h-[70vh] rounded-4xl overflow-hidden">
        
        {/* Background Image */}
        <Image
          src="/images/contactBg.webp"
          alt="Contact Us Background"
          fill
          priority
          className="object-cover"
        />


        {/* Content */}
        <div className='p-6'>
            <div className="relative z-10 flex flex-col items-center justify-around bg-white/80 w-full min-h-[70vh] rounded-4xl p-8">

          {/* Header */}
          <div className="flex flex-col items-center justify-center gap-4 lg:py-8 text-center">
            <h3 className="py-1 px-8 rounded-full bg-white/50 backdrop-blur-md w-fit border border-black/20">
              Contact Us
            </h3>

            <h1 className="text-4xl md:text-5xl text-black/60">
              How to get in <br /> touch with us
            </h1>

            <p className="text-black/70 text-lg">
              Have a question? We&apos;re always here to help.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8 lg:mt-0">

            {/* Call / WhatsApp */}
            <div className="flex flex-col gap-4 border border-black/20 p-6 rounded-2xl bg-white/90 backdrop-blur-md">
              <div className="flex items-center gap-4 border border-main-amber/40 p-2 rounded-full w-fit shadow-sm">
                <CiPhone className="w-6 h-6 text-main-amber" />
              </div>

              <h2 className="text-main-amber font-medium text-lg">
                Call or Whatsapp Us
              </h2>

              <p className="text-main-amber/70">
                Speak to us over the phone.
              </p>

              <Link
                href="tel:+254721462076"
                className="flex flex-wrap gap-2 text-main-amber/90 hover:text-main-amber/70 transition"
              >
                <span>+254 721 462 076</span> /
                <span>+254 732 590 095</span>
              </Link>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4 border border-black/20 p-6 rounded-2xl bg-white/90 backdrop-blur-md">
              <div className="flex items-center gap-4 border border-main-amber/40 p-2 rounded-full w-fit shadow-sm">
                <LiaIconsSolid className="w-6 h-6 text-main-amber" />
              </div>

              <h2 className="text-main-amber font-medium text-lg">
                Follow Us
              </h2>

              <p className="text-main-amber/70">
                Reach to us via socials.
              </p>

              <div className="flex items-center gap-4 text-xl">
                <Link
                  href="https://www.facebook.com/profile.php?id=100063710063413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-main-amber/90 hover:text-main-amber/70 transition"
                >
                  <FaFacebookF />
                </Link>

                <Link
                  href="/"
                  className="text-main-amber/90 hover:text-main-amber/70 transition"
                >
                  <FaInstagram />
                </Link>

                <Link
                  href="/"
                  className="text-main-amber/90 hover:text-main-amber/70 transition"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-4 border border-black/20 p-6 rounded-2xl bg-white/90 backdrop-blur-md">
              <div className="flex items-center gap-4 border border-main-amber/40 p-2 rounded-full w-fit shadow-sm">
                <MdOutlineEmail className="w-6 h-6 text-main-amber" />
              </div>

              <h2 className="text-main-amber font-medium text-lg">
                Email Us
              </h2>

              <p className="text-main-amber/70">
                Send us a message via email.
              </p>

              <Link
                href="mailto:hillshamptons@gmail.com"
                className="flex items-center gap-2 text-main-amber/90 hover:text-main-amber/70 transition"
              >
                <span>hillshamptons@gmail.com</span>
                <IoIosArrowRoundForward />
              </Link>
            </div>

          </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
