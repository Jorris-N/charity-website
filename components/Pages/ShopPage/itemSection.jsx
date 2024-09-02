import * as React from 'react';
import Data from '../../../pages/Data/AllShop.json'
import Image from 'next/image';
import Link from 'next/link';


export default function ItemSection () {
    return (
        <>
            <div className='xl:w-9/12 lg:w-9/12 w-full mx-auto px-6 xl:px-0 py-12'>
                <div className='mt-8 grid xl:grid-cols-4 gap-5 max-w-lg mx-auto lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:max-w-none mb-6'>
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