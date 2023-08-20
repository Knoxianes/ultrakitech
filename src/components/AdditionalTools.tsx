import {FC} from 'react';
import ToolCard from './ToolCard';
import { tools } from '../constants';
import { motion } from 'framer-motion';

const toolsVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.3
        }
    }
}

const AdditionalTools: FC = () => {
    return(
        <div className="relative bg-[#f1f1f1] w-full pt-12 pb-20">
            <h2 className='text-6xl md:text-7xl lg:text-6xl 2xl:text-8xl font-jura text-black text-center mb-5 2xl:mb-8'><span className="text-primary font-semibold">Dodatna</span> oprema</h2>
            <div className='mx-auto w-10/12 md:w-1/4 lg:w-1/5 2xl:w-1/4 mb-5 2xl:mb-8'><hr className='border-black'/></div>
            <p className='lg:w-1/2 2xl:w-2/3 mx-auto text-3xl md:text-4xl lg:text-3xl 2xl:text-5xl text-center font-jura text-black font-medium'>
                Na raspolaganju vam je veliki izbor dodatne opreme za vašu mašinu.
            </p>
            <p className='lg:w-1/2 2xl:w-2/3 mx-auto text-3xl md:text-4xl lg:text-3xl 2xl:text-5xl text-center font-jura text-black font-medium mb-10 2xl:mb-20'>
                Svaka serija moze biti opremljena sa različitim dodatnim alatima.
            </p>

            <motion.div variants={toolsVariants} initial="hidden" whileInView="visible" viewport={{once:true}}
            className=" w-full lg:w-10/12 mx-auto flex flex-row flex-wrap justify-center items-center gap-4 2xl:gap-8  text-8xl 2xl:text-9xl ">
                {
                    tools.map((tool, index) => {
                        return(
                            <ToolCard key={index} icon={tool.icon} name={tool.name} description={tool.description}/>
                        )
                    })
                }
            </motion.div>
        </div>
    )
};

export default AdditionalTools;