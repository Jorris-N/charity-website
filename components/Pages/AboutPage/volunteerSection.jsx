import * as React from 'react';
import Link from 'next/link';


export default function VolunteerSection () {
    return (
        <div className='xl:w-9/12 lg:w-9/12 w-full mx-auto px-6 xl:px-0 py-12'>
            <div className='xl:grid xl:grid-cols-2 xl:gap-6 pt-8 xl:space-y-0 space-y-6'>
                <div className='capitalize flex space-x-2'> <p className='text-yellow-400 text-3xl font-bold'>01.</p>  <p className='leading-7 text-zinc-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor. </p> </div>
                <div className='capitalize flex space-x-2'> <p className='text-red-500 text-3xl font-bold'>02.</p>  <p className='leading-7 text-zinc-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor. </p> </div>
                <div className='capitalize flex space-x-2'> <p className='text-blue-500 text-3xl font-bold'>03.</p>  <p className='leading-7 text-zinc-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor. </p> </div>
                <div className='capitalize flex space-x-2'> <p className='text-teal-400 text-3xl font-bold'>04.</p>  <p className='leading-7 text-zinc-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor. </p> </div>
            </div>
            <div className='items-center justify-center text-center mt-12 uppercase'>
                <Link href='/donate'>
                    <a className='bg-red-600 rounded-full py-4 px-10 text-white text-md'>
                        become our volunteer
                    </a>
                </Link>
            </div>
        </div>
    )
}