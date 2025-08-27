import Link from 'next/link'
import React from 'react'
import { GiLifeSupport } from "react-icons/gi";
import { RiUserCommunityFill } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { MdAdd } from "react-icons/md";
import Image from 'next/image';
import { images } from '@/data';
import { TestimonialsCards } from '@/components/TestimonialsCards';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Hamptons Hills',
  description: 'Get to know more about Hamptons Hills.',
};

const page = () => {

    const adminPhoneNumber:number = 254721462076;

    const whatsappMessage = `Hello, I'm interested in customized services. Could you please provide more information?`
    // URL-encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/+${adminPhoneNumber}?text=${encodedMessage}`

  return (
    <section className='w-full min-h-screen'>
       <div className='w-full min-h-[30vh] flex items-center gap-4 bg-black bg-[url(/images/about-main-page-bg.jpg)] bg-cover bg-center bg-no-repeat'>
         <div className='w-full min-h-[30vh] py-12 pt-24 flex flex-col items-center gap-4 px-4 bg-black/20'>
            <h1 className="text-2xl md:text-3xl text-white font-semibold text-center">About Us</h1>
            <p className='text-white/80 text-center max-w-2xl'>
             Creating lasting tributes with compassion and craftsmanship.
            </p>
        </div>
       </div>

        {/* Our Story */}
       <div className='px-4 lg:px-16 py-20 w-full]'>
        <div className='max-w-5xl mx-auto p-4 lg:px-16 pb-20 flex flex-col items-center justify-center gap-6  min-h-[60vh]'>
            <h1 className='text-3xl text-black/90 font-medium'>Our Story</h1>
            <p className='text-lg lg:text-xl text-black/70 font-medium text-center max-w-3xl'>
              At Hampton Hills, we understand the importance of creating lasting tributes. With years of experience, our skilled artisans craft high-quality tombstones, gravestones, headstones, and memorial plaques that honor the memory of your loved ones. We provide compassionate service and nationwide installation, ensuring every detail is perfect.
              Our commitment to quality and care sets us apart, making us a trusted choice across the country.
            </p>
        </div>

        {/* Core Values and Customized Service */}
        <div className='w-full min-h-[70vh] flex flex-col lg:flex-row gap-10 pb-20'>
            <div className='flex-1 flex flex-col gap-6 bg-black text-white py-10 px-6 lg:p-12 rounded-4xl'>
               <div className='flex flex-col items-center lg:items-start gap-4 mb-8'>
                <h2 className=' font-semibold text-3xl'>Our Main Core Values</h2>
                <p className='text-gray-300 text-center lg:text-left lg:max-w-md'>These pillars guide every decision we make and every memorial we create.</p>
               </div> 

               <div className='flex flex-col md:flex-row gap-6 mb-8'>
                <div className='flex flex-col items-center lg:items-start gap-2 flex-1'>
                    <div className='p-3 bg-white/70 rounded-full w-fit mb-2'>
                        <GiLifeSupport className='w-8 h-8 text-black'/>
                    </div>

                    <h3 className='font-medium text-lg'>Compassion</h3>
                    <p className='text-gray-300 text-center text-sm lg:text-left'>We approach every project with sensitivity, understanding the emotional significance of each memorial and providing support to families during difficult times.</p>
                </div>
                <div className='flex flex-col items-center lg:items-start gap-2 flex-1'>      
                    <div className='p-3 bg-white/70 rounded-full w-fit mb-2'>
                        <RiUserCommunityFill className='w-8 h-8 text-black'/>
                    </div>
                    
                    <h3 className='font-medium text-lg'>Community</h3>
                    <p className='text-gray-300 text-center text-sm lg:text-left'>We are committed to giving back by supporting local initiatives and providing affordable memorial solutions to families across the country.</p>
                </div>
               </div> 

               <div>            
                <ul className='flex flex-col lg:flex-row  md:items-center  text-gray-100 gap-2 '>
                    <li>Quality Craftsmanship</li>
                    <GoDotFill className='w-2 h-2 hidden lg:block'/>
                    <li>Integrity</li>
                    <GoDotFill className='w-2 h-2 hidden lg:block'/>
                    <li>Customer-Centric Approach</li>
                </ul>
               </div> 
            </div>

            <div className='flex-1 flex flex-col gap-6'>
                <div className='min-h-[40vh] w-full bg-main-amber flex items-center px-4 lg:px-16 rounded-4xl flex-1'>
                    <div className='flex flex-col gap-6 items-center  lg:items-start justify-center lg:justify-between w-full'  >
                        <h1 className='text-4xl font-semibold text-white text-center lg:text-left'>Need customized services?</h1>
                        <Link
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='py-2 border text-sm font-medium border-white text-white rounded-full px-4 hover:bg-white transition durantion-150 hover:text-main-amber'>
                            Request A personalized Service
                        </Link>
                    </div>
                </div>

                <div className='flex-1 grid grid-cols-2 gap-6'>
                    <div className='w-full min-h-[10vh] bg-gray-200 rounded-2xl px-8 flex flex-col items-center lg:items-start justify-center gap-4 py-4'>
                        <div className='text-4xl text-main-amber font-bold flex items-center gap-0.5'>
                            <h1>15</h1>
                            <MdAdd className='inline-block w-7 h-7'/>
                        </div>
                        <p className='text-gray-800 text-sm lg:text-base text-center'>Years of Experience</p>
                    </div>
                    <div className='w-full min-h-[10vh] bg-gray-200 rounded-2xl px-8 flex flex-col items-center lg:items-start justify-center gap-4 py-4'>
                        <div className='text-4xl text-main-amber font-bold flex items-center gap-0.5'>
                            <h1>10K</h1>
                            <MdAdd className='inline-block w-7 h-7'/>
                        </div>
                        <p className='text-gray-800 text-sm lg:text-base text-center'>Projects Completed</p>
                    </div>
                    <div className='w-full min-h-[10vh] bg-gray-200 rounded-2xl px-8 flex flex-col items-center lg:items-start justify-center gap-4 py-4'>
                        <div className='text-4xl text-main-amber font-bold flex items-center gap-0.5'>
                            <h1>10K</h1>
                            <MdAdd className='inline-block w-7 h-7'/>
                        </div>
                        <p className='text-gray-800 text-sm lg:text-base text-center'>Memorials Installed</p>
                    </div>
                    <div className='w-full min-h-[10vh] bg-gray-200 rounded-2xl px-8 flex flex-col items-center lg:items-start justify-center gap-4 py-4'>
                        <div className='text-4xl text-main-amber font-bold flex items-center gap-0.5'>
                            <h1>95%</h1>
                            <MdAdd className='w-7 h-7 hidden'/>
                        </div>
                        <p className='text-gray-800 text-sm lg:text-base text-center'>Customer Satisfaction Rate</p>
                    </div>
                  
                </div>

            </div>
        </div>

        {/* Mission and Vission */}
        <div className='pb-20'>
            <h1 className='text-3xl text-black/90 font-medium'>Discover Hamptons Hills</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl text-black/90 font-medium'>Mission</h2>
                    <p className='text-gray-700 font-medium'>To provide compassionate, personalized memorial services that honor the memory of your loved ones with dignity and respect.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl text-black/90 font-medium'>Vission</h2>
                    <p className='text-gray-700 font-medium'>To be the trusted choice for memorial craftsmanship, delivering exceptional quality and support to families nationwide.</p>
                </div>
            </div>
            <div className='w-full min-h-[40vh]'>
                <Image
                    src={images.missionImg}
                    alt="Mission and Vission"
                    className='w-full h-auto lg:h-[70vh] object-cover rounded-2xl mt-10'
                />
            </div>
        </div>

         <div className='w-full min-h-[70vh] flex flex-col items-center justify-center gap-20'>
            <h2 className='px-4 text-4xl font-medium text-black/80 text-center'>What Our Customers Say</h2>
            <TestimonialsCards testimonials={userTestimonials}/>
        </div>
        
       </div>
    </section>
  )
}

export default page

const userTestimonials = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: images.userTestimonialImage.src,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: images.userTestimonialImage.src
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: images.userTestimonialImage.src
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: images.userTestimonialImage.src
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: images.userTestimonialImage.src,
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: images.userTestimonialImage.src,
  },
];
