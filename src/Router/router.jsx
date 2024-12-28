import { Navigate, createHashRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Triangle } from 'react-loader-spinner'

// Pages
const DefaultLayout = lazy(() => import("../Views/DefaultLayout"));
const NotFound = lazy(() => import("../Pages/Notfound"));
const Home = lazy(() => import("../Pages/Home"));
const About = lazy(() => import("../Pages/About"));
const Product = lazy(() => import("../Pages/Product"));
const Contact = lazy(() => import("../Pages/Contact"));
const FileUpload = lazy(() => import("../Pages/FileUpload"));

//Weichai
const Bulldozer = lazy(() => import("../Pages/Descriptions/Weichai/Bulldozer"));
const Excavator = lazy(() => import("../Pages/Descriptions/Weichai/Excavator"));
const Forklift = lazy(() => import("../Pages/Descriptions/Weichai/Forklift"));
const Grader = lazy(() => import("../Pages/Descriptions/Weichai/Grader"));
const RoadRoller = lazy(() => import("../Pages/Descriptions/Weichai/RoadRoller"));
const WheelLoader = lazy(() => import("../Pages/Descriptions/Weichai/WheelLoader"));

//Powergen
const KVAPowergen = lazy(() => import("../Pages/Descriptions/Powergen/KVAPowergen"));

//Powerquip
const KvaGenerator = lazy(() => import("../Pages/Descriptions/Powerquip/KvaGenerator"));

//Shacman
const EvShacman = lazy(() => import("../Pages/Descriptions/Shacman/EvShacman"));
const Mixer = lazy(() => import("../Pages/Descriptions/Shacman/Mixer"));
const ShacmanDumpTruckH3000 = lazy(() => import("../Pages/Descriptions/Shacman/ShacmanDumpTruckH3000"));
const ShacmanDumpTruckX3000 = lazy(() => import("../Pages/Descriptions/Shacman/ShacmanDumpTruckX3000"));
const ShacmanFuelTanker = lazy(() => import("../Pages/Descriptions/Shacman/ShacmanFuelTanker"));
const ShacmanSelfLoader = lazy(() => import("../Pages/Descriptions/Shacman/ShacmanSelfLoader"));
const ShacmanWingVan = lazy(() => import("../Pages/Descriptions/Shacman/ShacmanWingVan"));
const TractorheadX3000 = lazy(() => import("../Pages/Descriptions/Shacman/TractorheadX3000"));
const TractorheadH3000 = lazy(() => import("../Pages/Descriptions/Shacman/TractorheadH3000"));

//Kingling Isuzu
const AspahltDistributor = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/AspahltDistributor"));
const DumpTruck6cbm = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/DumpTruck6cbm"));
const FTR = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/FTR"));
const FVR = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/FVR"));
const Giga4x2CargoHeadRed = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/Giga4x2CargoHeadRed"));
const Giga4x2TractorHead = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/Giga4x2TractorHead"));
const Giga6x2CargoHead = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/Giga6x2CargoHead"));
const Giga6x4DumpTruck = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/Giga6x4DumpTruck"));
const Giga6x4TractorHead = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/Giga6x4TractorHead"));
const Giga8x4CargoHead = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/Giga8x4CargoHead"));
const GigaBoomRed = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/GigaBoomRed"));
const GigaMixerTruck10W10CBM = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/GigaMixerTruck10W10CBM"));
const GTH6x4300HP = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/GTH6x4300HP"));

const Isuzu6WGarbage = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/Isuzu6WGarbage"));
const Isuzu700PFFRMediumDutyTruck = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/Isuzu700PFFRMediumDutyTruck"));
const IsuzuBus = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/IsuzuBus"));
const IsuzuFVR6Wheeler6000LitersPTOFireTruck = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/IsuzuFVR6Wheeler6000LitersPTOFireTruck"));
const IsuzuNLR4Wheeler1500LitersPTOFireTruck = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/IsuzuNLR4Wheeler1500LitersPTOFireTruck"));
const IsuzuSewage = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/IsuzuSewage"));
const NKR600p = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/NKR600p"));
const NPR700P = lazy(() => import("../Pages/Descriptions/KinglingIsuzu/NPR700P"));

