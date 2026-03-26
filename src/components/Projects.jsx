
import {projects} from "../data/data";
import {motion} from "framer-motion";
export default function Projects(){
 return(
  <section id="projects" className="py-40 px-6 md:px-20">
   <h2 className="text-3xl text-center mb-12">Projects</h2>
   <div className="grid md:grid-cols-2 gap-10">
    {projects.map((p,i)=>(
     <motion.div key={i}
      initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}}
      whileHover={{scale:1.04,y:-6}}
      className="p-6 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black hover:shadow-lg">
      <h3 className="text-xl font-bold">{p.title}</h3>
      <p>{p.desc}</p>
     </motion.div>
    ))}
   </div>
  </section>
 );
}
