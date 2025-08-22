import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { LiaIconsSolid } from "react-icons/lia";



const ContactUs = () => {
  return (
    <section className='w-full min-h-[70vh] px-4 lg:px-16 py-12 pb-24' id='contact-us'> 
        <div className='bg-[url(/images/contactBg.webp)] bg-cover bg-center w-full min-h-[70vh] rounded-4xl flex items-center justify-center relative py-12 px-4 lg:px-16'>
            <div className='flex flex-col items-center justify-around bg-white/90 w-full h-full  rounded-4xl p-8 '>
                <div className='flex flex-col items-center justify-center gap-4 lg:py-8'>
                    <h3 className='py-1 px-8 rounded-full bg-white/50 backdrop-blur-md w-fit border border-black/20'>Contact Us</h3>
                    <h1 className='text-4xl md:text-5xl text-black/60'>How to get in<br/>
                    touch with us</h1>
                    <p className='text-black/70 text-lg text-center'>Have a question? We&apos;re always here to help.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8 lg:mt-0'>
                    <div className='flex flex-col gap-4 border border-black/20 p-6 rounded-2xl bg-white/90 backdrop-blur-md'>
                        <div className='flex items-center gap-4 border border-main-amber/40 p-2 rounded-full w-fit shadow-sm'>
                            <MdOutlineEmail className='w-6 h-6 text-main-amber '/>
                        </div>
         
                        <h2 className='text-main-amber font-medium text-lg'>Email Us</h2>
                        <p className='text-main-amber/70'>Send us a message via email.</p>
                        <Link href='mailto:amsgh@gmail.com' className='flex items-center gap-2 text-main-amber/90 hover:text-main-amber/70 transition duration-150'>
                            <span>email@gmail.com</span>
                            <IoIosArrowRoundForward/>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-4 border border-black/20 p-6 rounded-2xl bg-white/90 backdrop-blur-md'>
                        <div className='flex items-center gap-4 border border-main-amber/40 p-2 rounded-full w-fit shadow-sm'>
                            <CiPhone className='w-6 h-6 text-main-amber '/>
                        </div>
         
                        <h2 className='text-main-amber font-medium text-lg'>Call Us</h2>
                        <p className='text-main-amber/70'>Speak to us over the phone.</p>
                        <Link href='mailto:amsgh@gmail.com' className='flex items-center gap-2 text-main-amber/90 hover:text-main-amber/70 transition duration-150'>
                            <span>0734564330</span>
                            <IoIosArrowRoundForward/>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-4 border border-black/20 p-6 rounded-2xl bg-white/90 backdrop-blur-md'>
                        <div className='flex items-center gap-4 border border-main-amber/40 p-2 rounded-full w-fit shadow-sm'>
                            <LiaIconsSolid className='w-6 h-6 text-main-amber '/>
                        </div>
         
                        <h2 className='text-main-amber font-medium text-lg'>Follow Us</h2>
                        <p className='text-main-amber/70'>Reach to us via socials.</p>
                        <div className='flex items-center gap-4'>
                            <Link href='https://www.facebook.com/yourpage' target='_blank' rel='noopener noreferrer' className='text-main-amber/90 hover:text-main-amber/70 transition duration-150 '>
                                <FaFacebookF/>
                            </Link>
                            <Link href='https://www.facebook.com/yourpage' target='_blank' rel='noopener noreferrer' className='text-main-amber/90 hover:text-main-amber/70 transition duration-150 '>
                                <FaInstagram/>
                            </Link>
                            <Link href='https://www.facebook.com/yourpage' target='_blank' rel='noopener noreferrer' className='text-main-amber/90 hover:text-main-amber/70 transition duration-150 '>
                                <FaYoutube/>
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
