import AboutImg from '../assets/f1.webp'
import React from 'react'

const About = () => {
  return (
    <section className='flex flex-col md:flex-row bg-secondary' id='about'>
         <div className=' py-5 md:w-1/2 px-5 ease-in-out fade-in'>
            <img src={AboutImg} alt="" />
        </div>
        <div className='px-3 md:w-1/2 flex justify-center ease-in-out fade-Out '>
          <div className='flex flex-col justify-center'>
            <h1 className='text-5xl text-white mb-5 font-bold'>About <span className='main'>Me!</span></h1>
            <p className='text-white '>Enthusiastic MERN Stack and Full-Stack Developer | Fresh Talent Ready to Innovate and Elevate Web Technologies.</p>
            <p className='text-white py-3 bottom-5'>Information Technology graduate eager to leverage expertise in modern web technologies for full-stack development, contributing to innovative team projects.</p>
          </div>
        </div>
    </section>
   
  )
}

export default About