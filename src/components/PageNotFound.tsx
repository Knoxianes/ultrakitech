import {FC} from 'react'

const PageNotFound:FC = () => {
    return (
        <div className='bg-white absolute z-[99] min-h-screen min-w-full top-0 left-0 flex justify-center items-center text-5xl'>
            <h1 className='text-black z-[100]'>404: Page Not Found</h1>
        </div>
    )
}
export default PageNotFound