import {FC} from 'react'
import { tableForm } from '../constants';
import { motion } from 'framer-motion';

const tableAnimation ={
    hidden:{
        opacity:0,
    },
    visible:{
        opacity:1,
        transition:{
            duration:1.5,
        }
    }
}

const MachineTables:FC = () => {
    return(
        <div className='relatvie bg-neutral-900 font-jura w-full py-12 px-2 lg:px-0 lg:py-8 2xl:py-20 cursor-default '>
            <motion.div  variants={tableAnimation} initial='hidden' whileInView="visible" viewport={{once:true}}
            className='flex justify-center items-center lg:justify-end lg:items-end lg:w-10/12 mx-auto lg:pr-4 mb-8 2xl:mb-12'>
                
                <h2 className=' text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-bold word-spacing-1  tracking-wide bg-primary border-primary p-6 rounded-lg'>Specifikacije po formatima</h2>
            
            </motion.div>
            <div className='w-full overflow-x-scroll lg:overflow-x-hidden'>
            <table className=' w-full lg:w-10/12 mx-auto text-3xl 2xl:text-4xl lg:table-fixed border-separate border-spacing-y-4 border-spacing-x-6  caption-bottom'>
                <motion.caption variants={tableAnimation} initial='hidden' whileInView="visible" viewport={{once:true}}
                className='text-left text-2xl 2xl:text-3xl'>
                    
                    <p className='pl-10'>* - Važi za modele DS Serije</p>
                    
                    <p className='pl-[1.85rem]'>** - Važi za modele ATC Serije</p>
                </motion.caption>
                <thead>
                    <motion.tr variants={tableAnimation} initial='hidden' whileInView="visible" viewport={{once:true}}>
                        <th className='text-center w-[19%] text-4xl 2xl:text-5xl font-bold text-text border-2 bg-primary italic p-2 2xl:py-3'>{tableForm[0].name}</th>
                        {
                            tableForm[0].value.map((item,index) => {
                                return(
                                    <th className=' text-center bg-neutral-700 border-2 w-[13.5%] p-2 '>
                                        {item}
                                    </th>
                                )
                            })
                        }
                    </motion.tr>
                </thead>
                <tbody>
                    {
                        tableForm.map((item,index) => {
                            return(
                                <>
                                {index !== 0 && 
                                    <motion.tr variants={tableAnimation} initial='hidden' whileInView="visible" viewport={{once:true}}>
                                        <td className='text-center bg-neutral-700 text-3xl 2xl:text-4xl font-bold text-text border-2  py-3 2xl:py-4 px-2'>{item.name}</td>
                                        {
                                            item.value.map((item,index) => {
                                                return(
                                                    <td className='text-center bg-neutral-200 text-black font-semibold border p-2'>
                                                        {item}
                                                    </td>
                                                )
                                            })
                                        }
                                    </motion.tr>
                                }
                                </>
                            )
                        })
                    }
                </tbody>

            </table>
            </div>

        </div>
    )
}
export default MachineTables;