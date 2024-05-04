import { Bars3Icon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const handleLinkClick = (linkName)=>{
    setActiveLink(linkName);
  }
  const linkClassName = (linkName) => linkName === activeLink ? 'hover:text-main text-main' : 'hover:text-main';

  return (
    <header className='flex justify-between items-center px-5 py-2 bg-primary '>
      <a className='font-bold text-white' href="#">Dhanush</a>
      <nav className='hidden md:block'>
        <ul className='flex text-white font-pop'>
          <li><a href="/" onClick={() => handleLinkClick('Home')} className={linkClassName('Home')}>Home</a></li>
          <li><a href="#about" onClick={() => handleLinkClick('About')} className={linkClassName('About')}>About</a></li>
          <li><a href="#projects" onClick={() => handleLinkClick('Projects')} className={linkClassName('Projects')}>Projects</a></li>
          <li><a href="#skills" onClick={() => handleLinkClick('Skills')} className={linkClassName('Skills')}>Skills</a></li>
          <li><a href="#contact" onClick={() => handleLinkClick('Contact')} className={linkClassName('Contact')}>Contact</a></li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className=' block md:hidden absolute bg-gray-800 w-full'>
          <ul onClick={() => setToggleMenu(!toggleMenu)} className=' mobile-nav flex flex-col text-white'>
          <li><a href="/" onClick={() => handleLinkClick('Home')} className={linkClassName('Home')}>Home</a></li>
          <li><a href="#" onClick={() => handleLinkClick('About')} className={linkClassName('About')}>About</a></li>
          <li><a href="#projects" onClick={() => handleLinkClick('Projects')} className={linkClassName('Projects')}>Projects</a></li>
          <li><a href="#skills" onClick={() => handleLinkClick('Skills')} className={linkClassName('Skills')}>Skills</a></li>
          <li><a href="#contact" onClick={() => handleLinkClick('Contact')} className={linkClassName('Contact')}>Contact</a></li>
          </ul>
        </nav>
      )}
      <button 
        onClick={() => setToggleMenu(!toggleMenu)}
        className='block md:hidden'
        aria-label="Toggle Menu">
        <Bars3Icon className='text-white h-7 w-7' />
      </button>
    </header>
  );
};

export default Header;
