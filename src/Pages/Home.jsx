import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../Components/Banner'
import Banner2 from '../Components/Banner2'
import Banner3 from '../Components/Banner3'
import Banner4 from '../Components/Banner4'
import { HelmetProvider, Helmet } from 'react-helmet-async';


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div className='overflow-hidden'>
      <HelmetProvider>

        <Helmet>
          <title>The Legacy</title>
          <meta name="description" content="Explore our extensive range of construction equipment, trucks, and machinery from top brands like Weichai, Powerquip, Shacman, Kingling Isuzu, Sinotruck, and Forland." />
        </Helmet>
          <span id='TheLegacy'></span>
        <Banner/>
        <Banner3/>
        <Banner2/>
        <Banner4/>

      </HelmetProvider>
    </div>
  )
}

export default Home