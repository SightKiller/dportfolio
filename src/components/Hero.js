import React, { useEffect, useState } from 'react'
import HeroImg from '../assets/Hire-Front-End-Developer-removebg-preview.png'
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

const Hero = () => {
  const titles = ['Full-Stack Developer','React Developer','MERN Stack Developer'];
  const [titleIndex,setTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [charIndex,setCharIndex]=useState(0);
  useEffect(() => {
    if (charIndex < titles[titleIndex].length) {
      const timeoutId = setTimeout(() => {
        setDisplayedTitle((prev) => prev + titles[titleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 150);

      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setDisplayedTitle('');
        setCharIndex(0);
      }, 2500);

      return () => clearTimeout(timeoutId);
    }
  }, [charIndex, titles, titleIndex]);
  return (
    <section className='flex:col md:flex px-5 py-40 bg-primary justify-center '>
      <div className='md:w-1/2 flex flex-col justify-center ease-in-out fade-Out'>
      <h1 className=' text-white text-5xl font-pop'>Hi, <br /> I am <span className='main'>Dhanush S</span>
            <p className='text-2xl'>I am a <span className='text-main'>{displayedTitle}</span></p>
        </h1>
        <div className='flex py-10'>
          <a href="" className='social-icons'><AiOutlineTwitter size={40} /></a>
          <a href="" className='social-icons'><AiOutlineLinkedin size={40} /></a>
          <a href="" className='social-icons'><AiOutlineFacebook size={40} /></a>
          <a href="" className='social-icons'><AiOutlineInstagram size={40} /></a>
        </div>
        <div className="btn">
          <a href="location.href='../assets/DHANUSH S.pdf">Download CV</a>
        </div>
      </div>
       
        <img className=' md:w-1/3 ease-in-out fade-in' src={HeroImg} alt="" />
    </section>
  )
}

export default Hero