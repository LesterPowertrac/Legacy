import React, { useEffect, useState } from 'react';
import config from '../../../api/config';
import Modal2 from '../../../Components/Modal2';
import { Link, useLocation } from 'react-router-dom';
import Axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Modal from '../../../Components/Modal';
import axios from 'axios';


const Bulldozer = () => {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const getApiUrl = () => {
    if (window.location.hostname === 'localhost') {
      return config.api.local;
    } else {
      return config.api.remote;
    }
  };

  const apiUrl = getApiUrl();
  const productImages = {
    Bulldozer: `${apiUrl}/products/Bulldozer`,
  };

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

  const Weichai = [{ image: images.Bulldozer, name: 'Bulldozer', link: 'Bulldozer' }];

  // email functions here
  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
  
    try {
      await axios.post(`${apiUrl}/send-email`, formData);
      setSuccess('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
      setShowModal(true);
    }
  };

  return (
    <div id="Bulldozer" className="flex flex-col items-center justify-between overflow-hidden ">
      <HelmetProvider>
        <Helmet>
          <title>Product Descriptions | The Legacy</title>
          <meta name="description" content="Explore our extensive range of construction equipment, trucks, and machinery from top brands like Weichai, Powerquip, Shacman, Kingling Isuzu, Sinotruck, and Forland." />
        </Helmet>

        {Weichai.map((weichai) => (
  <div 
    className="flex flex-col items-center mb-8 lg:flex-row lg:items-start lg:justify-between w-9/12 lg:w-[1150px] md:w-auto mt-24" 
    key={weichai.name}
  >
    {/* Image Container */}
    <div 
      className="flex flex-col items-center box-content lg:h-[350px] h-[400px] lg:w-11/12 md:w-[350px] sm:w-[300px]  p-6 lg:p-10 border-4 lg:mx-0"
    >
      <img
        loading="lazy"
        src={weichai.image}
        alt={weichai.name}
        className="h-[700px] object-contain w-auto text-transparent relative lg:bottom-32  "
      />
      {loading && (
        <div className="flex flex-col items-center justify-center">
          <Oval color="#818CF8" secondaryColor="#FF8C00" height={40} width={40} />
        </div>
      )}
    </div>

    {/* Text Content */}
    <div 
      className="lg:w-11/12  w-full flex flex-col items-center lg:items-start justify-center lg:justify-start lg:p-8 p-4 "
    >
      <h1 className="text-4xl text-indigo-500">Bulldozer WSD320</h1>
      <br />
      <p className='text-white'>The Bulldozer WSD320 is a high-performance, heavy-duty machine designed for large-scale earthmoving and construction projects, offering robust power, durability, and advanced control features to handle the toughest terrains and tasks efficiently.</p>
      <br />
      <p className='text-white'>
        Engine Model: CUMMINS NTA855-C360S10
        <br />
        Gross Power: 257KW(350HP)@2000rpm
        <br />
        Operating Weight: 34500KG
      </p>     
      <br />
      <button className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
              onClick={() => setIsModalOpen(true)} 
      >
        Contact Our Sales
      </button>
      <br />
      <Link to={`/${weichai.link}#Specs`}>
        <button className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition">
          View Specs
        </button>
      </Link>
    </div>
  </div>
))}

    <div id='Specs' className='mt-12 relative bottom-32'></div>
        <div className=" bg-zinc-800  lg:max-w-6xl max-w-md max-h-lvh overflow-x-auto  mb-10 rounded-lg h-[30rem]">
   
        <div className='sticky left-0 bg-zinc-800 ' >
          <h1 className="text-4xl  text-white text-center p-5 w-full">TECHNICAL SPECIFICATIONS</h1>
        </div>

        <table className="border-collapse  w-full  text-white border border-zinc-700  mb-10 rounded-md "  >
          <tbody className="text-center">
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <th className="px-4 py-2  border-r" colSpan={2}>Engine</th>
              <th className="px-4 py-2  border-r" colSpan={2}>Drive System</th>
              <th className="px-4 py-2  border-r" colSpan={2}>Chassis System</th> 
              <th className="px-4 py-2  border-r" colSpan={2}>Volume</th>
              <th className="px-4 py-2  border-r" colSpan={2}>Operating Weight</th>
              <th className="px-4 py-2  border-r" colSpan={2}>Blade</th>
              <th className="px-4 py-2  border-r" colSpan={2}>Dimension</th>  
            </tr>
            <tr className='odd:bg-zinc-700 even:bg-zinc-800 '>
              <td className="px-4 py-2 ">Engine</td>{/** 1 */}
              <td className="px-4 py-2  border-r">Cummins NTA855-C360S10</td>{/** 2 */}
              <td className="px-4 py-2 ">Drive system</td>{/** 3 */}
              <td className="px-4 py-2  border-r"></td>{/** 4 */}
              <td className="px-4 py-2 ">Type</td>{/** 5 */}
              <td className="px-4 py-2  border-r">Swing type of sprayed beam, suspended structure of equalizer bar</td>{/** 6 */}
              <td className="px-4 py-2 ">Fuel capacity</td>{/** 7 */}
              <td className="px-4 py-2  border-r">640L</td>{/** 8 */}
              <td className="px-4 py-2 ">Operating weight (standard)</td>{/** 9 */}
              <td className="px-4 py-2  border-r">34500kg</td>{/** 10 */}
              <td className="px-4 py-2 ">Blade type</td>{/** 11 */}
              <td className="px-4 py-2  border-r">Straight-tilt/Angle/Semi-U</td>{/** 12 */}
              <td className="px-4 py-2 ">A Machine height (without ROPS)</td>{/** 13 */}
              <td className="px-4 py-2  border-r">3760mm</td>{/** 14 */}
            </tr>
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Drive system</td>{/** 1 */}
              <td className="px-4 py-2 border-r">Manufactured by SHANTUI, with high working efficiency, low breakdown rate; torqflow transmission, 3 gears forward and 3 gears backwards.</td>{/** 2 */}
              <td className="px-4 py-2 ">Traveling speed Forward & Backward</td>{/** 3 */}
              <td className="px-4 py-2 border-r">F1:3.6km/h & R1:4.4km/h</td>{/** 4 */}
              <td className="px-4 py-2 ">Track shoe type</td>{/** 5 */}
              <td className="px-4 py-2 border-r">Single grouser</td>{/** 6 */}
              <td className="px-4 py-2 ">Coolant liquid capacity</td>{/** 7 */}
              <td className="px-4 py-2 border-r">79L</td>{/** 8 */}
              <td className="px-4 py-2 "></td>{/** 9 */}
              <td className="px-4 py-2  border-r"></td>{/** 10 */}
              <td className="px-4 py-2 ">Blade capacity</td>{/** 11 */}
              <td className="px-4 py-2  border-r">7.2/4.8/9m³</td>{/** 12 */}
              <td className="px-4 py-2 ">B Track grouser height</td>{/** 13 */}
              <td className="px-4 py-2  border-r">72mm</td>{/** 14 */}
            </tr>
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Gross power</td>{/** 1 */}
              <td className="px-4 py-2 border-r">257kW(350hp)@2000rpm</td>{/** 2 */}
              <td className="px-4 py-2 ">Max. theoretical traction force</td>{/** 3 */}
              <td className="px-4 py-2 border-r">318.2kN</td>{/** 4 */}
              <td className="px-4 py-2 ">Track gauge</td>{/** 5 */}
              <td className="px-4 py-2 border-r">2140mm</td>{/** 6 */}
              <td className="px-4 py-2 ">Engine oil capacity</td>{/** 7 */}
              <td className="px-4 py-2 border-r">45L</td>{/** 8 */}
              <td className="px-4 py-2 "></td>{/** 9 */}
              <td className="px-4 py-2  border-r"></td>{/** 10 */}
              <td className="px-4 py-2 "></td>{/** 11 */}
              <td className="px-4 py-2  border-r"></td>{/** 12 */}
              <td className="px-4 py-2 ">C Ground clearance</td>{/** 13 */}
              <td className="px-4 py-2  border-r">500mm</td>{/** 14 */}
            </tr>
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Net power</td>{/** 1 */}
              <td className="px-4 py-2 border-r">235kW(320hp)@2000rpm</td>{/** 2 */}
              <td className="px-4 py-2 ">Torque converter</td>{/** 3 */}
              <td className="px-4 py-2 border-r">3-element, single stage, 1-phase</td>{/** 4 */}
              <td className="px-4 py-2 ">Width of track shoe</td>{/** 5 */}
              <td className="px-4 py-2 border-r">560/610/660/710mm</td>{/** 6 */}
              <td className="px-4 py-2 ">Hydraulic oil tank</td>{/** 7 */}
              <td className="px-4 py-2 border-r">97L</td>{/** 8 */}
              <td className="px-4 py-2 "></td>{/** 9 */}
              <td className="px-4 py-2  border-r"></td>{/** 10 */}
              <td className="px-4 py-2 "></td>{/** 11 */}
              <td className="px-4 py-2  border-r"></td>{/** 12 */}
              <td className="px-4 py-2 ">D Machine length (without draw bar)</td>{/** 13 */}
              <td className="px-4 py-2  border-r">6276mm</td>{/** 14 */}
            </tr>
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Number of cylinder bore×stroke</td>{/** 1 */}
              <td className="px-4 py-2 border-r">6-140X152mm</td>{/** 2 */}
              <td className="px-4 py-2 ">Transmission</td>{/** 3 */}
              <td className="px-4 py-2 border-r">Planetary gear and torqflow transmission hydraulically actuated, forced lubrication</td>{/** 4 */}
              <td className="px-4 py-2 ">Track grounding length</td>{/** 5 */}
              <td className="px-4 py-2 border-r">3150mm</td>{/** 6 */}
              <td className="px-4 py-2 ">Transmission</td>{/** 7 */}
              <td className="px-4 py-2 border-r">185L</td>{/** 8 */}
              <td className="px-4 py-2 "></td>{/** 9 */}
              <td className="px-4 py-2  border-r"></td>{/** 10 */}
              <td className="px-4 py-2 "></td>{/** 11 */}
              <td className="px-4 py-2  border-r"></td>{/** 12 */}
              <td className="px-4 py-2 ">E Machine length (with draw bar)</td>{/** 13 */}
              <td className="px-4 py-2  border-r">6610mm</td>{/** 14 */}
            </tr>
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Displacement</td>{/** 1 */}
              <td className="px-4 py-2 border-r">14.01L</td>{/** 2 */}
              <td className="px-4 py-2 ">Central drive</td>{/** 3 */}
              <td className="px-4 py-2 border-r">Spiral bevel gear, single-stage speed reduction, splash lubrication</td>{/** 4 */}
              <td className="px-4 py-2 ">Track grounding length</td>{/** 5 */}
              <td className="px-4 py-2 border-r">3150mm</td>{/** 6 */}
              <td className="px-4 py-2 ">Final drive</td>{/** 7 */}
              <td className="px-4 py-2 border-r">55L/side</td>{/** 8 */}
              <td className="px-4 py-2 "></td>{/** 9 */}
              <td className="px-4 py-2  border-r"></td>{/** 10 */}
              <td className="px-4 py-2 "></td>{/** 11 */}
              <td className="px-4 py-2  border-r"></td>{/** 12 */}
              <td className="px-4 py-2 ">F Max. lifting height of blade</td>{/** 13 */}
              <td className="px-4 py-2  border-r">1560/1703/1560mm</td>{/** 14 */}
            </tr>
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Max. torque</td>{/** 1 */}
              <td className="px-4 py-2 border-r">1509N.m@1400rpm</td>{/** 2 */}
              <td className="px-4 py-2 ">Steering clutch</td>{/** 3 */}
              <td className="px-4 py-2 border-r">Wet multiple disc, disc spring loaded, hydraulically actuated, hand operated, interconnected with steering brake.</td>{/** 4 */}
              <td className="px-4 py-2 ">Track grounding area</td>{/** 5 */}
              <td className="px-4 py-2 border-r">35280/38430/41580/44730cm² </td>{/** 6 */}
              <td className="px-4 py-2 "></td>{/** 7 */}
              <td className="px-4 py-2 border-r"></td>{/** 8 */}
              <td className="px-4 py-2 "></td>{/** 9 */}
              <td className="px-4 py-2  border-r"></td>{/** 10 */}
              <td className="px-4 py-2 "></td>{/** 11 */}
              <td className="px-4 py-2  border-r"></td>{/** 12 */}
              <td className="px-4 py-2 ">G Max. digging depth of blade</td>{/** 13 */}
              <td className="px-4 py-2  border-r">560/630/560mm</td>{/** 14 */}
            </tr>
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Cooling system</td>{/** 1 */}
              <td className="px-4 py-2 border-r">Mechanic fan</td>{/** 2 */}
              <td className="px-4 py-2 ">Brake clutch</td>{/** 3 */}
              <td className="px-4 py-2 border-r">Wet, contracting band, foot operated with hydraulic booster</td>{/** 4 */}
              <td className="px-4 py-2 ">Number of track shoe</td>{/** 5 */}
              <td className="px-4 py-2 border-r">41 pcs/side</td>{/** 6 */}
              <td className="px-4 py-2 "></td>{/** 7 */}
              <td className="px-4 py-2 border-r"></td>{/** 8 */}
              <td className="px-4 py-2 "></td>{/** 9 */}
              <td className="px-4 py-2  border-r"></td>{/** 10 */}
              <td className="px-4 py-2 "></td>{/** 11 */}
              <td className="px-4 py-2  border-r"></td>{/** 12 */}
              <td className="px-4 py-2 ">H Digging angle of blade</td>{/** 13 */}
              <td className="px-4 py-2  border-r">55°±3°(deg.)</td>{/** 14 */}
            </tr>
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Emission</td>{/** 1 */}
              <td className="px-4 py-2 border-r">China-I</td>{/** 2 */}
              <td className="px-4 py-2 ">Final drive</td>{/** 3 */}
              <td className="px-4 py-2 border-r">Spur gear, double reduction, splash lubrication</td>{/** 4 */}
              <td className="px-4 py-2 ">Grounding pressure(standard configuration)</td>{/** 5 */}
              <td className="px-4 py-2 border-r">81.7kPa</td>{/** 6 */}
              <td className="px-4 py-2 "></td>{/** 7 */}
              <td className="px-4 py-2 border-r"></td>{/** 8 */}
              <td className="px-4 py-2 "></td>{/** 9 */}
              <td className="px-4 py-2  border-r"></td>{/** 10 */}
              <td className="px-4 py-2 "></td>{/** 11 */}
              <td className="px-4 py-2  border-r"></td>{/** 12 */}
              <td className="px-4 py-2 ">I Blade width</td>{/** 13 */}
              <td className="px-4 py-2  border-r">4130/5000/4130mm</td>{/** 14 */}
            </tr>
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 "></td>{/** 1 */}
              <td className="px-4 py-2 border-r"></td>{/** 2 */}
              <td className="px-4 py-2 "></td>{/** 3 */}
              <td className="px-4 py-2 border-r"></td>{/** 4 */}
              <td className="px-4 py-2 ">Number of carrier roller</td>{/** 5 */}
              <td className="px-4 py-2 border-r">2 pcs/side</td>{/** 6 */}
              <td className="px-4 py-2 "></td>{/** 7 */}
              <td className="px-4 py-2 border-r"></td>{/** 8 */}
              <td className="px-4 py-2 "></td>{/** 9 */}
              <td className="px-4 py-2  border-r"></td>{/** 10 */}
              <td className="px-4 py-2 "></td>{/** 11 */}
              <td className="px-4 py-2  border-r"></td>{/** 12 */}
              <td className="px-4 py-2 ">J Blade height</td>{/** 13 */}
              <td className="px-4 py-2  border-r">1590/1140/1710mm</td>{/** 14 */}
            </tr>
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 "></td>{/** 1 */}
              <td className="px-4 py-2 border-r"></td>{/** 2 */}
              <td className="px-4 py-2 "></td>{/** 3 */}
              <td className="px-4 py-2 border-r"></td>{/** 4 */}
              <td className="px-4 py-2 ">Number of track roller</td>{/** 5 */}
              <td className="px-4 py-2 border-r">7pcs/side</td>{/** 6 */}
              <td className="px-4 py-2 "></td>{/** 7 */}
              <td className="px-4 py-2 border-r"></td>{/** 8 */}
              <td className="px-4 py-2 "></td>{/** 9 */}
              <td className="px-4 py-2  border-r"></td>{/** 10 */}
              <td className="px-4 py-2 "></td>{/** 11 */}
              <td className="px-4 py-2  border-r"></td>{/** 12 */}
              <td className="px-4 py-2 ">OWidth from end of left track shoe to end of right track shoe (standard)</td>{/** 13 */}
              <td className="px-4 py-2  border-r">2700mm</td>{/** 14 */}
            </tr>
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 "></td>{/** 1 */}
              <td className="px-4 py-2 border-r"></td>{/** 2 */}
              <td className="px-4 py-2 "></td>{/** 3 */}
              <td className="px-4 py-2 border-r"></td>{/** 4 */}
              <td className="px-4 py-2 ">Pitch</td>{/** 5 */}
              <td className="px-4 py-2 border-r">228.6mm</td>{/** 6 */}
              <td className="px-4 py-2 "></td>{/** 7 */}
              <td className="px-4 py-2 border-r"></td>{/** 8 */}
              <td className="px-4 py-2 "></td>{/** 9 */}
              <td className="px-4 py-2  border-r"></td>{/** 10 */}
              <td className="px-4 py-2 "></td>{/** 11 */}
              <td className="px-4 py-2  border-r"></td>{/** 12 */}
              <td className="px-4 py-2 "></td>{/** 13 */}
              <td className="px-4 py-2  border-r"></td>{/** 14 */}
            </tr>
          </tbody>
        </table>
        </div>

        <Modal2 
    isOpen={isModalOpen} 
    onClose={() => setIsModalOpen(false)} 
    title="Contact Us"
>
  <div className="p-4 lg:p-8 flex flex-col items-center justify-center w-full max-h-full ">
    <form 
      
      className="flex flex-col gap-4 w-full max-w-xl" 
      onSubmit={handleSubmit}
    >
      {/* Input Group 1 */}
      <div className="flex flex-col lg:flex-row gap-4">
        <input 
          className="w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-md text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          type="text" 
          name="firstName"
          placeholder="First Name" 
          value={formData.firstName} 
          onChange={handleChange}
          autoComplete='given-name'
        />
        <input 
          className="w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-md text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          type="text" 
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          autoComplete='given-name'
        />
      </div>

      {/* Input Group 2 */}
      <div className="flex flex-col lg:flex-row gap-4">
        <input 
          className="w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-md text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          type="email" 
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          autoComplete='email'
        />
        <input 
          className="w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-md text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          type="tel" 
          name="phone"  
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          autoComplete='tel'
        />
      </div>

      {/* Textarea */}
      <textarea 
        className="w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-md text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600" 
        name="message" 
        rows="4" 
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        autoComplete='off'
      >
      </textarea>

      {/* Submit Button */}
      <button  
        className="shadow-lg hover:shadow-indigo-800/50 hover:bg-zinc-900 rounded-lg py-3 lg:py-4 px-4 lg:px-8 uppercase relative overflow-hidden text-white border-2 border-indigo-800 bg-indigo-800 b_glow text-sm lg:text-md font-bold"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      {showModal && (
                  <Modal
                    
                    success={success}
                    error={error}
                    onClose={() => setShowModal(false)} // Close the modal when clicked
                  />
                )}
    </form>
  </div>
</Modal2>



      </HelmetProvider>
    </div>
  );
};

export default Bulldozer;
