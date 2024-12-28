import{r as s,u as P,j as e,a as E,L as k}from"./index-BC0GdaN1.js";import{a as w,c as j}from"./axios-ZTF0Xndr.js";import{M as I}from"./Modal2-CrTis3ta.js";import{H as L,a as _}from"./index.esm-BkfjHuDH.js";import{M}from"./Modal-CUyAN12q.js";import{S as D,a as F}from"./create-element-if-not-defined-B1IFC4_9.js";import{N as O}from"./navigation-Dw0iFEXx.js";import{P as U}from"./pagination-eRrDX1hX.js";import"./iconBase-RRE2dgP7.js";import"./index-HMN5SPBb.js";const X=()=>{const[l,v]=s.useState({}),[d,n]=s.useState(!0),[N,p]=s.useState(!1),[V,x]=s.useState(null),[y,u]=s.useState(null),[A,f]=s.useState(!1),g=P(),[o,h]=s.useState({firstName:"",lastName:"",email:"",phone:"",message:""});s.useEffect(()=>{if(g.hash){const t=document.getElementById(g.hash.replace("#",""));t&&t.scrollIntoView({behavior:"smooth"})}},[g]);const i=window.location.hostname==="localhost"?j.api.local:j.api.remote,b={KVA1:`${i}/products/15_5850KVA1`,KVA2:`${i}/products/15_5850KVA2`,KVA3:`${i}/products/15_5850KVA3`,KVA4:`${i}/products/15_5850KVA4`,KVA5:`${i}/products/15_5850KVA5`},m=async()=>{try{const t={},r=Object.keys(b).map(async c=>{const z=await w.get(b[c],{responseType:"blob"}),C=URL.createObjectURL(z.data);t[c]=C});await Promise.all(r),v(t),n(!1)}catch(t){console.error("Error fetching images:",t),n(!1)}};s.useEffect(()=>{m()},[]),s.useEffect(()=>()=>{Object.values(m).forEach(t=>URL.revokeObjectURL(t))},[m]);const K=[{id:1,image:l.KVA1,title:"KVA 1",description:"View Description",name:"KVA1"},{id:2,image:l.KVA2,title:"KVA 2",description:"View Description",name:"KVA2"},{id:3,image:l.KVA3,title:"KVA 3",description:"View Description",name:"KVA3"},{id:4,image:l.KVA4,title:"KVA 4",description:"View Description",name:"KVA4"},{id:5,image:l.KVA5,title:"KVA 5",description:"View Description",name:"KVA5"}],a=t=>{const{name:r,value:c}=t.target;h({...o,[r]:c})},S=async t=>{t.preventDefault(),n(!0),x(null),u(null);try{await w.post(`${i}/send-email`,o),x("Message sent successfully!"),h({firstName:"",lastName:"",email:"",phone:"",message:""})}catch{u("Failed to send message. Please try again later.")}finally{n(!1),f(!0)}};return e.jsx("div",{id:"KVAPowergen",className:"flex flex-col items-center justify-between overflow-hidden h-full",children:e.jsxs(L,{children:[e.jsxs(_,{children:[e.jsx("title",{children:"Product Descriptions | The Legacy"}),e.jsx("meta",{name:"description",content:"Explore our extensive range of construction equipment, trucks, and machinery from top brands like powergen, powergen, Shacman, Kingling Isuzu, Sinotruck, and Forland."})]}),e.jsxs("div",{className:"flex flex-col items-center mb-8 lg:flex-row lg:items-start lg:justify-between w-9/12 lg:w-[1150px] md:w-auto mt-24",children:[e.jsxs("div",{className:"flex flex-col items-center box-content lg:h-[350px] h-[400px] lg:w-11/12 md:w-[350px] sm:w-[300px]  p-6 lg:p-10 border-4 lg:mx-0",children:[e.jsx("style",{children:`
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
    `}),e.jsx(D,{modules:[O,U],navigation:!0,pagination:{clickable:!0},className:"w-[540px] h-[400px]",spaceBetween:30,slidesPerView:1,loop:!0,children:K.map(t=>e.jsx(F,{children:e.jsx("img",{loading:"lazy",src:t.image,alt:t.name,className:"object-contain w-auto text-transparent  relative lg:bottom-20  p-20 bottom-20 "})},t.id))}),d&&e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx(E,{color:"#818CF8",secondaryColor:"#FF8C00",height:40,width:40})})]}),e.jsxs("div",{className:"lg:w-11/12  w-full flex flex-col items-center lg:items-start justify-center lg:justify-start lg:p-8 p-4 ",children:[e.jsxs("h1",{className:"text-4xl text-indigo-500",children:["Weichai Powergen ",e.jsx("br",{}),"15-5850 KVA"]}),e.jsx("br",{}),e.jsx("p",{className:"text-white",children:"Weichai Powergen provides a comprehensive range of diesel generator sets with power outputs from 15 to 5850 kVA, designed for diverse power needs and delivering reliable performance. Power your projects with Weichai Powergen, offering a wide range of diesel generators from 15 to 5850 kVA for reliable and efficient power solutions."}),e.jsx("br",{}),e.jsx("button",{className:"px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition",onClick:()=>p(!0),children:"Contact Our Sales"}),e.jsx("br",{}),e.jsx(k,{to:"/KVAPowergen#Specs",children:e.jsx("button",{className:"px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition",children:"View Specs"})})]})]}),e.jsx("div",{id:"Specs",className:"mt-12 relative bottom-32"}),e.jsxs("div",{className:" bg-zinc-800  lg:max-w-6xl max-w-md max-h-lvh overflow-x-auto  mb-10 rounded-lg h-[30rem]",children:[e.jsx("div",{className:"sticky left-0 bg-zinc-800 ",children:e.jsx("h1",{className:"text-4xl  text-white text-center p-5 w-full",children:"TECHNICAL SPECIFICATIONS"})}),e.jsx("table",{className:"border-colapse  w-full  text-white border border-zinc-700  mb-10 rounded-md ",children:e.jsx("tbody",{className:"text-center",children:e.jsx("tr",{className:"odd:bg-zinc-700 even:bg-zinc-800",children:e.jsx("th",{className:"px-4 py-2  border-r",children:"Coming Soon..."})})})})]}),e.jsx(I,{isOpen:N,onClose:()=>p(!1),title:"Contact Us",children:e.jsx("div",{className:"p-4 lg:p-8 flex flex-col items-center justify-center w-full max-h-full",children:e.jsxs("form",{className:"flex flex-col gap-4 w-full max-w-xl",onSubmit:S,children:[e.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[e.jsx("input",{className:"w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600",type:"text",name:"firstName",placeholder:"First Name",value:o.firstName,onChange:a}),e.jsx("input",{className:"w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600",type:"text",name:"lastName",placeholder:"Last Name",value:o.lastName,onChange:a})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[e.jsx("input",{className:"w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600",type:"email",name:"email",placeholder:"Email",value:o.email,onChange:a}),e.jsx("input",{className:"w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600",type:"tel",name:"phone",placeholder:"Phone",value:o.phone,onChange:a})]}),e.jsx("textarea",{className:"w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600",name:"message",rows:"6",placeholder:"Your message",value:o.message,onChange:a}),e.jsx("button",{className:"shadow-lg hover:shadow-indigo-800/50 hover:bg-zinc-900 rounded-lg py-3 lg:py-4 px-4 lg:px-8 uppercase relative overflow-hidden text-white border-2 border-indigo-800 bg-indigo-800 b_glow text-sm lg:text-lg font-bold",type:"submit",disabled:d,children:d?"Sending...":"Send Message"}),A&&e.jsx(M,{success:V,error:y,onClose:()=>f(!1)})]})})})]})})};export{X as default};
