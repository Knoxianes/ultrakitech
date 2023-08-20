import { FC,useEffect } from "react";
import { ContactHeader,Form } from "../components";

const Contact: FC = () => {
    return(
        <>
        <div className="relative z-[2] bg-[#131313]">
            <div className="filter absolute bottom-0 right-0 min-w-full min-h-[200vh] opacity-40 z-[1]" />
            <div className="absolute bg-black bottom-0 right-0 min-w-full min-h-[200vh] opacity-10 z-[1]" />
            <ContactHeader/>
            <Form/>
        </div>
        </>
    )
}
export default Contact;