import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { CiMenuBurger } from 'react-icons/ci';
import Modal2 from '../Components/Modal2';
import { LuConstruction } from "react-icons/lu";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setClick(!click);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    // Detect scroll position
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true); // If scrolled down, set scrolling to true
      } else {
        setScrolling(false); // Reset when at the top
      }
    };
  
    // Add and clean up scroll event listener
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  const content = <>
  <div className='lg:hidden block absolute top-10 w-full left-0 right-0 bg-zinc-900  transition  inset-0 z-50 '>
    <ul className='text-center text-xl p-20 bg-zinc-900'>
      <Link  to='/home' onClick={handleClick}>
        <li className='my-4 py-4 border-b border-zinc-800 hover:bg-zinc-800 hover:rounded'>Home</li>
      </Link>
      <Link  to='/product' onClick={handleClick}>
        <li className='my-4 py-4 border-b border-zinc-800 hover:bg-zinc-800 hover:rounded'>Products</li>
      </Link>
      <Link  to='/about' onClick={handleClick}>
        <li className='my-4 py-4 border-b border-zinc-800 hover:bg-zinc-800 hover:rounded'>About</li>
      </Link>
      <Link to="/contact" onClick={handleClick}>
        <li className='my-4 py-4 border-b border-zinc-800 hover:bg-zinc-800 hover:rounded'>Contact Us</li>
      </Link>
      <Link  onClick={() => setIsModalOpen(true)} >
        <li className='my-4 py-4 border-b border-zinc-800 hover:bg-zinc-800 hover:rounded'>Login</li>
      </Link>
    </ul> 
  </div>
  </>

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500  ${scrolling ? 'lg:bg-zinc-800 bg-zinc-900' : ' lg:bg-transparent bg-zinc-900'} `}>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-4 px-20 py-4 border-zinc-800">
        <div className="flex items-center flex-1">
          <span></span>
        </div>
        <div className='lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 nr-16 text-[18px]'>
              <Link  onClick={scrollUp} to='/home'>
                <li className='hover:text-indigo-500 transition border-b-2 border-transparent  hover:border-indigo-500 cursor-pointer'>Home</li>
              </Link>

              <Link  onClick={scrollUp} to='/product'>
                <li className='hover:text-indigo-500 transition border-b-2 border-transparent  hover:border-indigo-500 cursor-pointer'>Products</li>
              </Link>

              <Link  onClick={scrollUp} to='/about'>
                <li className='hover:text-indigo-500 transition border-b-2 border-transparent  hover:border-indigo-500 cursor-pointer'>About Us</li>

              </Link>

              <Link onClick={scrollUp} to="/contact">
                <li className='hover:text-indigo-500 transition border-b-2 border-transparent  hover:border-indigo-500 cursor-pointer'>Contact Us</li>
              </Link>

              
              <button onClick={() => setIsModalOpen(true)} >
                <li className='hover:text-indigo-500 transition border-b-2 border-transparent  hover:border-indigo-500 cursor-pointer'>Login</li>
              </button>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        
        <button className='block sm:hidden transition' onClick={handleClick}>
          {click ? <FaTimes className='text-xl'/> : <CiMenuBurger className='text-xl text-white'/>}
        </button>

        <Modal2 
    isOpen={isModalOpen} 
    onClose={() => setIsModalOpen(false)} 
    title="Under Construction"
    >
       <h1 className='flex flex-col items-center justify-center text-6xl'><LuConstruction style={{ color: '#FFA500' }} /></h1>
     <h1 className='text-center'>Coming soon...</h1> 
    </Modal2>
      </div>
    </nav>
  );
};

export default Navbar;
