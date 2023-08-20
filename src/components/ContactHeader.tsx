import {FC} from "react";
import { motion } from "framer-motion";

const ContactHeader:FC = () =>{
      return (
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5}} className="relative text-text w-full z-[2]  px-7 pt-28 md:pt-40 lg:pt-24 2xl:pt-28 3xl:pt-40 md:pl-20 2xl:pl-28  cursor-default ">
        <h1 className="text-7xl md:text-8xl 2xl:text-9xl 3xl:text-[10rem] font-jura font-semibold mb-16 md:mb-28 2xl:mb-36 3xl:mb-40">
          Imate pitanje ili želite da saznate <br className="hidden lg:block"/> nešto više o našim mašinama?
        </h1>
        <motion.div className="lg:hidden flex flex-col md:flex-row justify-start items-center gap-10 text-4xl md:text-6xl 2xl:text-7xl text-white   font-jura font-medium lg:mb-32 mb-6 ">
          <a href="tel:+381606819015">
            <motion.button className="bg-primary px-[5.5rem] md:px-12 py-4 md:py-6  rounded-2xl shadow-box tracking-widest"
              whileHover={{scale:1.05, color: "black",backgroundColor:"#f7b500",transition:{duration: 0.3,ease:"easeInOut"}}}
              whileTap={{scale:0.95, color: "black",backgroundColor:"#f7b500",transition:{duration: 0.2,ease:"easeInOut"}}} 
            >
              +381 60/6819-015
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
      );
    }
export default ContactHeader;