import { FC, useState } from 'react'
import { machines } from '../constants'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai";
import {motion, AnimatePresence, animate} from 'framer-motion'

const ImgAnimation={
    hidden: (next:boolean) =>
        {
            return {
                x: next? '100vw' : '-100vw',
                opacity: 0 
            }
        },
    visible:{
        zIndex: 1,
        x:0,
        opacity:1,
    },
    exit: (next:boolean) =>{
        return {
            zIndex: 0,
            x: next? '-100vw' : '100vw',
            opacity: 0 
        }
    }
}

const Machines:FC = () => {
    const [visible, setVisible] = useState(0);
    const [next,setNext] = useState(false);
    const [hovered,setHovered] = useState(false);

    const handleNext = () => {
        setNext(true);
        if(visible < machines.length - 1){
            setVisible(visible + 1)
        }else{
            setVisible(0)
        }
    }
    const handlePrev = () => {
        setNext(false);
        if(visible > 0){
            setVisible(visible - 1)
        }else{
            setVisible(machines.length - 1)
        }
    }
    const handlePhotoClick = (index:number) => {
        return () => {
            setNext(visible < index);
            setVisible(index);
        }
    }
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
      };
    return(
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}} className='py-12 cursor-default'>
            <div className='relative bg-primary  lg:w-2/5 xl:w-5/12 2xl:w-1/3  mb-16 2xl:mb-24 rounded-r-lg'>
                <h2 className="font-semibold font-jura text-text  text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl w-fit mx-auto lg:mx-0  lg:pl-20 2xl:pl-24 py-2 md:py-4">Modeli&nbsp; CNC mašina</h2>
            </div>
            <div className="relative bg-[#f1f1f1] shadow-xl my-8 mx-auto z-[3] w-11/12 xm:w-3/5 h-[56vw] xm:h-[35vw]  overflow-clip border border-black rounded-xl text-4xl" onMouseEnter={()=>setHovered(true)}onMouseLeave={()=>setHovered(false)}>
                <AnimatePresence initial={false} custom={next} >
                    <motion.img 
                        width={1000}
                        height={750}
                        key={`cnc-masina-${visible}`}
                        src={machines[visible].img.home}
                        alt={`cnc-masina-${machines[visible].name}`}
                        loading='lazy'
                        custom={next}
                        variants={ImgAnimation}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        transition={{
                            x: { type: "spring", stiffness: 200, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = swipePower(offset.x, velocity.x);
              
                          if (swipe < -10000) {
                            handleNext();
                          } else if (swipe > 10000) {
                            handlePrev();
                          }
                        }}  
                        className='absolute w-full h-full object-contain rounded'
                    />
                </AnimatePresence>
                <AnimatePresence initial={false}>
                    <label className="absolute bottom-0 left-0 w-full h-8 md:h-12 2xl:h-16 bg-primary text-white text-center flex justify-center items-center text-2xl md:text-4xl 2xl:text-5xl 3xl:text-6xl rounded-b-xl font-jura font-bold">{machines[visible].name}</label>
                </AnimatePresence>
                <AnimatePresence>
                    {
                        hovered && <>
                        <motion.div initial={{opacity:0}} animate={{opacity:0.5}} exit={{opacity:0}} transition={{duration:0.2, delay:0.15, ease:'easeInOut'}}
                        className="absolute top-0 left-0 w-full h-full bg-black z-[11]">
                            <motion.label initial={{opacity:0}} animate={{opacity:1}} className="absolute bottom-0 left-0 w-full h-8 md:h-12 2xl:h-16 bg-primary text-white text-center flex justify-center items-center text-2xl md:text-4xl 2xl:text-5xl 3xl:text-6xl rounded-b-xl font-jura font-bold">{machines[visible].name}</motion.label>
                        </motion.div>
                        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.2, delay:0.15, ease:'easeInOut'}}  
                        className='absolute top-0 left-0 w-full lg:w-11/12 h-5/6 lg:h-[90%]  overflow-y-scroll overscroll-contain scrollbar z-[12] text-white text-2xl md:text-[2.5rem] 2xl:text-[3.5rem] 3xl:text-7xl p-8 md:px-14 lg:px-16 2xl:px-24 md:py-14 3xl:py-32  font-medium font-jura word-spacing-2 tracking-wider flex flex-col gap-6 lg:gap-16 cursor-default'>
                            <p><span className='font-bold word-spacing-1'>{machines[visible].name}</span>{machines[visible].description1}</p>
                            <p className="hidden md:block   ">{machines[visible].description2}</p>
                            <p>{machines[visible].description3}</p>
                        </motion.div>
                        </>
                    }
                </AnimatePresence>
            </div>
            <div className="flex flex-row mx-auto text-black justify-center items-center my-8 md:my-10 2xl:my-12 text-4xl md:text-6xl 2xl:text-7xl  gap-8 md:gap-32 2xl:gap-42 ">
                    <motion.div whileTap={{scale: 1.1}} whileHover={{scale:1.25}} transition={{duration:0.2}}><AiOutlineArrowLeft className=' hidden xm:block cursor-pointer' onClick={handlePrev}/></motion.div>
                    <div className="relative flex justify-center items-center flex-row gap-10 md:gap-16 2xl:gap-28">
                        {
                            machines.map((machine,index) =>{
                                return(
                                    <motion.div whileTap={{scale: 1.1}} whileHover={{scale:1.25}} transition={{duration:0.2}} 
                                    className='flex flex-col items-center justify-center text-xl md:text-2xl 2xl:text-[2rem] font-heebo font-medium italic gap-1 md:gap-2 2xl:gap-3' key={`cnc-masina-${machine.name}`}>
                                        <img width={100} height={50} loading='lazy' src={machine.img.home} alt={`cnc-masina-${machine.name}`}  className={`w-32 h-16 md:w-56 md:h-28 2xl:w-72 2xl:h-36 ${index===visible?'scale-125':'scale-100'} transition duration-300 rounded-sm  `} onClick={handlePhotoClick(index)}></img>
                                        <label className={`pl-2 ${index===visible?'scale-110 pt-1 md:pt-2 font-bold':'scale-100 pt-0'} transition duration-300 `}>{machine.name}</label>
                                    </motion.div>
                                    
                                )
                            } )
                        }
                    </div>
                    <motion.div whileTap={{scale: 1.1}} whileHover={{scale:1.25}} transition={{duration:0.2}}><AiOutlineArrowRight className='hidden xm:block  cursor-pointer' onClick={handleNext}/></motion.div>
            </div>
        </motion.div>
    )
}
export default Machines