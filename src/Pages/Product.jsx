import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import config from '../api/config';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import { Oval } from 'react-loader-spinner';
import weichai from '../assets/WEICHAI_HEAVY_EQUIPMENT.jpg'
import POWERGEN from '../assets/POWERGEN.jpg'
import powerquip from '../assets/PowerQuip.png'
import shacman from '../assets/Shacman.png'
import sinotruck from '../assets/Sinotruck.png'
import kinglingIsuzu from '../assets/KinglingIsuzu.png'
import forland from '../assets/Forland.png'
import 'swiper/css';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Product = () => {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ block: 'center', behavior: 'smooth', inline: 'nearest' });
      }
    }
  }, [location]); 

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

  const productImages = {

    Weichai: `${apiUrl}/products/Weichai`, // products
    PowerQuip: `${apiUrl}/products/PowerQuip`, 
    Shacman: `${apiUrl}/products/Shacman`, 
    KinglingIsuzu: `${apiUrl}/products/KinglingIsuzu`, 
    Sinotruck: `${apiUrl}/products/Sinotruck`, 
    Forland: `${apiUrl}/products/Forland`,

    Excavator: `${apiUrl}/products/Excavator`, //Weichai
    RoadRoller: `${apiUrl}/products/RoadRoller`,
    Forklift: `${apiUrl}/products/Forklift`,
    Grader: `${apiUrl}/products/Grader`,
    Bulldozer: `${apiUrl}/products/Bulldozer`,
    WheelLoader: `${apiUrl}/products/WheelLoader`,

    KVA1: `${apiUrl}/products/15_5850KVA1`,
    KVA2: `${apiUrl}/products/15_5850KVA2`,
    KVA3: `${apiUrl}/products/15_5850KVA3`,
    KVA4: `${apiUrl}/products/15_5850KVA4`,
    KVA5: `${apiUrl}/products/15_5850KVA5`,

    KvaGenerator1: `${apiUrl}/products/KvaGenerator1`, //Powerquip
    KvaGenerator2: `${apiUrl}/products/KvaGenerator2`,
    KvaGenerator3: `${apiUrl}/products/KvaGenerator3`,

    TractorheadH3000: `${apiUrl}/products/TractorheadH3000`, //Shacman
    TractorheadX3000: `${apiUrl}/products/TractorheadX3000`, 
    Mixer: `${apiUrl}/products/Mixer`, 
    EvShacman: `${apiUrl}/products/EvShacman`, 
    ShacmanFuelTanker: `${apiUrl}/products/ShacmanFuelTanker`, 
    ShacmanSelfLoader: `${apiUrl}/products/ShacmanSelfLoader`, 
    ShacmanWingVan: `${apiUrl}/products/ShacmanWingVan`, 
    ShacmanDumpTruckH3000: `${apiUrl}/products/ShacmanDumpTruckH3000`, 
    ShacmanDumpTruckX3000: `${apiUrl}/products/ShacmanDumpTruckX3000`, 

    Isuzu700PFFRMediumDutyTruck: `${apiUrl}/products/700PFFRMediumDutyTruck`, //Kingling Isuzu
    AspahltDistributor: `${apiUrl}/products/AspahltDistributor`, 
    DumpTruck6cbm: `${apiUrl}/products/DumpTruck6cbm`, 
    FTR: `${apiUrl}/products/FTR`, 
    FVR: `${apiUrl}/products/FVR`, 
    Giga4x2CargoHeadRed: `${apiUrl}/products/Giga4x2CargoHeadRed`,  
    Giga4x2TractorHead: `${apiUrl}/products/Giga4x2TractorHead`, 
    Giga6x4DumpTruck: `${apiUrl}/products/Giga6x4DumpTruck`, 
    Giga6x4TractorHead: `${apiUrl}/products/Giga6x4TractorHead`, 
    Giga8x4CargoHead: `${apiUrl}/products/Giga8x4CargoHead`, 
    Giga6x2CargoHead: `${apiUrl}/products/Giga6x2CargoHead`, 
    GigaBoomRed: `${apiUrl}/products/GigaBoomRed`, 
    GigaMixerTruck10W10CBM: `${apiUrl}/products/GigaMixerTruck10W(10CBM)`, 
    GTH6x4300HP: `${apiUrl}/products/GTH6x4300HP`, 
    HOWOT7: `${apiUrl}/products/HOWOT7`, 
    Isuzu6WGarbage: `${apiUrl}/products/Isuzu6WGarbage`, 
    IsuzuBus: `${apiUrl}/products/IsuzuBus`, 
    IsuzuFVR6Wheeler6000LitersPTOFireTruck: `${apiUrl}/products/IsuzuFVR6Wheeler6000LitersPTOFireTruck`, 
    IsuzuNLR4Wheeler1500LitersPTOFireTruck: `${apiUrl}/products/IsuzuNLR4Wheeler1500LitersPTOFireTruck`, 
    IsuzuSewage: `${apiUrl}/products/IsuzuSewage`, 
    NKR600p: `${apiUrl}/products/NKR600p`, 
    NPR700P: `${apiUrl}/products/NPR700P`, 
   
    CargoTruck6Wheeler: `${apiUrl}/products/CargoTruck6Wheeler`, //Sinotruck
    CargoTruck6WheelerVersion2: `${apiUrl}/products/CargoTruck6WheelerVersion2`,
    DumpTruck4Cubic: `${apiUrl}/products/DumpTruck4Cubic`,
    DumpTruck12Cubic: `${apiUrl}/products/DumpTruck12Cubic`,
    GarbageTruck5Cubic: `${apiUrl}/products/GarbageTruck5Cubic`,
    HOWOFBBody: `${apiUrl}/products/HOWOFBBody`,
    ManliftTruck4x2: `${apiUrl}/products/Manlift Truck 4x2`,
    MixerTruck4Cubic: `${apiUrl}/products/MixerTruck4Cubic`,
    MixerTruck6Cubic: `${apiUrl}/products/MixerTruck6Cubic`,
    OilFuelWaterTanker4Cubic: `${apiUrl}/products/OilFuelWaterTanker4Cubic`,
    OilFuelWaterTanker10Cubic: `${apiUrl}/products/OilFuelWaterTanker10Cubic`,

    ForlandCargoTruck14Realft: `${apiUrl}/products/ForlandCargoTruck14Realft`, //Forland
    ForlandCargoTruck20ft: `${apiUrl}/products/ForlandCargoTruck20ft`,
    ForlandCargoTruck17ft: `${apiUrl}/products/ForlandCargoTruck17ft`,
    ForlandDumpTruck6cbm: `${apiUrl}/products/ForlandDumpTruck6cbm`,
    Forlanddumptruck3cbm: `${apiUrl}/products/forlanddumptruck3cbm`,
    H7: `${apiUrl}/products/H7`,
    L3: `${apiUrl}/products/L3`,
    L5: `${apiUrl}/products/L5`,
    M6: `${apiUrl}/products/M6`,
    T3: `${apiUrl}/products/T3`,
    T5: `${apiUrl}/products/T5`,
    T5Class1: `${apiUrl}/products/T5Class1`,
    T54x2: `${apiUrl}/products/T5 4x2`,

};


  // Fetch images
