import * as React from 'react';
import Data from '../../../pages/Data/contributionData.json';
import Link from 'next/link';

export default function DonateSection () {
    return (
        <>
         <div className='mx-auto w-full text-left'>
            <div id='DonateImage' className='h-full w-full justify-center'>
                <div className='xl:w-9/12 lg:w-9/12 w-full mx-auto px-6 xl:px-0 mt-10 py-12'>
                    <div className='text-left justify-center mb-8 mx-auto flex flex-col text-white uppercase space-y-2'>
                        <h1 className='text-xl font-light tracking-wide'>help us</h1>
                        <h1 className='text-5xl font-semibold tracking-wide'>monthly</h1>
                    </div>
                    <div className='mt-4 grid xl:grid-cols-3 gap-4 max-w-lg mx-auto lg:grid-cols-1 md:grid-cols-1 lg:max-w-none mb-6'>
                        {
                            Data.map ((Item) => (
                                <div className='mx-3 bg-white rounded-sm shadow-md overflow-hidden gap-4 mb-4' key={Item.id}>
                                    <div className='flex-shrink-0 py-6 mx-6'>
                                        <h1 className='uppercase text-md font-semibold tracking-wider text-teal-400'>{Item.type}</h1>
                                        <h2 className='text-5xl py-4 text-zinc-700 font-light'>{Item.amount}</h2>
                                        <p className='uppercase text-sm tracking-wider font-light text-zinc-600'>per month</p>
                                    </div>
                                    <div className='flex flex-col py-6 mx-6 '>
                                    <p className='flex flex-row capitalize text-sm text-zinc-600 mb-1 border-t p-1'> <span className='mr-2 text-sm'>
                                            <svg className='w-6 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path></svg>
                                            </span>Lorem</p>
                                            <p className='flex flex-row capitalize text-sm text-zinc-600 mb-1 border-t p-1'> <span className='mr-2 text-sm'>
                                            <svg className='w-6 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path></svg>
                                            </span>lorem</p>
                                            <p className='flex flex-row capitalize text-sm text-zinc-600 mb-1 border-t border-b p-1'> <span className='mr-2 text-sm'>
                                            <svg className='w-6 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path></svg>
                                            </span>lorem</p>
                                    </div>
                                    <div className='py-6 mx-6'>
                                        <span className='uppercase'>
                                            <Link href='/donate'>
                                                <a className='bg-zinc-700 rounded-full py-2 px-4 text-white text-sm font-medium hover:bg-zinc-300 ease-in-out duration-500 hover:text-zinc-700'>
                                                    donate now
                                                </a>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

         </div>
        </>
    )
}