
import { IconType } from 'react-icons/lib'
import { motion } from 'framer-motion'
import {Link} from "react-router-dom";
 
type ToolCardProps = {
    icon: IconType,
    name: string,
    description: string
}

const cardVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        }
    }

}

const ToolCard = ({icon:Icon,name,description}:ToolCardProps) => {
    return(
        <motion.div variants={cardVariants} className="w-9/12 md:w-1/3 lg:w-1/5 h-[40rem] lg:h-[35rem] 2xl:h-[50rem]  bg-neutral-700  flex flex-col items-center pt-6 gap-4 2xl:gap-8 rounded-md cursor-default">

            <div className='flex w-full h-[20%] flex-col justify-end items-center gap-4 2xl:gap-6'>
                <Icon/>
                <div className="w-1/3 "><hr/></div>
            </div>
            <div className='flex w-full h-[70%] flex-col justify-start items-center gap-4 2xl:gap-10'>
                <p className='text-3xl md:text-4xl lg:text-3xl 2xl:text-5xl  text-orange-400 '>{name}</p>
                <p className='text-2xl md:text-3xl lg:text-2xl 2xl:text-4xl font-jura text-center px-8 md:px-12 lg:px-4 2xl:px-8 '>
                    {description}
                </p>
            </div>
            <Link to="/kontakt" className='flex flex-col w-full h-[10%] justify-start items-center cursor-pointer '>
                <p className='text-2xl md:text-3xl lg:text-2xl 2xl:text-4xl text-orange-400 underline pb-4 2xl:pb-8'>Saznajte više</p>
            </Link>
                    
        </motion.div>
    )
}
export default ToolCard;