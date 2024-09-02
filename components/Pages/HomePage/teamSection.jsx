import * as React from 'react';
import Team from '../../../pages/Data/teamData.json'
import Image from 'next/image';
import Link from 'next/link';


export default function TeamSection () {
    return (
        <>
            <div className='xl:w-9/12 lg:w-9/12 w-full mx-auto px-6 xl:px-0 mt-10 py-12'>
            <div className='mt-4 grid xl:grid-cols-4 gap-4 max-w-lg mx-auto lg:grid-cols-1 md:grid-cols-1 xl:-mt-40 lg:-mt-36 lg:max-w-none mb-6'>
                {
                    Team.map ((Data) => (
                        <div className='mx-3  overflow-hidden gap-4 mb-4' key={Data.id}>
                            <div className='flex-shrink-0 relative h-72'>
                                <Image src={Data.image} alt={Data.name} className='object-cover ' layout='fill'/>
                            </div>
                            <div className='flex-1 p-6 space-y-2'>
                                    <h1 className='capitalize text-2xl text-zinc-700 font-bold tracking-wide text-center'>{Data.name}</h1>
                                    <p className='text-center uppercase font-light text-sm text-zinc-600'>{Data.occupation}</p>
                                    <p className='text-center capitalize font-normsl text-sm text-zinc-700'>{Data.description}</p>
                            <div className='py-3 text-center'>
                                <span className='uppercase'>
                                    <Link href='/contact'>
                                        <a className='bg-white border rounded-full py-1 px-4 text-zinc-700 tracking-wide text-sm font-light hover:bg-zinc-200 ease-in-out duration-500 hover:text-zinc-700'>
                                            contact me
                                        </a>
                                    </Link>
                                </span>
                            </div>
                            </div>
                            
                        </div>
                    ))
                }

            </div>

            </div>
        </>
    )
}