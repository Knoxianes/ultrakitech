import {FC} from 'react';
import {BsTools,BsBookmarkCheckFill} from 'react-icons/bs';
import {GiTeacher} from 'react-icons/gi';
import {MdMiscellaneousServices, MdOpacity} from 'react-icons/md';
import {motion} from 'framer-motion';

const Services: FC = () => {
    return (
       <div className="flex flex-col justify-center items-center bg-neutral-900 w-full py-16 2xl:pb-28 gap-20">
            <h2 className=' text-5xl 2xl:text-7xl font-jura font-bold'>Dodatne usluge:</h2>
            <div
            className='flex flex-col md:flex-row md:bg-neutral-800 md:border 2xl:border-[2px] border-text items-stretch md:items-center text-3xl 2xl:text-5xl gap-20 md:gap-60 2xl:gap-96 md:p-10 2xl:p-20 font-jura rounded-xl'>
                <motion.div initial={{opacity:0,x:"-200px"}} whileInView={{opacity:1,x:0}} transition={{duration:0.5}}  viewport={{once:true}}
                 className="flex flex-col gap-8 md:gap-12 2xl:gap-16 md:mr-[-5rem]">
                    <div className="flex flex-col items-center justify-center 2xl:gap-4">
                        <MdMiscellaneousServices className='text-[9rem] 2xl:text-[12rem] text-primary' />
                        <p className='text-4xl 2xl:text-6xl'>Saveti i podrška za:</p>
                    </div>
                    <div className="flex flex-col items-start gap-4 md:gap-7 2xl:gap-12">
                        <div className="flex items-center gap-2  md:gap-4">
                            <BsBookmarkCheckFill className='text-[3rem] 2xl:text-[3.5rem] text-primary' />
                            <p>Odabir alata za odredjeni projekat</p>
                        </div>
                        <div className="flex items-center gap-2 md:gap-4">
                            <BsBookmarkCheckFill className='text-[3rem] 2xl:text-[3.5rem] text-primary' />
                            <p>Način i redosled obrade</p>
                        </div>
                        <div className="flex items-center gap-2 md:gap-4">
                            <BsBookmarkCheckFill className='text-[3rem] 2xl:text-[3.5rem] text-primary' />
                            <p>Režimi obrade</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,x:"-200px"}} whileInView={{opacity:1,x:0}} transition={{delay:0.5,duration:0.5}} viewport={{once:true}}
                className="flex flex-col gap-8 md:gap-12 2xl:gap-16 md:pt-2">
                    <div className="flex flex-col items-center justify-center gap-3 2xl:gap-10">
                        <BsTools className='text-[8rem] 2xl:text-[11rem] text-primary' />
                        <p className='text-4xl 2xl:text-6xl'>Prodaja alata</p>
                    </div>
                    <div className="flex flex-col items-start gap-4 md:gap-7 2xl:gap-12">
                        <div className="flex items-center gap-2 md:gap-4">
                            <BsBookmarkCheckFill className='text-[3rem] 2xl:text-[3.5rem] text-primary' />
                            <p>Rezni alati</p>
                        </div>
                        <div className="flex items-center gap-2 md:gap-4">
                            <BsBookmarkCheckFill className='text-[3rem] 2xl:text-[3.5rem] text-primary' />
                            <p>Stezni alati</p>
                        </div>
                        <div className="flex items-center gap-2 md:gap-4">
                            <BsBookmarkCheckFill className='text-[3rem] 2xl:text-[3.5rem] text-primary' />
                            <p>Pribor i oprema</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,x:"-200px"}} whileInView={{opacity:1,x:0}} transition={{delay:1,duration:0.5}} viewport={{once:true}}
                className="flex flex-col gap-8 md:gap-[3.25rem] 2xl:gap-[4.25rem]  ">
                    <div className="flex flex-col items-center justify-center gap-3 2xl:gap-10">
                        <GiTeacher className='text-[9rem] 2xl:text-[12rem] text-primary' />
                        <p className='text-4xl 2xl:text-6xl'>Edukacija</p>
                    </div>
                    <div className="flex flex-col items-start gap-4 md:gap-4 2xl:gap-8">
                        <div className="flex flex-row items-center gap-2 md:gap-4 md:mt-[-5px]">
                            <BsBookmarkCheckFill className='text-[3rem] 2xl:text-[3.5rem] text-primary' />
                            <p>CAD/CAM</p>
                        </div>
                        <div className="flex items-center gap-2 md:gap-4">
                            <BsBookmarkCheckFill className='text-[3rem] 2xl:text-[3.5rem] text-primary' />
                            <p>Početni i napredni kurs <br/>operatera</p>
                        </div>
                        <div className="flex items-center gap-2 md:gap-4">
                            <BsBookmarkCheckFill className='text-[3rem] 2xl:text-[3.5rem] text-primary' />
                            <p>Optimizacija proizvodnje</p>
                        </div>
                    </div>
                </motion.div>
            </div>
       </div>
       
    )
}
export default Services;