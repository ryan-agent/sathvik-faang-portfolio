
import {useEffect,useState} from "react";
export default function Cursor(){
 const [pos,setPos]=useState({x:0,y:0});
 useEffect(()=>{ window.addEventListener("mousemove",e=>setPos({x:e.clientX,y:e.clientY})); },[]);
 return <div style={{
  position:"fixed",top:pos.y,left:pos.x,width:40,height:40,
  borderRadius:"50%",
  background:"radial-gradient(circle, rgba(255,255,255,0.2), transparent)",
  transform:"translate(-50%,-50%)",pointerEvents:"none",zIndex:999
 }}/>
}
