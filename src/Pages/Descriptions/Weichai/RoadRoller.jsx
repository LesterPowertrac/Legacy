import React, { useEffect, useState } from 'react';
import config from '../../../api/config';
import Modal2 from '../../../Components/Modal2';
import { Link, useLocation } from 'react-router-dom';
import Axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Modal from '../../../Components/Modal';
import axios from 'axios';


const RoadRoller = () => {
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
    RoadRoller: `${apiUrl}/products/RoadRoller`,
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


  const Weichai = [{ image: images.RoadRoller, name: 'RoadRoller', link: 'RoadRoller' }];

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
    <div id="RoadRoller" className="flex flex-col items-center justify-between overflow-hidden h-full ">
      <HelmetProvider>
        <Helmet>
          <title>Product Descriptions | The Legacy</title>
          <meta name="description" content="Explore our extensive range of construction equipment, trucks, and machinery from top brands like Weichai, Powerquip, Shacman, Kingling Isuzu, Sinotruck, and Forland." />
        </Helmet>

        {Weichai.map((weichai) => (
  <div 
    className="flex flex-col items-center mb-20 lg:flex-row lg:items-start lg:justify-between w-9/12 lg:w-[1150px] md:w-auto mt-24" 
    key={weichai.name}
  >
    {/* Image Container */}
    <div 
      className="flex flex-col items-center box-content lg:h-[350px] h-[350px] lg:w-11/12 md:w-[350px] sm:w-[300px]  p-6 lg:p-10 border-4 lg:mx-0"
    >
      <img
        loading="lazy"
        src={weichai.image}
        alt={weichai.name}
        className=" object-contain w-auto text-transparent relative lg:bottom-64 bottom-32  "
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
      <h1 className="text-4xl text-indigo-500">Road-Roller WR22H-C6</h1>
      <br />
      <p className='text-white'>The Weichai Road-Roller WR22H-C6 is a robust and efficient machine designed for optimal compaction performance, featuring advanced hydraulics, durable construction, and exceptional maneuverability to tackle heavy-duty roadwork with ease.</p>
      <br />
      <p className='text-white'>
        Engine Model: Weichai WP6
        <br />
        Gross Power: 147kW
        <br />
        Operating Weight: 22,000kg
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
      <div id='Specs' className='mt-5 relative bottom-32'></div>
        <div className=" bg-zinc-800  lg:max-w-6xl max-w-md max-h-lvh overflow-x-auto  mb-10 rounded-lg h-[30rem]">
   
        <div className='sticky left-0 bg-zinc-800 ' >
          <h1 className="text-4xl  text-white text-center p-5 w-full">TECHNICAL SPECIFICATIONS</h1>
        </div>

        <table className="border-colapse  w-full  text-white border border-zinc-700  mb-10 rounded-md "  >

          <tbody className="text-center">
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <th className="px-4 py-2  border-r " colSpan={2}>Engine</th>
              <th className="px-4 py-2  border-r" colSpan={2}>Power Train</th>
              <th className="px-4 py-2  border-r" colSpan={2}>Steering</th> 
              <th className="px-4 py-2  border-r" colSpan={2}>Brakes</th> 

              <th className="px-4 py-2 ">Drum</th> 
              <th className="px-4 py-2 " >Smooth Drum</th> 
              <th className="px-4 py-2  border-r" >Padfoot Drum</th> 
             
              <th className="px-4 py-2  ">Vibration</th> 
              <th className="px-4 py-2 " >Smooth Drum</th> 
              <th className="px-4 py-2  border-r" >Padfoot Drum</th>    

              <th className="px-4 py-2  border-r" colSpan={2}>Capacities</th>  
              <th className="px-4 py-2  border-r" colSpan={2}>Electrical System</th>   

              <th className="px-4 py-2  " >Weight</th> 
              <th className="px-4 py-2 " >Smooth Drum</th> 
              <th className="px-4 py-2  border-r" >Padfoot Drum</th> 

    

            </tr>
            <tr  className='odd:bg-zinc-700 even:bg-zinc-800 '>
              <td className="px-4 py-2 ">Model</td>
              <td className="px-4 py-2  border-r">Weichai Wp6</td>
              
              <td className="px-4 py-2 ">Type</td>           
              <td className="px-4 py-2  border-r">Hydrostatic, Rear Wheel Drive</td>

              <td className="px-4 py-2 ">Type</td>
              <td className="px-4 py-2  border-r">Hydraulic Power, Articulated Steering</td>

              <td className="px-4 py-2 ">Service Brake</td>
              <td className="px-4 py-2  border-r">Hydraulic Type</td>

              <td className="px-4 py-2 ">Width</td>
              <td className="px-4 py-2  ">2140mm</td>
              <td className="px-4 py-2 border-r">2140mm</td>

              <td className="px-4 py-2 ">Type</td>
              <td className="px-4 py-2 ">Hydrostatic, Electric Control</td>
              <td className="px-4 py-2 border-r">-</td>

              <td className="px-4 py-2 ">Fuel Tank</td>
              <td className="px-4 py-2 border-r">330L</td>

              <td className="px-4 py-2 ">Battery</td>
              <td className="px-4 py-2  border-r">2x12V, 95Ah</td>

              <td className="px-4 py-2 ">Operating Weight</td>
              <td className="px-4 py-2 ">22000kg</td>
              <td className="px-4 py-2 border-r">23141kg</td>


            </tr>
            <tr  className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Number of Cylinders</td>
              <td className="px-4 py-2 border-r">6</td>

              <td className="px-4 py-2 ">Driving Pump</td>
              <td className="px-4 py-2 border-r">Variable Piston Pump</td>

              <td className="px-4 py-2 ">Steering Angle</td>
              <td className="px-4 py-2 border-r">±30°</td>

              <td className="px-4 py-2 ">Parking Breake</td>
              <td className="px-4 py-2 border-r">Hydraulic Type</td>

              <td className="px-4 py-2 ">Diameter</td>
              <td className="px-4 py-2 ">1550mm</td>
              <td className="px-4 py-2 border-r">1750mm</td>

              <td className="px-4 py-2 ">Vibration Pump</td>
              <td className="px-4 py-2 ">Variable Piston Pump</td>
              <td className="px-4 py-2 border-r">-</td>

              <td className="px-4 py-2 ">Hydraulic Oil Tank</td>
              <td className="px-4 py-2 border-r">100L</td>

              <td className="px-4 py-2 ">Alternator</td>
              <td className="px-4 py-2  border-r">28V, 80A</td>

              <td className="px-4 py-2 ">Axle Load, Drum</td>
              <td className="px-4 py-2 ">11000kg</td>
              <td className="px-4 py-2 border-r">12141kg</td>

            </tr>
            <tr  className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Type</td>
              <td className="px-4 py-2 border-r">Inline, 4-stroke, air-cooled</td>

              <td className="px-4 py-2 ">Axle Drive</td>
              <td className="px-4 py-2 border-r">Variable Piston Motor</td>

              <td className="px-4 py-2 ">Oscillating Angle</td>
              <td className="px-4 py-2 border-r">±10°</td>

              <td className="px-4 py-2 ">Emergency Brake</td>
              <td className="px-4 py-2 border-r">Hydraulic Type</td>

              <td className="px-4 py-2 ">Drum Shell Thickness</td>
              <td className="px-4 py-2 ">40mm</td>
              <td className="px-4 py-2 border-r">40mm</td>
              
              <td className="px-4 py-2 ">Vibration Motor</td>
              <td className="px-4 py-2 ">Constant Piston Motor</td>
              <td className="px-4 py-2 border-r">-</td>

              <td className="px-4 py-2 ">Engine Coolant</td>
              <td className="px-4 py-2 border-r">22L</td>

              <td className="px-4 py-2 ">Started Motor</td>
              <td className="px-4 py-2  border-r">24V, 6kW</td>

              <td className="px-4 py-2 ">Axle Load, Wheel</td>
              <td className="px-4 py-2 ">11000kg</td>
              <td className="px-4 py-2 border-r">11000kg</td>


            </tr>
            <tr  className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Aspiration</td>
              <td className="px-4 py-2 border-r">Turbocharged</td>

              <td className="px-4 py-2 ">Tire</td>
              <td className="px-4 py-2 border-r">20.5-25-16PR/23.1-26-12PR</td>

              <td className="px-4 py-2 ">Min. Turning Radius</td>
              <td className="px-4 py-2 border-r">6400mm</td>
            

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 ">Number Shell Thickness</td>
              <td className="px-4 py-2 ">40mm</td>
              <td className="px-4 py-2 border-r">40mm</td>

              <td className="px-4 py-2 ">Frequency, Low</td>
              <td className="px-4 py-2 ">33Hz</td>
              <td className="px-4 py-2 border-r">33Hz</td>

              <td className="px-4 py-2 ">Engine Crank Case</td>
              <td className="px-4 py-2 border-r">16L</td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2  border-r"></td>

              <td className="px-4 py-2 ">Static Linear Load(atDrum)</td>
              <td className="px-4 py-2 ">490N/cm</td>
              <td className="px-4 py-2 border-r">567N/cm</td>

            </tr>
            <tr  className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Bore x Stroke</td>
              <td className="px-4 py-2 border-r">105*130mm</td>

              <td className="px-4 py-2 ">Max. Grade Ability</td>
              <td className="px-4 py-2 border-r">30%</td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 ">Frequency, High</td>
              <td className="px-4 py-2 ">28Hz</td>
              <td className="px-4 py-2 border-r">28Hz</td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2  border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

            </tr>
            <tr  className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Displacement</td>
              <td className="px-4 py-2 border-r">6.75L</td>

              <td className="px-4 py-2 ">Forward,I,II</td>
              <td className="px-4 py-2 border-r">0-5.6km/h,0-10km/h</td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>
            
              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 ">Amplitude, High</td>
              <td className="px-4 py-2 ">2.0mm</td>
              <td className="px-4 py-2 border-r">1.7mm</td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2  border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

 
            </tr>
            <tr  className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Gross Power</td>
              <td className="px-4 py-2 border-r">147kW</td>

              <td className="px-4 py-2 ">Reverse,I,II</td>
              <td className="px-4 py-2 border-r">0-5.6km/h,0-10km/h</td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 ">Amplitude, Low</td>
              <td className="px-4 py-2 ">1.0mm</td>
              <td className="px-4 py-2 border-r">0.85mm</td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2  border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

    
            </tr>
            <tr  className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Max. Torque</td>
              <td className="px-4 py-2 border-r">860N.m/1400-1600r/min</td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 ">Centrifugal Force, Maximum</td>
              <td className="px-4 py-2 ">410kN</td>
              <td className="px-4 py-2 border-r">410kN</td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2  border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

            </tr>
            <tr  className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Rated Fuel Consumption</td>
              <td className="px-4 py-2 border-r">215g/kW.h</td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>
              
              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 ">Centrifugal Force, Maximum</td>
              <td className="px-4 py-2 ">300kN</td>
              <td className="px-4 py-2 border-r">300kN</td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2  border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>


            </tr>
            <tr  className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Emission</td>
              <td className="px-4 py-2 border-r">China-III</td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2  border-r"></td>

              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 "></td>
              <td className="px-4 py-2 border-r"></td>

            </tr>
            
          </tbody>
        </table>
        </div>
  
        <Modal2 
    isOpen={isModalOpen} 
    onClose={() => setIsModalOpen(false)} 
    title="Contact Us"
>
  <div className="p-4 lg:p-8 flex flex-col items-center justify-center w-full h-full">
    <form 
      
      className="flex flex-col gap-4 w-full max-w-xl " 
      onSubmit={handleSubmit}
    >
      {/* Input Group 1 */}
      <div className="flex flex-col lg:flex-row gap-4">
        <input 
          className="w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          type="text" 
          name="firstName"
          placeholder="First Name" 
          value={formData.firstName} 
          onChange={handleChange}
          autoComplete='given-name'
        />
        <input 
          className="w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
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
          className="w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          type="email" 
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          autoComplete='email'
        />
        <input 
          className="w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
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
        className="w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600" 
        name="message" 
        rows="6" 
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        autoComplete='off'
      >
      </textarea>

      {/* Submit Button */}
      <button  
        className="shadow-lg hover:shadow-indigo-800/50 hover:bg-zinc-900 rounded-lg py-3 lg:py-4 px-4 lg:px-8 uppercase relative overflow-hidden text-white border-2 border-indigo-800 bg-indigo-800 b_glow text-sm lg:text-lg font-bold"
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

export default RoadRoller;
