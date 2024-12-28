import React, { useEffect,  useState, useRef  } from 'react'
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import img from '../assets/Logolegacy.png'
import Legacy from '../assets/TheLegacy.png'
import background from '../assets/background_new.png'
import AOS from 'aos';
import 'aos/dist/aos.css'


const Banner = () => {

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(()=>{
  AOS.init({
    easing: 'ease-out-quart',
    delay: 0,
    duration: 750
  })

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
      observer.disconnect(); // Stop observing once visible
    }
  },
  { threshold: 0.1 }
);

if (ref.current) {
  observer.observe(ref.current);
}

return () => observer.disconnect();
}, []);

  return (
    <div  data-aos="fade-up"      ref={ref}
    style={isVisible ? { backgroundImage: `url(${background})` } : {}} className='bg-cover bg-center bg-fixed  pb-10'>
      <div   className=' lg:px-32 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center lg:mx-auto mx-5'>
     
        <img  loading='lazy'  src={img} width={300} height={290} className="  p-1 border-white  " alt='Logo of Legacy'/>

          <div className='h-full lg:py-40 flex flex-col justify-center lg:items-center items-center text-white'>
              <h1 className='text-[42px] font-semibold  leading-none'>Welcome To  </h1>
              <img loading='lazy'  src={Legacy} alt="The Legacy Truck And Tractors INC," />
              <p className=''>THE LEGACY OF EXCELLENCE</p>
              <div className='flex items-center justify-center'>
                <div className="flex space-x-2"></div>
                <a href='#' className="text-zinc-100 hover:text-indigo-500 rounded-full glow p-2">
                  <AiFillFacebook className='text-[28px]'/>
                </a>
                <a href='#' className="text-zinc-100 hover:text-indigo-500 rounded-full glow p-2">
                  <AiFillInstagram className='text-[28px]'/>
                </a>
              </div>
          </div>
      </div>
      </div>
  )
}

export default Banner