// Sinotruck
const CargoTruck6Wheeler = lazy(() => import("../Pages/Descriptions/Sinotruck/CargoTruck6Wheeler"));
const CargoTruck6WheelerVersion2 = lazy(() => import("../Pages/Descriptions/Sinotruck/CargoTruck6WheelerVersion2"));
const DumpTruck4Cubic = lazy(() => import("../Pages/Descriptions/Sinotruck/DumpTruck4Cubic"));
const DumpTruck12Cubic = lazy(() => import("../Pages/Descriptions/Sinotruck/DumpTruck12Cubic"));
const GarbageTruck5Cubic = lazy(() => import("../Pages/Descriptions/Sinotruck/GarbageTruck5Cubic"));
const HOWOFBBody = lazy(() => import("../Pages/Descriptions/Sinotruck/HOWOFBBody"));
const ManliftTruck4x2 = lazy(() => import("../Pages/Descriptions/Sinotruck/ManliftTruck4x2"));
const MixerTruck4Cubic = lazy(() => import("../Pages/Descriptions/Sinotruck/MixerTruck4Cubic"));
const MixerTruck6Cubic = lazy(() => import("../Pages/Descriptions/Sinotruck/MixerTruck6Cubic"));
const OilFuelWaterTanker4Cubic = lazy(() => import("../Pages/Descriptions/Sinotruck/OilFuelWaterTanker4Cubic"));
const OilFuelWaterTanker10Cubic = lazy(() => import("../Pages/Descriptions/Sinotruck/OilFuelWaterTanker10Cubic"));

//Forland
const ForlandCargoTruck14Realft = lazy(() => import("../Pages/Descriptions/Forland/ForlandCargoTruck14Realft"));
const ForlandCargoTruck17ft = lazy(() => import("../Pages/Descriptions/Forland/ForlandCargoTruck17ft"));
const ForlandCargoTruck20ft = lazy(() => import("../Pages/Descriptions/Forland/ForlandCargoTruck20ft"));
const Forlanddumptruck3cbm = lazy(() => import("../Pages/Descriptions/Forland/Forlanddumptruck3cbm"));
const ForlandDumpTruck6cbm = lazy(() => import("../Pages/Descriptions/Forland/ForlandDumpTruck6cbm"));
const H7 = lazy(() => import("../Pages/Descriptions/Forland/H7"));
const L3 = lazy(() => import("../Pages/Descriptions/Forland/L3"));
const L5 = lazy(() => import("../Pages/Descriptions/Forland/L5"));
const M6 = lazy(() => import("../Pages/Descriptions/Forland/M6"));
const T3 = lazy(() => import("../Pages/Descriptions/Forland/T3"));
const T5 = lazy(() => import("../Pages/Descriptions/Forland/T5"));
const T5Class1 = lazy(() => import("../Pages/Descriptions/Forland/T5Class1"));
const T54x2 = lazy(() => import("../Pages/Descriptions/Forland/T54x2"));

