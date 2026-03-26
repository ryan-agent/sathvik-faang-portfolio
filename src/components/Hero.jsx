
import {motion} from "framer-motion";
import {hero} from "../data/data";
export default function Hero(){
 return(
  <section className="h-screen flex flex-col justify-center items-center text-center">
   <motion.h1 initial={{opacity:0,y:60}} animate={{opacity:1,y:0}}
    transition={{type:"spring",stiffness:70}} className="text-6xl font-bold">
    {hero.name}
   </motion.h1>
   <p className="mt-4">{hero.title}</p>
  </section>
 );
}
