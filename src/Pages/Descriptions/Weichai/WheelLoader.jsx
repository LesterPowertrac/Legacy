import React, { useEffect, useState } from 'react';
import config from '../../../api/config';
import Modal2 from '../../../Components/Modal2';
import { Link, useLocation } from 'react-router-dom';
import Axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Modal from '../../../Components/Modal';
import axios from 'axios';


const WheelLoader = () => {
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
    WheelLoader: `${apiUrl}/products/WheelLoader`,
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


  const Weichai = [{ image: images.WheelLoader, name: 'WheelLoader', link: 'WheelLoader' }];

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
    <div id="WheelLoader" className="flex flex-col items-center justify-between overflow-hidden h-full">
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
      className="flex flex-col items-center box-content lg:h-[350px] h-[300px] lg:w-11/12 md:w-[350px] sm:w-[300px]  p-6 lg:p-10 border-4 lg:mx-0"
    >
      <img
        loading="lazy"
        src={weichai.image}
        alt={weichai.name}
        className="object-contain w-auto text-transparent relative lg:bottom-0 -bottom-12"
      />
      {loading && (
        <div className="flex flex-col items-center justify-center">
          <Oval color="#818CF8"secondaryColor="#818CF8" height={40} width={40} />
        </div>
      )}
    </div>

    {/* Text Content */}
    <div 
      className="lg:w-11/12  w-full flex flex-col items-center lg:items-start justify-center lg:justify-start lg:p-8 p-4 "
    >
      <h1 className="text-4xl text-indigo-500">WheelLoader WL880K-HST</h1>
      <br />
      <p className='text-white'>The Wheel Loader WL880K-HST is a high-performance machine designed for heavy-duty tasks, featuring advanced hydraulic systems, powerful lifting capabilities, and exceptional stability, making it ideal for construction, mining, and other demanding applications.</p>
      <br />
      <p className='text-white'>
        Engine Model: WP10HG270E471
        <br />
        Rated Power: 199kW
        <br />
        Operating Weight: 25000kg
        <br />
        Bucket Capacity: 5.2m³
        <br />
        Max. Breakout Force: 208kN
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
          <table className="border-colapse  w-full  text-white border border-zinc-700  mb-10 rounded-md "  >
            <tbody className="text-center">
              <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
                <th className="px-4 py-2  border-r" colSpan={2}>Item</th>
                <th className="px-4 py-2  border-r" colSpan={2}>Engine</th>
                <th className="px-4 py-2  border-r" colSpan={2}>Transmission System</th> 
                <th className="px-4 py-2  border-r" colSpan={2}>Front and Rear Axles</th> 

                <th className="px-4 py-2  border-r" colSpan={2}>Tyre</th> 
              
                <th className="px-4 py-2  border-r" colSpan={2}>Steering System</th>    

                <th className="px-4 py-2  border-r" colSpan={2}>Hydraulic System</th>  
              </tr>

              <tr className='odd:bg-zinc-700 even:bg-zinc-800 '>
                <td className="px-4 py-2 ">Rated Load</td> {/** 1 */}
                <td className="px-4 py-2  border-r">8000kg</td> {/** 2 */}

                <td className="px-4 py-2 ">Emission Standard</td> {/** 3 */}
                <td className="px-4 py-2  border-r">Stage IIII</td> {/** 4 */}

                <td className="px-4 py-2 ">Transmission</td> {/** 5 */}
                <td className="px-4 py-2  border-r">HST</td> {/** 6 */}

                <td className="px-4 py-2 ">Axles Type</td> {/** 7 */}
                <td className="px-4 py-2  border-r">Dry axles</td> {/** 8 */}

                <td className="px-4 py-2 ">Tyre Size</td> {/** 9 */}
                <td className="px-4 py-2  border-r">26.5R25</td> {/** 10 */}

                <td className="px-4 py-2 ">Type</td> {/** 11 */}
                <td className="px-4 py-2  border-r">Fix&Variable hydraulic system</td> {/** 12 */}

                <td className="px-4 py-2 ">Working Pressure</td> {/** 13 */}
                <td className="px-4 py-2  border-r">25MPa</td> {/** 14 */}
              </tr>

              <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
                <td className="px-4 py-2 ">Max. Traction Force</td> {/** 1 */}
                <td className="px-4 py-2 border-r">189kN</td> {/** 2 */}

                <td className="px-4 py-2 ">Number of Cylinder-Bore/Stroke</td> {/** 3 */}
                <td className="px-4 py-2 border-r">6-116x150</td> {/** 4 */}

                <td className="px-4 py-2 ">Gear Shift</td> {/** 5 */}
                <td className="px-4 py-2 border-r">3 forward, 3 reverse</td> {/** 6 */}

                <td className="px-4 py-2 ">Final Decelerate Type</td> {/** 7 */}
                <td className="px-4 py-2 border-r">PPlanetary reducer, spur cylindrical gear</td> {/** 8 */}

                <td className="px-4 py-2 ">Ply</td> {/** 9 */}
                <td className="px-4 py-2  border-r">★★</td> {/** 10 */}

                <td className="px-4 py-2 ">Steering Angle Each Direction</td> {/** 11 */}
                <td className="px-4 py-2  border-r">37º</td> {/** 12 */}

                <td className="px-4 py-2 ">Boom Lifting Time</td> {/** 13 */}
                <td className="px-4 py-2  border-r">5.4s</td> {/** 14 */}
              </tr>

              <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
                <td className="px-4 py-2 ">Max. Gradeability</td> {/** 1 */}
                <td className="px-4 py-2 border-r">30°</td> {/** 2 */}

                <td className="px-4 py-2 ">Max. Torque</td> {/** 3 */}
                <td className="px-4 py-2 border-r">1200N·m</td> {/** 4 */}

                <td className="px-4 py-2 ">Max. Speed</td> {/** 5 */}
                <td className="px-4 py-2 border-r">36km/h</td> {/** 6 */}

                <td className="px-4 py-2 "></td> {/** 7 */}
                <td className="px-4 py-2 border-r"></td> {/** 8 */}

                <td className="px-4 py-2 ">Front Tyre Pressure</td> {/** 9 */}
                <td className="px-4 py-2  border-r">0.60-0.65MPa</td> {/** 10 */}

                <td className="px-4 py-2 ">Min. Turning Radius</td> {/** 11 */}
                <td className="px-4 py-2  border-r">7720mm</td> {/** 12 */}

                <td className="px-4 py-2 ">Total Cycle Time</td> {/** 13 */}
                <td className="px-4 py-2  border-r">9.7s</td> {/** 14 */}
              </tr>

              <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
                <td className="px-4 py-2 ">Max. Dump Clearance</td> {/** 1 */}
                <td className="px-4 py-2 border-r">3450mm</td> {/** 2 */}

                <td className="px-4 py-2 ">Rated Speed</td> {/** 3 */}
                <td className="px-4 py-2 border-r">2200rpm</td> {/** 4 */}

                <td className="px-4 py-2 "></td> {/** 5 */}
                <td className="px-4 py-2 border-r"></td> {/** 6 */}

                <td className="px-4 py-2 "></td> {/** 7 */}
                <td className="px-4 py-2 border-r"></td> {/** 8 */}

                <td className="px-4 py-2 ">Rear Tyre Pressure</td> {/** 9 */}
                <td className="px-4 py-2  border-r">0.55-0.6MPa</td> {/** 10 */}

                <td className="px-4 py-2 "></td> {/** 11 */}
                <td className="px-4 py-2  border-r"></td> {/** 12 */}

                <td className="px-4 py-2 "></td> {/** 13 */}
                <td className="px-4 py-2  border-r"></td> {/** 14 */}
              </tr>

              <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
                <td className="px-4 py-2 ">Dump Reach</td> {/** 1 */}
                <td className="px-4 py-2 border-r">1250mm</td> {/** 2 */}

                <td className="px-4 py-2 ">Displacement</td> {/** 3 */}
                <td className="px-4 py-2 border-r">9.5L</td> {/** 4 */}

                <td className="px-4 py-2 "></td> {/** 5 */}
                <td className="px-4 py-2 border-r"></td> {/** 6 */}

                <td className="px-4 py-2 "></td> {/** 7 */}
                <td className="px-4 py-2 border-r"></td> {/** 8 */}

                <td className="px-4 py-2 "></td> {/** 9 */}
                <td className="px-4 py-2  border-r"></td> {/** 10 */}

                <td className="px-4 py-2 "></td> {/** 11 */}
                <td className="px-4 py-2  border-r"></td> {/** 12 */}

                <td className="px-4 py-2 "></td> {/** 13 */}
                <td className="px-4 py-2  border-r"></td> {/** 14 */}
              </tr>

              <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
                <td className="px-4 py-2 ">Wheel Tread</td> {/** 1 */}
                <td className="px-4 py-2 border-r">2320mm</td> {/** 2 */}

                <td className="px-4 py-2 "></td> {/** 3 */}
                <td className="px-4 py-2 border-r"></td> {/** 4 */}

                <td className="px-4 py-2 "></td> {/** 5 */}
                <td className="px-4 py-2 border-r"></td> {/** 6 */}

                <td className="px-4 py-2 "></td> {/** 7 */}
                <td className="px-4 py-2 border-r"></td> {/** 8 */}

                <td className="px-4 py-2 "></td> {/** 9 */}
                <td className="px-4 py-2  border-r"></td> {/** 10 */}

                <td className="px-4 py-2 "></td> {/** 11 */}
                <td className="px-4 py-2  border-r"></td> {/** 12 */}

                <td className="px-4 py-2 "></td> {/** 13 */}
                <td className="px-4 py-2  border-r"></td> {/** 14 */}
              </tr>

              <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
                <td className="px-4 py-2 ">Wheelbase</td> {/** 1 */}
                <td className="px-4 py-2 border-r">3550mm</td> {/** 2 */}

                <td className="px-4 py-2 "></td> {/** 3 */}
                <td className="px-4 py-2 border-r"></td> {/** 4 */}

                <td className="px-4 py-2 "></td> {/** 5 */}
                <td className="px-4 py-2 border-r"></td> {/** 6 */}

                <td className="px-4 py-2 "></td> {/** 7 */}
                <td className="px-4 py-2 border-r"></td> {/** 8 */}

                <td className="px-4 py-2 "></td> {/** 9 */}
                <td className="px-4 py-2  border-r"></td> {/** 10 */}

                <td className="px-4 py-2 "></td> {/** 11 */}
                <td className="px-4 py-2  border-r"></td> {/** 12 */}

                <td className="px-4 py-2 "></td> {/** 13 */}
                <td className="px-4 py-2  border-r"></td> {/** 14 */}
              </tr>
              
              <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
                <td className="px-4 py-2 ">Overall Dimension（L×W×H）</td> {/** 1 */}
                <td className="px-4 py-2 border-r">9250mmx3240mmx3540mm</td> {/** 2 */}

                <td className="px-4 py-2 "></td> {/** 3 */}
                <td className="px-4 py-2 border-r"></td> {/** 4 */}

                <td className="px-4 py-2 "></td> {/** 5 */}
                <td className="px-4 py-2 border-r"></td> {/** 6 */}

                <td className="px-4 py-2 "></td> {/** 7 */}
                <td className="px-4 py-2 border-r"></td> {/** 8 */}

                <td className="px-4 py-2 "></td> {/** 9 */}
                <td className="px-4 py-2  border-r"></td> {/** 10 */}

                <td className="px-4 py-2 "></td> {/** 11 */}
                <td className="px-4 py-2  border-r"></td> {/** 12 */}

                <td className="px-4 py-2 "></td> {/** 13 */}
                <td className="px-4 py-2  border-r"></td> {/** 14 */}
              </tr>

              <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
                <td className="px-4 py-2 "></td> {/** 1 */}
                <td className="px-4 py-2 border-r"></td> {/** 2 */}

                <td className="px-4 py-2 "></td> {/** 3 */}
                <td className="px-4 py-2 border-r"></td> {/** 4 */}

                <td className="px-4 py-2 "></td> {/** 5 */}
                <td className="px-4 py-2 border-r"></td> {/** 6 */}

                <td className="px-4 py-2 "></td> {/** 7 */}
                <td className="px-4 py-2 border-r"></td> {/** 8 */}

                <td className="px-4 py-2 "></td> {/** 9 */}
                <td className="px-4 py-2  border-r"></td> {/** 10 */}

                <td className="px-4 py-2 "></td> {/** 11 */}
                <td className="px-4 py-2  border-r"></td> {/** 12 */}

                <td className="px-4 py-2 "></td> {/** 13 */}
                <td className="px-4 py-2  border-r"></td> {/** 14 */}
              </tr>
              
              <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
                <td className="px-4 py-2 "></td> {/** 1 */}
                <td className="px-4 py-2 border-r"></td> {/** 2 */}

                <td className="px-4 py-2 "></td> {/** 3 */}
                <td className="px-4 py-2 border-r"></td> {/** 4 */}

                <td className="px-4 py-2 "></td> {/** 5 */}
                <td className="px-4 py-2 border-r"></td> {/** 6 */}

                <td className="px-4 py-2 "></td> {/** 7 */}
                <td className="px-4 py-2 border-r"></td> {/** 8 */}

                <td className="px-4 py-2 "></td> {/** 9 */}
                <td className="px-4 py-2  border-r"></td> {/** 10 */}

                <td className="px-4 py-2 "></td> {/** 11 */}
                <td className="px-4 py-2  border-r"></td> {/** 12 */}

                <td className="px-4 py-2 "></td> {/** 13 */}
                <td className="px-4 py-2  border-r"></td> {/** 14 */}
              </tr>

              <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
                <td className="px-4 py-2 "></td> {/** 1 */}
                <td className="px-4 py-2 border-r"></td> {/** 2 */}

                <td className="px-4 py-2 "></td> {/** 3 */}
                <td className="px-4 py-2 border-r"></td> {/** 4 */}

                <td className="px-4 py-2 "></td> {/** 5 */}
                <td className="px-4 py-2 border-r"></td> {/** 6 */}

                <td className="px-4 py-2 "></td> {/** 7 */}
                <td className="px-4 py-2 border-r"></td> {/** 8 */}

                <td className="px-4 py-2 "></td> {/** 9 */}
                <td className="px-4 py-2  border-r"></td> {/** 10 */}

                <td className="px-4 py-2 "></td> {/** 11 */}
                <td className="px-4 py-2  border-r"></td> {/** 12 */}

                <td className="px-4 py-2 "></td> {/** 13 */}
                <td className="px-4 py-2  border-r"></td> {/** 14 */}
              </tr>


              <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
                <td className="px-4 py-2 "></td> {/** 1 */}
                <td className="px-4 py-2 border-r"></td> {/** 2 */}

                <td className="px-4 py-2 "></td> {/** 3 */}
                <td className="px-4 py-2 border-r"></td> {/** 4 */}

                <td className="px-4 py-2 "></td> {/** 5 */}
                <td className="px-4 py-2 border-r"></td> {/** 6 */}

                <td className="px-4 py-2 "></td> {/** 7 */}
                <td className="px-4 py-2 border-r"></td> {/** 8 */}

                <td className="px-4 py-2 "></td> {/** 9 */}
                <td className="px-4 py-2  border-r"></td> {/** 10 */}

                <td className="px-4 py-2 "></td> {/** 11 */}
                <td className="px-4 py-2  border-r"></td> {/** 12 */}

                <td className="px-4 py-2 "></td> {/** 13 */}
                <td className="px-4 py-2  border-r"></td> {/** 14 */}
              </tr>

              
            </tbody>
          </table>
      </div>

        <Modal2 
    isOpen={isModalOpen} 
    onClose={() => setIsModalOpen(false)} 
    title="Contact Us"
>
  <div className="p-4 lg:p-8 flex flex-col items-center justify-center w-full max-h-full">
    <form 
      
      className="flex flex-col gap-4 w-full max-w-xl" 
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

export default WheelLoader;
