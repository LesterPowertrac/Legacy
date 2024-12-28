import React, { useState } from 'react';
import { TbBackhoe, TbEngine, TbInfoCircleFilled, TbTool   } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Banner2 = () => {
    const [hoveindigo, setHoveindigo] = useState(false);
    const [hoveindigo2, setHoveindigo2] = useState(false);
    const [hoveindigo3, setHoveindigo3] = useState(false);
    const [hoveindigo4, setHoveindigo4] = useState(false);
  return (
    <div id='Services' className='p-14 flex flex-col items-center justify-center mb-20'>
        <h1  data-aos="fade-left" className='text-[52px] font-semibold mb-2 leading-normal uppercase text text-indigo-500 text-center'>Our Services</h1>
        <h1  data-aos="fade-left" className='text-[22px] font-semibold mb-20 leading-normal uppercase text text-white text-center'>You can check what type of services we offer</h1>
        <div data-aos="fade-right" className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-start gap-8 '>
            <h2 className='text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-3xl  w-64 border-2 border-white b_glow'
                onMouseEnter={() => setHoveindigo(true)}
                onMouseLeave={() => setHoveindigo(false)}
            >   
                <TbBackhoe className='text-[100px] mb-1' />  {/* Icon on top */}

                {hoveindigo
                ?<span className='m-3  text-sm text-white text-center'>
                    Not sure what to buy? Worry no more. The Legacy Trucks and Tractors Inc. is equipped with the best sales team that helps you choose, compare, and decide what kind of product will suit you best.
                    <p className='text-center text-indigo-500 mt-3'>
                        Contact our Sales Department:<br/>
                        +639222910330
                    </p>
                </span>
                :<span className='m-3'>SALES</span>
                }  
            </h2>
            <h2 className='text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-3xl h-56 w-64 border-2 border-white b_glow'
                onMouseEnter={() => setHoveindigo2(true)}
                onMouseLeave={() => setHoveindigo2(false)}
            >
                <TbEngine className='text-[100px] mb-1' />  {/* Icon on top */}

                {hoveindigo2
                ?<span className='m-3 text-sm text-white text-center'>
                    We provides original and high-quality spare parts that you need to you job done.
                    <p className='text-center text-indigo-500 mt-3'>
                        Contact our Parts Department:<br/>
                        +639770391820
                    </p>
                </span>
                :<span className='m-3'>SPARE PARTS</span>
                }
            </h2>
            <h2 className='text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-3xl h-56 w-64 border-2 border-white b_glow'
                onMouseEnter={() => setHoveindigo3(true)}
                onMouseLeave={() => setHoveindigo3(false)}            
            >
                <TbTool  className='text-[100px] mb-1' />  {/* Icon on top */}

                {hoveindigo3
                ?<span className='m-3 text-sm text-white text-center'>
                    Needing a service that arrive ontime? Anywhere we have got coveindigo.
                    <p className='text-center text-indigo-500 mt-3'>
                        Contact our Service Department:<br/>
                        +639199133313
                    </p>
                </span>
                :<span className='m-3'>SERVICE</span>
                }
            </h2>
            <h2 className='text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-3xl h-56 w-64 border-2 border-white b_glow'
                onMouseEnter={() => setHoveindigo4(true)}
                onMouseLeave={() => setHoveindigo4(false)}            
            >
                <TbInfoCircleFilled className='text-[100px] mb-1' />  {/* Icon on top */}
                {hoveindigo4
                ?<span className='m-3 text-sm text-center text-white'>The Legacy Trucks and Tractors Incorporated are exclusive distributor distributor of Wechai, Powerquip, Shacman, Kingling Isuzu, Sinotruk, and Forland products in the Philippines<br/>
                    <span className='text-center text-indigo-500 hover:text-indigo-700'><Link to='/about#About'>Click me to read more...</Link></span>
                </span>
                :<span className='m-3'>ABOUT US</span>
                }
            </h2>
        </div>

    </div>
  )
}

export default Banner2