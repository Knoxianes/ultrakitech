import { FC, useState,useRef} from "react";
import {motion} from "framer-motion";
import { EmailSent } from "../assets";
import { addDoc,collection} from "firebase/firestore";
import { db } from "../main";

const Form:FC = () =>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [errorName,setErrorName] = useState(false);
    const [errorEmail,setErrorEmail] = useState(false);
    const [errorMessage,setErrorMessage] = useState(false);
    
    const audio = new Audio(EmailSent);

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const nameRefMobile = useRef<HTMLInputElement>(null);
    const emailRefMobile = useRef<HTMLInputElement>(null);
    const messageRefMobile = useRef<HTMLTextAreaElement>(null);
    const nameRefTablet = useRef<HTMLInputElement>(null);
    const emailRefTablet = useRef<HTMLInputElement>(null);
    const messageRefTablet = useRef<HTMLTextAreaElement>(null);




    const onChangeName = (e:any) => {
        setName(e.target.value);
    }
    const onChangeEmail = (e:any) => {
        setEmail(e.target.value);
    }
    const onChangeMessage = (e:any) => {
        setMessage(e.target.value);
    }
    const buttonClick = async (e:any) => {
        e.preventDefault();
        var errorHappened = false;
        if(name === ""){
            setErrorName(true);
            errorHappened = true;
            setTimeout(()=>setErrorName(false),3000);
        }
        if(email === "" || !email.includes("@") || !email.includes(".") || email.includes(" ")){
            setErrorEmail(true);
            errorHappened = true;
            setTimeout(()=>setErrorEmail(false),3000);
        }
        if(message === ""){
            setErrorMessage(true);
            errorHappened = true;
            setTimeout(()=>setErrorMessage(false),3000);
        }
        if(errorHappened ){
            return;
        }

        await addDoc(collection(db, "emails"), {
            name:name,
            email:email
        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
        await addDoc(collection(db,"mail"),{
            to: "upiti@ultrakitech.com",
            message: {
                subject: "Novi upit sa sajta",
                html: `<p>Ime: ${name}</p><p>Email: ${email}</p><p>Poruka: ${message}</p>`
            }
        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
        audio.play();

        nameRef.current!.value = "";
        emailRef.current!.value = "";
        messageRef.current!.value = "";
        nameRefMobile.current!.value = "";
        emailRefMobile.current!.value = "";
        messageRefMobile.current!.value = "";
        nameRefTablet.current!.value = "";
        emailRefTablet.current!.value = "";
        messageRefTablet.current!.value = "";
        setName("");
        setEmail("");
        setMessage("");
    }


    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5}} className="relative z-[2] text-5xl xl:text-[3.5rem] 2xl:text-[4.75rem] 3xl:text-[6rem] font-jura w-full p-8 lg:px-20 2xl:px-32 ">
            <form id="form"  className="lg:hidden flex flex-col justify-center  items-start gap-6 md:gap-16 md:px-9 text-text md:text-7xl w-full ">
                <div className="flex flex-col  justify-start  gap-2 md:gap-5 w-full ">
                    <label className="pl-2">Ime:    </label>
                    <div className="w-full">
                        <input ref={nameRefMobile} className={`md:hidden w-full ${errorName?"border-red-600":"border-primary"} border-[3px] bg-transparent p-2 focus:outline-none`} type="text" name="name" placeholder="Vaše Ime" required onChange={onChangeName} />
                        <input  ref={nameRefTablet}  className={`hidden md:block w-full ${errorName?"border-red-600":"border-primary"} border-[3px] bg-transparent p-2 focus:outline-none`} type="text" name="name" placeholder="Vaše Ime" required onChange={onChangeName} />
                    </div>
                </div>
                <div className=" flex flex-col  justify-start gap-2 md:gap-5 w-full ">
                    <label className="pl-2">Email:</label>
                    <div className="w-full">
                        <input ref={emailRefMobile} className={`md:hidden border-[3px] ${errorEmail?"border-red-600":" border-primary"} bg-transparent p-2 w-full focus:outline-none`} type="email" name="email" placeholder="Vaš Email" required onChange={onChangeEmail} />
                        <input ref={emailRefTablet} className={`hidden md:block ${errorEmail?"border-red-600":" border-primary"}  border-[3px] bg-transparent p-2 w-full focus:outline-none`} type="email" name="email" placeholder="Vaš Email" required onChange={onChangeEmail} />
                    </div>
                </div>
                <div className="flex flex-col justify-start gap-2 md:gap-5 w-full ">
                    <label className="pl-2">Poruka:</label>
                    <div className="w-full">
                        <textarea ref={messageRefMobile} rows={5} className={`md:hidden w-full ${errorMessage?"border-red-600":" border-primary"} border-[3px] text-4xl md:text-6xl bg-transparent resize-none p-2 focus:outline-none`} name="message" placeholder="Vaša Poruka" required onChange={onChangeMessage} />
                        <textarea rows={5} ref={messageRefTablet} className={`hidden md:block w-full ${errorMessage?"border-red-600":" border-primary"} border-[3px] text-4xl md:text-6xl bg-transparent resize-none p-2 focus:outline-none`} name="message" placeholder="Vaša Poruka" required onChange={onChangeMessage} />
                    </div>
                </div>
                <button type="submit" className="bg-primary word-spacing-2 tracking-widest py-4 my-4 md:mb-36 w-full  font-medium mx-auto rounded-2xl " onClick={buttonClick}>
                    Pošaljite
                </button>
             </form>
             <form id="form"  className="hidden lg:flex flex-col justify-center items-start gap-12 2xl:gap-20 3xl:gap-32 text-text w-full" onSubmit={buttonClick}>
                <div className="flex flex-row justify-center items-center w-full gap-40 ">
                    <div className="flex flex-row w-1/2 justify-start items-center gap-24 xl:gap-28 2xl:gap-36 3xl:gap-44">
                        <label className="text-left w-fit">Ime:    </label>
                        <span className="flex justify-end items-center w-full"><input ref={nameRef}  className={`border-[3px] ${errorName?"border-red-600":"border-primary"} bg-transparent py-2 2xl:py-4 px-4 2xl:px-6 w-full focus:outline-none`} type="text" name="name" placeholder="Vaše Ime" required onChange={onChangeName} /></span>
                    </div>
                    <div className=" flex flex-row w-1/2  justify-start items-center gap-8 2xl:gap-16  ">
                        <label className="w-fit">Email:</label>
                        <input ref={emailRef} className={`border-[3px] ${errorEmail?"border-red-600":"border-primary"} bg-transparent py-2 px-4 2xl:py-4 2xl:px-6 w-full focus:outline-none`} type="email" name="email" placeholder="Vaš Email" required onChange={onChangeEmail} />
                    </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-6 xl:gap-7 2xl:gap-8 3xl:gap-9 ">
                    <label>Poruka:</label>
                    <textarea ref={messageRef} rows={8} className={`border-[3px] ${errorMessage?"border-red-600":"border-primary"} bg-transparent resize-none py-5 px-4 2xl:py-7 2xl:px-8 w-full focus:outline-none`} name="message" placeholder="Vaša Poruka" required onChange={onChangeMessage} />
                </div>
                <motion.button 
                 type="submit" className="bg-primary word-spacing-2 tracking-widest py-4 2xl:py-6  mt-4 mb-8 2xl:mb-16 3xl:mb-32 w-6/12 font-medium mx-auto rounded-2xl "
                 whileHover={{scale:1.05,transition:{duration: 0.3,ease:"easeInOut"}}}
                 whileTap={{scale:0.95,transition:{duration: 0.2,ease:"easeInOut"}}}  
                 >
                    Pošaljite
                </motion.button>
             </form>
        </motion.div>
    )
}
export default Form;