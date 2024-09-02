import * as React from 'react';
import Image from 'next/image';
import Kid from '../../../public/images/kid.jpg';
import Water from '../../../public/images/water.jpg';
import Health from '../../../public/images/health.jpg';
import Happy from '../../../public/images/happy.jpg';
import Education from '../../../public/images/education.jpg';


export default function GallerySection () {
    return (
        <>
          <div className='xl:w-9/12 lg:w-9/12 w-full mx-auto px-6 xl:px-0 py-12'>
            <div className='text-left justify-center mb-8 mx-auto flex flex-col text-zinc-600 uppercase space-y-2'>
                <h1 className='text-xl font-light tracking-wide'> our best </h1>
                <h1 className='text-5xl font-semibold tracking-wide'> gallery </h1>
            </div>
            <div className='flex xl:flex-row  flex-col  xl:justify-between xl:space-x-20 space-y-6 xl:space-y-0 mt-6'>
                <div className='flex flex-col space-y-6'>
                    <div className='flex-shrink-0 relative h-72 xl:w-60 w-full'>
                        <Image src={Kid} alt='Video' className='object-cover hover:scale-125 ease-in-out duration-500' layout='fill'/> 
                    </div>  
                    <div className='flex-shrink-0 relative h-72 w-full'>
                        <Image src={Water} alt='Video' className='object-cover hover:scale-125 ease-in-out duration-500' layout='fill'/> 
                    </div> 
                </div>

                <div className='h-full w-full'>
                    <div className='flex-shrink-0 relative' id='AnnualImage'>
                        <Image src={Happy} alt='Video' className='object-cover hover:scale-125 ease-in-out duration-500' layout='fill'/> 
                    </div>
                </div>

                <div className='flex flex-col space-y-6'>
                    <div className='flex-shrink-0 relative h-72 xl:w-60 w-full'>
                        <Image src={Education} alt='Video' className='object-cover hover:scale-125 ease-in-out duration-500' layout='fill'/> 
                    </div>

                    <div className='flex-shrink-0 relative h-72 xl:w-60 w-full'>
                        <Image src={Health} alt='Video' className='object-cover hover:scale-125 ease-in-out duration-500' layout='fill'/> 
                    </div>

                </div>
            </div>
          </div>
        </>
    )
}