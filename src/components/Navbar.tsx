import { FC,useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MainLogo } from "../assets";
import { FooterLogo } from "../assets";
import {navItems} from "../constants";
import { motion,AnimatePresence} from "framer-motion";
import {AiFillFacebook,AiFillYoutube,AiFillLinkedin} from "react-icons/ai";
import {HambuergerMenuSVG,XSvg} from "./svg";
import {IoIosArrowUp} from "react-icons/io";

const navBarMobileAnimation={
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition:{
            duration: 0.5,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        transition:{
            duration: 0.5,
        }
    }
}

const Navbar: FC = () => {
    const [visible, setVisible] = useState(true);
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const match = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
        if(match.pathname === "/"){
            setActive("home");
            
        }else{
            setActive(match.pathname.split("/")[1]);
            
        }
        
    }, [match.pathname]);


    var timer:any = null;
    window.addEventListener("scroll", () => {
        
        if(timer !== null) {
            clearTimeout(timer);
            if(!visible){
                setVisible(true);
            }        
        }
        if(scrollY > 70){
            timer = setTimeout(function() {
                setVisible(false)   
            }, 500);
        }
    },false);
     
    return(
        <>
            <div   className={`${active==="home"?"bg-transparent":"bg-[#131313]"} relative z-[9] top-0 left-0 min-w-full flex justify-between items-center py-4 pl-8 md:pl-20 2xl:pl-28`}>
                <Link to="/"><motion.img whileHover={{scale:1.05, transition:{duration:0.2}}} whileTap={{scale:0.95,transition:{duration: 0.2,ease:"easeInOut"}}} src={match.pathname !== "/" ? FooterLogo : MainLogo} alt="logo" className="w-full h-20 md:h-24 2xl:h-32 3xl:h-28 4xl:h-32 object-contain cursor-pointer" onClick={()=>{setActive("home"); window.scrollTo(0,0)}}/></Link>
                {/* Navbar za mobilne i tablete */}
                <div className="lg:hidden font-jura font-bold text-black">
                
                    <div className="text-5xl md:text-6xl cursor-pointer">
                        <AnimatePresence>
                        {toggle ? <div className="fixed top-8 right-7 z-10" onClick={()=>setToggle(!toggle)}><XSvg color="#000" width="42px" height="42px" /></div> 
                                : <div className="absolute top-8 right-8 z-10" onClick={()=>setToggle(!toggle)}><HambuergerMenuSVG color="#f1f1f1" width="40px" height="40px" /></div>}
                        </AnimatePresence>
                    </div>
                    <AnimatePresence>
                        {toggle && <>
                            <motion.img variants={navBarMobileAnimation} initial="hidden" animate="visible" exit="exit"   src={MainLogo} alt="logo" className="h-20 md:h-24 fixed top-0 left-0 object-contain cursor-pointer z-10 mt-4 md:ml-20 ml-8"/>
                            <motion.ul  variants={navBarMobileAnimation} initial="hidden" animate="visible" exit="exit" 
                        className="bg-[#f1f1f1] fixed top-0 left-0 text-6xl md:text-7xl w-screen h-screen flex flex-col justify-center items-center gap-8 md:gap-12 px-8 pt-24 md:pt-28 ">
                            
                            {
                                navItems.map((item)=>{
                                    return(
                                        <li  key={item.name} id={item.name} className={`${active === item.name? "pb-2 border-b-2 border-secondary ": ""}  transiton ease-in-out duration-300  hover:translate-y-1 uppercase cursor-pointer`} onClick={()=>{setActive(item.name);setToggle(false)}}>
                                            <Link  to={`${item.url}`}>{item.title}</Link>
                                        </li>
                                    )
                                })
                            }
                            <div className="md:hidden flex items-end justify-end flex-row gap-2 ">
                                <a   href="https://www.facebook.com/UltrakiTech/" target="_blank" rel="noreferrer">
                                    <AiFillFacebook className="w-16 h-16"/>
                                </a>
                                <a href="https://www.youtube.com/@ultrakitech1709" target="_blank" rel="noreferrer">
                                    <AiFillYoutube className="w-16 h-16" />
                                </a>
                                <a href="" target="_blank" rel="noreferrer">
                                    <AiFillLinkedin className="w-16 h-16" />
                                </a>
                            </div>
                        </motion.ul>
                        </>
                        }
                        
                    </AnimatePresence>
                </div>
                <AnimatePresence>
                { !visible &&
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.3, ease:"easeInOut"}} whileHover={{scale:1.1, transition:{duration:0.2}}} whileTap={{scale:0.95,transition:{duration: 0.2,ease:"easeInOut"}}}
                      className={`${active==="galerija"?"hidden": active==="kontakt"?"hidden":"fixed"} bottom-4 right-4 bg-primary rounded-[50%] z-[100] cursor-pointer`} onClick={()=>window.scrollTo(0,0)}>
                        <IoIosArrowUp className="w-20 h-20 text-white"/>
                    </motion.div>
                 }
                </AnimatePresence>
                {/* Navbar za desktop i laptop */}
                <ul className="hidden lg:flex justify-end items-center gap-24 2xl:gap-36 3xl:gap-40 4xl:gap-44  font-jura font-bold pr-20 text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl  z-10">
                     {
                        navItems.map((item)=>{
                            return(
                                <li  key={item.name} id={item.name} className={`${active === item.name? " pb-2 border-b-2 border-secondary  ": ""} text-text last:border-[2px] last:rounded-[10px] last:p-2 2xl:last:p-5 last:border-primary  transiton ease-in-out duration-300 hover:translate-y-1 uppercase cursor-pointer`} onClick={()=>{setActive(item.name)}}>
                                    <Link  to={`${item.url}`}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default Navbar;