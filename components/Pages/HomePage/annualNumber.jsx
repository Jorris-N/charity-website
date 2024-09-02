import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Kid from '../../../public/images/kid.jpg';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

export default function AnnualNumber () {
    return(
        <>
            <div className='xl:w-9/12 lg:w-9/12 w-full mx-auto px-6 xl:px-0 py-12'>
                <div className='text-left text-zinc-600 uppercase space-y-2'>
                    <h1 className='text-2xl font-light'>our annual</h1>
                    <h1 className='text-5xl font-extrabold tracking-wide'>numbers</h1>
                </div>
                <div className='flex xl:flex-row  flex-col  xl:justify-between xl:space-x-20 mt-6'>
                    <div className='h-full w-full'>
                        <div className='flex-shrink-0 relative' id='AnnualImage'>
                            <Image src={Kid} alt='Video' className='object-cover' layout='fill'/> 
                        </div>
                        <Link href='https://player.vimeo.com/video/145654121'>
                            <a className='absolute -mt-32' target='_blank'>
                                <h1 className='text-center  z-50'>
                                <FontAwesomeIcon icon={faCirclePlay} className='h-28 mx-4 text-zinc-400 bg-white rounded-full'/>
                                </h1>
                            </a>
                        </Link>
                    </div>

                    <div className='h-full w-full text-center'>
                        <div className='flex-1 border py-6 divide-y divide-dashed'>
                            <h1 className='flex flex-col'> <span className='uppercase text-lg font-light text-zinc-600'>new</span> <span className='capitalize text-zinc-700 text-2xl font-medium tracking-wider'>hospitals</span> </h1>
                            <div className='flex flex-col mt-6 space-y-4 divide-y divide-dashed'>
                                <div className='pt-4'>
                                    <div className='justify-between flex mx-6 uppercase text-zinc-600 text-lg'> <h1>pediatric</h1>  <h1>24000</h1> </div>
                                    <div className='flex justify-between mx-6 text-sm text-zinc-500'> <p className='capitalize'>Non profit wp theme</p> <span className='border uppercase p-1'>new</span> </div>   
                                </div>

                                <div className='pt-4'>
                                    <div className='justify-between flex mx-6 uppercase text-zinc-600 text-lg'> <h1>cardiology</h1>  <h1>45000</h1> </div>
                                    <div className='flex justify-between mx-6 text-sm text-zinc-500'> <p className='capitalize'>Non profit wp theme</p> <span className='border uppercase p-1'>new</span> </div>   
                                </div>
                                <div className='pt-4'>
                                    <div className='justify-between flex mx-6 uppercase text-zinc-600 text-lg'> <h1>vaccines</h1>  <h1>3200</h1> </div>
                                    <div className='flex justify-between mx-6 text-sm text-zinc-500'> <p className='capitalize'>Non profit wp theme</p> <span className='border uppercase p-1'> 1 hour </span> </div>   
                                </div>
                                <div className='pt-4'>
                                    <div className='justify-between flex mx-6 uppercase text-zinc-600 text-lg'> <h1>obstetrics</h1>  <h1>4300</h1> </div>
                                    <div className='flex justify-between mx-6 text-sm text-zinc-500'> <p className='capitalize'>Non profit wp theme</p> <span className='border uppercase p-1'>new</span> </div>   
                                </div>
                                <div className='pt-4'>
                                    <div className='justify-between flex mx-6 uppercase text-zinc-600 text-lg'> <h1>emergency</h1>  <h1>$ 1200</h1> </div>
                                    <div className='flex justify-between mx-6 text-sm text-zinc-500'> <p className='capitalize'>Non profit wp theme</p> <span className='border uppercase p-1'>1 hour</span> </div>   
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}