import React, { useEffect,  useState, useRef  } from 'react'
import axios from 'axios';
import config from '../api/config';
import Modal from '../Components/Modal';
import background from '../assets/background_opacity_30.png'

const Banner4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
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

  useEffect(()=>{
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
    <div   ref={ref}
    style={isVisible ? { backgroundImage: `url(${background})` } : {}} className='bg-cover bg-center bg-fixed  pb-10'>
      <div id='Contact' className='p-4 lg:p-20 flex flex-col items-center justify-center'>
          <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-2 leading-normal uppercase text text-indigo-500'>Email Us</h1>
          <h1 data-aos="fade-right" className='text-[16px] text-center font-semibold mb-2 leading-normal uppercase text text-zinc-100'>THE LEGACY TRUCKS AND TRACTORS INC. ARE COMMITED TO DELIVER AN EXCEPTIONAL SERVICE THAT YOU WILL ENJOY AND REMEMBER.</h1>
          <form data-aos="fade-up" className='flex flex-col gap-1 lg:w-1/2' onSubmit={handleSubmit}>
              <div className='lg:flex gap-5'> 
                  <input 
                    className='w-full lg:my-2 my-4 rounded-lg bg-zinc-800 p-4 border-2 border-zinc-400 b_glow text-xl text-zinc-100' 
                    type="text" 
                    name="firstName"
                    placeholder='First Name' 
                    value={formData.firstName} 
                    onChange={handleChange}
                    autoComplete='given-name'
                  />

                  <input 
                    className='w-full lg:my-2 my-4 rounded-lg bg-zinc-800 p-4 border-2 border-zinc-400 b_glow text-xl text-zinc-100'
                    type="text" 
                    name="lastName"
                    placeholder='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                    autoComplete='given-name'
                  />

              </div>
              <div className='lg:flex gap-5'>
                  <input 
                    className='w-full lg:my-2 my-4 rounded-lg bg-zinc-800 p-4 border-2 border-zinc-400 b_glow text-xl text-zinc-100'
                    type="email" 
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete='email'
                  />
                  <input 
                    className='w-full lg:my-2 my-4 rounded-lg bg-zinc-800 p-4 border-2 border-zinc-400 b_glow text-xl text-zinc-100' 
                    type="text" 
                    name="phone"  
                    placeholder='Phone'
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete='tel'
                  />   
              </div>
                  <textarea 
                    className='w-full my-2 rounded-lg bg-zinc-800 p-4 border-2 border-zinc-400 b_glow text-xl text-zinc-100' 
                    name="message" 
                    id="" 
                    cols='30' 
                    rows='5' 
                    placeholder='Your message'
                    value={formData.message}
                    onChange={handleChange}
                    autoComplete='off'
                  >
                  </textarea>
                  <button  
                    className='neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-8 uppercase relative overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-xl text-bold mb-4 my-2' 
                    type='submit'
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
    </div>
  )
}

export default Banner4