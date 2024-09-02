import * as React from 'react'


export default function ParallaxSection () {
    return(
        <div className='mx-auto w-full text-left'>
            <div className='h-full w-full justify-center' id='AboutImage'>
                <div className='xl:w-9/12 lg:w-9/12 w-full mx-auto px-6 xl:px-0 py-12'>
                    <div className='xl:text-left text-center'>
                        <h1 className='capitalize font-medium text-white xl:text-5xl lg:text-4xl text-xl'>doing the right thing, <br/> at the right time</h1>
                        <div className='flex xl:flex-row  flex-col xl:space-x-20 xl:space-y-0 space-y-4 pt-16 text-white xl:items-start uppercase'>
                            <div className='flex flex-col space-y-2'> <h1 className='text-5xl font-medium'>12</h1> <h1 className='font-light tracking-wider'>causes</h1> </div>
                            <div className='flex flex-col space-y-2'> <h1 className='text-5xl font-medium'>100</h1> <h1 className='font-light tracking-wider'>volunteers</h1> </div>
                            <div className='flex flex-col space-y-2'> <h1 className='text-5xl font-medium'>47</h1> <h1 className='font-light tracking-wider'>children</h1> </div>
                            <div className='flex flex-col space-y-2'> <h1 className='text-5xl font-medium'>10</h1> <h1 className='font-light tracking-wider'>countries</h1> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}