import * as React from 'react';
import data from '../../../pages/Data/kids.json';
import Image from 'next/image';


export default function ContentSection () {
    return(
        <div className='xl:w-9/12 lg:w-9/12 w-full mx-auto px-6 xl:px-0 py-12'>
            <div className='mt-4 grid xl:grid-cols-3 gap-6 max-w-lg mx-auto lg:grid-cols-1 md:grid-cols-1 lg:max-w-none mb-6'>
                <div className='text-3xl text-zinc-700 font-semibold leading-snug'>
                    <p>Hello. Our agency has been present for over <span className='underline underline-offset-2'>20 years.</span> We make the best for all our children.</p>
                </div>
                <div className='text-zinc-500 space-y-4'>
                    <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.</p>
                    <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.</p>
                </div>
                <div className='text-zinc-500 space-y-4'>
                    <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.</p>
                    <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.</p>
                </div>
            </div>
            <div className='mt-4 grid xl:grid-cols-3 gap-6 max-w-lg mx-auto lg:grid-cols-1 md:grid-cols-1 lg:max-w-none mb-6'>
                {
                    data.map((items) => (
                        <div className='mx-3 bg-white rounded-sm shadow-md overflow-hidden gap-4 my-8' key={items.id}>
                            <div className='flex-shrink-0 relative h-72 bg-zinc-600 w-full'>
                                <Image src={items.image} alt={items.name} className='object-cover opacity-75' layout='fill'/>
                            </div>
                            <div className='absolute px-4 text-white text-center z-40 uppercase -mt-16 space-y-2'>
                                <h1 className='text-sm font-bold'>{items.name}</h1>
                                <p className='text-xs font-medium'>{items.country}</p>
                            </div>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}