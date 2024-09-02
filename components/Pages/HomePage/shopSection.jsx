import * as React from 'react';
import Link from 'next/link';
import Data from '../../../pages/Data/shopData.json';
import Image from 'next/image';


export default function ShopSection () {
    return(
        <>
            <div className='xl:w-9/12 lg:w-9/12 w-full mx-auto px-6 xl:px-0 py-12'>
            <div className='text-left justify-center mb-8 mx-auto flex flex-col text-zinc-600 uppercase space-y-2'>
                <h1 className='text-xl font-light tracking-wide'> sale </h1>
                <h1 className='text-5xl font-semibold tracking-wide'> our shop </h1>
            </div>
            <div className='mt-4 grid xl:grid-cols-3 gap-5 max-w-lg mx-auto lg:grid-cols-1 md:grid-cols-1 lg:max-w-none mb-6'>
                {
                    Data.map ((Items) =>(
                        <div className='mx-3  overflow-hidden gap-4 mb-4' key={Items.id}>
                             <div className='flex-shrink-0 relative h-96'>
                                <Image src={Items.image} alt={Items.name} className='object-cover ' layout='fill'/>
                            </div>
                            <div className='flex-1 p-6 space-y-2 text-center'>
                                <Link href={Items.Link}>
                                    <a className=' text-2xl capitalize text-zinc-600'>
                                        {Items.name}
                                    </a>
                                </Link>
                                <p className='font-semibold text-teal-400 text-lg'>{Items.Price}</p>
                            </div>

                        </div>
                    ))
                }
            </div>


            </div>
        </>
    )
}