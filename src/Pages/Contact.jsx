import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import axios from 'axios';
import config from '../api/config';
import Modal from '../Components/Modal';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();

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
  

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  
  return (
    <div className='overflow-hidden' id='Contact'>
      <HelmetProvider>
        <Helmet>
          <title>Contact Us | The Legacy</title>
          <meta name="description" content="Explore our extensive range of construction equipment, trucks, and machinery from top brands like Weichai, Powerquip, Shacman, Kingling Isuzu, Sinotruck, and Forland." />
        </Helmet> 

        <div className='p-4 lg:p-10 flex flex-col items-center justify-center lg:mx-auto mx-5'>

          <h1 data-aos="fade-left"  className='text-[42px] font-semibold mb-0 leading-normal uppercase text-indigo-500 mt-5'>Reach Us</h1>
          <p data-aos="fade-right" className='text-zinc-200 text-center text-[15px] lg:mx-auto mx-5'>
            Have questions? Reach out to us, and we’ll be happy to assist you with any inquiries about our products and services.
            <br />
            Get in touch with us for more information about our products or to speak directly with our team.
          </p>

          <div className='w-full mt-6 lg:flex lg:gap-14 lg:justify-center mb-20'>
            {/* Email Us Section */}
            <div data-aos="fade-up" className='lg:flex-1 mb-10 lg:mb-0'>
              <h1 className='text-[32px] font-semibold mb-5 text-center uppercase text-indigo-500'>Email Us</h1>
              <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <input
                    className="w-full rounded-lg bg-zinc-800 p-3 border-2 border-zinc-400 b_glow text-sm text-zinc-100"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    autoComplete='given-name'
                  />
                  <input
                    className="w-full rounded-lg bg-zinc-800 p-3 border-2 border-zinc-400 b_glow text-sm text-zinc-100"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    autoComplete='given-name'
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    className="w-full rounded-lg bg-zinc-800 p-3 border-2 border-zinc-400 b_glow text-sm text-zinc-100"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    autoComplete='email'
                  />
                  <input
                    className="w-full rounded-lg bg-zinc-800 p-3 border-2 border-zinc-400 b_glow text-sm text-zinc-100"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    autoComplete='tel'
                  />
                </div>
                <textarea
                  className="w-full rounded-lg bg-zinc-800 p-3 border-2 border-zinc-400 b_glow text-sm text-zinc-100"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows="5"
                 autoComplete='off'
                />
                <button
                  className="shadow-xl hover:shadow-zinc-400/50 hover:bg-zinc-900 rounded-lg py-3 px-6 uppercase relative overflow-hidden text-black border-2 border-indigo-400 hover:text-indigo-500 bg-indigo-400 b_glow text-sm font-bold mt-3"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                {showModal && (
                  <Modal
                    success={success}
                    error={error}
                    onClose={() => setShowModal(false)}
                  />
                )}
              </form>
            </div>



            {/* Our Location Section */}
            <div data-aos="fade-up" className='lg:flex-1 flex flex-col items-center'>
              <h1 className='text-[32px] font-semibold mb-5 uppercase text-indigo-500'>Our Location</h1>
              <div className='w-full max-w-md border-2 border-zinc-400 img_glow'>
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964.9928969103703!2d121.01094312791379!3d14.657553901852118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b6f2a631caf7%3A0xe8d9143dc76f0941!2sThe%20Legacy%20Trucks%20and%20Tractors%20INC!5e0!3m2!1sen!2sph!4v1729480378177!5m2!1sen!2sph"
                  className='w-full lg:h-96 h-72'
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

              {/* Contact Us Section */}
              <div data-aos="fade-up" className='lg:flex-1 flex flex-col items-center lg:items-start mb-10 lg:mb-0'>
              <h1 className='text-[32px] font-semibold mb-5 uppercase text-indigo-500'>Contact Us</h1>
              <div className='flex flex-col gap-2 text-zinc-200 text-base'>
                <p>Email: info@legacytrucks.com.ph</p>
                <p>Sales Department: +639222910330</p>
                <p>Service Department: +639199133313</p>
                <p>Parts Department: +639770391820</p>
              </div>
            </div>
          </div>


        </div>
      </HelmetProvider>
    </div>

  )
}

export default Contact