const router = createHashRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={
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
      }>
        <DefaultLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={
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
            </div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={
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
          }>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={
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
          }>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/product",
        element: (
          <Suspense fallback={
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
          }>
            <Product />
          </Suspense>
        ),
      },

      {
        path: "/Bulldozer",
        element: (
          <Suspense fallback={
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
          }>
            <Bulldozer />
          </Suspense>
        ),
      },

      {
        path: "/Excavator",
        element: (
          <Suspense fallback={
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
          }>
            <Excavator />
          </Suspense>
        ),
      },


      {
        path: "/Forklift",
        element: (
          <Suspense fallback={
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
          }>
            <Forklift />
          </Suspense>
        ),
      },

      {
        path: "/Grader",
        element: (
          <Suspense fallback={
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
          }>
            <Grader />
          </Suspense>
        ),
      },

      {
        path: "/RoadRoller",
        element: (
          <Suspense fallback={
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
          }>
            <RoadRoller />
          </Suspense>
        ),
      },

      {
        path: "/WheelLoader",
        element: (
          <Suspense fallback={
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
          }>
            <WheelLoader />
          </Suspense>
        ),
      },

      {
        path: "/KVAPowergen",
        element: (
          <Suspense fallback={
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
          }>
            <KVAPowergen />
          </Suspense>
        ),
      },


      {
        path: "/KvaGenerator",
        element: (
          <Suspense fallback={
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
          }>
            <KvaGenerator />
          </Suspense>
        ),
      },

      {
        path: "/EvShacman",
        element: (
          <Suspense fallback={
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
          }>
            <EvShacman />
          </Suspense>
        ),
      },


      {
        path: "/Mixer",
        element: (
          <Suspense fallback={
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
          }>
            <Mixer />
          </Suspense>
        ),
      },


      {
        path: "/ShacmanDumpTruckH3000",
        element: (
          <Suspense fallback={
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
          }>
            <ShacmanDumpTruckH3000 />
          </Suspense>
        ),
      },

      {
        path: "/ShacmanDumpTruckX3000",
        element: (
          <Suspense fallback={
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
          }>
            <ShacmanDumpTruckX3000 />
          </Suspense>
        ),
      },

      {
        path: "/ShacmanFuelTanker",
        element: (
          <Suspense fallback={
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
          }>
            <ShacmanFuelTanker />
          </Suspense>
        ),
      },

      {
        path: "/ShacmanSelfLoader",
        element: (
          <Suspense fallback={
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
          }>
            <ShacmanSelfLoader />
          </Suspense>
        ),
      },

      {
        path: "/ShacmanWingVan",
        element: (
          <Suspense fallback={
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
          }>
            <ShacmanWingVan />
          </Suspense>
        ),
      },

      {
        path: "/TractorheadX3000",
        element: (
          <Suspense fallback={
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
          }>
            <TractorheadX3000 />
          </Suspense>
        ),
      },

      {
        path: "/TractorheadH3000",
        element: (
          <Suspense fallback={
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
          }>
            <TractorheadH3000 />
          </Suspense>
        ),
      },

      {
        path: "/AspahltDistributor",
        element: (
          <Suspense fallback={
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
          }>
            <AspahltDistributor />
          </Suspense>
        ),
      },

      {
        path: "/DumpTruck6cbm",
        element: (
          <Suspense fallback={
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
          }>
            <DumpTruck6cbm />
          </Suspense>
        ),
      },

      {
        path: "/FTR",
        element: (
          <Suspense fallback={
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
          }>
            <FTR />
          </Suspense>
        ),
      },

      {
        path: "/FVR",
        element: (
          <Suspense fallback={
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
          }>
            <FVR />
          </Suspense>
        ),
      },

      {
        path: "/Giga4x2CargoHeadRed",
        element: (
          <Suspense fallback={
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
          }>
            <Giga4x2CargoHeadRed />
          </Suspense>
        ),
      },

      {
        path: "/Giga4x2TractorHead",
        element: (
          <Suspense fallback={
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
          }>
            <Giga4x2TractorHead />
          </Suspense>
        ),
      },

      {
        path: "/Giga6x2CargoHead",
        element: (
          <Suspense fallback={
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
          }>
            <Giga6x2CargoHead />
          </Suspense>
        ),
      },


      {
        path: "/Giga6x4DumpTruck",
        element: (
          <Suspense fallback={
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
          }>
            <Giga6x4DumpTruck />
          </Suspense>
        ),
      },


      {
        path: "/Giga6x4TractorHead",
        element: (
          <Suspense fallback={
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
          }>
            <Giga6x4TractorHead />
          </Suspense>
        ),
      },

      {
        path: "/Giga8x4CargoHead",
        element: (
          <Suspense fallback={
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
          }>
            <Giga8x4CargoHead />
          </Suspense>
        ),
      },

      {
        path: "/GigaBoomRed",
        element: (
          <Suspense fallback={
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
          }>
            <GigaBoomRed />
          </Suspense>
        ),
      },

      {
        path: "/GigaMixerTruck10W10CBM",
        element: (
          <Suspense fallback={
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
          }>
            <GigaMixerTruck10W10CBM />
          </Suspense>
        ),
      },

      {
        path: "/GTH6x4300HP",
        element: (
          <Suspense fallback={
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
          }>
            <GTH6x4300HP />
          </Suspense>
        ),
      },

      // {
      //   path: "/HOWOT7",
      //   element: (
      //     <Suspense fallback={
      //       <div className='bg-zinc-900 h-[100vh] flex justify-center items-center'>
      //           <Triangle
      //           height="100"
      //           width="100"
      //           color="#818CF8"
      //           ariaLabel="triangle-loading"
      //           wrapperStyle={{}}
      //           wrapperClass=""
      //           visible={true}
      //           />
      //       </div>          
      //     }>
      //       <HOWOT7 />
      //     </Suspense>
      //   ),
      // },

      {
        path: "/Isuzu6WGarbage",
        element: (
          <Suspense fallback={
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
          }>
            <Isuzu6WGarbage />
          </Suspense>
        ),
      },


      {
        path: "/Isuzu700PFFRMediumDutyTruck",
        element: (
          <Suspense fallback={
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
          }>
            <Isuzu700PFFRMediumDutyTruck />
          </Suspense>
        ),
      },

      {
        path: "/IsuzuBus",
        element: (
          <Suspense fallback={
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
          }>
            <IsuzuBus />
          </Suspense>
        ),
      },

      {
        path: "/IsuzuFVR6Wheeler6000LitersPTOFireTruck",
        element: (
          <Suspense fallback={
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
          }>
            <IsuzuFVR6Wheeler6000LitersPTOFireTruck />
          </Suspense>
        ),
      },

      {
        path: "/IsuzuNLR4Wheeler1500LitersPTOFireTruck",
        element: (
          <Suspense fallback={
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
          }>
            <IsuzuNLR4Wheeler1500LitersPTOFireTruck />
          </Suspense>
        ),
      },

      {
        path: "/IsuzuSewage",
        element: (
          <Suspense fallback={
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
          }>
            <IsuzuSewage />
          </Suspense>
        ),
      },

      {
        path: "/NKR600p",
        element: (
          <Suspense fallback={
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
          }>
            <NKR600p />
          </Suspense>
        ),
      },

      {
        path: "/NPR700P",
        element: (
          <Suspense fallback={
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
          }>
            <NPR700P />
          </Suspense>
        ),
      },

      {
        path: "/CargoTruck6Wheeler",
        element: (
          <Suspense fallback={
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
          }>
            <CargoTruck6Wheeler />
          </Suspense>
        ),
      },

      {
        path: "/CargoTruck6WheelerVersion2",
        element: (
          <Suspense fallback={
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
          }>
            <CargoTruck6WheelerVersion2 />
          </Suspense>
        ),
      },

      {
        path: "/DumpTruck4Cubic",
        element: (
          <Suspense fallback={
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
          }>
            <DumpTruck4Cubic />
          </Suspense>
        ),
      },

      {
        path: "/DumpTruck12Cubic",
        element: (
          <Suspense fallback={
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
          }>
            <DumpTruck12Cubic />
          </Suspense>
        ),
      },
      {
        path: "/GarbageTruck5Cubic",
        element: (
          <Suspense fallback={
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
          }>
            <GarbageTruck5Cubic />
          </Suspense>
        ),
      },

      {
        path: "/HOWOFBBody",
        element: (
          <Suspense fallback={
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
          }>
            <HOWOFBBody />
          </Suspense>
        ),
      },

      {
        path: "/ManliftTruck4x2",
        element: (
          <Suspense fallback={
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
          }>
            <ManliftTruck4x2 />
          </Suspense>
        ),
      },

      {
        path: "/MixerTruck4Cubic",
        element: (
          <Suspense fallback={
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
          }>
            <MixerTruck4Cubic />
          </Suspense>
        ),
      },

      {
        path: "/MixerTruck6Cubic",
        element: (
          <Suspense fallback={
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
          }>
            <MixerTruck6Cubic />
          </Suspense>
        ),
      },

      {
        path: "/OilFuelWaterTanker4Cubic",
        element: (
          <Suspense fallback={
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
          }>
            <OilFuelWaterTanker4Cubic />
          </Suspense>
        ),
      },

      {
        path: "/OilFuelWaterTanker10Cubic",
        element: (
          <Suspense fallback={
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
          }>
            <OilFuelWaterTanker10Cubic />
          </Suspense>
        ),
      },

      {
        path: "/ForlandCargoTruck14Realft",
        element: (
          <Suspense fallback={
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
          }>
            <ForlandCargoTruck14Realft />
          </Suspense>
        ),
      },

      {
        path: "/ForlandCargoTruck17ft",
        element: (
          <Suspense fallback={
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
          }>
            <ForlandCargoTruck17ft />
          </Suspense>
        ),
      },

      {
        path: "/ForlandCargoTruck20ft",
        element: (
          <Suspense fallback={
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
          }>
            <ForlandCargoTruck20ft />
          </Suspense>
        ),
      },

      {
        path: "/Forlanddumptruck3cbm",
        element: (
          <Suspense fallback={
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
          }>
            <Forlanddumptruck3cbm />
          </Suspense>
        ),
      },

      {
        path: "/ForlandDumpTruck6cbm",
        element: (
          <Suspense fallback={
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
          }>
            <ForlandDumpTruck6cbm />
          </Suspense>
        ),
      },

      {
        path: "/H7",
        element: (
          <Suspense fallback={
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
          }>
            <H7 />
          </Suspense>
        ),
      },

      {
        path: "/L3",
        element: (
          <Suspense fallback={
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
          }>
            <L3 />
          </Suspense>
        ),
      },

      {
        path: "/L5",
        element: (
          <Suspense fallback={
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
          }>
            <L5 />
          </Suspense>
        ),
      },

      {
        path: "/M6",
        element: (
          <Suspense fallback={
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
          }>
            <M6 />
          </Suspense>
        ),
      },

      {
        path: "/T3",
        element: (
          <Suspense fallback={
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
          }>
            <T3 />
          </Suspense>
        ),
      },

      {
        path: "/T5",
        element: (
          <Suspense fallback={
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
          }>
            <T5 />
          </Suspense>
        ),
      },

      {
        path: "/T5Class1",
        element: (
          <Suspense fallback={
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
          }>
            <T5Class1 />
          </Suspense>
        ),
      },

      {
        path: "/T54x2",
        element: (
          <Suspense fallback={
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
          }>
            <T54x2 />
          </Suspense>
        ),
      },

      {
        path: "/fileupload",
        element: (
          <Suspense fallback={
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
          }>
            <FileUpload />
          </Suspense>
        ),
      },

      
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={
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
        }>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default router;
