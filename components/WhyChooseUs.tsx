import React from 'react'
import { MdEqualizer } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";


const WhyChooseUs = () => {
  return (
    <section className='w-full min-h-[80vh] p-4 lg:px-16'>
        <div className='w-full min-h-[80vh] bg-white px-4 py-8 flex flex-col justify-center items-center gap-20'>
            <h1 className='text-4xl font-medium text-black/80 '>Why Choose Us</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='flex flex-col gap-3 items-center'>
                    <div className='py-2 px-4 bg-gray-50 rounded-md w-fit shadow-sm'>
                        <MdEqualizer className='w-7 h-7 text-main-amber'/>
                    </div>              
                    <h1 className='text-xl lg:text-xl font-medium text-black/90 mb-2'>Quality Workmanship</h1>
                    <p className='text-black/70 text-sm text-center'>Built with durable materials and attention to detail.</p>
                </div>

                <div className='flex flex-col gap-3 items-center'>
                    <div className='py-2 px-4 bg-gray-50 rounded-md w-fit shadow-sm'>
                        <FaCreditCard className='w-7 h-7 text-main-amber'/>
                    </div>              
                    <h1 className='text-xl lg:text-xl font-medium text-black/90 mb-2'>Affordable Pricing</h1>
                    <p className='text-black/70 text-sm text-center'>Fair and transparent costs without hidden charges.</p>
                </div>

                <div className='flex flex-col gap-3 items-center'>
                    <div className='py-2 px-4 bg-gray-50 rounded-md w-fit shadow-sm'>
                        <MdOutlineDesignServices className='w-7 h-7 text-main-amber'/>
                    </div>              
                    <h1 className='text-xl lg:text-xl font-medium text-black/90 mb-2'>Customized Designes</h1>
                    <p className='text-black/70 text-sm text-center'>
                        Memorials tailored to your family&apos;s wishes and traditions.
                    </p>
                </div>

                <div className='flex flex-col gap-3 items-center'>
                    <div className='py-2 px-4 bg-gray-50 rounded-md w-fit shadow-sm'>
                        <AiOutlineTeam className='w-7 h-7 text-main-amber'/>
                    </div>              
                    <h1 className='text-xl lg:text-xl font-medium text-black/90 mb-2'>Compassionate Services</h1>
                    <p className='text-black/70 text-sm text-center'>
                        Supportive and understanding staff to guide you through the process.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs
