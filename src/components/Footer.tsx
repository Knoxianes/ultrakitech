import { FC,useState,useEffect,useRef } from "react";
import {IoLocationSharp} from "react-icons/io5";
import {GrMail} from "react-icons/gr";
import {FaPhoneAlt} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import {motion} from "framer-motion";
import { FooterLogo } from "../assets";
import { Link,useLocation } from "react-router-dom";
import { navItems } from "../constants";
import {IoIosArrowForward} from "react-icons/io";
import {FaFacebookF,FaYoutube,FaLinkedinIn} from "react-icons/fa";
import { db } from "../main";
import { addDoc,collection } from "firebase/firestore";

const footerAnimation={
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1,
        transition:{
            duration: 1.2,
        }
    }

}
const iconHoverAnimation={
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1,
        transition:{
            duration: 1.2
        }
    },
    hover:{
        scale:[1,1.2,1,1.2,1,1.2,1,1.2,1,1.2,1,1.2,1,1.2,1,1.2],
        transition:{
            duration:5,
        }
    }
}

const Footer: FC = () => {
    const [active, setActive] = useState("");
    const match = useLocation();
    const emailRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(match.pathname === "/"){
            setActive("home");
           
        }else{
            setActive(match.pathname.split("/")[1]);
            
        }
        
    }, [match.pathname]);

    const onSubmit = async (e:any)=>{
        e.preventDefault();
        if(emailRef.current?.value === ""){
            return;
        }
        await addDoc(collection(db, "emails"), {
            email: emailRef.current?.value
        }).catch((error)=>{
            console.log(error);
        })
        emailRef.current!.value = "";
        
    }

    return(
        <>
        <div className="relative w-full bg-neutral-950 flex flex-col items-center gap-20 border-t-2 border-b-2 border-primary py-20 px-10 md:px-20 2xl:px-52">
            <motion.div variants={footerAnimation} initial="hidden" whileInView="visible" viewport={{once:true}}
            className="w-full flex flex-row  justify-between items-center cursor-default  ">
                <div className="flex flex-col w-1/5 h-20 md:h-52 2xl:h-72 items-center gap-6 2xl:gap-10">
                    <motion.div variants={iconHoverAnimation} whileHover="hover"
                    className="flex justify-center items-center rounded-[50%] bg-primary p-5 2xl:p-8 cursor-pointer">
                        <motion.a  href="tel:+381606819015">
                            <FaPhoneAlt className="text-6xl 2xl:text-7xl text-white"/>
                        </motion.a>
                    </motion.div>
                    <p className="hidden md:block text-center text-4xl 2xl:text-5xl font-jura tracking-wider"> +381 60/6819-015 </p>
                </div>
                <div className="flex flex-col w-1/5 h-20 md:h-52 2xl:h-72 items-center gap-6 2xl:gap-10">
                    <motion.div variants={iconHoverAnimation} whileHover="hover" className="flex justify-center items-center rounded-[50%] bg-primary p-5 2xl:p-8 cursor-pointer">
                        <motion.a href="mailto:info@ultrakitech.com">
                            <GrMail className="text-6xl 2xl:text-7xl text-white"/>
                        </motion.a>
                    </motion.div>
                    <p className="hidden md:block text-center text-4xl 2xl:text-5xl font-jura tracking-wide"> Dodatne informacije </p>
                </div>
                <div className="flex flex-col w-1/5 h-20 md:h-52 2xl:h-72 items-center gap-6 2xl:gap-10 ">
                    <motion.div variants={iconHoverAnimation} whileHover="hover"
                    className="flex justify-center items-center rounded-[50%] bg-primary p-3 2xl:p-5 cursor-pointer">
                        <motion.a href="https://goo.gl/maps/egDugLaALgrRuhGR9?coh=178573&entry=tt" target="_blank">
                            <IoLocationSharp className="text-7xl 2xl:text-8xl text-white"/>
                        </motion.a>
                    </motion.div>
                    <p className="hidden md:block text-center text-4xl 2xl:text-5xl font-jura tracking-wider"> Ivana Jakšića 35 Kikinda </p>
                </div>
                <div className="flex flex-col w-1/5 h-20 md:h-52 2xl:h-72 items-center gap-6 2xl:gap-10">
                    <motion.div variants={iconHoverAnimation} whileHover="hover" className="flex justify-center items-center rounded-[50%] bg-primary p-3 2xl:p-5 cursor-pointer">
                        <motion.a href="mailto:podrska@ultrakitech.com">
                            <BiSupport className="text-7xl 2xl:text-8xl text-white"/>
                        </motion.a>
                    </motion.div>
                    <p className="hidden md:block text-center text-4xl 2xl:text-5xl font-jura tracking-wide"> Podrška 24/7 </p>
                </div>
            </motion.div>
            <div className="w-full ">
                <hr/>
            </div>
            <motion.div variants={footerAnimation} initial="hidden" whileInView="visible" viewport={{once:true}}
            className="w-full lg:h-80 md:h-[25rem] h-[35rem] flex flex-row justify-around items-center ">
                <div className="flex flex-col w-2/3 md:w-2/4 h-full items-center gap-10">
                    <div className="w-full flex justify-start items-center">
                        <img loading="lazy" src={FooterLogo} alt="logo" className="w-64 2xl:w-80 h-full"/>
                    </div>
                    <p className="text-2xl 2xl:text-3xl font-jura font-medium text-text cursor-default pr-8 md:pr-0">
                        <span className="font-bold text-primary">Ultraki Tech</span> je firma sa preko 10 godina iskustva u oblasti CNC tehnologije i mehatronike, koja se 
                        bavi proizvodnjom najkvalitetnijih CNC ruter mašina na tržištu. Naš fokus je na kvalitetu, preciznosti i pouzdanosti, te naša predanost u 
                        proizvodnji vrhunskih mašina dovodi do neuporedivog nivoa performansi. 
                    </p>

                </div>
                <div className="flex flex-col justify-evenly md:justify-around h-full w-1/4 items-center">
                    {
                        navItems.map((item,index) => {
                            return(
                                <Link to={item.url} key={index} className="transiton ease-in-out duration-300  hover:translate-y-1 uppercase ">
                                    <label className={`${active === item.name ? "pb-2 border-b-2 border-secondary ": ""} text-5xl 2xl:text-6xl text-white font-jura cursor-pointer `}>{item.title}</label>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="hidden md:flex flex-col w-1/4 h-full justify-center items-center gap-4">
                    <div className="w-full">
                        <label className="text-4xl 2xl:text-5xl font-jura">Pretplatite se</label>
                    </div>
                    <form className="relative w-full" onSubmit={onSubmit}>
                        <input ref={emailRef} type="email" className="w-full h-16 2xl:h-20  border border-white text-2xl 2xl:text-3xl font-jura text-black px-2 2xl:px-4 cursor-default" placeholder="Vaša email adresa" required />
                        <motion.button whileHover={{x:[0,7,0,7,0,7,0,7,0]}} whileTap={{scale:0.90}}  transition={{duration:2}}
                        type="submit" className="absolute top-0 right-0 z-10 "><IoIosArrowForward className="text-6xl 2xl:text-7xl text-primary"/></motion.button>
                    </form>
                    <div className="w-full">
                        <label className="text-2xl 2xl:text-3xl font-jura text-neutral-500">Dobijajte obaveštenja o našim novim proizvodima</label>
                    </div>
                </div>

            </motion.div>
        </div>
        <div className="relative w-full bg-neutral-900 flex flex-row justify-center items-center text-4xl 2xl:text-5xl py-6 gap-8 ">
            <motion.a  variants={iconHoverAnimation} whileHover="hover" initial="hidden" whileInView="visible" viewport={{once:true}}
            href="https://www.facebook.com/UltrakiTech/" target="_blank" className="bg-transparent rounded-[50%] border-2 border-neutral-600 p-2 2xl:p-3 ">

                    <FaFacebookF className="text-neutral-600"/>

            </motion.a>
            <motion.a variants={iconHoverAnimation} whileHover="hover" initial="hidden" whileInView="visible" viewport={{once:true}}
            href="https://www.youtube.com/@ultrakitech1709" target="_blank" className="bg-transparent rounded-[50%] border-2 border-neutral-600 p-2 2xl:p-3">

                    <FaYoutube className="text-neutral-600"/>

            </motion.a>
            <motion.a variants={iconHoverAnimation} whileHover="hover" initial="hidden" whileInView="visible" viewport={{once:true}}
            href="https://www.linkedin.com/company/ultraki-tech" target="_blank" className="bg-transparent rounded-[50%] border-2 border-neutral-600 p-2 2xl:p-3">

                    <FaLinkedinIn className="text-neutral-600"/>

            </motion.a>
        </div>
        </>
    )
}
export default Footer;