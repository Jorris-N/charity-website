import * as React from 'react';
import Link from 'next/link';


export default function AdoptionSection () {
    return (
        <>
            <div className='mx-auto w-full text-left'>
                <div id='DonateImage' className='h-full w-full justify-center DonateImage'>
                    <div className='xl:w-9/12 lg:w-9/12 w-full mx-auto px-6 xl:px-0 '>
                        <div className='xl:text-right lg:text-right text-center justify-center  mb-8 mx-auto flex flex-col text-white capitalize space-y-2'>
                            <h1 className='text-5xl font-normal tracking-wide'> adoptions</h1>
                            <p className='uppercase pt-4 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Voluptas error nesciunt rerum iure porro eaque.<br/> Sit in exercitationem hic, veniam voluptatibus tempore.<br/> Est odit vero minus ut id! Repudiandae, doloremque.</p>
                            <div className='py-6 mx-6'>
                                <span className='uppercase'>
                                    <Link href='/contact'>
                                        <a className='bg-teal-400 rounded-full py-4 px-8 text-white tracking-wide text-sm font-medium hover:bg-zinc-200 ease-in-out duration-500 hover:text-zinc-700'>
                                            contact us
                                        </a>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}