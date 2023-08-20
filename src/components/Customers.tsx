import { FC } from "react";
import { BonusSystem, Vitorog, Antares, SystemDesign, Prdc} from "../assets";
import { motion } from "framer-motion";

const customerAnimation={
    hidden: {opacity: 0},
    visible: {opacity: 1,
                transition: {
                    duration: 1.25,
                }
            }
}
const Customers: FC = () => {
    return(
        <motion.div className=" relative customer-gradient bg-opacity-50 w-full mx-auto mt-10  lg:my-0 flex justify-center lg:justify-evenly items-center flex-wrap md:gap-16  gap-2 z-10 lg:p-4 pt-8 pb-12 overflow-hidden"
            variants={customerAnimation}
            initial="hidden"
            animate="visible"
        >
            <a href="https://antares-stolice.com" target="_blank"><img  src={Antares} alt="antares" className="w-60 h-40 xl:w-80 lg:h-44 2xl:h-52 object-contain hover:scale-125 transition ease-in-out duration-300"/></a>
            <a href="https://www.systemdesign.rs" target="_blank"><img src={SystemDesign} alt="systemdesign" className="hidden lg:block w-60 h-40 xl:w-80 object-contain hover:scale-125 transition ease-in-out duration-300" /></a>
            <a href="https://vitorogpromet.rs" target="_blank"><img src={Vitorog} alt="vitorog" className="w-60 h-40 xl:w-80  object-contain hover:scale-125 transition ease-in-out duration-300" /></a>
            <a href="https://pr-dc.com" target="_blank"><img  src={Prdc} alt="prdc" className="w-60 h-40 xl:w-80  object-contain hover:scale-125 transition ease-in-out duration-300" /></a>
            <a href="https://bonus-systems.com/" target="_blank"><img  src={BonusSystem} alt="bonus-systems" className="h-40 w-60 xl:w-80 scale-125 hidden lg:block  object-contain hover:scale-150 transition ease-in-out duration-300" /></a>
        </motion.div>
    )
}
export default Customers;