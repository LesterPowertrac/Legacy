import React,{ useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import img2 from '../assets/TheLegacy.png'

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <footer className='bg-zinc-800 text-white lg:px-48 px-4 py-20 '>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 ">
            <div className="mb-4 md:mb-0  text-center">
              <Link to='/home#TheLegacy'>
                <img width={200} height={200} src={img2} alt="Legacy Logo" className="py-2 mx-auto" />
                <p className='text-16px my-4'>Trucks and Tractors INC. <br/>THE LEGACY OF EXCELLENCE</p>
              </Link>
            </div>
            
            <div className="mb-4 md:mb-0 text-center">
              <Link to='/home#Services'>
                <h2 className='text-[22px] font-semibold text-indigo-500 py-2 uppercase'>Services</h2>
              </Link>
              <ul className='text-[16px] my-4 '>
                  <li className='my-2'>Sales</li>
                  <li className='my-2'>Spare Parts</li>
                  <li className='my-2'>Service</li>
                  <Link to='/about#About'>About Us</Link>
              </ul>
            </div>

            <div className='mb-4 md:mb-0 text-center'>
                <Link to='/contact#Contact'>
                  <h2 className='text-[22px] font-semibold text-indigo-500 py-2 uppercase'>Contact Us:</h2>
                </Link>
                <p className='text-[16px] my-4'>Our Email: info@legacytrucks.com.ph</p>
                <p className='text-[16px] my-4'>Sales Department: +639222910330</p>
                <p className='text-[16px] my-4'>Service Department: +639199133313</p>
                <p className='text-[16px] my-4'>Parts Department: +639770391820</p>             
            </div>
            <div className='mb-4 md:mb-0 text-center'>
              <h2 className='text-[22px] font-semibold text-indigo-500 py-2 uppercase'>Follow Us On</h2>
              <div className='flex space-x-4  justify-center items-center'> 
                <a href='https://www.facebook.com/forlandedsabalintawak/' 
                    className="text-white hover:text-indigo-500 transition-all duration-150 ease-in-out"
                    target="_blank" 
                    rel="noopener noreferrer"                    
                    >
                  <AiFillFacebook className='text-[28px]'/>
                </a>
                <a href='https://www.instagram.com/thelegacytruckssales/'
                    className="text-white hover:text-indigo-500 transition-all duration-150 ease-in-out"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                  <AiFillInstagram className='text-[28px]'/>
                </a>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer