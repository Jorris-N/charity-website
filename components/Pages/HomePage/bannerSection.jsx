import * as React from 'react';
import Link from 'next/link';


export default function BannerSection () {
    return(
        <>
            <div className='mx-auto w-full text-left'>
                <div id='bannerImage' className='h-full w-full justify-center'>
                    <div className='xl:w-9/12 lg:w-9/12 w-full mx-auto px-6 xl:px-0 mt-10 py-12'>
                        <div className='xl:text-left lg:text-left text-center xl:mt-44 pt-20 justify-center mb-8 mx-auto flex flex-col text-white space-y-2'>
                            <h1 className='font-bold uppercase xl:text-8xl lg:text-8xl md:text-6xl text-4xl tracking-wider'>we love </h1>
                            <h1 className='font-bold uppercase xl:text-8xl lg:text-8xl md:text-6xl text-4xl tracking-wider'>all people </h1>
                            <p className='uppercase  text-xl font-light pt-6'>check our latest courses and missions</p>
                            <span className='pt-4 uppercase'>
                                <Link href='/donate'>
                                    <a className='bg-zinc-700 rounded-full py-3 px-10 text-white text-sm font-semibold hover:bg-white ease-in-out duration-500 hover:text-zinc-700'>
                                        donate now
                                    </a>
                                </Link>
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}