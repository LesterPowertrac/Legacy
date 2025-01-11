import React, { useEffect, useState } from 'react';
import config from '../../../api/config';
import Modal2 from '../../../Components/Modal2';
import { Link, useLocation } from 'react-router-dom';
import Axios from 'axios';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Modal from '../../../Components/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const KvaGenerator = () => {
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
    KVA1: `${apiUrl}/products/15_5850KVA1`,
    KVA2: `${apiUrl}/products/15_5850KVA2`,
    KVA3: `${apiUrl}/products/15_5850KVA3`,
    KVA4: `${apiUrl}/products/15_5850KVA4`,
    KVA5: `${apiUrl}/products/15_5850KVA5`,
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


  const powerquip = [
    { id: 1, image: images.KvaGenerator1,title: 'KvaGenerator 1', description: 'View Description', name: 'KvaGenerator1', },
    { id: 2, image: images.KvaGenerator2,title: 'KvaGenerator 2', description: 'View Description', name: 'KvaGenerator2', },
    { id: 3, image: images.KvaGenerator3, title: 'KvaGenerator 3', description: 'View Description', name: 'KvaGenerator3', },
  ];

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
    <div id="KvaGenerator" className="flex flex-col items-center justify-between overflow-hidden h-full">
      <HelmetProvider>
        <Helmet>
          <title>Product Descriptions | The Legacy</title>
          <meta name="description" content="Explore our extensive range of construction equipment, trucks, and machinery from top brands like powerquip, Powerquip, Shacman, Kingling Isuzu, Sinotruck, and Forland." />
        </Helmet>

       
          <div 
            className="flex flex-col items-center mb-8 lg:flex-row lg:items-start lg:justify-between w-9/12 lg:w-[1150px] md:w-auto mt-24" 
        
          >
            {/* Image Container */}
            <div 
              className="flex flex-col items-center box-content lg:h-[350px] h-[400px] lg:w-11/12 md:w-[350px] sm:w-[300px]  p-6 lg:p-10 border-4 lg:mx-0"
            >
               <style>
    {`
      .swiper-pagination {
        display: flex;
        justify-content: center;
        bottom: 10px;
        z-index: 10;
      }
      .swiper-pagination-bullet {
        background-color: #ffffff;
        width: 10px;
        height: 10px;
        margin: 1px;
        position: relative;
        bottom: 10px
      }
      .swiper-pagination-bullet-active {
        background-color: #818CF8;
      }
    `}
  </style>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-[540px] h-[400px]"
              spaceBetween={30}
              slidesPerView={1}
              loop
            >
            {powerquip.map((powerquip) => (
                <SwiperSlide key={powerquip.id}>
              <img
          
                loading="lazy"
                src={powerquip.image}
                alt={powerquip.name}
                className="object-contain w-auto text-transparent  relative lg:-bottom-10 -bottom-10 "
              />
              </SwiperSlide>
            ))}
              </Swiper>
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
              <h1 className="text-4xl text-indigo-500">KvaGenerator WD32</h1>
              <br />
              <p className='text-white'>The KVA Generator WD32 is a reliable and efficient power generator designed to deliver consistent electrical output, equipped with a robust engine and advanced technology, making it suitable for a wide range of industrial and commercial applications.</p>
              <br />
              <button className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
                      onClick={() => setIsModalOpen(true)} 
              >
                Contact Our Sales
              </button>
              <br />
              <Link to="/KvaGenerator#Specs">
                <button className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition">
                  View Specs
                </button>
              </Link>
            </div>
          </div>

          <div id='Specs' className='mt-12 relative bottom-32'></div>
            <div className=" bg-zinc-800  lg:max-w-6xl max-w-md max-h-lvh overflow-x-auto  mb-10 rounded-lg h-[30rem]">
        
              <div className='sticky left-0 bg-zinc-800 ' >
                <h1 className="text-4xl  text-white text-center p-5 w-full">TECHNICAL SPECIFICATIONS</h1>
              </div>
                <table className="border-colapse  w-full  text-white border border-zinc-700  mb-10 rounded-md "  >
                  <tbody className="text-center">
                    <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
                      <th className="px-4 py-2  border-r" >Coming Soon...</th>
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
        />
        <input 
          className="w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          type="text" 
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
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
        />
        <input 
          className="w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          type="tel" 
          name="phone"  
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
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

export default KvaGenerator;
