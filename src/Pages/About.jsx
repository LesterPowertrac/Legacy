import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import img from '../assets/LogoLegacy.png'
import img2 from '../assets/TheLegacy.png'
import { HelmetProvider, Helmet } from 'react-helmet-async';

const About = () => {
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
    <div id='About' className=''>
      <HelmetProvider>

      <Helmet>
        <title>About Us | The Legacy</title>
        <meta name="description" content="Explore our extensive range of construction equipment, trucks, and machinery from top brands like Weichai, Powerquip, Shacman, Kingling Isuzu, Sinotruck, and Forland." />
      </Helmet>      
      
      <div  className='lg:px-56 px lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center '>
      <img loading='lazy' src={img} width={290} height={290} className="rounded border-2 p-1 border-zinc-200 img_glow" alt='Logo'/>
          <div  className='h-full lg:py-20 flex flex-col justify-center lg:items-center items-center lg:mx-auto mx-5 text-white'>
          <img loading='lazy' data-aos="fade-down" src={img2}  className="border-2 p-1 border-zinc-200 img_glow " alt='Logo'/>
          <br />
          <h1 data-aos="fade-right" className='text-[48px] font-semibold mb-3 leading-normal uppercase text-indigo-500 lg:mx-auto mx-5'>About Us</h1>
              <div  data-aos="fade-left" >
                <p className='lg:mx-auto mx-5'>
                <span className='text-indigo-500'>THE LEGACY TRUCKS AND TRACTORS INCORPORATED</span> <br />  are distributor of wechai , shacman, kingling isuzu, sinotruk, and forland products in the Philippines. We are also the distributor of ​POWERQUIP heavy equipments and generators.  
                </p>
                <br />
                <p className='lg:mx-auto mx-5'>
                <span className='text-indigo-500'>THE LEGACY TRUCKS AND TRACTORS INCORPORATED</span> <br />  Focuses on providing wide range commercial trucks and quality services providing better solution for ​our valued clients.
                </p>
                <br />
                <p className='lg:mx-auto mx-5'>
                <span className='text-indigo-500'>THE LEGACY TRUCKS AND TRACTORS INCORPORATED</span> <br /> is committed to meet the expectation of all of our clients while treating them with honesty and integrity. We provide customers with cleaner, energy saving and safer.
                </p>
                <div className='flex items-center justify-center'>
                  <div className="flex space-x-2"></div>
                  <a href='https://www.facebook.com/forlandedsabalintawak/'
                      className="text-indigo-600 hover:text-white rounded-full glow p-2"
                      target="_blank" 
                      rel="noopener noreferrer"
                     >
                    <AiFillFacebook className='text-[28px]'/>
                  </a>
                  <a href='https://www.instagram.com/thelegacytruckssales/' 
                      className="text-indigo-600 hover:text-white rounded-full glow p-2"
                      target="_blank" 
                      rel="noopener noreferrer"
                      >
                    <AiFillInstagram className='text-[28px]'/>
                  </a>
                </div>
              </div>
          </div>
          
      </div>
      </HelmetProvider>
    </div>
  )
}

export default About