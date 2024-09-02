import * as React from 'react';
import Data from '../../../pages/Data/sectorData.json'
import Image from 'next/image';


export default function SectorsSection () {
    return(
        <>
            <div className='xl:w-9/12 lg:w-9/12 w-full mx-auto px-6 xl:px-0 mt-10 py-12'>
            <div className='mt-4 grid xl:grid-cols-3 gap-5 max-w-lg mx-auto lg:grid-cols-1 md:grid-cols-1 lg:max-w-none mb-6'>
                {
                    Data.map ((Items) =>(
                        <div className='mx-3 bg-white rounded-sm shadow-md cursor-pointer overflow-hidden gap-5 mb-4' key={Items.id}>
                                <div className='flex-shrink-0 relative h-52'>
                                    <Image src={Items.image} alt={Items.title} className='object-cover' layout='fill'/>
                                </div>
                                <div className='flex-1 p-6'>
                                    <h1 className='uppercase text-light text-zinc-700 font-medium text-center'>{Items.title}</h1>
                                </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </>
    )
}