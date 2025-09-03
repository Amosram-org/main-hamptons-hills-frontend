import CustomizedService from '@/components/CustomizedService'
import { ServiceCardsCarousel } from '@/components/ServiceCardsCarousel'
import React from 'react'

const page = () => {
  return (
    <section className='w-full min-h-screen'>
        <div className='w-full min-h-[30vh] flex items-center gap-4 bg-black bg-[url(/images/about-main-page-bg.jpg)] bg-cover bg-center bg-no-repeat'>
            <div className='w-full min-h-[30vh] py-12 pt-24 flex flex-col items-center gap-4 px-4 bg-black/20'>
                <h1 className="text-2xl md:text-3xl text-white font-semibold text-center">Our Services</h1>
                <p className='text-white/80 text-center max-w-2xl'>
                Creating lasting tributes with compassion and craftsmanship.
                </p>
            </div>
       </div>

          {/* Our Services */}
        <div className='px-4 lg:px-16 py-10 w-full]'>
            <div className='max-w-5xl mx-auto p-4 lg:px-16 flex flex-col items-center justify-center gap-6  min-h-[60vh]'>
                <h1 className='text-3xl text-black/90 font-medium'>What We Offer</h1>
                <p className='text-lg lg:text-xl text-black/70 font-medium text-center max-w-3xl'>
                At Hampton Hills, we provide a range of high-quality memorial products and services, tailored to honor the memory of your loved ones. Our offerings include custom designs, premium materials, and professional installation services nationwide.
                </p>
            </div>
        </div>

        {/* Services Carousel */}
        <ServiceCardsCarousel/>

        <CustomizedService/>
    </section>
  )
}

export default page
