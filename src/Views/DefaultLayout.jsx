import React, {useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Layouts/Navbar';
import Footer from '../Layouts/Footer';
import { Triangle } from 'react-loader-spinner'
import AOS from 'aos';


const DefaultLayout = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      AOS.init({ duration: 1000 });
      AOS.refresh();
    }, 2000);
  }, []);
  return (
    <>
    {
      loading ?
        <div className='bg-zinc-900 h-[100vh] flex justify-center items-center'>
          <Triangle
            height="100"
            width="100"
            color="#818CF8"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </div>
      :

      <div className='bg-zinc-900'>
      <Navbar className=''/>
        <Outlet />
      <Footer/>
    </div>
    }

    </>
  )
}

export default DefaultLayout