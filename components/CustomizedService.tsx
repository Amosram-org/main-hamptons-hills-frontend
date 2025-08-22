import Link from 'next/link'
import React from 'react'

const CustomizedService = () => {

    const whatsappMessage = `Hello, I'm interested in customized services. Could you please provide more information?`
    // URL-encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/+254793810819?text=${encodedMessage}`
  return (
    <section className=' px-4 lg:px-16 py-20' id='customized-service'>
      <main className='min-h-[40vh] w-full bg-main-amber flex items-center px-4 lg:px-16 rounded-4xl'>
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-center lg:justify-between w-full'  >
          <h1 className='text-4xl font-semibold text-white text-center'>Need customized services?</h1>
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className='py-2 border text-sm font-medium border-white text-white rounded-full px-4 hover:bg-white transition durantion-150 hover:text-main-amber'>
              Request A personalized Service
          </Link>
        </div>
      </main>
    </section>
  )
}

export default CustomizedService
