import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import config from '../api/config';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import { Oval } from 'react-loader-spinner';
import 'swiper/css/autoplay';
import weichai from '../assets/WEICHAI_HEAVY_EQUIPMENT.jpg'
import POWERGEN from '../assets/POWERGEN.jpg'
import powerquip from '../assets/PowerQuip.png'
import shacman from '../assets/Shacman.png'
import sinotruck from '../assets/Sinotruck.png'
import kinglingIsuzu from '../assets/KinglingIsuzu.png'
import forland from '../assets/Forland.png'

const Banner3 = () => {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

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
    // Weichai: `${apiUrl}/products/Weichai_heavy_equipment`, 
    // Powergen: `${apiUrl}/products/Powergen`, 
    // PowerQuip: `${apiUrl}/products/PowerQuip`, 
    // Shacman: `${apiUrl}/products/Shacman`, 
    // KinglingIsuzu: `${apiUrl}/products/KinglingIsuzu`, 
    // Sinotruck: `${apiUrl}/products/Sinotruck`, 
    // Forland: `${apiUrl}/products/Forland`,
    Homepage_weichai: `${apiUrl}/products/hompage_weichai`,
    Homepage_powerquip: `${apiUrl}/products/hompage_powerquip`,
    Homepage_weichaigenerator: `${apiUrl}/products/hompage_weichaigenerator`,
    Homepage_shacman: `${apiUrl}/products/hompage_shacman`,
    Homepage_sinotruck: `${apiUrl}/products/hompage_sinotruck`,
    Homepage_kinglingisuzu: `${apiUrl}/products/hompage_kinglingisuzu`,
    Homepage_forland: `${apiUrl}/products/hompage_forland`,
  };

  // Fetch images
  const fetchImageBlob = async (url) => {
    try {
      const { data } = await Axios.get(url, { responseType: "blob", headers: { 
        'ngrok-skip-browser-warning': true
      } });
      return URL.createObjectURL(data);
    } catch (error) {
      console.error(`Failed to fetch image from ${url}:`, error);
      throw error;
    }
  };
  
  // Concurrency limiting function
  const fetchWithConcurrencyLimit = async (tasks, limit = 5) => {
    const results = [];
    const executing = new Set();
  
    for (const task of tasks) {
      const promise = task();
      results.push(promise);
  
      executing.add(promise);
      promise.finally(() => executing.delete(promise));
  
      if (executing.size >= limit) {
        await Promise.race(executing); // Wait for one task to complete
      }
    }
  
    await Promise.all(results); // Wait for all tasks to complete
  };
  
  const fetchImages = async () => {
    const objectUrls = {};
    const errorKeys = [];
  
    try {
      const tasks = Object.entries(productImages).map(([key, url]) => async () => {
        try {
          const objectUrl = await fetchImageBlob(url);
          objectUrls[key] = objectUrl;
  
          // Incremental state update for progressive rendering
          setImages((prev) => ({ ...prev, [key]: objectUrl }));
        } catch (error) {
          errorKeys.push(key); // Keep track of failed images
        }
      });
  
      // Limit concurrency to 6 tasks at a time
      await fetchWithConcurrencyLimit(tasks, 10);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false); // Ensure loading stops
    }
  
    // Cleanup URLs on component unmount
    return () => {
      Object.values(objectUrls).forEach((url) => URL.revokeObjectURL(url));
    };
  };
  
  useEffect(() => {
    let cleanup;
  
    fetchImages().then((fn) => {
      cleanup = fn;
    });
  
    // Cleanup function to revoke object URLs when the component unmounts
    return () => {
      if (cleanup) cleanup();
    };
  }, []); // Run once when the component mounts
  

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Oval
          height={80}
          width={80}
          color="#818CF8"
          secondaryColor="#818CF8"
          ariaLabel="loading"
        />
        <p className="mt-4 text-lg text-gray-600">Loading product images...</p>
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
                <img loading="lazy" onLoad={() => setIsLoaded(true)}  src={weichai} alt="Weichai Heavy Equipment" className={`p-3 ${isLoaded ? 'loaded' : 'blur'}`} />
              </Link>
            </div>

            <div data-aos="fade-down" className='bg-zinc-300 flex flex-col items-center justify-center rounded-3xl h-30 w-64 border-2 border-zinc-400 c_glow'>
              <Link to="/product#PowerQuip">
                <img loading="lazy" onLoad={() => setIsLoaded(true)} src={powerquip} alt="Power Quip" className={`p-3 ${isLoaded ? 'loaded' : 'blur'}`} />
              </Link>
            </div>

            <div  data-aos="fade-up" className='bg-zinc-300 flex flex-col items-center justify-center rounded-3xl h-30 w-64 border-2 border-zinc-400 c_glow'>
              <Link to="/product#Powergen">  
                <img loading="lazy" onLoad={() => setIsLoaded(true)} src={POWERGEN} alt="Weichai Powergen" className={`p-3 ${isLoaded ? 'loaded' : 'blur'}`} />
              </Link>
            </div>

            <div  data-aos="fade-up" className='bg-zinc-300 flex flex-col items-center justify-center rounded-3xl h-30 w-64 border-2 border-zinc-400 c_glow'>
              <Link to="/product#Shacman">  
                <img loading="lazy" onLoad={() => setIsLoaded(true)} src={shacman} alt="Shacman" className={`p-3 ${isLoaded ? 'loaded' : 'blur'}`} />
              </Link>
            </div>

            <div data-aos="fade-down" className='bg-zinc-300 flex flex-col items-center justify-center rounded-3xl h-30 w-64 border-2 border-zinc-400 c_glow'>
              <Link to="/product#Sinotruck">  
                <img loading="lazy" onLoad={() => setIsLoaded(true)} src={sinotruck} alt="Sinotruck" className={`p-3 ${isLoaded ? 'loaded' : 'blur'}`} />
              </Link>
            </div>

            <div  data-aos="fade-up" className='bg-zinc-300 flex flex-col items-center justify-center rounded-3xl h-30 w-64 border-2 border-zinc-400 c_glow '>
              <Link to="/product#Forland">  
                <img loading="lazy" onLoad={() => setIsLoaded(true)} src={forland}  alt="Forland Logo" className={`p-3 ${isLoaded ? 'loaded' : 'blur'}`}  />
              </Link>
            </div>

            <div  data-aos="fade-up" className='bg-zinc-300  flex flex-col items-center justify-center rounded-3xl h-30 w-64 border-2 border-zinc-400 c_glow lg:col-start-2'>
              <Link to="/product#KinglingIsuzu">  
                <img loading="lazy" onLoad={() => setIsLoaded(true)} src={kinglingIsuzu} alt="Kingling Isuzu" className={`p-3 ${isLoaded ? 'loaded' : 'blur'}`} />
              </Link>
            </div>

        </div>
          {/* Slider Component */}
          <div className='mt-16 lg:h-full lg:w-full md:h-full md:w-full w-screen h-full overflow-hidden -mb-20' data-aos="fade-up">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="w-full h-auto"
        loop
      >
        {/* Slide 1 */}
        <SwiperSlide className="p-10 flex flex-col items-center justify-center">
          <img loading='lazy' onLoad={() => setIsLoaded(true)} src={weichai} alt="Weichai" className={`${isLoaded ? 'loaded' : 'blur'} mx-auto lg:h-32 lg:w-9/12 md:h-40 h-auto w-56 bg-zinc-300 rounded-lg`} />
          <div className="gap-10 mt-6 items-center justify-center">
            <div className='lg:h-96 flex items-center justify-center'>
              <img loading='lazy' onLoad={() => setIsLoaded(true)} src={images.Homepage_weichai} alt="Weichai" className={` ${isLoaded ? 'loaded' : 'blur'} max-h-full max-w-full object-contain`} />
            </div>
          </div>
    
          <div className='absolute lg:inset-5 inset-2 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300'>
            <Link to="/product#Weichai" >
              <button className="neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-8 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-xl text-bold mb-4 my-2">
                VIEW MORE
              </button>
            </Link>
          </div>
                          {!isLoaded && loading && (
                            <div className="flex flex-col items-center justify-center">
                              <Oval color="#818CF8"secondaryColor="#818CF8"height={40} width={40} />
                            </div>
                          )}  
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="p-10 flex flex-col items-center justify-center">
          <img loading='lazy' onLoad={() => setIsLoaded(true)} src={powerquip} alt="Power Quip" className={`${isLoaded ? 'loaded' : 'blur'} mx-auto md:h-40 lg:h-32 h-auto bg-zinc-300 rounded-lg p-5`} />
          <div className="gap-10 mt-6 items-center justify-center">
            <div className='lg:h-96 flex items-center justify-center'>
              <img loading='lazy' onLoad={() => setIsLoaded(true)} src={images.Homepage_powerquip} alt="PowerQuip" className={`${isLoaded ? 'loaded' : 'blur'} max-h-full max-w-full object-contain`} />
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
          <img loading='lazy' onLoad={() => setIsLoaded(true)} src={POWERGEN} alt="Weichai Powergen" className={`${isLoaded ? 'loaded' : 'blur'} mx-auto md:h-40 lg:h-32 h-auto bg-zinc-300 rounded-lg p-5`} />
          <div className="gap-10 mt-6 items-center justify-center">
            <div className='lg:h-96 flex items-center justify-center'>
              <img loading='lazy' onLoad={() => setIsLoaded(true)} src={images.Homepage_weichaigenerator} alt="Weichai Powergen" className={`${isLoaded ? 'loaded' : 'blur'} max-h-full max-w-full object-contain`} />
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
          <img loading='lazy' onLoad={() => setIsLoaded(true)} src={shacman} alt="Shacman" className={`${isLoaded ? 'loaded' : 'blur'} mx-auto lg:p-[1.8rem] md:p-[1.8rem] p-[2rem] bg-zinc-300 rounded-lg`} />
          <div className="grid gap-10 mt-6 items-center justify-center">
            <div className='lg:h-96 flex items-center justify-center'>
              <img loading='lazy' onLoad={() => setIsLoaded(true)} src={images.Homepage_shacman} alt="Tractor Head H3000" className={`${isLoaded ? 'loaded' : 'blur'} max-h-full max-w-full object-contain`} />
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
          <img loading='lazy' onLoad={() => setIsLoaded(true)} src={kinglingIsuzu} alt="Kingling Isuzu" className={`${isLoaded ? 'loaded' : 'blur'} mx-auto lg:h-32 md:h-40 h-auto bg-zinc-300 rounded-lg`} />
          <div className="gap-10 mt-6 items-center justify-center">
            <div className='lg:h-96 flex items-center justify-center'>
              <img loading='lazy' onLoad={() => setIsLoaded(true)} src={images.Homepage_kinglingisuzu} alt="Kingling Isuzu" className={`${isLoaded ? 'loaded' : 'blur'} max-h-full max-w-full object-contain`} />
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
          <img loading='lazy' onLoad={() => setIsLoaded(true)} src={sinotruck} alt="Sinotruck" className={`${isLoaded ? 'loaded' : 'blur'} mx-auto lg:h-32 md:h-40 h-auto bg-zinc-300 rounded-lg`} />
          <div className="gap-10 mt-6 items-center justify-center">
            <div className='lg:h-96 flex items-center justify-center'>
              <img loading='lazy' onLoad={() => setIsLoaded(true)} src={images.Homepage_sinotruck} alt="Sinotruck" className={`${isLoaded ? 'loaded' : 'blur'} max-h-full max-w-full object-contain`} />
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
          <img loading='lazy' onLoad={() => setIsLoaded(true)} src={forland} alt="Forland" className={`${isLoaded ? 'loaded' : 'blur'} mx-auto lg:h-32 md:h-40 h-auto bg-zinc-300 rounded-lg`} />
          <div className="gap-10 mt-6 items-center justify-center">
            <div className='lg:h-96 flex items-center justify-center'>
              <img loading='lazy' onLoad={() => setIsLoaded(true)} src={images.Homepage_forland} alt="Forland" className={`${isLoaded ? 'loaded' : 'blur'} max-h-full max-w-full object-contain`} />
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