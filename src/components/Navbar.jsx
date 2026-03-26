
import {useEffect,useState} from "react";
export default function Navbar(){
 const[s,setS]=useState(false);
 useEffect(()=>{window.addEventListener("scroll",()=>setS(window.scrollY>50));},[]);
 return(
  <nav className={`fixed w-full z-50 ${s?"bg-black/80 backdrop-blur":""}`}>
   <div className="flex justify-between px-10 py-4">
    <h1>Sathvik</h1>
    <div className="space-x-6">
     <a href="#projects">Projects</a>
     <a href="#contact">Contact</a>
    </div>
   </div>
  </nav>
 );
}
