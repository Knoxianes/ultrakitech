import {FC} from 'react'
import {MdPrecisionManufacturing, MdOutlineHighQuality} from 'react-icons/md'
import {AiOutlineSafety} from 'react-icons/ai'
import {BiSupport} from 'react-icons/bi'
import {motion} from 'framer-motion'
import {TbDeviceDesktopAnalytics} from 'react-icons/tb'
const BulletPointsAnimation ={
    hidden:{
        opacity:0,
        x:'-150px'
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:0.7
        }
    }
}
const WhyUs:FC = () => {
    return(
        <div className='relative bg-neutral-900 w-full py-24 px-8 lg:py-28 lg:px-20 lg:pl-24 cursor-default'>
            <div className='flex justify-center items-center mb-8 md:mb-20 '><h2 className='text-6xl 2xl:text-7xl'>Zašto &nbsp;<span className='text-primary'>UltraKi Tech</span>?</h2></div>
            <div className='flex flex-col md:gap-16 lg:gap-8 text-3xl md:text-4xl 2xl:text-5xl font-jura text-white'>
                <motion.div variants={BulletPointsAnimation} initial="hidden" whileInView="visible" viewport={{once:true}}
                className='flex flex-row justify-start items-center mb-[-6rem] md:mb-0 gap-8 lg:gap-10 xl:gap-12'>
                    <MdPrecisionManufacturing className='text-[20rem] md:text-[10rem] lg:text-[8rem] 2xl:text-[10rem] text-primary'/>
                    <p className='md:w-2/5 xm:w-2/6'>Izrada ovih mašina zahteva
                        <span className='text-secondary font-medium'> najviši nivo stručnosti </span> i posvećenosti u
                        svakom koraku proizvodnog procesa
                    </p>
                </motion.div>
                <motion.div variants={BulletPointsAnimation} initial="hidden" whileInView="visible"  viewport={{once:true}}
                className='flex flex-row justify-end items-center mb-[-6rem] md:mb-0 gap-8 lg:gap-10 xl:gap-12'>
                    <AiOutlineSafety className='text-[25rem] md:text-[10rem] lg:text-[8rem] 2xl:text-[10rem]  text-primary'/>
                    <p className='md:w-2/5 xm:w-2/6'> <span className='text-secondary font-medium'>10 godina iskustva </span> u oblasti CNC tehnologije i mehatronike, koja se
                        bavi proizvodnjom <span className='text-secondary font-medium'> najkvalitetnijih CNC mašina i rutera </span> na tržištu
                    </p>
                </motion.div>
                <motion.div variants={BulletPointsAnimation} initial="hidden" whileInView="visible" viewport={{once:true}}
                className='flex flex-row justify-start items-center mb-[-8rem] md:mb-0 gap-8 lg:gap-10 xl:gap-12'>
                    <MdOutlineHighQuality className='text-[23rem] md:text-[11rem] lg:text-[9rem] 2xl:text-[11rem] text-primary'/>
                    <p className='md:w-2/5 xm:w-2/6'>Najkvalitetniji materijali dostupni na tržištu,
                    kao i <span className='text-secondary font-medium'> najsavremenija tehnologija proizvodnje i sklapanja </span> mašina
                    </p>
                </motion.div>
                <motion.div variants={BulletPointsAnimation} initial="hidden" whileInView="visible" viewport={{once:true}}
                className='flex flex-row justify-end items-center mb-[-6rem]  md:mb-0 gap-8 lg:gap-10 xl:gap-12'>
                    <TbDeviceDesktopAnalytics className='text-[26rem] md:text-[10rem] lg:text-[8rem] 2xl:text-[10rem] text-primary'/>
                    <p className='md:w-2/5 xm:w-2/6'> <span className='text-secondary font-medium'>ULTRAKI TECH </span> mašine su konstruisane 
                    korišcenjem vodećih industrijskih <span className='text-secondary font-medium'> 3D CAD programa </span> i 
                    analizirane kroz MKE programe </p>
                </motion.div>
                <motion.div variants={BulletPointsAnimation} initial="hidden" whileInView="visible" viewport={{once:true}}
                className='flex flex-row justify-start items-center mb-[-3rem]   md:mb-0 gap-8 lg:gap-10 xl:gap-12'>
                    <BiSupport className='text-[20rem] md:text-[10rem] lg:text-[8rem] 2xl:text-[10rem] text-primary'/>
                    <p className='md:w-2/5 xm:w-2/6'> <span className='text-secondary font-medium'> ULTRAKI TECH </span> nudi <span className='text-secondary font-medium'> servis I podršku 24/7 </span>, bez obzira gde se nalazite i kojom industrijom se bavite</p>
                </motion.div>
            </div>
        </div>
    )
}
export default WhyUs;