import * as React from 'react';


export default function BannerSection () {
    return(
        <div className='mx-auto w-full text-left'>
            <div className='h-full w-full justify-center' id='AboutImage'>
                <div className='xl:w-9/12 lg:w-9/12 w-full mx-auto px-6 xl:px-0 py-12'>
                    <div className='xl:text-left lg:text-left text-center'>
                        <h1 className='capitalize font-medium text-white xl:text-5xl lg:text-4xl text-xl'>about us</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}