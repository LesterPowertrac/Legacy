import{r as b,u as S,j as e,a as u,L as p}from"./index-Dx35h2Q4.js";import{S as m,a as x}from"./create-element-if-not-defined-Gr09zDXP.js";import{P as g}from"./pagination-C55i5SIv.js";import{w as W,A as h,P as H,p as K,s as M,k as O,a as B,f as A}from"./Forland-9u-xtgA2.js";import{a as _,c as k}from"./axios-LHA7N_b7.js";import{H as I,a as E}from"./index.esm-Bvpg8-ac.js";const ee=()=>{const[a,v]=b.useState({}),[n,T]=b.useState(!0),[r,j]=b.useState(!1),w=S(),o=()=>{T(!1),j(!0)};b.useEffect(()=>{if(w.hash){const t=document.getElementById(w.hash.replace("#",""));t&&t.scrollIntoView({block:"center",behavior:"smooth",inline:"nearest"})}},[w]);const i=window.location.hostname==="localhost"?k.api.local:k.api.remote,$={Excavator:`${i}/products/Excavator`,RoadRoller:`${i}/products/RoadRoller`,Forklift:`${i}/products/Forklift`,Grader:`${i}/products/Grader`,Bulldozer:`${i}/products/Bulldozer`,WheelLoader:`${i}/products/WheelLoader`,KVA1:`${i}/products/15_5850KVA1`,KVA2:`${i}/products/15_5850KVA2`,KVA3:`${i}/products/15_5850KVA3`,KVA4:`${i}/products/15_5850KVA4`,KVA5:`${i}/products/15_5850KVA5`,KvaGenerator1:`${i}/products/KvaGenerator1`,KvaGenerator2:`${i}/products/KvaGenerator2`,KvaGenerator3:`${i}/products/KvaGenerator3`,TractorheadH3000:`${i}/products/TractorheadH3000`,TractorheadX3000:`${i}/products/TractorheadX3000`,Mixer:`${i}/products/Mixer`,EvShacman:`${i}/products/EvShacman`,ShacmanFuelTanker:`${i}/products/ShacmanFuelTanker`,ShacmanSelfLoader:`${i}/products/ShacmanSelfLoader`,ShacmanWingVan:`${i}/products/ShacmanWingVan`,ShacmanDumpTruckH3000:`${i}/products/ShacmanDumpTruckH3000`,ShacmanDumpTruckX3000:`${i}/products/ShacmanDumpTruckX3000`,Isuzu700PFFRMediumDutyTruck:`${i}/products/700PFFRMediumDutyTruck`,AspahltDistributor:`${i}/products/AspahltDistributor`,DumpTruck6cbm:`${i}/products/DumpTruck6cbm`,FTR:`${i}/products/FTR`,FVR:`${i}/products/FVR`,Giga4x2CargoHeadRed:`${i}/products/Giga4x2CargoHeadRed`,Giga4x2TractorHead:`${i}/products/Giga4x2TractorHead`,Giga6x4DumpTruck:`${i}/products/Giga6x4DumpTruck`,Giga6x4TractorHead:`${i}/products/Giga6x4TractorHead`,Giga8x4CargoHead:`${i}/products/Giga8x4CargoHead`,Giga6x2CargoHead:`${i}/products/Giga6x2CargoHead`,GigaBoomRed:`${i}/products/GigaBoomRed`,GigaMixerTruck10W10CBM:`${i}/products/GigaMixerTruck10W(10CBM)`,GTH6x4300HP:`${i}/products/GTH6x4300HP`,Isuzu6WGarbage:`${i}/products/Isuzu6WGarbage`,IsuzuBus:`${i}/products/IsuzuBus`,IsuzuFVR6Wheeler6000LitersPTOFireTruck:`${i}/products/IsuzuFVR6Wheeler6000LitersPTOFireTruck`,IsuzuNLR4Wheeler1500LitersPTOFireTruck:`${i}/products/IsuzuNLR4Wheeler1500LitersPTOFireTruck`,IsuzuSewage:`${i}/products/IsuzuSewage`,NKR600p:`${i}/products/NKR600p`,NPR700P:`${i}/products/NPR700P`,CargoTruck6Wheeler:`${i}/products/CargoTruck6Wheeler`,DumpTruck4Cubic:`${i}/products/DumpTruck4Cubic`,DumpTruck12Cubic:`${i}/products/DumpTruck12Cubic`,GarbageTruck5Cubic:`${i}/products/GarbageTruck5Cubic`,HOWOFBBody:`${i}/products/HOWOFBBody`,ManliftTruck4x2:`${i}/products/Manlift_Truck_4x2`,MixerTruck4Cubic:`${i}/products/MixerTruck4Cubic`,MixerTruck6Cubic:`${i}/products/MixerTruck6Cubic`,OilFuelWaterTanker4Cubic:`${i}/products/OilFuelWaterTanker4Cubic`,OilFuelWaterTanker10Cubic:`${i}/products/OilFuelWaterTanker10Cubic`,ForlandCargoTruck14Realft:`${i}/products/ForlandCargoTruck14Realft`,ForlandCargoTruck20ft:`${i}/products/ForlandCargoTruck20ft`,ForlandCargoTruck17ft:`${i}/products/ForlandCargoTruck17ft`,ForlandDumpTruck6cbm:`${i}/products/ForlandDumpTruck6cbm`,Forlanddumptruck3cbm:`${i}/products/forlanddumptruck3cbm`,H7:`${i}/products/L7`,L3:`${i}/products/L3`,L5:`${i}/products/L5`,M6:`${i}/products/M6`,T3:`${i}/products/T3`,T5:`${i}/products/T5`,T5Class1:`${i}/products/T5Class1`,T54x2:`${i}/products/T5_4x2`},F=async t=>{try{const{data:l}=await _.get(t,{responseType:"blob",headers:{"ngrok-skip-browser-warning":!0}});return URL.createObjectURL(l)}catch(l){throw console.error(`Failed to fetch image from ${t}:`,l),l}},V=async(t,l=100)=>{const s=[],c=new Set;for(const f of t){const d=f();s.push(d),c.add(d),d.finally(()=>c.delete(d)),c.size>=l&&await Promise.race(c)}await Promise.all(s)},y=async()=>{const t={},l=[];try{const s=Object.entries($).map(([c,f])=>async()=>{try{const d=await F(f);t[c]=d,v(L=>({...L,[c]:d}))}catch{l.push(c)}});await V(s,100)}catch(s){console.error("Error fetching images:",s)}finally{T(!1)}return()=>{Object.values(t).forEach(s=>URL.revokeObjectURL(s))}};b.useEffect(()=>{let t;return y().then(l=>{t=l}),()=>{t&&t()}},[]);const C=[{id:1,image:a.Bulldozer,title:"Bulldozer",description:"View Description",name:"Bulldozer",link:"Bulldozer"},{id:2,image:a.Excavator,title:"Excavator",description:"View Description",name:"Excavator",link:"Excavator"},{id:3,image:a.RoadRoller,title:"Road-Roller",description:"View Description",name:"Road Roller",link:"RoadRoller"},{id:4,image:a.Forklift,title:"Forklift",description:"View Description",name:"Forklift",link:"Forklift"},{id:5,image:a.Grader,title:"Grader",description:"View Description",name:"Grader",link:"Grader"},{id:6,image:a.WheelLoader,title:"Wheel-Loader",description:"View Description",name:"Wheel Loader",link:"WheelLoader"}],D=[{id:1,image:a.KVA1,title:"KVA 1",description:"View Description",name:"KVA1"},{id:2,image:a.KVA2,title:"KVA 2",description:"View Description",name:"KVA2"},{id:3,image:a.KVA3,title:"KVA 3",description:"View Description",name:"KVA3"},{id:4,image:a.KVA4,title:"KVA 4",description:"View Description",name:"KVA4"},{id:5,image:a.KVA5,title:"KVA 5",description:"View Description",name:"KVA5"}],N=[{id:1,image:a.KvaGenerator1,title:"KvaGenerator 1",description:"View Description",name:"KvaGenerator1"},{id:2,image:a.KvaGenerator2,title:"KvaGenerator 2",description:"View Description",name:"KvaGenerator2"},{id:3,image:a.KvaGenerator3,title:"KvaGenerator 3",description:"View Description",name:"KvaGenerator3"}],G=[{id:1,image:a.TractorheadX3000,title:"Shacman Tractorhead X3000",description:"View Description",name:"Shacman Tractorhead X3000",link:"TractorheadX3000"},{id:2,image:a.TractorheadH3000,title:"Shacman Tractorhead H3000",description:"View Description",name:"Shacman Tractorhead H3000",link:"TractorheadH3000"},{id:3,image:a.Mixer,title:"Shacman Mixer",description:"View Description",name:"Shacman Mixer",link:"Mixer"},{id:4,image:a.EvShacman,title:"Ev Shacman",description:"View Description",name:"Ev Shacman",link:"EvShacman"},{id:5,image:a.ShacmanFuelTanker,title:"Shacman Fuel Tanker",description:"View Description",name:"Shacman Fuel Tanker",link:"ShacmanFuelTanker"},{id:6,image:a.ShacmanSelfLoader,title:"Shacman Self Loader",description:"View Description",name:"Shacman Self Loader",link:"ShacmanSelfLoader"},{id:7,image:a.ShacmanWingVan,title:"Shacman Wing Van",description:"View Description",name:"Shacman Wing Van",link:"ShacmanWingVan"},{id:8,image:a.ShacmanDumpTruckH3000,title:"Shacman Dump Truck H3000",description:"View Description",name:"Shacman Dump Truck H3000",link:"ShacmanDumpTruckH3000"},{id:9,image:a.ShacmanDumpTruckX3000,title:"Shacman Dump Truck X3000",description:"View Description",name:"Shacman Dump Truck X3000",link:"ShacmanDumpTruckX3000"}],z=[{id:1,image:a.Isuzu700PFFRMediumDutyTruck,title:"Isuzu 700 PFFR",description:"View Description",name:"Isuzu 700 PFFR",link:"Isuzu700PFFRMediumDutyTruck"},{id:2,image:a.AspahltDistributor,title:"Aspahlt Distributor",description:"View Description",name:"Aspahlt Distributor",link:"AspahltDistributor"},{id:3,image:a.DumpTruck6cbm,title:"Dump Truck 6cbm",description:"View Description",name:"Dump Truck 6cbm",link:"DumpTruck6cbm"},{id:4,image:a.FTR,title:"FTR",description:"View Description",name:"FTR",link:"FTR"},{id:5,image:a.FVR,title:"FVR",description:"View Description",name:"FVR",link:"FVR"},{id:6,image:a.Giga4x2CargoHeadRed,title:"Giga 4x2 Cargo Head",description:"View Description",name:"Giga 4x2 Cargo Head",link:"Giga4x2CargoHeadRed"},{id:7,image:a.Giga4x2TractorHead,title:"Giga 4x2 TractorHead",description:"View Description",name:"Giga 4x2 TractorHead",link:"Giga4x2TractorHead"},{id:8,image:a.Giga6x2CargoHead,title:"Giga 6x2 Cargo Head",description:"View Description",name:"Giga 6x2 Cargo Head",link:"Giga6x2CargoHead"},{id:9,image:a.Giga6x4DumpTruck,title:"Giga 6x4 Dump Truck",description:"View Description",name:"Giga 6x4 Dump Truck",link:"Giga6x4DumpTruck"},{id:10,image:a.Giga6x4TractorHead,title:"Giga 6x4 Tractor Head",description:"View Description",name:"Giga 6x4 Tractor Head",link:"Giga6x4TractorHead"},{id:11,image:a.Giga8x4CargoHead,title:"Giga 8x4 Cargo Head",description:"View Description",name:"Giga 8x4 Cargo Head",link:"Giga8x4CargoHead"},{id:12,image:a.GigaBoomRed,title:"Giga Boom",description:"View Description",name:"Giga Boom",link:"GigaBoomRed"},{id:13,image:a.GigaMixerTruck10W10CBM,title:"Giga Mixer Truck 10W 10CBM",description:"View Description",name:"Giga Mixer Truck 10W 10CBM",link:"GigaMixerTruck10W10CBM"},{id:14,image:a.GTH6x4300HP,title:"GTH 6x4 300HP",description:"View Description",name:"GTH 6x4 300HP",link:"GTH6x4300HP"},{id:16,image:a.Isuzu6WGarbage,title:"Isuzu 6W Garbage",description:"View Description",name:"Isuzu 6 WGarbage",link:"Isuzu6WGarbage"},{id:17,image:a.IsuzuBus,title:"Isuzu Bus",description:"View Description",name:"Isuzu Bus",link:"IsuzuBus"},{id:18,image:a.IsuzuFVR6Wheeler6000LitersPTOFireTruck,title:"Isuzu FVR6 Wheeler 6000Liters PTO FireTruck",description:"View Description",name:"Isuzu FVR6 Wheeler 6000Liters PTO FireTruck",link:"IsuzuFVR6Wheeler6000LitersPTOFireTruck"},{id:19,image:a.IsuzuNLR4Wheeler1500LitersPTOFireTruck,title:"Isuzu NLR4 Wheeler 1500Liters PTO FireTruck",description:"View Description",name:"Isuzu NLR4 Wheeler 1500Liters PTO FireTruck",link:"IsuzuNLR4Wheeler1500LitersPTOFireTruck"},{id:20,image:a.IsuzuSewage,title:"Isuzu Sewage",description:"View Description",name:"Isuzu Sewage",link:"IsuzuSewage"},{id:21,image:a.NKR600p,title:"NKR 600P",description:"View Description",name:"NKR 600P",link:"NKR600p"},{id:22,image:a.NPR700P,title:"NPR 700P",description:"View Description",name:"NPR 700P",link:"NPR700P"}],P=[{id:1,image:a.CargoTruck6Wheeler,title:"Cargo Truck 6 Wheeler",description:"View Description",name:"Cargo Truck 6 Wheeler",link:"CargoTruck6Wheeler"},{id:3,image:a.DumpTruck4Cubic,title:"Dump Truck 4 Cubic",description:"View Description",name:"Dump Truck 4 Cubic",link:"DumpTruck4Cubic"},{id:7,image:a.ManliftTruck4x2,title:"Manlift Truck 4x2",description:"View Description",name:"Manlift Truck 4x2",link:"ManliftTruck4x2"},{id:8,image:a.MixerTruck4Cubic,title:"Mixer Truck 4 Cubic",description:"View Description",name:"Mixer Truck 4 Cubic",link:"MixerTruck4Cubic"},{id:9,image:a.MixerTruck6Cubic,title:"Mixer Truck 6 Cubic",description:"View Description",name:"Mixer Truck 6 Cubic",link:"MixerTruck6Cubic"},{id:10,image:a.OilFuelWaterTanker4Cubic,title:"Oil Fuel Water Tanker 4 Cubic",description:"View Description",name:"Oil Fuel Water Tanker 4 Cubic",link:"OilFuelWaterTanker4Cubic"},{id:11,image:a.OilFuelWaterTanker10Cubic,title:"Oil Fuel Water Tanker 10 Cubic",description:"View Description",name:"Oil Fuel Water Tanker 10 Cubic",link:"OilFuelWaterTanker10Cubic"}],R=[{id:1,image:a.ForlandCargoTruck14Realft,title:"Forland Cargo Truck 14Realft",description:"View Description",name:"Forland Cargo Truck 14Realft",link:"ForlandCargoTruck14Realft"},{id:2,image:a.ForlandCargoTruck20ft,title:"Forland Cargo Truck 20ft",description:"View Description",name:"Forland Cargo Truck 20ft",link:"ForlandCargoTruck20ft"},{id:3,image:a.ForlandDumpTruck6cbm,title:"Forland Dump Truck 6cbm",description:"View Description",name:"Forland Dump Truck 6cbm",link:"ForlandDumpTruck6cbm"},{id:4,image:a.H7,title:"Forland L7 Cargo Truck",description:"View Description",name:"H7",link:"H7"},{id:5,image:a.L3,title:"Forland L3 Cargo truck",description:"View Description",name:"L3",link:"L3"},{id:6,image:a.L5,title:"Forland L5",description:"View Description",name:"L5",link:"L5"},{id:7,image:a.M6,title:"Forland M6",description:"View Description",name:"M6",link:"M6"},{id:8,image:a.T3,title:"Forland T3 Cargo Truck",description:"View Description",name:"T3",link:"T3"},{id:9,image:a.T5,title:"Forland T5 Cargo Truck",description:"View Description",name:"T5",link:"T5"},{id:10,image:a.T5Class1,title:"T5 Class 1",description:"View Description",name:"T5 Class 1",link:"T5Class1"},{id:11,image:a.T54x2,title:"Forland T5 4x2 Dump Truck",description:"View Description",name:"T5 4x2",link:"T54x2"},{id:12,image:a.ForlandCargoTruck17ft,title:"Forland Cargo Truck 17ft",description:"View Description",name:"Forland Cargo Truck 17ft",link:"ForlandCargoTruck17ft"},{id:13,image:a.Forlanddumptruck3cbm,title:"Forland Dump Truck 3cbm",description:"View Description",name:"Forland Dump Truck 3cbm",link:"Forlanddumptruck3cbm"}];return e.jsx("div",{id:"Products",className:"p-10 flex flex-col items-center justify-center overflow-hidden",children:e.jsxs(I,{children:[e.jsxs(E,{children:[e.jsx("title",{children:"Our Products | The Legacy"}),e.jsx("meta",{name:"description",content:"Explore our extensive range of construction equipment, trucks, and machinery from top brands like Weichai, Powerquip, Shacman, Kingling Isuzu, Sinotruck, and Forland."})]}),e.jsx("h1",{"data-aos":"fade-left",className:"text-[52px] font-semibold mb-1 leading-normal uppercase text-indigo-500 text-center mt-16",children:"Our Products"}),e.jsx("p",{"data-aos":"fade-right",className:"text-[20px] font-semibold mb-5  text-zinc-100 text-center mx-auto lg:mx-20",children:"We proudly distribute a wide range of top-quality brands, including Weichai, Powerquip, Shacman, Kingling Isuzu, Sinotruk, and Forland. Feel free to explore our offerings and discover the perfect solutions for your needs."}),e.jsx("hr",{"data-aos":"fade-up",className:"bg-zinc-100 w-full mb-16 border-0 h-2 rounded-md hr"}),e.jsx("img",{loading:"lazy",onLoad:o,src:W,alt:"Weichai",className:`${r?"loaded":"blur"} mx-auto lg:h-28 md:h-28 h-28 bg-zinc-300 rounded-lg`}),e.jsx(m,{modules:[g,h],spaceBetween:20,effect:"fade",preloadimages:"true",pagination:{clickable:!0,el:".swiper-pagination-custom"},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},640:{slidesPerView:1},0:{slidesPerView:1}},loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},className:"w-full z-10 ",children:C.map(t=>e.jsx(x,{"aria-live":"polite",children:e.jsxs("div",{className:"p-5 flex flex-col justify-between lg:h-[400px] ",children:[e.jsx("h2",{id:"Weichai",className:"lg:text-xl md:text-xl sm:text-sm  font-bold text-indigo-500 text-center",children:t.title}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full ",children:e.jsxs("div",{className:"box-content h-[240px] w-[240px] p-10 border-4  rounded-md bg-zinc-800 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]",children:[e.jsx("img",{loading:"lazy",onLoad:o,src:t.image,alt:t.name,className:`${t.title==="Road-Roller"?"w-auto h-auto relative bottom-16":""} 
                              ${t.title==="Excavator"?"w-auto h-auto relative bottom-12":""} 
                              ${t.title==="Forklift"?"w-auto h-auto relative top-16":""} 
                              ${t.title==="Grader"?"w-auto h-auto relative top-24":""} 
                              ${t.title==="Wheel-Loader"?"w-auto h-auto relative top-16":""} 
                              ${r?"loaded":"blur"}
                              object-cover w-full text-transparent`}),!r&&n&&e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx(u,{color:"#818CF8",secondaryColor:"#818CF8",height:40,width:40})})]})}),e.jsx("div",{className:"absolute lg:inset-3 inset-2  flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300",children:e.jsx(p,{to:`/${t.link}#${t.link}`,className:"z-10",children:e.jsx("button",{className:"neno-button shadow-xl hover:indigo-zinc-400/50 hover:bg-zinc-900 rounded-lg py-2 px-4 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-md text-bold mb-4 my-2",children:t.description})})})]})},t.id))}),e.jsx("div",{className:" relative gap-2 z-10",children:e.jsx("div",{className:"swiper-pagination-custom  flex justify-center "})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("hr",{"data-aos":"fade-up",className:"bg-zinc-100 w-full mb-14 border-0 h-2 rounded-md hr"}),e.jsx("span",{}),e.jsx("img",{loading:"lazy",onLoad:o,src:H,alt:"PowerQuip",className:`${r?"loaded":"blur"} mx-auto lg:h-24 md:h-28 h-28 rounded-lg mt-10`}),e.jsx("h2",{id:"Powergen",className:"text-xl font-bold text-indigo-500 text-center",children:"15-5850 KVA"}),e.jsxs(m,{"data-aos":"fade-up",modules:[g,h],spaceBetween:20,effect:"fade",preloadimages:"true",pagination:{clickable:!0,el:".swiper-pagination-custompowergen"},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:3},640:{slidesPerView:2},0:{slidesPerView:1}},autoplay:{delay:5e3},className:"w-full z-10",children:[D.map(t=>e.jsx(x,{"aria-live":"polite",children:e.jsx("div",{className:"p-5 flex flex-col justify-between lg:h-[400px] ",children:e.jsx("div",{className:"flex flex-col items-center justify-center w-full ",children:e.jsxs("div",{className:"box-content  p-10 sm:mx-5 md:mx-0 lg:mx-0 border-4 rounded-md bg-zinc-800 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]",children:[e.jsx("img",{loading:"lazy",onLoad:o,src:t.image,alt:t.name,className:`${r?"loaded":"blur"} text-transparent`}),!r&&n&&e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx(u,{color:"#818CF8",secondaryColor:"#818CF8",height:40,width:40})})]})})})},t.id)),e.jsx("div",{className:"absolute inset-0  z-10  flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300",children:e.jsx(p,{to:"/KVAPowergen#KVAPowergen",children:e.jsx("button",{className:"neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-4 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-md text-bold mb-4 my-2",children:"View Description"})})})]}),e.jsx("div",{className:" gap-2 z-20",children:e.jsx("div",{className:"swiper-pagination-custompowergen  flex justify-center "})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("hr",{"data-aos":"fade-up",className:"bg-zinc-100 w-full mb-14 border-0 h-2 rounded-md hr"}),e.jsx("span",{}),e.jsx("img",{loading:"lazy",onLoad:o,src:K,alt:"PowerQuip",className:`${r?"loaded":"blur"} mx-auto lg:h-24 md:h-28 h-28 rounded-lg mt-10`}),e.jsx("h2",{id:"PowerQuip",className:"text-xl font-bold text-indigo-500 text-center",children:"18-2750 KVA"}),e.jsxs(m,{"data-aos":"fade-up",modules:[g,h],spaceBetween:20,effect:"fade",preloadimages:"true",pagination:{clickable:!0,el:".swiper-pagination-customs"},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:3},640:{slidesPerView:2},0:{slidesPerView:1}},autoplay:{delay:5e3},className:"w-full z-10",children:[N.map(t=>e.jsx(x,{"aria-live":"polite",children:e.jsx("div",{className:"p-5 flex flex-col justify-between lg:h-[290px] ",children:e.jsx("div",{className:"flex flex-col items-center justify-center w-full ",children:e.jsxs("div",{className:"box-content  p-10 sm:mx-5 md:mx-0 lg:mx-0 border-4 rounded-md bg-zinc-800 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]",children:[e.jsx("img",{loading:"lazy",onLoad:o,src:t.image,alt:t.name,className:`${r?"loaded":"blur"} text-transparent`}),!r&&n&&e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx(u,{color:"#818CF8",secondaryColor:"#818CF8",height:40,width:40})})]})})})},t.id)),e.jsx("div",{className:"absolute inset-0  z-10  flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300",children:e.jsx(p,{to:"/KvaGenerator#KvaGenerator",children:e.jsx("button",{className:"neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-4 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-md text-bold mb-4 my-2",children:"View Description"})})})]}),e.jsx("div",{className:" gap-2 z-20",children:e.jsx("div",{className:"swiper-pagination-customs  flex justify-center "})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("hr",{"data-aos":"fade-up",className:"bg-zinc-100 w-full mb-16 border-0 h-2 rounded-md hr"}),e.jsx("span",{}),e.jsx("img",{loading:"lazy",onLoad:o,src:M,alt:"Shacman",className:`${r?"loaded":"blur"} mx-auto lg:p-4 md:p-4 h-auto bg-zinc-300 rounded-lg mt-3`}),e.jsx(m,{"data-aos":"fade-up",modules:[g,h],spaceBetween:20,effect:"fade",preloadimages:"true",pagination:{clickable:!0,el:".swiper-pagination-customshacman"},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:3},640:{slidesPerView:2},0:{slidesPerView:1}},loop:!0,autoplay:{delay:5e3},className:"w-full z-10",children:G.map(t=>e.jsx(x,{"aria-live":"polite",children:e.jsxs("div",{className:"p-5 flex flex-col justify-between lg:h-[400px] ",children:[e.jsx("h2",{id:"Shacman",className:"text-xl font-bold text-indigo-500 text-center mb-auto",children:t.title}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full mt-auto",children:e.jsxs("div",{className:"box-content h-[240px] w-[240px] p-10 border-4 rounded-md bg-zinc-800 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]",children:[e.jsx("img",{loading:"lazy",onLoad:o,src:t.image,alt:t.name,className:`${t.title==="Shacman Tractorhead X3000"?"w-auto h-full relative top-0":""} 
                              ${t.title==="Ev Shacman"?"w-auto   relative top-10":""} 
                              ${t.title==="Shacman Fuel Tanker"?"relative top-6":""} 
                              ${t.title==="Shacman Self Loader"?"w-auto h-full relative top-0":""} 
                              ${t.title==="Shacman Wing Van"?"relative top-6":""} 
                              ${t.title==="Shacman Dump Truck H3000"?"relative top-3":""} 
                              ${t.title==="Shacman Dump Truck X3000"?" relative top-3":""} 
                              ${t.title==="Ev Shacman"?"w-auto h-[200px] relative top-5":""}
                              ${r?"loaded":"blur"}
                              object-cover w-full text-transparent`}),!r&&n&&e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx(u,{color:"#818CF8",secondaryColor:"#818CF8",height:40,width:40})})]})}),e.jsx("div",{className:"absolute lg:inset-3 inset-2 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300",children:e.jsx(p,{to:`/${t.link}#${t.link}`,className:"z-10",children:e.jsx("button",{className:"neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-4 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-md text-bold mb-4 my-2",children:t.description})})})]})},t.id))}),e.jsx("div",{className:" relative gap-2 z-10",children:e.jsx("div",{className:"swiper-pagination-customshacman  flex justify-center "})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{}),e.jsx("hr",{"data-aos":"fade-up",className:"bg-zinc-100 w-full mb-16 border-0 h-2 rounded-md hr"}),e.jsx("img",{loading:"lazy",onLoad:o,src:O,alt:"Kingling Isuzu",className:`${r?"loaded":"blur"} mx-auto lg:h-24 md:h-28 h-28 bg-zinc-300 rounded-lg mt-3`}),e.jsx(m,{"data-aos":"fade-up",modules:[g,h],spaceBetween:20,effect:"fade",preloadimages:"true",pagination:{clickable:!0,el:".swiper-pagination-customkinglingisuzu"},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:3},640:{slidesPerView:2},0:{slidesPerView:1}},loop:!0,autoplay:{delay:5e3},className:"w-full z-10",children:z.map(t=>e.jsx(x,{"aria-live":"polite",children:e.jsxs("div",{className:"p-5 flex flex-col justify-between lg:h-[400px] ",children:[e.jsx("h2",{id:"KinglingIsuzu",className:`${t.title==="Isuzu NLR4 Wheeler 1500Liters PTO FireTruck"||t.title==="Isuzu FVR6 Wheeler 6000Liters PTO FireTruck"?"lg:text-sm text-sm":"lg:text-xl text-sm"}
                                font-bold text-indigo-500 text-center mb-auto `,children:t.title}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full mt-auto",children:e.jsxs("div",{className:"box-content h-[240px] w-[240px] p-10 border-4 rounded-md bg-zinc-800 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]",children:[e.jsx("img",{loading:"lazy",onLoad:o,src:t.image,alt:t.name,className:`${t.title==="Isuzu 700 PFFR"?" h-auto w-auto relative top-8":""}
                              ${t.title==="Aspahlt Distributor"?" h-auto w-auto relative top-20":""}
                              ${t.title==="Dump Truck 6cbm"?" h-auto w-auto relative top-16":""}
                              ${t.title==="FTR"?" h-auto w-auto relative top-8":""}
                              ${t.title==="FVR"?" h-auto w-auto relative top-8":""}
                              ${t.title==="Giga 4x2 Cargo Head"?" h-auto w-auto relative top-16":""}
                              ${t.title==="Giga 4x2 TractorHead"?" h-auto w-auto relative top-14":""}
                              ${t.title==="Giga 6x2 Cargo Head"?" h-auto w-auto relative top-10":""}
                              ${t.title==="Giga 6x4 Dump Truck"?" h-auto w-auto relative top-20":""}
                              ${t.title==="Giga 6x4 Tractor Head"?" h-auto w-auto relative top-14":""}
                              ${t.title==="Giga 8x4 TractorHead"?" h-auto w-auto relative top-14":""}
                              ${t.title==="Giga 8x4 Cargo Head"?" h-auto w-auto relative top-20":""}
                              ${t.title==="Giga Boom"?" h-auto w-auto relative top-20":""}
                              ${t.title==="Giga Mixer Truck 10W 10CBM"?" h-auto w-auto relative top-10":""}
                              ${t.title==="GTH 6x4 300HP"?" h-auto w-auto relative top-16":""}
                              ${t.title==="HOWO T7"?" h-auto w-auto relative top-14":""}
                              ${t.title==="Isuzu 6W Garbage"?" h-auto w-auto relative top-12":""}
                              ${t.title==="Isuzu Bus"?" h-auto w-auto relative top-14":""}
                              ${t.title==="Isuzu FVR6 Wheeler 6000Liters PTO FireTruck"?" h-auto w-auto relative top-14":""}
                              ${t.title==="Isuzu NLR4 Wheeler 1500Liters PTO FireTruck"?" h-auto w-auto relative top-14":""}
                              ${t.title==="Isuzu Sewage"?" h-auto w-auto relative top-20":""}
                              ${t.title==="NKR 600P"?" h-auto w-auto relative top-10":""}
                              ${t.title==="NPR 700P"?" h-auto w-auto relative top-10":""}
                              ${r?"loaded":"blur"}
                              object-cover w-full text-transparent`}),!r&&n&&e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx(u,{color:"#818CF8",secondaryColor:"#818CF8",height:40,width:40})})]})}),e.jsx("div",{className:"absolute lg:inset-3 inset-2 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300",children:e.jsx(p,{to:`/${t.link}#${t.link}`,className:"z-10",children:e.jsx("button",{className:"neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-4 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-md text-bold mb-4 my-2",children:t.description})})})]})},t.id))}),e.jsx("div",{className:" relative gap-2 z-10",children:e.jsx("div",{className:"swiper-pagination-customkinglingisuzu  flex justify-center "})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{}),e.jsx("hr",{"data-aos":"fade-up",className:"bg-zinc-100 w-full mb-16 border-0 h-2 rounded-md hr"}),e.jsx("img",{loading:"lazy",onLoad:o,src:B,alt:"Sinotruck",className:`${r?"loaded":"blur"} mx-auto lg:h-24 md:h-28 h-28 bg-zinc-300 rounded-lg mt-3`}),e.jsx(m,{"data-aos":"fade-up",modules:[g,h],spaceBetween:20,effect:"fade",preloadimages:"true",pagination:{clickable:!0,el:".swiper-pagination-customsinotruck"},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:3},640:{slidesPerView:2},0:{slidesPerView:1}},loop:!0,autoplay:{delay:5e3},className:"w-full z-10",children:P.map(t=>e.jsx(x,{"aria-live":"polite",children:e.jsxs("div",{className:"p-5 flex flex-col justify-between lg:h-[400px] ",children:[e.jsx("h2",{id:"Sinotruck",className:"lg:text-xl md:text-xl sm:text-sm  font-bold text-indigo-500 text-center ",children:t.title}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full mt-auto",children:e.jsxs("div",{className:"box-content h-[240px] w-[240px] p-10 border-4 rounded-md bg-zinc-800 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]",children:[e.jsx("img",{loading:"lazy",onLoad:o,src:t.image,alt:t.name,className:`${t.title==="Cargo Truck 6 Wheeler"?"w-full h-full relative top-6":""} 
                              ${t.title==="Cargo Truck 6 Wheeler Version 2"?"w-auto h-auto relative top-14 object-cover":""} 
                              ${t.title==="Dump Truck 4 Cubic"?"w-auto h-full relative top-5":""} 
                              ${t.title==="Dump Truck 12 Cubic"?"w-auto h-[200px] relative top-5":""} 
                              ${t.title==="Garbage Truck 5 Cubic"?"w-auto h-[200px] relative top-5":""}
                              ${t.title==="HOWO FB Body"?"w-auto h-full relative top-1":""}
                              ${t.title==="Manlift Truck 4x2"?"w-auto h-[200px] relative top-6":""}
                              ${t.title==="Mixer Truck 4 Cubic"?"w-auto h-[200px] relative top-6":""}
                              ${t.title==="Mixer Truck 6 Cubic"?"w-auto h-full relative top-6":""}
                              ${t.title==="Oil Fuel Water Tanker 4 Cubic"?"w-auto h-full relative top-6":""}
                              ${t.title==="Oil Fuel Water Tanker 10 Cubic"?"w-auto h-full relative top-2":""} 
                              ${r?"loaded":"blur"}
                              object-cover w-full text-transparent`}),!r&&n&&e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx(u,{color:"#818CF8",secondaryColor:"#818CF8",height:40,width:40})})]})}),e.jsx("div",{className:"absolute lg:inset-3 inset-2 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300",children:e.jsx(p,{to:`/${t.link}#${t.link}`,className:"z-10",children:e.jsx("button",{className:"neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-4 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-md text-bold mb-4 my-2",children:t.description})})})]})},t.id))}),e.jsx("div",{className:" relative gap-2 z-10",children:e.jsx("div",{className:"swiper-pagination-customsinotruck  flex justify-center "})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{id:""}),e.jsx("hr",{"data-aos":"fade-up",className:"bg-zinc-100 w-full mb-16 border-0 h-2 rounded-md hr"}),e.jsx("img",{loading:"lazy",onLoad:o,src:A,alt:"Forland",className:`${r?"loaded":"blur"} mx-auto  lg:h-24 md:h-28 h-28 bg-zinc-300 rounded-lg mt-3`}),e.jsx(m,{"data-aos":"fade-up",modules:[g,h],spaceBetween:20,effect:"fade",preloadimages:"true",pagination:{clickable:!0,el:".swiper-pagination-customforland"},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:3},640:{slidesPerView:2},0:{slidesPerView:1}},loop:!0,autoplay:{delay:5e3},className:"w-full z-10",children:R.map(t=>e.jsx(x,{"aria-live":"polite",children:e.jsxs("div",{className:"p-5 flex flex-col justify-between lg:h-[400px] ",children:[e.jsx("h2",{id:"Forland",className:"lg:text-xl md:text-xl sm:text-sm font-bold text-indigo-500 text-center",children:t.title}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full",children:e.jsxs("div",{className:"box-content h-[240px] w-[240px] p-10 border-4 rounded-md bg-zinc-800 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]",children:[e.jsx("img",{loading:"lazy",onLoad:o,src:t.image,alt:t.name,className:`${t.title==="Forland Cargo Truck 14Realft"?"w-auto h-auto relative top-10 object-cover":""} 
                              ${t.title==="Forland Cargo Truck 20ft"?"w-auto h-auto relative top-10 ":""} 
                              ${t.title==="Forland Dump Truck 6cbm"?"w-auto h-[200px] relative top-5":""} 
                              ${t.title==="Forland L7 Cargo Truck"?"w-auto h-full relative top-5":""} 
                              ${t.title==="Forland L3 Cargo truck"?"w-auto h-auto relative top-20":""}
                              ${t.title==="Forland L5"?"w-auto h-[180px] relative top-14":""}
                              ${t.title==="Forland M6"?"w-auto h-auto relative top-20":""}
                              ${t.title==="Forland T3 Cargo Truck"?"w-auto h-auto relative top-6":""}
                              ${t.title==="Forland T5 Cargo Truck"?"w-auto h-auto relative top-6":""}
                              ${t.title==="T5 Class 1"?"w-auto h-auto relative top-10":""}
                              ${t.title==="Forland T5 4x2 Dump Truck "?"w-auto h-auto relative top-6":""} 
                              ${t.title==="Forland Cargo Truck 17ft"?"w-auto h-auto relative top-20":""} 
                              ${t.title==="Forland Dump Truck 3cbm"?"w-auto h-full relative top-10":""} 
                              ${r?"loaded":"blur"}
                              object-cover w-full text-transparent`}),!r&&n&&e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx(u,{color:"#818CF8",secondaryColor:"#818CF8",height:40,width:40})})]})}),e.jsx("div",{className:"absolute lg:inset-3 inset-2 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-zinc-900 bg-opacity-50 transition-opacity duration-300",children:e.jsx(p,{to:`/${t.link}#${t.link}`,className:"z-10",children:e.jsx("button",{className:"neno-button shadow-xl hover:shadow-indigo-400/50 hover:bg-zinc-900 rounded-lg py-2 px-4 uppercase relative top-4 overflow-hidden text-black hover:text-indigo-500 border-2  border-indigo-400 bg-indigo-400 b_glow text-md text-bold mb-4 my-2",children:t.description})})})]})},t.id))}),e.jsx("div",{className:" relative gap-2 z-10 mb-10",children:e.jsx("div",{className:"swiper-pagination-customforland  flex justify-center "})})]})})};export{ee as default};
