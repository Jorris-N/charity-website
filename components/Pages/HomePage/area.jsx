import * as React from 'react';
import Image from 'next/image';
import Kid from '../../../public/images/kid.jpg';

export default function AreaSection () {
    return(
        <>
            <div className='xl:w-9/12 lg:w-9/12 w-full mx-auto px-6 xl:px-0 py-12'>
                <div className='flex xl:flex-row  flex-col  xl:justify-between xl:space-x-20 '>
                    <div className='h-full w-full text-center'>
                        <div className='flex flex-col mt-6 space-y-4 divide-y divide-dashed'>
                        <div className='pt-4'>
                                 <div className='flex-shrink-0 relative mx-6 h-20 w-20'> <Image src={Kid} alt='Video' className='object-cover' layout='fill'/> </div>
                                <div className='justify-between flex mx-6 uppercase text-zinc-600 text-lg'> <h1>Elizabeth</h1>  <h1>congo</h1> </div>
                                    <div className='flex justify-between mx-6 text-sm text-zinc-500'> <p className='capitalize'>Non profit wp theme</p> <span className='border uppercase p-1'>new</span> </div>   
                                </div>

                                <div className='pt-4'>
                                    <div className='flex-shrink-0 relative mx-6 h-20 w-20'> <Image src={Kid} alt='Video' className='object-cover' layout='fill'/> </div>
                                    <div className='justify-between flex mx-6 uppercase text-zinc-600 text-lg'> <h1>jasmine</h1>  <h1>namibia</h1> </div>
                                    <div className='flex justify-between mx-6 text-sm text-zinc-500'> <p className='capitalize'>Non profit wp theme</p> <span className='border uppercase p-1'>new</span> </div>   
                                </div>
                                <div className='pt-4'>
                                    <div className='flex-shrink-0 relative mx-6 h-20 w-20'> <Image src={Kid} alt='Video' className='object-cover' layout='fill'/> </div>
                                    <div className='justify-between flex mx-6 uppercase text-zinc-600 text-lg'> <h1>jane</h1>  <h1>ghana</h1> </div>
                                    <div className='flex justify-between mx-6 text-sm text-zinc-500'> <p className='capitalize'>Non profit wp theme</p> <span className='border uppercase p-1'> new </span> </div>   
                                </div>

                        </div>
                    </div>

                    <div className='h-full w-full text-center'>
                        <div className='flex flex-col mt-6 space-y-4 divide-y divide-dashed'>
                        <div className='pt-4'>
                                    <div className='flex-shrink-0 relative mx-6 h-20 w-20'> <Image src={Kid} alt='Video' className='object-cover' layout='fill'/> </div>
                                    <div className='justify-between flex mx-6 uppercase text-zinc-600 text-lg'> <h1>jack</h1>  <h1>kenya</h1> </div>
                                    <div className='flex justify-between mx-6 text-sm text-zinc-500'> <p className='capitalize'>Non profit wp theme</p> <span className='border uppercase p-1'>new</span> </div>   
                                </div>

                                <div className='pt-4'>
                                    <div className='flex-shrink-0 relative mx-6 h-20 w-20'> <Image src={Kid} alt='Video' className='object-cover' layout='fill'/> </div>
                                    <div className='justify-between flex mx-6 uppercase text-zinc-600 text-lg'> <h1>george</h1>  <h1>nigeria</h1> </div>
                                    <div className='flex justify-between mx-6 text-sm text-zinc-500'> <p className='capitalize'>Non profit wp theme</p> <span className='border uppercase p-1'>new</span> </div>   
                                </div>
                                <div className='pt-4'>
                                    <div className='flex-shrink-0 relative mx-6 h-20 w-20'> <Image src={Kid} alt='Video' className='object-cover' layout='fill'/> </div>
                                    <div className='justify-between flex mx-6 uppercase text-zinc-600 text-lg'> <h1>emanuel</h1>  <h1>china</h1> </div>
                                    <div className='flex justify-between mx-6 text-sm text-zinc-500'> <p className='capitalize'>Non profit wp theme</p> <span className='border uppercase p-1'> new </span> </div>   
                                </div>

                        </div>
                    </div>

                    

                </div>

            </div>
        </>
    )
}