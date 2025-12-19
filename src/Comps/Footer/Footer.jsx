import React from 'react'

export default function Footer() {
  return <>
  <section className='bg-[#2C3E50] '>
    <div className='p-10'>
        <div className='flex justify-between flex-col gap-y-10 md:flex-row'>
            <div className='p-4 text-white text-center w-full'>
                <h3 className='text-[28px] pt-5 mb-2 font-medium'>LOCATION</h3>
                <p className='mb-4'>2215 John Daniel Drive</p>
                <p className='mb-4'>Clark, MO 65243</p>
            </div>
            <div className='p-4 text-white text-center w-full'>
                <h3 className='text-[28px] pt-5 mb-2 font-medium'>AROUND THE WEB</h3>
                <div className='flex gap-2 justify-center'>
                    <span className='w-9 h-9 flex justify-center items-center rounded-full border cursor-pointer'>
                    <i class="fa-brands fa-facebook"></i>
                </span>
                <span className='w-9 h-9 flex justify-center items-center rounded-full border cursor-pointer'>
                    <i class="fa-brands fa-twitter"></i>
                </span>
                <span className='w-9 h-9 flex justify-center items-center rounded-full border cursor-pointer'>
                    <i class="fa-brands fa-linkedin-in"></i>
                </span>
                <span className='w-9 h-9 flex justify-center items-center rounded-full border cursor-pointer'>
                    <i class="fa-solid fa-globe"></i>
                </span>
                </div>
            </div>
            <div className='p-4 text-white text-center w-full'>
                <h3 className='text-[28px] pt-5 mb-2 font-medium'>ABOUT FREELANCER</h3>
                <p className='mb-4'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
    </div>
    <div className='p-2.5 text-center bg-[#1A252F]'>
        <p className='mb-4 pt-2.5 text-white'>Copyright © Your Website 2021</p>
    </div>
  </section>
  </>
}
