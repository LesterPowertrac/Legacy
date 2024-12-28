import React, { useEffect, useState } from 'react';
import config from '../../../api/config';
import Modal2 from '../../../Components/Modal2';
import { Link, useLocation } from 'react-router-dom';
import Axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Modal from '../../../Components/Modal';
import axios from 'axios';


const Grader = () => {
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
    Grader: `${apiUrl}/products/Grader`,
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


  const Weichai = [{ image: images.Grader, name: 'Grader', link: 'Grader' }];

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
    <div id="Grader" className="flex flex-col items-center justify-between overflow-hidden h-full">
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
        className="object-contain w-auto text-transparent relative lg:-bottom-24 -bottom-20"
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
      <h1 className="text-4xl text-indigo-500">Motor Grader WG150</h1>
      <br />
      <p className='text-white'>The WG150 Motor Grader is a high-performance, versatile machine designed for precision grading, road maintenance, and construction projects, offering reliable power, advanced control, and durability for demanding tasks.</p>
      <br />
      <p className='text-white'>
        Engine Model: Cummins 6BTAA5.9-C150
        <br />
        Gross Power: 112kW @ 2200rpm
        <br />
        Operating Weight: 11,600kg
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
      <div className=" bg-zinc-800  lg:max-w-6xl max-w-md max-h-lvh overflow-x-auto  mb-10 rounded-lg  h-[30rem]">
        <div className='sticky left-0 bg-zinc-800 ' >
          <h1 className="text-4xl  text-white text-center p-5 w-full">TECHNICAL SPECIFICATIONS</h1>
        </div>
        <table className="border-colapse  w-full text-white border border-zinc-700  mb-10 rounded-md ">
        <tbody className="text-center">
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <th className="px-4 py-2 border-r" colSpan={2}>Engine</th>
              <th className="px-4 py-2 border-r" colSpan={2}>Power Train</th>
              <th className="px-4 py-2 border-r" colSpan={2}>Steering</th>       
              <th className="px-4 py-2 border-r" colSpan={2}>Brakes</th>  
              <th className="px-4 py-2 border-r" colSpan={2}>Moldboard</th>       
              <th className="px-4 py-2 border-r" colSpan={2}>Speed</th> 
              <th className="px-4 py-2 border-r" colSpan={2}>Hydraulics</th> 
              <th className="px-4 py-2 border-r" colSpan={2}>Capacities</th> 
              <th className="px-4 py-2 border-r" colSpan={2}>Electrical System</th> 
              <th className="px-4 py-2 border-r" colSpan={2}>Operating Weight</th> 
              <th className="px-4 py-2 border-r" colSpan={2}>Ripper(Optional)</th> 
              <th className="px-4 py-2 border-r" colSpan={2}>Middle Scarifier(Optional)</th> 
              <th className="px-4 py-2 border-r" colSpan={2}>Front Blade(Optional)</th> 
              <th className="px-4 py-2 border-r" colSpan={2}>Dimensions</th>  
            </tr>
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 border-r">Engine Model</td>
              <td className="px-4 py-2 border-r">Cummins 6BTAA5.9-C150</td>

              <td className="px-4 py-2 border-r">Transmission</td>
              <td className="px-4 py-2 border-r">Fixed-axis type, electro-hydraulic control</td>

              <td className="px-4 py-2 border-r">Front wheel steering angle</td>
              <td className="px-4 py-2 border-r">±45°</td>

              <td className="px-4 py-2 border-r">Service brake</td>
              <td className="px-4 py-2 border-r">Disc type , foot operated,single circuit, hydraulically actuated on four tandem wheels</td>
 
              <td className="px-4 py-2 border-r">Rotation</td>
              <td className="px-4 py-2 border-r">360°</td> 

  
              <td className="px-4 py-2 border-r">Forward,1-6</td>
              <td className="px-4 py-2 border-r">5.4\8.3\13.2\20.6\29.6\44km/h</td> 

              <td className="px-4 py-2 border-r"></td>
              <td className="px-4 py-2 border-r"></td>
            </tr>

            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 border-r">Number of Cylinders</td>
              <td className="px-4 py-2 border-r">6</td>
              
              <td className="px-4 py-2 border-r">Torque converter</td>
              <td className="px-4 py-2 border-r">Single-stage,single-phase,three basic elements</td>

              <td className="px-4 py-2 border-r">Articulation angle</td>
              <td className="px-4 py-2 border-r">±25°</td>

              <td className="px-4 py-2 border-r">Parking brake</td>
              <td className="px-4 py-2 border-r">Drum type, manually actuated</td>

              <td className="px-4 py-2 border-r">Moldboard width</td>
              <td className="px-4 py-2 border-r">3660mm</td>

              <td className="px-4 py-2 border-r">Reverse,1-3</td>
              <td className="px-4 py-2 border-r">5.4\13.2\29.6km/h</td>
            </tr>
            
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 border-r">Type</td>
              <td className="px-4 py-2 border-r">4-cycle, direct injection, water-cooled</td>

              <td className="px-4 py-2 border-r">Rear axle</td>
              <td className="px-4 py-2 border-r">"No-Spin" anti-skid differential</td>

              <td className="px-4 py-2 border-r">Min. turning radius</td>
              <td className="px-4 py-2 border-r">6600mm</td>

              <td className="px-4 py-2 border-r"></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 border-r">Moldboard height</td>
              <td className="px-4 py-2 border-r">615mm</td>
            </tr>

            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 border-r">Bore x stroke</td>
              <td className="px-4 py-2 border-r">102*120mm</td>

              <td className="px-4 py-2 border-r" >Tandem drive</td>
              <td className="px-4 py-2 border-r" >Roller chain. Oscillating angle:±15°</td>

              <td className="px-4 py-2 border-r"></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 border-r"></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 border-r" >Moldboardthickness</td>
              <td className="px-4 py-2 border-r" >20mm</td>
            </tr>

            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 border-r" >Displacement</td>
              <td className="px-4 py-2 border-r" >5.9L</td>

              <td className="px-4 py-2 border-r" >Tire</td>
              <td className="px-4 py-2 border-r" >13-24PR12</td>

              <td className="px-4 py-2 border-r"></td>
              <td className="px-4 py-2 border-r"></td>
              
              <td className="px-4 py-2 border-r" ></td>
              <td className="px-4 py-2 border-r" ></td>

              <td className="px-4 py-2 border-r">Moldboardtip angle</td>
              <td className="px-4 py-2 border-r">27-73°</td>
            </tr>

            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 border-r" >Rated power</td>
              <td className="px-4 py-2 border-r" >112kW @ 2200rpm</td>

              <td className="px-4 py-2 border-r" >Front axle</td>
              <td className="px-4 py-2 border-r" >Oscillating angle:±15° <br/> Tilting angle:±17°</td>

              <td className="px-4 py-2 border-r"> </td>
              <td className="px-4 py-2 border-r"></td>
              
              <td className="px-4 py-2 border-r" ></td>
              <td className="px-4 py-2 border-r" ></td>

              <td className="px-4 py-2 border-r" >Max. cutting depth</td>
              <td className="px-4 py-2 border-r" >500mm</td>
            </tr>

            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 border-r">Max. traction</td>
              <td className="px-4 py-2 border-r">65kN</td>

              <td className="px-4 py-2 border-r"></td>
              <td className="px-4 py-2 border-r"></td>
              
              <td className="px-4 py-2 border-r"></td>
              <td className="px-4 py-2 border-r"></td>

              <td className="px-4 py-2 border-r"></td>
              <td className="px-4 py-2 border-r"></td>
              
              <td className="px-4 py-2 border-r">Max. lifting height</td>
              <td className="px-4 py-2 border-r">460mm</td>
            </tr>
            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 border-r" >Max. torque</td>
              <td className="px-4 py-2 border-r" >670N.m@1400rpm</td>

              <td className="px-4 py-2 border-r" ></td>
              <td className="px-4 py-2 border-r" ></td>

              <td className="px-4 py-2 border-r"> </td>
              <td className="px-4 py-2 border-r"></td>
              
              <td className="px-4 py-2 border-r" ></td>
              <td className="px-4 py-2 border-r" ></td>

              <td className="px-4 py-2 border-r" >Max. shoulder reach (left/right)</td>
              <td className="px-4 py-2 border-r" >1700/2000mm</td>
            </tr>

            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 border-r" >Rated fuel consumption</td>
              <td className="px-4 py-2 border-r" >223g/kW.h</td>

              <td className="px-4 py-2 border-r" ></td>
              <td className="px-4 py-2 border-r" ></td>

              <td className="px-4 py-2 border-r"> </td>
              <td className="px-4 py-2 border-r"></td>
              
              <td className="px-4 py-2 border-r" ></td>
              <td className="px-4 py-2 border-r" ></td>

              <td className="px-4 py-2 border-r" >Max. tilting angle (left/right)</td>
              <td className="px-4 py-2 border-r" >±90°</td>
            </tr>

            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 border-r" >Emission</td>
              <td className="px-4 py-2 border-r" >China-II</td>

              <td className="px-4 py-2 border-r" ></td>
              <td className="px-4 py-2 border-r" ></td>

              <td className="px-4 py-2 border-r"> </td>
              <td className="px-4 py-2 border-r"></td>
              
              <td className="px-4 py-2 border-r" ></td>
              <td className="px-4 py-2 border-r" ></td>

              <td className="px-4 py-2 border-r" ></td>
              <td className="px-4 py-2 border-r" ></td>
            </tr>

            <tr className='odd:bg-zinc-700 even:bg-zinc-800'>
              <td className="px-4 py-2 border-r" ></td>
              <td className="px-4 py-2 border-r" ></td>

              <td className="px-4 py-2 border-r" ></td>
              <td className="px-4 py-2 border-r" ></td>

              <td className="px-4 py-2 border-r"> </td>
              <td className="px-4 py-2 border-r"></td>
              
              <td className="px-4 py-2 border-r" ></td>
              <td className="px-4 py-2 border-r" ></td>

              <td className="px-4 py-2 border-r" ></td>
              <td className="px-4 py-2 border-r" ></td>
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

export default Grader;
