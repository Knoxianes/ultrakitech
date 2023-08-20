import {FC,useState,useEffect} from 'react';
import {storage} from '../main';
import {getDownloadURL,getMetadata,list,ref} from 'firebase/storage';
import { GalleryLoadingSVG } from './svg';
import { AnimatePresence, motion } from 'framer-motion';
import {MdKeyboardArrowRight,MdKeyboardArrowLeft} from 'react-icons/md';

const ImgAnimation={
    hidden: (next:boolean) =>
        {
            return {
                x: next? '100vw' : '-100vw',
                opacity: 0 
            }
        },
    visible:{
        zIndex: 20,
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

const Gallery:FC = () => {
    const [images,setImages] = useState<string[]>([]);
    const [imagesMetadata,setImagesMetadata] = useState<string[]>([]);
    const [next,setNext] = useState<boolean>(false);
    const [loading,setLoading] = useState<boolean>(true);
    const [imageIndex,setImageIndex] = useState<number>();
    const [showImage,setShowImage] = useState<boolean>(false);

    useEffect(()=>{
        const storageRef = ref(storage);
        list(storageRef).then((res)=>{
            res.items.forEach((itemRef)=>{
                 getDownloadURL(itemRef).then(async (url)=>{
                    await getMetadata(itemRef).then((metadata)=>{
                        setImagesMetadata((prev)=>[...prev,metadata.customMetadata!.opis]);
                    })
                    setImages((prev)=>[...prev,url]);
                })
            })
            setLoading(false);
        })
        
    },[])

    const handleImageNext = () => {
        setNext(true);
        if(imageIndex === images.length-1){
            setImageIndex(0);
        }else{
            setImageIndex(prev=>prev!+1);
        }
    }
    const handleImagePrev = () => {
        setNext(false);
        if(imageIndex === 0){
            setImageIndex(images.length-1);
        }else{
            setImageIndex(prev=>prev!-1);
        }
    }
    const handleKeyDown = (e:any) => {
        if(e.key === 'ArrowRight'){
            handleImageNext();
        }
        if(e.key === 'ArrowLeft'){
            handleImagePrev();
        }
        if(e.key === 'Escape'){
            setShowImage(false);
        }
    }
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
      };

    return(
        <div className='py-8 md:py-16 '>
            <h1 className="text-left text-7xl font-bold w-full md:w-1/2 lg:w-1/3 bg-primary font-jura rounded-ee-md rounded-se-md pl-20 2xl:pl-32 py-5 mb-16 2xl:mb-28">Galerija</h1>
            <div className='w-11/12 mx-auto mb-10 2xl:mb-20'><hr className='border-2 border-primary'/></div>
            <div className='flex flex-wrap justify-center items-center px-4 gap-10'>
            {
                loading && <div className=" bg-transparent flex justify-center items-center w-full h-[20rem]"><GalleryLoadingSVG width='75' height='75'/></div>
            }
            <AnimatePresence>
                {
                    showImage && <>
                        <div className='fixed top-0 left-0 h-screen w-full bg-neutral-950 bg-opacity-80 z-10' onClick={()=>setShowImage(false)} />
                        <AnimatePresence initial={false} custom={next}>
                        <motion.p  
                                 key={imagesMetadata[imageIndex!]+imageIndex}
                                 custom={next}
                                 variants={ImgAnimation}
                                 initial='hidden'
                                 animate='visible'
                                 exit='exit'
                                 transition={{
                                 x: { type: "spring", stiffness: 200, damping: 30 },
                                         opacity: { duration: 0.2 }
                                 }}  
                                className={`fixed text-center top-[92%] text-text text-5xl 2xl:text-6xl w-full  z-20`}>{imagesMetadata[imageIndex!]}</motion.p>
                        </AnimatePresence>
                            <div className='fixed top-[37.5%] md:top-[10%] left-[10%] w-4/5 h-1/4 md:h-4/5 z-20 '>
                            <AnimatePresence initial={false} custom={next}>
                                <motion.img 
                                            key={imageIndex}
                                            alt={"image"+imageIndex}
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
                                                    handleImageNext();
                                                } else if (swipe > 10000) {
                                                    handleImagePrev();
                                                }
                                            }}  
                                src={images[imageIndex!]} className='absolute w-full h-full mx-auto object-contain z-30' onKeyDown={handleKeyDown} tabIndex={0}  />
                            </AnimatePresence>
                            </div> 

                        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} transition={{duration:0.2}} className='fixed top-[49%] lg:top-[45%] 2xl:top-[47%] right-4 2xl:right-10 z-30 cursor-pointer focus:outline-none'><MdKeyboardArrowRight className='text-5xl md:text-8xl 2xl:text-[8rem] text-primary z-30 focus:outline-none' onClick={handleImageNext} onKeyDown={handleKeyDown} tabIndex={0} /></motion.div>
                        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} transition={{duration:0.2}} className='fixed top-[49%] lg:top-[45%] 2xl:top-[47%] left-4 2xl:left-10 z-30 cursor-pointer focus:outline-none'><MdKeyboardArrowLeft className=' text-5xl md:text-8xl 2xl:text-[8rem] text-primary z-30 focus:outline-none' onClick={handleImagePrev} onKeyDown={handleKeyDown} tabIndex={0} /></motion.div>
                    </>
                    
                }
            </AnimatePresence>
            {
                images.map((image,index)=>{
                    return(
                        <motion.img whileHover={{scale:1.05}} whileTap={{scale:0.9}} transition={{duration:0.3}}
                        key={index} src={image} alt="gallery" loading={`${index >= 7 ?'lazy':'eager'}`} className="w-full md:w-[45%] lg:w-[30%] focus:outline-none " onClick={()=>{setImageIndex(index); setShowImage(true);}} onKeyDown={handleKeyDown} tabIndex={0}/>
                    )
                })
            }
            </div>
            <div className='w-11/12 mx-auto my-10 2xl:mt-20'><hr className='border-2 border-primary'/></div>
        </div>
    )
}
export default Gallery;