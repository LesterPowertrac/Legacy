import React, { useEffect, useState } from 'react';
import config from '../../../api/config';
import Modal2 from '../../../Components/Modal2';
import { Link, useLocation } from 'react-router-dom';
import Axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Modal from '../../../Components/Modal';
import axios from 'axios';


const Forklift = () => {
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
    Forklift: `${apiUrl}/products/Forklift`,
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


  const Weichai = [{ image: images.Forklift, name: 'Forklift', link: 'Forklift' }];

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
    <div id="Forklift" className="flex flex-col items-center justify-between overflow-hidden h-full">
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
        className=" object-contain w-auto text-transparent  relative lg:bottom-auto -bottom-10 "
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
      <h1 className="text-4xl text-indigo-500">Weichai Forklift WF25D</h1>
      <br />
      <p className='text-white'>The Weichai Forklift WF25D is a reliable and robust material handling machine, designed to deliver powerful performance and exceptional maneuverability in demanding industrial environments, equipped with advanced features for enhanced efficiency and operator comfort.</p>
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
              <th className="px-4 py-2  border-r" colSpan={2}>Specification</th>
              <th className="px-4 py-2  border-r" colSpan={2}>Weight</th>
              <th className="px-4 py-2  border-r" colSpan={2}>Wheels and tyres</th> 
              <th className="px-4 py-2  border-r" colSpan={2}>Dimentions and Overall Sizes</th> 

              <th className="px-4 py-2  border-r" colSpan={2}>Performance</th> 
            
              <th className="px-4 py-2  border-r" colSpan={2}>Engine</th>    

              <th className="px-4 py-2  border-r" colSpan={2}>Others</th>  
            </tr>

            <tr className='odd:bg-zinc-700 even:bg-zinc-800 '>
              <td className="px-4 py-2 ">Model designation</td> {/** 1 */}
              <td className="px-4 py-2  border-r">KBD25</td> {/** 2 */}

              <td className="px-4 py-2 ">Service Weight</td> {/** 3 */}
              <td className="px-4 py-2  border-r">3950</td> {/** 4 */}

              <td className="px-4 py-2 ">Tyres: SE-Super elastic PN-Pneumatic</td> {/** 5 */}
              <td className="px-4 py-2  border-r">PN</td> {/** 6 */}

              <td className="px-4 py-2 ">Mast lift,forward/backward</td> {/** 7 */}
              <td className="px-4 py-2  border-r">6°/12°</td> {/** 8 */}

              <td className="px-4 py-2 ">Drive Speed laden/unladen</td> {/** 9 */}
              <td className="px-4 py-2  border-r">15/16.2</td> {/** 10 */}

              <td className="px-4 py-2 ">Engine Manufacturer/Engine Type</td> {/** 11 */}
              <td className="px-4 py-2  border-r">Mitsubishi S4S</td> {/** 12 */}

              <td className="px-4 py-2 ">Drive Control Type</td> {/** 13 */}
              <td className="px-4 py-2  border-r">Electron Hydraulic</td> {/** 14 */}
            </tr>

            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Power type: Electric-Diesel-Petrol-LPG-Network Power (Electric)</td> {/** 1 */}
              <td className="px-4 py-2 border-r">diesel</td> {/** 2 */}

              <td className="px-4 py-2 ">Axle loading, laden front/rear</td> {/** 3 */}
              <td className="px-4 py-2 border-r">6340/610</td> {/** 4 */}

              <td className="px-4 py-2 ">Front Tyres Size</td> {/** 5 */}
              <td className="px-4 py-2 border-r">28 x 9-15-14PR</td> {/** 6 */}

              <td className="px-4 py-2 ">Mast Minimum Overall Height</td> {/** 7 */}
              <td className="px-4 py-2 border-r">2080</td> {/** 8 */}

              <td className="px-4 py-2 ">Lifting Speed laden/unladen</td> {/** 9 */}
              <td className="px-4 py-2  border-r">495/655</td> {/** 10 */}

              <td className="px-4 py-2 ">Emission Standard</td> {/** 11 */}
              <td className="px-4 py-2  border-r">EURO 3A</td> {/** 12 */}

              <td className="px-4 py-2 ">Volume fuel tank</td> {/** 13 */}
              <td className="px-4 py-2  border-r">52/45</td> {/** 14 */}
            </tr>

            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Operation Type: Hand-stand on-Driver seated</td> {/** 1 */}
              <td className="px-4 py-2 border-r">Driver seated</td> {/** 2 */}

              <td className="px-4 py-2 ">Axle loading, unladen front/rear</td> {/** 3 */}
              <td className="px-4 py-2 border-r">1880/2250</td> {/** 4 */}

              <td className="px-4 py-2 ">Rear Tyres Size</td> {/** 5 */}
              <td className="px-4 py-2 border-r">6.50-10-10PR</td> {/** 6 */}

              <td className="px-4 py-2 ">Free lift</td> {/** 7 */}
              <td className="px-4 py-2 border-r">140</td> {/** 8 */}

              <td className="px-4 py-2 ">Lowering Speed laden/unladen</td> {/** 9 */}
              <td className="px-4 py-2  border-r">495/655</td> {/** 10 */}

              <td className="px-4 py-2 ">Engine Power in compliance with ISO 1585</td> {/** 11 */}
              <td className="px-4 py-2  border-r">35.3</td> {/** 12 */}

              <td className="px-4 py-2 ">Drawbar,model/Type DIN</td> {/** 13 */}
              <td className="px-4 py-2  border-r">Pin</td> {/** 14 */}
            </tr>

            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 ">Load Capacity</td> {/** 1 */}
              <td className="px-4 py-2 border-r">2500</td> {/** 2 */}

              <td className="px-4 py-2 "> </td> {/** 3 */}
              <td className="px-4 py-2 border-r"></td> {/** 4 */}

              <td className="px-4 py-2 ">Front Track Width</td> {/** 5 */}
              <td className="px-4 py-2 border-r">1000</td> {/** 6 */}

              <td className="px-4 py-2 ">Lift height</td> {/** 7 */}
              <td className="px-4 py-2 border-r">3000</td> {/** 8 */}

              <td className="px-4 py-2 ">Lowering Speed laden/unladen</td> {/** 9 */}
              <td className="px-4 py-2  border-r">485/370</td> {/** 10 */}

              <td className="px-4 py-2 ">Rated Number of Revolutions</td> {/** 11 */}
              <td className="px-4 py-2  border-r">2250</td> {/** 12 */}

              <td className="px-4 py-2 "></td> {/** 13 */}
              <td className="px-4 py-2  border-r"></td> {/** 14 */}
            </tr>

            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 "></td> {/** 1 */}
              <td className="px-4 py-2 border-r"></td> {/** 2 */}

              <td className="px-4 py-2 "></td> {/** 3 */}
              <td className="px-4 py-2 border-r"></td> {/** 4 */}

              <td className="px-4 py-2 ">Rear Track Width</td> {/** 5 */}
              <td className="px-4 py-2 border-r">970</td> {/** 6 */}

              <td className="px-4 py-2 ">Mast Maximum Overall Height</td> {/** 7 */}
              <td className="px-4 py-2 border-r">4050</td> {/** 8 */}

              <td className="px-4 py-2 ">Drawbar Pull Tractive Effort (at 2km/h) with/without load</td> {/** 9 */}
              <td className="px-4 py-2  border-r">15/10</td> {/** 10 */}

              <td className="px-4 py-2 ">Cylinder Number/Displacement</td> {/** 11 */}
              <td className="px-4 py-2  border-r">4/3331</td> {/** 12 */}

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

              <td className="px-4 py-2 ">Gradeability (at 2km/h) laden/unladen</td> {/** 9 */}
              <td className="px-4 py-2  border-r">20</td> {/** 10 */}

              <td className="px-4 py-2 ">On-board voltage</td> {/** 11 */}
              <td className="px-4 py-2  border-r">12</td> {/** 12 */}

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

              <td className="px-4 py-2 ">Service Brake</td> {/** 9 */}
              <td className="px-4 py-2  border-r">Mechanical/hydraulic</td> {/** 10 */}

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

              <td className="px-4 py-2 ">th</td> {/** 13 */}
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

export default Forklift;
