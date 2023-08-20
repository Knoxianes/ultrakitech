import { FC} from 'react'
import { Landing,Customers,Machines, WhyUs, Services,MachineTables,AdditionalTools } from '../components'
import { BgVideoWebm,BgVideo} from '../assets'


const Home:FC = () => {
    return(
        <>
        <div className="relative z-[2] lg:pb-12 xl:pb-20 2xl:pb-28">
            <video className="absolute bottom-0  right-0 min-w-[150%] lg:min-w-[110%] lg:min-h-[120%] min-h-[150%] object-fill z-0 blur-sm " autoPlay loop muted playsInline >
                <source src={BgVideoWebm} type="video/webm" />
                <source src={BgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
                    <div className="filter absolute bottom-0 right-0 min-w-full min-h-[200vh] opacity-40 z-[1]" />
                    <div className="absolute bg-black bottom-0 right-0 min-w-full min-h-[200vh] opacity-10 z-[1]" />
                    <Landing />
                    <Customers />

        </div>
                <WhyUs />
                <Machines />
                <MachineTables />
                <AdditionalTools />
                <Services />
        </>
    )
}
export default Home