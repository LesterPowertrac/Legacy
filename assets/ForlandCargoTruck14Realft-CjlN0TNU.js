import{r as l,u as T,j as e,a as E,L as I}from"./index-CohYGza3.js";import{a as b,c as w}from"./axios-BQD55dEB.js";import{M as L}from"./Modal2-COrQxO_O.js";import{H as M,a as O}from"./index.esm-Del5o5uK.js";import{M as U}from"./Modal-B325u18H.js";import"./iconBase-DVU2OmoS.js";import"./index-DWZnPuYv.js";const B=()=>{const[j,N]=l.useState({}),[i,o]=l.useState(!0),[v,g]=l.useState(!1),[y,m]=l.useState(null),[C,u]=l.useState(null),[z,x]=l.useState(!1),c=T(),[a,f]=l.useState({firstName:"",lastName:"",email:"",phone:"",message:""});l.useEffect(()=>{if(c.hash){const t=document.getElementById(c.hash.replace("#",""));t&&t.scrollIntoView({behavior:"smooth"})}},[c]);const p=window.location.hostname==="localhost"?w.api.local:w.api.remote,h={ForlandCargoTruck14Realft:`${p}/products/ForlandCargoTruck14Realft`},d=async()=>{try{const t={},n=Object.keys(h).map(async r=>{const F=await b.get(h[r],{responseType:"blob"}),R=URL.createObjectURL(F.data);t[r]=R});await Promise.all(n),N(t),o(!1)}catch(t){console.error("Error fetching images:",t),o(!1)}};l.useEffect(()=>{d()},[]),l.useEffect(()=>()=>{Object.values(d).forEach(t=>URL.revokeObjectURL(t))},[d]);const S=[{image:j.ForlandCargoTruck14Realft,name:"ForlandCargoTruck14Realft",link:"ForlandCargoTruck14Realft"}],s=t=>{const{name:n,value:r}=t.target;f({...a,[n]:r})},k=async t=>{t.preventDefault(),o(!0),m(null),u(null);try{await b.post(`${p}/send-email`,a),m("Message sent successfully!"),f({firstName:"",lastName:"",email:"",phone:"",message:""})}catch{u("Failed to send message. Please try again later.")}finally{o(!1),x(!0)}};return e.jsx("div",{id:"ForlandCargoTruck14Realft",className:"flex flex-col items-center justify-between overflow-hidden h-full",children:e.jsxs(M,{children:[e.jsxs(O,{children:[e.jsx("title",{children:"Product Descriptions | The Legacy"}),e.jsx("meta",{name:"description",content:"Explore our extensive range of construction equipment, trucks, and machinery from top brands like Forland, Powerquip, Forland, Kingling Isuzu, Sinotruck, and Forland."})]}),S.map(t=>e.jsxs("div",{className:"flex flex-col items-center mb-8 lg:flex-row lg:items-start lg:justify-between w-9/12 lg:w-[1150px] md:w-auto mt-24",children:[e.jsxs("div",{className:"flex flex-col items-center box-content lg:h-[320px] h-[250px] lg:w-11/12 md:w-[350px] sm:w-[300px]  p-6 lg:p-10 border-4 lg:mx-0",children:[e.jsx("img",{loading:"lazy",src:t.image,alt:t.name,className:"object-contain w-auto text-transparent relative lg:-bottom-5 -bottom-10"}),i&&e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx(E,{color:"#818CF8",secondaryColor:"#FF8C00",height:40,width:40})})]}),e.jsxs("div",{className:"lg:w-11/12  w-full flex flex-col items-center lg:items-start justify-center lg:justify-start lg:p-8 p-4 ",children:[e.jsx("h1",{className:"text-4xl text-indigo-500",children:"Forland Cargo Truck 14 Realft"}),e.jsx("br",{}),e.jsx("p",{className:"text-white",children:"The Forland Cargo Truck 14 Realft is a powerful 14-foot cargo truck designed for heavy-duty hauling, featuring a robust build and ample cargo space. Experience unmatched power and versatility with the Forland Cargo Truck 14 Realft, the ultimate solution for your business needs."}),e.jsx("br",{}),e.jsx("button",{className:"px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition",onClick:()=>g(!0),children:"Contact Our Sales"}),e.jsx("br",{}),e.jsx(I,{to:`/${t.link}#Specs`,children:e.jsx("button",{className:"px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition",children:"View Specs"})})]})]},t.name)),e.jsx("div",{id:"Specs",className:"mt-12 relative bottom-32"}),e.jsxs("div",{className:" bg-zinc-800  lg:max-w-6xl max-w-md max-h-lvh overflow-x-auto  mb-10 rounded-lg h-[30rem]",children:[e.jsx("div",{className:"sticky left-0 bg-zinc-800 ",children:e.jsx("h1",{className:"text-4xl  text-white text-center p-5 w-full",children:"TECHNICAL SPECIFICATIONS"})}),e.jsx("table",{className:"border-collapse  w-full  text-white border border-zinc-700  mb-10 rounded-md ",children:e.jsx("tbody",{className:"text-center",children:e.jsx("tr",{className:"odd:bg-zinc-700 even:bg-zinc-800",children:e.jsx("th",{className:"px-4 py-2  border-r",children:"Coming Soon..."})})})})]}),e.jsx(L,{isOpen:v,onClose:()=>g(!1),title:"Contact Us",children:e.jsx("div",{className:"p-4 lg:p-8 flex flex-col items-center justify-center w-full max-h-full",children:e.jsxs("form",{className:"flex flex-col gap-4 w-full max-w-xl",onSubmit:k,children:[e.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[e.jsx("input",{className:"w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600",type:"text",name:"firstName",placeholder:"First Name",value:a.firstName,onChange:s,autoComplete:"given-name"}),e.jsx("input",{className:"w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600",type:"text",name:"lastName",placeholder:"Last Name",value:a.lastName,onChange:s,autoComplete:"given-name"})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[e.jsx("input",{className:"w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600",type:"email",name:"email",placeholder:"Email",value:a.email,onChange:s,autoComplete:"email"}),e.jsx("input",{className:"w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600",type:"tel",name:"phone",placeholder:"Phone",value:a.phone,onChange:s,autoComplete:"tel"})]}),e.jsx("textarea",{className:"w-full rounded-lg bg-zinc-800 p-3 lg:p-4 border-2 border-indigo-800 b_glow text-base lg:text-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600",name:"message",rows:"6",placeholder:"Your message",value:a.message,onChange:s,autoComplete:"off"}),e.jsx("button",{className:"shadow-lg hover:shadow-indigo-800/50 hover:bg-zinc-900 rounded-lg py-3 lg:py-4 px-4 lg:px-8 uppercase relative overflow-hidden text-white border-2 border-indigo-800 bg-indigo-800 b_glow text-sm lg:text-lg font-bold",type:"submit",disabled:i,children:i?"Sending...":"Send Message"}),z&&e.jsx(U,{success:y,error:C,onClose:()=>x(!1)})]})})})]})})};export{B as default};