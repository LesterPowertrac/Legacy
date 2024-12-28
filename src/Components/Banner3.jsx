import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import config from '../api/config';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import { Oval } from 'react-loader-spinner';
import 'swiper/css/autoplay';

const Banner3 = () => {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  const cache = {};
  
  // API URL
    const getApiUrl = () => {
      if (window.location.hostname === 'localhost') {
          return config.api.local;
      } else {
          return config.api.remote;
      }
  };

  const apiUrl = getApiUrl();
  // API URL END

  // Image URLs for products
  const productImages  = {
    Weichai: `${apiUrl}/products/Weichai_heavy_equipment`, 
    Powergen: `${apiUrl}/products/Powergen`, 
    PowerQuip: `${apiUrl}/products/PowerQuip`, 
    Shacman: `${apiUrl}/products/Shacman`, 
    KinglingIsuzu: `${apiUrl}/products/KinglingIsuzu`, 
    Sinotruck: `${apiUrl}/products/Sinotruck`, 
    Forland: `${apiUrl}/products/Forland`,
    Homepage_weichai: `${apiUrl}/products/hompage_weichai`,
    Homepage_powerquip: `${apiUrl}/products/hompage_powerquip`,
    Homepage_weichaigenerator: `${apiUrl}/products/hompage_weichaigenerator`,
    Homepage_shacman: `${apiUrl}/products/hompage_shacman`,
    Homepage_sinotruck: `${apiUrl}/products/hompage_sinotruck`,
    Homepage_kinglingisuzu: `${apiUrl}/products/hompage_kinglingisuzu`,
    Homepage_forland: `${apiUrl}/products/hompage_forland`,
  };

  // Fetch images
  const fetchImages = async () => {
    try {
      const fetchedImages = {};
      for (const key in productImages) {
        if (cache[key]) {
          // Use cached image if available
          fetchedImages[key] = cache[key];
        } else {
          // Fetch and cache the image as a blob
          const response = await Axios.get(productImages[key], { responseType: 'blob' });
          const blobUrl = URL.createObjectURL(response.data); // Access blob data from response
          fetchedImages[key] = blobUrl;
          cache[key] = blobUrl; // Store blob URL in cache
        }
      }
      setImages(fetchedImages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
      setLoading(false);
    }
  };
    
  useEffect(() => {
    fetchImages();
  }, []);
  

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Oval
          height={80}
          width={80}
          color="#818CF8"
          secondaryColor="#818CF8"
          strokeWidth={5}
          ariaLabel="loading"
        />
      </div>
    );
  }

  return (
    <div className='p-20 flex flex-col items-center justify-center '>
        <h1 data-aos="fade-left" className='text-[52px] font-semibold mb-2 leading-normal uppercase text text-indigo-500 text-center'>OUR PRODUCTS</h1>
        <h1  data-aos="fade-left" className='text-[16px] font-semibold mb-10 leading-normal uppercase text  text-zinc-200 text-center'>We are distributor of weichai , powerquip, shacman, kingling isuzu, sinotruk, and  forland. <br/>Feel free to explore.</h1>
        <div className="grid lg:grid-cols-3  grid-cols-1 justify-around gap-10">
            <div data-aos="fade-up" className='bg-zinc-300 flex flex-col items-center justify-center rounded-3xl h-30 w-64 border-2 border-zinc-400 c_glow'>
              <Link to="/product#Weichai">
                <img loading="lazy" src={images.Weichai} alt="Weichai Heavy Equipment" className='p-3' />
              </Link>
            </div>

            <div data-aos="fade-down" className='bg-zinc-300 flex flex-col items-center justify-center rounded-3xl h-30 w-64 border-2 border-zinc-400 c_glow'>
              <Link to="/product#PowerQuip">
                <img loading="lazy" src={images.PowerQuip} alt="Power Quip" className='p-3' />
              </Link>
            </div>

            <div  data-aos="fade-up" className='bg-zinc-300 flex flex-col items-center justify-center rounded-3xl h-30 w-64 border-2 border-zinc-400 c_glow'>
              <Link to="/product#Powergen">  
                <img loading="lazy" src={images.Powergen} alt="Weichai Powergen" className='p-3' />
              </Link>
            </div>

            <div  data-aos="fade-up" className='bg-zinc-300 flex flex-col items-center justify-center rounded-3xl h-30 w-64 border-2 border-zinc-400 c_glow'>
              <Link to="/product#Shacman">  
                <img loading="lazy" src={images.Shacman} alt="Shacman" className='p-3' />
              </Link>
            </div>

            <div data-aos="fade-down" className='bg-zinc-300 flex flex-col items-center justify-center rounded-3xl h-30 w-64 border-2 border-zinc-400 c_glow'>
              <Link to="/product#Sinotruck">  
                <img loading="lazy" src={images.Sinotruck} alt="Sinotruck" className='p-3' />
              </Link>
            </div>

            <div  data-aos="fade-up" className='bg-zinc-300 flex flex-col items-center justify-center rounded-3xl h-30 w-64 border-2 border-zinc-400 c_glow '>
              <Link to="/product#Forland">  
                <img loading="lazy" src={images.Forland}  alt="Forland Logo" className='p-3'  />
              </Link>
            </div>

            <div  data-aos="fade-up" className='bg-zinc-300  flex flex-col items-center justify-center rounded-3xl h-30 w-64 border-2 border-zinc-400 c_glow lg:col-start-2'>
              <Link to="/product#KinglingIsuzu">  
                <img loading="lazy" src={images.KinglingIsuzu} alt="Kingling Isuzu" className='p-3' />
              </Link>
            </div>

        </div>
          {/* Slider Component */}
          <div className='mt-16 w-full overflow-hidden lg:-mb-20' data-aos="fade-up">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="w-full"
        loop
      >
        {/* Slide 1 */}
        <SwiperSlide className="p-10 flex flex-col items-center justify-center">
          <img loading='lazy' src={images.Weichai} alt="Weichai" className='mx-auto lg:h-32 lg:w-9/12 md:h-40 h-auto bg-zinc-300 rounded-lg' />
          <div className="gap-10 mt-6 items-center justify-center">
            <div className='lg:h-96 flex items-center justify-center'>
              <img loading='lazy' src={images.Homepage_weichai} alt="Weichai" className='max-h-full max-w-full object-contain' />
            </div>
          </div>
    
          <div className='absolute lg:inset-5 inset-2 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300'>
            <Link to="/product#Weichai" >
              <button className="neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-8 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-xl text-bold mb-4 my-2">
                VIEW MORE
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="p-10 flex flex-col items-center justify-center">
          <img loading='lazy' src={images.PowerQuip} alt="Power Quip" className='mx-auto md:h-40 lg:h-32 h-auto bg-zinc-300 rounded-lg p-5' />
          <div className="gap-10 mt-6 items-center justify-center">
            <div className='lg:h-96 flex items-center justify-center'>
              <img loading='lazy' src={images.Homepage_powerquip} alt="PowerQuip" className='max-h-full max-w-full object-contain' />
            </div>
          </div>
        
          <div className='absolute lg:inset-5 inset-2 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300'>
          <Link to="/product#PowerQuip">
            <button className="neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-8 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-xl text-bold mb-4 my-2">
              VIEW MORE
            </button>
          </Link>
          </div>
        </SwiperSlide>

        {/* Slide 2.5 */}
        <SwiperSlide className="p-10 flex flex-col items-center justify-center">
          <img loading='lazy' src={images.Powergen} alt="Weichai Powergen" className='mx-auto md:h-40 lg:h-32 h-auto bg-zinc-300 rounded-lg p-5' />
          <div className="gap-10 mt-6 items-center justify-center">
            <div className='lg:h-96 flex items-center justify-center'>
              <img loading='lazy' src={images.Homepage_weichaigenerator} alt="Weichai Powergen" className='max-h-full max-w-full object-contain' />
            </div>
          </div>
        
          <div className='absolute lg:inset-5 inset-2 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300'>
          <Link to="/product#PowerQuip">
            <button className="neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-8 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-xl text-bold mb-4 my-2">
              VIEW MORE
            </button>
          </Link>
          </div>
        </SwiperSlide>        

        {/* Slide 3 */}
        <SwiperSlide className="p-10 flex flex-col items-center justify-center">
          <img loading='lazy' src={images.Shacman} alt="Shacman" className='mx-auto lg:p-[1.8rem] md:p-[1.8rem] p-[2rem] bg-zinc-300 rounded-lg' />
          <div className="grid gap-10 mt-6 items-center justify-center">
            <div className='lg:h-96 flex items-center justify-center'>
              <img loading='lazy' src={images.Homepage_shacman} alt="Tractor Head H3000" className='max-h-full max-w-full object-contain' />
            </div>
          </div>
          <div className='absolute lg:inset-5 inset-2 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300'>
            <Link to="/product#Shacman">
              <button className="neno-button shadow-xl hover:indigo-zinc-400/50 hover:bg-zinc-900 rounded-lg py-2 px-8 uppercase relative bottom-5 overflow-hidden text-black hover:text-indigo border-2  border-indigo-400 bg-indigo-400 b_glow text-xl text-bold mb-4 my-2">
                VIEW MORE
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide className="p-10 flex flex-col items-center justify-center">
          <img loading='lazy' src={images.KinglingIsuzu} alt="Kingling Isuzu" className='mx-auto lg:h-32 md:h-40 h-auto bg-zinc-300 rounded-lg' />
          <div className="gap-10 mt-6 items-center justify-center">
            <div className='lg:h-96 flex items-center justify-center'>
              <img loading='lazy' src={images.Homepage_kinglingisuzu} alt="Kingling Isuzu" className='max-h-full max-w-full object-contain' />
            </div>
          </div>
          <div className='absolute lg:inset-5 inset-2 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300'>
            <Link to="/product#KinglingIsuzu">
              <button className="neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-8 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-xl text-bold mb-4 my-2 ">
                VIEW MORE
              </button> 
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide className="p-10 flex flex-col items-center justify-center">
          <img loading='lazy' src={images.Sinotruck} alt="Sinotruck" className='mx-auto lg:h-32 md:h-40 h-auto bg-zinc-300 rounded-lg' />
          <div className="gap-10 mt-6 items-center justify-center">
            <div className='lg:h-96 flex items-center justify-center'>
              <img loading='lazy' src={images.Homepage_sinotruck} alt="Sinotruck" className='max-h-full max-w-full object-contain' />
            </div>
          </div>
          <div className='absolute lg:inset-5 inset-2 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300'>
            <Link to="/product#Sinotruck">
            <button className="neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-8 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-xl text-bold mb-4 my-2">
              VIEW MORE
            </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide className="p-10 flex flex-col items-center justify-center">
          <img loading='lazy' src={images.Forland} alt="Forland" className='mx-auto lg:h-32 md:h-40 h-auto bg-zinc-300 rounded-lg' />
          <div className="gap-10 mt-6 items-center justify-center">
            <div className='lg:h-96 flex items-center justify-center'>
              <img loading='lazy' src={images.Homepage_forland} alt="Forland" className='max-h-full max-w-full object-contain' />
            </div>
          </div>
          <div className='absolute lg:inset-5 inset-2 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300'>
            <Link to="/product#Forland">
            <button className="neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-8 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-xl text-bold mb-4 my-2">
              VIEW MORE
            </button>
            </Link>
          </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  )
}

export default Banner3