// Fetch images and set the images state
const fetchImages = async () => {
  try {
    const fetchImages = {};

    // Loop through all product images and fetch from the server
    const imagePromises = Object.keys(productImages).map(async (key) => {
      const response = await Axios.get(productImages[key], { responseType: 'blob' });
      const blobUrl = URL.createObjectURL(response.data); // Create object URL for the image

      fetchImages[key] = blobUrl; // Store the object URL for the image
    });

    await Promise.all(imagePromises); // Wait for all images to be fetched

    setImages(fetchImages); // Update the images state
    setLoading(false); // Set loading to false
  } catch (error) {
    console.error('Error fetching images:', error);
    setLoading(false); // Ensure loading is false if an error occurs
  }
};

// Fetch images once when the component mounts
useEffect(() => {
  fetchImages();
}, []); // No dependency needed

useEffect(() => {
  // Revoke object URLs when images are updated or component unmounts
  return () => {
    Object.values(fetchImages).forEach((url) => URL.revokeObjectURL(url)); // Clean up URLs
  };
}, [fetchImages]); // Trigger cleanup whenever the fetchImages state changes

  
  const Weichai = [
    { id: 1, image: images.Bulldozer,title: 'Bulldozer', description: 'View Description', name: 'Bulldozer', link: 'Bulldozer'},
    { id: 2, image: images.Excavator,title: 'Excavator', description: 'View Description', name: 'Excavator', link: 'Excavator'},
    { id: 3, image: images.RoadRoller, title: 'Road-Roller', description: 'View Description', name: 'Road Roller', link: 'RoadRoller'},
    { id: 4, image: images.Forklift,title: 'Forklift', description: 'View Description', name: 'Forklift', link: 'Forklift'},
    { id: 5, image: images.Grader,title: 'Grader', description: 'View Description', name: 'Grader', link: 'Grader'},
    { id: 6, image: images.WheelLoader,title: 'Wheel-Loader', description: 'View Description', name: 'Wheel Loader', link: 'WheelLoader'},
  ];

  const Powergen =[
    { id: 1, image: images.KVA1,title: 'KVA 1', description: 'View Description', name: 'KVA1', },
    { id: 2, image: images.KVA2,title: 'KVA 2', description: 'View Description', name: 'KVA2', },
    { id: 3, image: images.KVA3, title: 'KVA 3', description: 'View Description', name: 'KVA3', },
    { id: 4, image: images.KVA4, title: 'KVA 4', description: 'View Description', name: 'KVA4', },
    { id: 5, image: images.KVA5, title: 'KVA 5', description: 'View Description', name: 'KVA5', },
  ];

  const PowerQuip = [
    { id: 1, image: images.KvaGenerator1,title: 'KvaGenerator 1', description: 'View Description', name: 'KvaGenerator1', },
    { id: 2, image: images.KvaGenerator2,title: 'KvaGenerator 2', description: 'View Description', name: 'KvaGenerator2', },
    { id: 3, image: images.KvaGenerator3, title: 'KvaGenerator 3', description: 'View Description', name: 'KvaGenerator3', },
  ];

  const Shacman = [
    { id: 1, image: images.TractorheadX3000,title: 'Shacman Tractorhead X3000', description: 'View Description', name: 'Shacman Tractorhead X3000', link: 'TractorheadX3000'},
    { id: 2, image: images.TractorheadH3000,title: 'Shacman Tractorhead H3000', description: 'View Description', name: 'Shacman Tractorhead H3000', link: 'TractorheadH3000'},
    { id: 3, image: images.Mixer, title: 'Shacman Mixer', description: 'View Description', name: 'Shacman Mixer', link: 'Mixer'},
    { id: 4, image: images.EvShacman, title: 'Ev Shacman', description: 'View Description', name: 'Ev Shacman', link: 'EvShacman'},
    { id: 5, image: images.ShacmanFuelTanker, title: 'Shacman Fuel Tanker', description: 'View Description', name: 'Shacman Fuel Tanker', link: 'ShacmanFuelTanker'},
    { id: 6, image: images.ShacmanSelfLoader, title: 'Shacman Self Loader', description: 'View Description', name: 'Shacman Self Loader', link: 'ShacmanSelfLoader'},
    { id: 7, image: images.ShacmanWingVan, title: 'Shacman Wing Van', description: 'View Description', name: 'Shacman Wing Van', link: 'ShacmanWingVan'},
    { id: 8, image: images.ShacmanDumpTruckH3000, title: 'Shacman Dump Truck H3000', description: 'View Description', name: 'Shacman Dump Truck H3000', link: 'ShacmanDumpTruckH3000'},
    { id: 9, image: images.ShacmanDumpTruckX3000, title: 'Shacman Dump Truck X3000', description: 'View Description', name: 'Shacman Dump Truck X3000', link: 'ShacmanDumpTruckX3000'},
  ];

  const KinglingIsuzu = [
    { id: 1, image: images.Isuzu700PFFRMediumDutyTruck, title: 'Isuzu 700 PFFR', description: 'View Description', name: 'Isuzu 700 PFFR', link: 'Isuzu700PFFRMediumDutyTruck'},
    { id: 2, image: images.AspahltDistributor, title: 'Aspahlt Distributor', description: 'View Description', name: 'Aspahlt Distributor', link: 'AspahltDistributor'},
    { id: 3, image: images.DumpTruck6cbm, title: 'Dump Truck 6cbm', description: 'View Description', name: 'Dump Truck 6cbm', link: 'DumpTruck6cbm'},
    { id: 4, image: images.FTR, title: 'FTR', description: 'View Description', name: 'FTR', link: 'FTR'},
    { id: 5, image: images.FVR, title: 'FVR', description: 'View Description', name: 'FVR', link: 'FVR'},
    { id: 6, image: images.Giga4x2CargoHeadRed, title: 'Giga 4x2 Cargo Head', description: 'View Description', name: 'Giga 4x2 Cargo Head', link: 'Giga4x2CargoHeadRed'},
    { id: 7, image: images.Giga4x2TractorHead, title: 'Giga 4x2 TractorHead', description: 'View Description', name: 'Giga 4x2 TractorHead', link: 'Giga4x2TractorHead'},
    { id: 8, image: images.Giga6x2CargoHead, title: 'Giga 6x2 Cargo Head', description: 'View Description', name: 'Giga 6x2 Cargo Head', link: 'Giga6x2CargoHead'},
    { id: 9, image: images.Giga6x4DumpTruck, title: 'Giga 6x4 Dump Truck', description: 'View Description', name: 'Giga 6x4 Dump Truck', link: 'Giga6x4DumpTruck'},
    { id: 10, image: images.Giga6x4TractorHead, title: 'Giga 6x4 Tractor Head', description: 'View Description', name: 'Giga 6x4 Tractor Head', link: 'Giga6x4TractorHead'},
    { id: 11, image: images.Giga8x4CargoHead, title: 'Giga 8x4 Cargo Head', description: 'View Description', name: 'Giga 8x4 Cargo Head', link: 'Giga8x4CargoHead'},
    { id: 12, image: images.GigaBoomRed, title: 'Giga Boom', description: 'View Description', name: 'Giga Boom', link:'GigaBoomRed'},
    { id: 13, image: images.GigaMixerTruck10W10CBM, title: 'Giga Mixer Truck 10W 10CBM', description: 'View Description', name: 'Giga Mixer Truck 10W 10CBM', link: 'GigaMixerTruck10W10CBM'},
    { id: 14, image: images.GTH6x4300HP, title: 'GTH 6x4 300HP', description: 'View Description', name: 'GTH 6x4 300HP', link: 'GTH6x4300HP'},
    // { id: 15, image: images.HOWOT7, title: 'HOWO T7', description: 'View Description', name: 'HOWO T7', link: 'HOWOT7'},
    { id: 16, image: images.Isuzu6WGarbage, title: 'Isuzu 6W Garbage', description: 'View Description', name: 'Isuzu 6 WGarbage', link: 'Isuzu6WGarbage'},
    { id: 17, image: images.IsuzuBus, title: 'Isuzu Bus', description: 'View Description', name: 'Isuzu Bus', link: 'IsuzuBus'},
    { id: 18, image: images.IsuzuFVR6Wheeler6000LitersPTOFireTruck, title: 'Isuzu FVR6 Wheeler 6000Liters PTO FireTruck', description: 'View Description', name: 'Isuzu FVR6 Wheeler 6000Liters PTO FireTruck', link: 'IsuzuFVR6Wheeler6000LitersPTOFireTruck'},
    { id: 19, image: images.IsuzuNLR4Wheeler1500LitersPTOFireTruck, title: 'Isuzu NLR4 Wheeler 1500Liters PTO FireTruck', description: 'View Description', name: 'Isuzu NLR4 Wheeler 1500Liters PTO FireTruck', link: 'IsuzuNLR4Wheeler1500LitersPTOFireTruck'},
    { id: 20, image: images.IsuzuSewage, title: 'Isuzu Sewage', description: 'View Description', name: 'Isuzu Sewage', link: 'IsuzuSewage'},
    { id: 21, image: images.NKR600p, title: 'NKR 600P', description: 'View Description', name: 'NKR 600P', link: 'NKR600p'},
    { id: 22, image: images.NPR700P, title: 'NPR 700P', description: 'View Description', name: 'NPR 700P', link: 'NPR700P'},
  ];

  const Sinotruck = [
    { id: 1, image: images.CargoTruck6Wheeler, title: 'Cargo Truck 6 Wheeler', description: 'View Description', name: 'Cargo Truck 6 Wheeler', link: 'CargoTruck6Wheeler'},
    // { id: 2, image: images.CargoTruck6WheelerVersion2, title: 'Cargo Truck 6 Wheeler Version 2', description: 'View Description', name: 'Cargo Truck 6 Wheeler version 2', link: 'CargoTruck6WheelerVersion2'},
    { id: 3, image: images.DumpTruck4Cubic, title: 'Dump Truck 4 Cubic', description: 'View Description', name: 'Dump Truck 4 Cubic', link: 'DumpTruck4Cubic'},
    // { id: 4, image: images.DumpTruck12Cubic ,title: 'Dump Truck 12 Cubic', description: 'View Description', name: 'Dump Truck 12 Cubic', link: 'DumpTruck12Cubic'},
    // { id: 5, image: images.GarbageTruck5Cubic ,title: 'Garbage Truck 5 Cubic', description: 'View Description', name: 'Garbage Truck 5 Cubic', link: 'GarbageTruck5Cubic'},
    // { id: 6, image: images.HOWOFBBody, title: 'HOWO FB Body', description: 'View Description', name: 'HOWO FB Body', link: 'HOWOFBBody'},
    { id: 7, image: images.ManliftTruck4x2, title: 'Manlift Truck 4x2', description: 'View Description', name: 'Manlift Truck 4x2', link: 'ManliftTruck4x2'},
    { id: 8, image: images.MixerTruck4Cubic, title: 'Mixer Truck 4 Cubic', description: 'View Description', name: 'Mixer Truck 4 Cubic', link: 'MixerTruck4Cubic'},
    { id: 9, image: images.MixerTruck6Cubic, title: 'Mixer Truck 6 Cubic', description: 'View Description', name: 'Mixer Truck 6 Cubic', link: 'MixerTruck6Cubic'},
    { id: 10, image: images.OilFuelWaterTanker4Cubic, title: 'Oil Fuel Water Tanker 4 Cubic', description: 'View Description', name: 'Oil Fuel Water Tanker 4 Cubic', link: 'OilFuelWaterTanker4Cubic'},
    { id: 11, image: images.OilFuelWaterTanker10Cubic, title: 'Oil Fuel Water Tanker 10 Cubic', description: 'View Description', name: 'Oil Fuel Water Tanker 10 Cubic', link: 'OilFuelWaterTanker10Cubic'},
  ];

  const Forland = [
    { id: 1, image: images.ForlandCargoTruck14Realft, title: 'Forland Cargo Truck 14Realft', description: 'View Description', name: 'Forland Cargo Truck 14Realft', link: 'ForlandCargoTruck14Realft'},
    { id: 2, image: images.ForlandCargoTruck20ft, title: 'Forland Cargo Truck 20ft', description: 'View Description', name: 'Forland Cargo Truck 20ft', link: 'ForlandCargoTruck20ft'},
    { id: 3, image: images.ForlandDumpTruck6cbm, title: 'Forland Dump Truck 6cbm', description: 'View Description', name: 'Forland Dump Truck 6cbm', link: 'ForlandDumpTruck6cbm'},
    { id: 4, image: images.H7 ,title: 'Forland L7 Cargo Truck', description: 'View Description', name: 'H7', link: 'H7'},
    { id: 5, image: images.L3 ,title: 'Forland L3 Cargo truck', description: 'View Description', name: 'L3', link: 'L3'},
    { id: 6, image: images.L5 , title: 'Forland L5', description: 'View Description', name: 'L5', link: 'L5'},
    { id: 7, image: images.M6, title: 'Forland M6', description: 'View Description', name: 'M6', link: 'M6'},
    { id: 8, image: images.T3, title: 'Forland T3 Cargo Truck', description: 'View Description', name: 'T3', link: 'T3'},
    { id: 9, image: images.T5, title: 'Forland T5 Cargo Truck', description: 'View Description', name: 'T5', link: 'T5'},
    { id: 10, image: images.T5Class1, title: 'T5 Class 1', description: 'View Description', name: 'T5 Class 1', link: 'T5Class1'},
    { id: 11, image: images.T54x2, title: 'Forland T5 4x2 Dump Truck', description: 'View Description', name: 'T5 4x2', link: 'T54x2'},
    { id: 12, image: images.ForlandCargoTruck17ft, title: 'Forland Cargo Truck 17ft', description: 'View Description', name: 'Forland Cargo Truck 17ft', link: 'ForlandCargoTruck17ft'},
    { id: 13, image: images.Forlanddumptruck3cbm, title: 'Forland Dump Truck 3cbm', description: 'View Description', name: 'Forland Dump Truck 3cbm', link: 'Forlanddumptruck3cbm'},
  ];

  return (
    <div id="Products" className="p-10 flex flex-col items-center justify-center overflow-hidden">
    <HelmetProvider>

      <Helmet>
        <title>Our Products | The Legacy</title>
        <meta name="description" content="Explore our extensive range of construction equipment, trucks, and machinery from top brands like Weichai, Powerquip, Shacman, Kingling Isuzu, Sinotruck, and Forland." />
      </Helmet>
    
 

      <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-1 leading-normal uppercase text-indigo-500 text-center mt-16">
        Our Products
      </h1>
      <p  data-aos="fade-right" className='text-[20px] font-semibold mb-5  text-zinc-100 text-center mx-auto lg:mx-20'>We proudly distribute a wide range of top-quality brands, including Weichai, Powerquip, Shacman, Kingling Isuzu, Sinotruk, and Forland. Feel free to explore our offerings and discover the perfect solutions for your needs.</p>

      <hr data-aos="fade-up" className="bg-zinc-100 w-full mb-16 border-0 h-2 rounded-md hr" />
      
      <img  loading='lazy' src={weichai} alt="Weichai" className=' mx-auto lg:h-28 md:h-28 h-28 bg-zinc-300 rounded-lg' />
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        
        pagination={{ clickable: true, 
                      el: '.swiper-pagination-custom'
        }}
        breakpoints={{
          1024: { slidesPerView: 3},
          768: { slidesPerView: 2 },
          640: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
        loop
        autoplay={{ delay: 5000 }}
        className="w-full z-10 "
      >
        {Weichai.map((weichai) => (
          <SwiperSlide key={weichai.id} >
            <div className="p-5 flex flex-col justify-between lg:h-[400px] " >
              <h2 id='Weichai'   className="lg:text-xl md:text-xl sm:text-sm  font-bold text-indigo-500 text-center">{weichai.title}</h2>
              <div className="flex flex-col items-center justify-center w-full ">
                <div className="box-content h-[240px] w-[240px] p-10 border-4  rounded-md bg-zinc-800 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]">
                <img
                
                  loading="lazy"
                  src={weichai.image}
                  alt={weichai.name}
                  className={`${weichai.title === 'Road-Roller' ? 'w-auto h-auto relative bottom-16' : ''} 
                              ${weichai.title === 'Excavator' ? 'w-auto h-auto relative bottom-12' : ''} 
                              ${weichai.title === 'Forklift' ? 'w-auto h-auto relative top-16' : ''} 
                              ${weichai.title === 'Grader' ? 'w-auto h-auto relative top-24' : ''} 
                              ${weichai.title === 'Wheel-Loader' ? 'w-auto h-auto relative top-16' : ''} 
                              object-cover w-full text-transparent`} 
                />
                {loading && (
                  <div className="flex flex-col items-center justify-center">
                    <Oval color="#818CF8"secondaryColor="#818CF8"height={40} width={40} />
                  </div>
                )}                
                </div>
              </div>
              <div className='absolute lg:inset-3 inset-2  flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300'>
              <Link to={`/${weichai.link}#${weichai.link}`} className='z-10'>
                <button className="neno-button shadow-xl hover:indigo-zinc-400/50 hover:bg-zinc-900 rounded-lg py-2 px-4 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-md text-bold mb-4 my-2">
                  {weichai.description}              
                </button>
              </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=' relative gap-2 z-10'>
        <div className="swiper-pagination-custom  flex justify-center "></div>
      </div>
      <br />
      <br />
      <br />

      <hr   data-aos="fade-up" className="bg-zinc-100 w-full mb-14 border-0 h-2 rounded-md hr" />

      <span></span>
      <img loading='lazy' src={POWERGEN} alt="PowerQuip" className='mx-auto lg:h-24 md:h-28 h-28 rounded-lg mt-10' />   
      <h2 id='Powergen' className="text-xl font-bold text-indigo-500 text-center">15-5850 KVA</h2>  
      <Swiper 
      
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        
        pagination={{ clickable: true,
                      el: '.swiper-pagination-custompowergen'
         }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        autoplay={{ delay: 5000 }}
        className="w-full z-10"
      >
        {Powergen.map((powergen) => (
          <SwiperSlide key={powergen.id} >
            <div className="p-5 flex flex-col justify-between lg:h-[400px] ">
              
              <div className="flex flex-col items-center justify-center w-full ">
                <div className="box-content  p-10 sm:mx-5 md:mx-0 lg:mx-0 border-4 rounded-md bg-zinc-800 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]">
                <img
                  loading="lazy"
                  src={powergen.image}
                  alt={powergen.name} 
                  className='text-transparent'
                />
                {loading && (
                  <div className="flex flex-col items-center justify-center">
                    <Oval color="#818CF8"secondaryColor="#818CF8"height={40} width={40} />
                  </div>
                )}                 
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          <div className='absolute inset-0  z-10  flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300'>
            <Link to='/KVAPowergen#KVAPowergen' >
              <button className="neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-4 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-md text-bold mb-4 my-2">
                View Description              
              </button>
            </Link>
          </div>        
      </Swiper>
      <div className=' gap-2 z-20'>
        <div className="swiper-pagination-custompowergen  flex justify-center "></div>
      </div>
      <br />
      <br />
      <br />

      <hr   data-aos="fade-up" className="bg-zinc-100 w-full mb-14 border-0 h-2 rounded-md hr" />

      <span></span>
      <img loading='lazy' src={powerquip} alt="PowerQuip" className='mx-auto lg:h-24 md:h-28 h-28 rounded-lg mt-10' />   
      <h2 id='PowerQuip' className="text-xl font-bold text-indigo-500 text-center">18-2750 KVA</h2>  
      <Swiper
      
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        
        pagination={{ clickable: true,
                      el: '.swiper-pagination-customs'
         }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        autoplay={{ delay: 5000 }}
        className="w-full z-10"
      >
        {PowerQuip.map((powerquip) => (
          <SwiperSlide key={powerquip.id} >
            <div className="p-5 flex flex-col justify-between lg:h-[290px] ">
              
              <div className="flex flex-col items-center justify-center w-full ">
                <div className="box-content  p-10 sm:mx-5 md:mx-0 lg:mx-0 border-4 rounded-md bg-zinc-800 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]">
                <img
                  loading="lazy"
                  src={powerquip.image}
                  alt={powerquip.name} 
                  className='text-transparent'
                />
                {loading && (
                  <div className="flex flex-col items-center justify-center">
                    <Oval color="#818CF8"secondaryColor="#818CF8"height={40} width={40} />
                  </div>
                )}                 
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
          <div className='absolute inset-0  z-10  flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300'>
            <Link to='/KvaGenerator#KvaGenerator' >
              <button className="neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-4 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-md text-bold mb-4 my-2">
                View Description              
              </button>
            </Link>
          </div>        
      </Swiper>
      <div className=' gap-2 z-20'>
        <div className="swiper-pagination-customs  flex justify-center "></div>
      </div>
      <br />
      <br />
      <br />
      
      <hr data-aos="fade-up" className="bg-zinc-100 w-full mb-16 border-0 h-2 rounded-md hr" />
      <span></span>
      <img loading='lazy' src={shacman} alt="Shacman" className='mx-auto lg:p-4 md:p-4 h-auto bg-zinc-300 rounded-lg mt-3' />
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        
        pagination={{ clickable: true, 
          el: '.swiper-pagination-customshacman'
}}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        loop
        autoplay={{ delay: 5000 }}
        className="w-full z-10"
      >
        {Shacman.map((shacman) => (
          <SwiperSlide key={shacman.id} >
            <div className="p-5 flex flex-col justify-between lg:h-[400px] ">
       
                <h2 id='Shacman'   className="text-xl font-bold text-indigo-500 text-center mb-auto">{shacman.title}</h2>
             
              <div className="flex flex-col items-center justify-center w-full mt-auto">
                <div className="box-content h-[240px] w-[240px] p-10 border-4 rounded-md bg-zinc-800 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]">
                <img
                  loading="lazy"
                  src={shacman.image}
                  alt={shacman.name}
                  className={`${shacman.title === 'Shacman Tractorhead X3000' ? 'w-auto h-full relative top-0' : ''} 
                              ${shacman.title === 'Ev Shacman' ? 'w-auto   relative top-10' : ''} 
                              ${shacman.title === 'Shacman Fuel Tanker' ? 'relative top-6' : ''} 
                              ${shacman.title === 'Shacman Self Loader' ? 'w-auto h-full relative top-0' : ''} 
                              ${shacman.title === 'Shacman Wing Van' ? 'relative top-6' : ''} 
                              ${shacman.title === 'Shacman Dump Truck H3000' ? 'relative top-3' : ''} 
                              ${shacman.title === 'Shacman Dump Truck X3000' ? ' relative top-3' : ''} 
                              ${shacman.title === 'Ev Shacman' ? 'w-auto h-[200px] relative top-5' : ''}
                              object-cover w-full text-transparent`} 
                />
                {loading && (
                  <div className="flex flex-col items-center justify-center">
                    <Oval color="#818CF8"secondaryColor="#818CF8"height={40} width={40} />
                  </div>
                )}                
                </div>
              </div>
              <div className='absolute lg:inset-3 inset-2 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300'>
              <Link to={`/${shacman.link}#${shacman.link}`} className='z-10'>
                <button className="neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-4 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-md text-bold mb-4 my-2">
                  {shacman.description}              
                </button>
              </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>   
      <div className=' relative gap-2 z-10'>
        <div className="swiper-pagination-customshacman  flex justify-center "></div>
      </div>      
      <br />
      <br />
      <br />

      <span></span>
      <hr  data-aos="fade-up" className="bg-zinc-100 w-full mb-16 border-0 h-2 rounded-md hr" />
      <img loading='lazy' src={kinglingIsuzu} alt="Kingling Isuzu" className='mx-auto lg:h-24 md:h-28 h-28 bg-zinc-300 rounded-lg mt-3' />
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        
        pagination={{ clickable: true, 
          el: '.swiper-pagination-customkinglingisuzu'
}}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        loop
        autoplay={{ delay: 5000 }}
        className="w-full z-10"
      >
        {KinglingIsuzu.map((kinglingIsuzu) => (
          <SwiperSlide key={kinglingIsuzu.id} >
            <div className="p-5 flex flex-col justify-between lg:h-[400px] ">
       
              <h2 id='KinglingIsuzu'  
                  className={`${
                    kinglingIsuzu.title === 'Isuzu NLR4 Wheeler 1500Liters PTO FireTruck' ||
                    kinglingIsuzu.title === 'Isuzu FVR6 Wheeler 6000Liters PTO FireTruck'
                      ? 'lg:text-sm text-sm'
                      : 'lg:text-xl text-sm'
                  }
                                font-bold text-indigo-500 text-center mb-auto `}>
                              {kinglingIsuzu.title}
              </h2>
             
              <div className="flex flex-col items-center justify-center w-full mt-auto">
                <div className="box-content h-[240px] w-[240px] p-10 border-4 rounded-md bg-zinc-800 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]">
                <img
                  loading="lazy"
                  src={kinglingIsuzu.image}
                  alt={kinglingIsuzu.name}
                  className={`${kinglingIsuzu.title === 'Isuzu 700 PFFR' ? ' h-auto w-auto relative top-8' : ''}
                              ${kinglingIsuzu.title === 'Aspahlt Distributor' ? ' h-auto w-auto relative top-20' : ''}
                              ${kinglingIsuzu.title === 'Dump Truck 6cbm' ? ' h-auto w-auto relative top-16' : ''}
                              ${kinglingIsuzu.title === 'FTR' ? ' h-auto w-auto relative top-8' : ''}
                              ${kinglingIsuzu.title === 'FVR' ? ' h-auto w-auto relative top-8' : ''}
                              ${kinglingIsuzu.title === 'Giga 4x2 Cargo Head' ? ' h-auto w-auto relative top-16' : ''}
                              ${kinglingIsuzu.title === 'Giga 4x2 TractorHead' ? ' h-auto w-auto relative top-14' : ''}
                              ${kinglingIsuzu.title === 'Giga 6x2 Cargo Head' ? ' h-auto w-auto relative top-10' : ''}
                              ${kinglingIsuzu.title === 'Giga 6x4 Dump Truck' ? ' h-auto w-auto relative top-20' : ''}
                              ${kinglingIsuzu.title === 'Giga 6x4 Tractor Head' ? ' h-auto w-auto relative top-14' : ''}
                              ${kinglingIsuzu.title === 'Giga 8x4 TractorHead' ? ' h-auto w-auto relative top-14' : ''}
                              ${kinglingIsuzu.title === 'Giga 8x4 Cargo Head' ? ' h-auto w-auto relative top-20' : ''}
                              ${kinglingIsuzu.title === 'Giga Boom' ? ' h-auto w-auto relative top-20' : ''}
                              ${kinglingIsuzu.title === 'Giga Mixer Truck 10W 10CBM' ? ' h-auto w-auto relative top-10' : ''}
                              ${kinglingIsuzu.title === 'GTH 6x4 300HP' ? ' h-auto w-auto relative top-16' : ''}
                              ${kinglingIsuzu.title === 'HOWO T7' ? ' h-auto w-auto relative top-14' : ''}
                              ${kinglingIsuzu.title === 'Isuzu 6W Garbage' ? ' h-auto w-auto relative top-12' : ''}
                              ${kinglingIsuzu.title === 'Isuzu Bus' ? ' h-auto w-auto relative top-14' : ''}
                              ${kinglingIsuzu.title === 'Isuzu FVR6 Wheeler 6000Liters PTO FireTruck' ? ' h-auto w-auto relative top-14' : ''}
                              ${kinglingIsuzu.title === 'Isuzu NLR4 Wheeler 1500Liters PTO FireTruck' ? ' h-auto w-auto relative top-14' : ''}
                              ${kinglingIsuzu.title === 'Isuzu Sewage' ? ' h-auto w-auto relative top-20' : ''}
                              ${kinglingIsuzu.title === 'NKR 600P' ? ' h-auto w-auto relative top-10' : ''}
                              ${kinglingIsuzu.title === 'NPR 700P' ? ' h-auto w-auto relative top-10' : ''}
                              object-cover w-full text-transparent`} 
                />
                {loading && (
                  <div className="flex flex-col items-center justify-center">
                    <Oval color="#818CF8"secondaryColor="#818CF8"height={40} width={40} />
                  </div>
                )}                
                </div>
              </div>
              <div className='absolute lg:inset-3 inset-2 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300'>
              <Link to={`/${kinglingIsuzu.link}#${kinglingIsuzu.link}`} className='z-10'>
                <button className="neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-4 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-md text-bold mb-4 my-2">
                  {kinglingIsuzu.description}              
                </button>
              </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>   
      <div className=' relative gap-2 z-10'>
        <div className="swiper-pagination-customkinglingisuzu  flex justify-center "></div>
      </div>  
      <br />
      <br />
      <br />

      <span></span>
      <hr  data-aos="fade-up" className="bg-zinc-100 w-full mb-16 border-0 h-2 rounded-md hr" />
      <img loading='lazy' src={sinotruck} alt="Sinotruck" className='mx-auto  lg:h-24 md:h-28 h-28 bg-zinc-300 rounded-lg mt-3' />
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        
        pagination={{ clickable: true, 
          el: '.swiper-pagination-customsinotruck'
}}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        loop
        autoplay={{ delay: 5000 }}
        className="w-full z-10"
       >
        {Sinotruck.map((sinotruck) => (
          <SwiperSlide key={sinotruck.id} >
            <div className="p-5 flex flex-col justify-between lg:h-[400px] ">
       
              <h2  id='Sinotruck' className="lg:text-xl md:text-xl sm:text-sm  font-bold text-indigo-500 text-center ">{sinotruck.title}</h2>
             
              <div className="flex flex-col items-center justify-center w-full mt-auto">
                <div className="box-content h-[240px] w-[240px] p-10 border-4 rounded-md bg-zinc-800 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]">
                <img
                  loading="lazy"
                  src={sinotruck.image}
                  alt={sinotruck.name}
                  className={`${sinotruck.title === 'Cargo Truck 6 Wheeler' ? 'w-full h-full relative top-6' : ''} 
                              ${sinotruck.title === 'Cargo Truck 6 Wheeler Version 2' ? 'w-auto h-auto relative top-14 object-cover' : ''} 
                              ${sinotruck.title === 'Dump Truck 4 Cubic' ? 'w-auto h-full relative top-5' : ''} 
                              ${sinotruck.title === 'Dump Truck 12 Cubic' ? 'w-auto h-[200px] relative top-5' : ''} 
                              ${sinotruck.title === 'Garbage Truck 5 Cubic' ? 'w-auto h-[200px] relative top-5' : ''}
                              ${sinotruck.title === 'HOWO FB Body' ? 'w-auto h-full relative top-1' : ''}
                              ${sinotruck.title === 'Manlift Truck 4x2' ? 'w-auto h-[200px] relative top-6' : ''}
                              ${sinotruck.title === 'Mixer Truck 4 Cubic' ? 'w-auto h-[200px] relative top-6' : ''}
                              ${sinotruck.title === 'Mixer Truck 6 Cubic' ? 'w-auto h-full relative top-6' : ''}
                              ${sinotruck.title === 'Oil Fuel Water Tanker 4 Cubic' ? 'w-auto h-full relative top-6' : ''}
                               ${sinotruck.title === 'Oil Fuel Water Tanker 10 Cubic' ? 'w-auto h-full relative top-2' : ''} 
                              object-cover w-full text-transparent`} 
                />
                {loading && (
                  <div className="flex flex-col items-center justify-center">
                    <Oval color="#818CF8"secondaryColor="#818CF8"height={40} width={40} />
                  </div>
                )}                
                </div>
              </div>
              <div className='absolute lg:inset-3 inset-2 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300'>
              <Link to={`/${sinotruck.link}#${sinotruck.link}`} className='z-10'>
                <button className="neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-4 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-md text-bold mb-4 my-2">
                  {sinotruck.description}              
                </button>
              </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
      <div className=' relative gap-2 z-10'>
        <div className="swiper-pagination-customsinotruck  flex justify-center "></div>
      </div>     
     <br />
     <br />
     <br />

     <span id=''></span>
     <hr  data-aos="fade-up" className="bg-zinc-100 w-full mb-16 border-0 h-2 rounded-md hr" />
      <img loading='lazy' src={forland} alt="Forland" className='mx-auto  lg:h-24 md:h-28 h-28 bg-zinc-300 rounded-lg mt-3' />
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        
        pagination={{ clickable: true, 
          el: '.swiper-pagination-customforland'
}}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        loop
        autoplay={{ delay: 5000 }}
        className="w-full z-10"
       >
        {Forland.map((forland) => (
          <SwiperSlide key={forland.id} >
            <div className="p-5 flex flex-col justify-between lg:h-[400px] ">
       
                <h2  id='Forland' className="lg:text-xl md:text-xl sm:text-sm font-bold text-indigo-500 text-center">{forland.title}</h2>
             
              <div className="flex flex-col items-center justify-center w-full">
                <div className="box-content h-[240px] w-[240px] p-10 border-4 rounded-md bg-zinc-800 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]">
                <img
                  loading="lazy"
                  src={forland.image}
                  alt={forland.name}
                  className={`${forland.title === 'Forland Cargo Truck 14Realft' ? 'w-auto h-auto relative top-10 object-cover' : ''} 
                              ${forland.title === 'Forland Cargo Truck 20ft' ? 'w-auto h-auto relative top-10 ' : ''} 
                              ${forland.title === 'Forland Dump Truck 6cbm' ? 'w-auto h-[200px] relative top-5' : ''} 
                              ${forland.title === 'Forland L7 Cargo Truck' ? 'w-auto h-full relative top-5' : ''} 
                              ${forland.title === 'Forland L3 Cargo truck' ? 'w-auto h-auto relative top-20' : ''}
                              ${forland.title === 'Forland L5' ? 'w-auto h-[180px] relative top-14' : ''}
                              ${forland.title === 'Forland M6' ? 'w-auto h-auto relative top-20' : ''}
                              ${forland.title === 'Forland T3 Cargo Truck' ? 'w-auto h-auto relative top-6' : ''}
                              ${forland.title === 'Forland T5 Cargo Truck' ? 'w-auto h-auto relative top-6' : ''}
                              ${forland.title === 'T5 Class 1' ? 'w-auto h-auto relative top-10' : ''}
                              ${forland.title === 'Forland T5 4x2 Dump Truck ' ? 'w-auto h-auto relative top-6' : ''} 
                              ${forland.title === 'Forland Cargo Truck 17ft' ? 'w-auto h-auto relative top-20' : ''} 
                              ${forland.title === 'Forland Dump Truck 3cbm' ? 'w-auto h-full relative top-10' : ''} 
                              object-cover w-full text-transparent`} 
                />
                {loading && (
                  <div className="flex flex-col items-center justify-center">
                    <Oval color="#818CF8"secondaryColor="#818CF8"height={40} width={40} />
                  </div>
                )}                
                </div>
              </div>
              <div className='absolute lg:inset-3 inset-2 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300'>
              <Link to={`/${forland.link}#${forland.link}`} className='z-10'>
                <button className="neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-4 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-md text-bold mb-4 my-2">
                  {forland.description}              
                </button>
              </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>     
      <div className=' relative gap-2 z-10 mb-10'>
        <div className="swiper-pagination-customforland  flex justify-center "></div>
      </div>
      </HelmetProvider>
    </div>
  )
}

export default Product