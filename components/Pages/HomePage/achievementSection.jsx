import * as React from 'react';


export default function AchievementSection () {
    return (
        <>
            <div className='mx-auto w-full text-left'>
                <div id='bannerImage' className='h-full w-full justify-center'>
                <div className='xl:w-9/12 lg:w-9/12 w-full mx-auto px-6 xl:px-0 py-12'>
                <div className='flex xl:flex-row  flex-col  xl:justify-between xl:space-x-20 mt-6 xl:items-center'>
                <div className='h-full w-full text-center text-white uppercase'>
                    <h1 className='text-2xl font-light'>our annual</h1>
                    <h1 className='text-5xl font-extrabold tracking-wide'>numbers</h1>
                    <div className='flex xl:flex-row  flex-col  xl:justify-between xl:space-x-20 xl:space-y-0 space-y-4 py-14'>
                        <div className='flex flex-col space-y-2'> <h1 className='text-5xl font-medium'>12</h1> <h1 className='font-light tracking-wider'>schools</h1> </div>
                        <div className='flex flex-col space-y-2'> <h1 className='text-5xl font-medium'>100</h1> <h1 className='font-light tracking-wider'>doctors</h1> </div>
                        <div className='flex flex-col space-y-2'> <h1 className='text-5xl font-medium'>47</h1> <h1 className='font-light tracking-wider'>books</h1> </div>
                        <div className='flex flex-col space-y-2'> <h1 className='text-5xl font-medium'>10</h1> <h1 className='font-light tracking-wider'>teachers</h1> </div>
                    </div>
                </div>
                <div className='h-full w-full text-center'> 
                    <form action='#' method='POST' className='bg-zinc-700 py-12 grid grig-cols-1 gap-y-4 p-8'>
                        <h1 className='text-white uppercase tracking-wide text-sm font-light'>help us</h1>
                        <h1 className='text-white capitalize text-3xl '>donate now</h1>
                        <div>
                            <input type='text' id='value' placeholder='Insert a custom Value' required className='placeholder-zinc-300 w-full py-3 px-4 bg-zinc-500 focus:outline-none focus:border-teal-400 focus:ring-teal-400 focus:ring-2 transition ease-in-out duration-200'/>
                        </div>
                        <div>
                            <input type='text' id='name' placeholder='Name' required className='placeholder-zinc-300 w-full py-3 px-4 bg-zinc-500 focus:outline-none focus:border-teal-400 focus:ring-teal-400 focus:ring-2 transition ease-in-out duration-200'/>
                        </div>
                        <div>
                            <input type='text' id='surname' placeholder='Surname' required className='placeholder-zinc-300 w-full py-3 px-4 bg-zinc-500 focus:outline-none focus:border-teal-400 focus:ring-teal-400 focus:ring-2 transition ease-in-out duration-200'/>
                        </div>
                        <div>
                            <input type='email' id='email' placeholder='Email' required className='placeholder-zinc-300 w-full py-3 px-4 bg-zinc-500 focus:outline-none focus:border-teal-400 focus:ring-teal-400 focus:ring-2 transition ease-in-out duration-200'/>
                        </div>
                        <button type="submit" className='justify-center py-3 px-6 border border-transparent font-medium rounded-full text-white bg-teal-400 capitalize'>submit</button>
                    </form>
                </div>
                </div>

                </div>
            </div>
            </div>
        </>
    )
}