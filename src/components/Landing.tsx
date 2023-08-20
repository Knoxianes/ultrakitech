import { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const landingAnimation={
    hidden: { opacity: 0},
    visible: { opacity: 1,
             transition: { 
                duration: 1.25, 
                ease: "easeInOut",}
             },
}

const Landing: FC = () => {
    return(
       <motion.div
        variants={landingAnimation}
        initial="hidden"
        animate="visible"
        className="relative cursor-default z-[2] px-7 pt-28 md:pt-40 lg:pt-24 2xl:pt-28 md:pl-20 2xl:pl-28  ">
            <h1 
                className="text-[5rem] md:text-[8rem] 2xl:text-[10rem]  text-primary font-heebo font-bold word-spacing-1 mb-12 md:mb-16 lg:mb-12 2xl:mb-16 ">

                CNC <span className="text-white">MAŠINE</span><br/>
                PROIZVODNJA <br className="hidden md:block"/> I PRODAJA

            </h1>
            <p 
                className="text-[2.95rem] md:text-5xl 2xl:text-7xl lg:max-w-[670px] xl:max-w-[650px] 2xl:max-w-[950px]  text-text word-spacing-2 font-jura font-medium mb-20 md:mb-28 lg:mb-28 2xl:mb-48" >
                
                Visoko kvalitetna <br className="lg:hidden"/> proizvodnja CNC mašina <br/>
                za obradu svih materijala,<br className="hidden md:block lg:hidden"/> od drveta i plastike do čelika.

            </p>
            <div 
                className="flex flex-col md:flex-row justify-start items-center gap-10 text-4xl md:text-5xl 2xl:text-7xl text-white   font-jura font-medium lg:mb-32 ">
                <Link to="/kontakt" onClick={()=>document.getElementById("kontakt")?.click()}>
                    <motion.button className="bg-primary px-32 py-4 md:py-6 md:px-14  rounded-2xl shadow-box word-spacing-2"
                        whileHover={{scale:1.05, color: "black",backgroundColor:"#f7b500",transition:{duration: 0.3,ease:"easeInOut"}}}
                        whileTap={{scale:0.95, color: "black",backgroundColor:"#f7b500",transition:{duration: 0.2,ease:"easeInOut"}}} 
                    >
                        POŠALJITE UPIT

                    </motion.button>
                </Link>
                <a href="tel:+381606819015">
                    <motion.button className="bg-primary px-[7.5rem] md:px-14 py-4 md:py-6  rounded-2xl shadow-box tracking-widest"
                        whileHover={{scale:1.05, color: "black",backgroundColor:"#f7b500",transition:{duration: 0.3,ease:"easeInOut"}}}
                        whileTap={{scale:0.95, color: "black",backgroundColor:"#f7b500",transition:{duration: 0.2,ease:"easeInOut"}}}  
                    >
                        POZOVITE NAS

                    </motion.button>
                </a>
            </div>
       </motion.div>
    )
}
export default Landing;