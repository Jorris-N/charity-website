import * as React from 'react';


export default function ContactForm(){
    return(
        <div className='bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12'>
            <div className='max-w-lg mx-auto lg:max-w-none'>
        <div>
            <form className='grid grid-cols-1 gap-y-6'>

            <div>
            <div className='relative rounded-md'>
                <input type="text" id='full_name' className='form-input block w-full py-3 px-4 border placeholder-gray-500 transition focus:outline-none focus:border-teal-400 focus:ring-teal-400 focus:ring-1 transition ease-in-out duration-200' placeholder='Full name' required />
            </div>
            </div>

            <div>
            <div className='relative rounded-md shadow-sm'>
                <input type="email" id='Email' className='form-input block w-full py-3 px-4 border placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-teal-400 focus:ring-1 transition ease-in-out duration-200' placeholder='Email' required />
            </div>
            </div>

            <div>
            <div className='relative rounded-md shadow-sm'>
                <input type="text" id='phone' className='form-input block w-full py-3 px-4 border placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-teal-400 focus:ring-1 transition ease-in-out duration-200' placeholder='Phone' required />
            </div>
            </div>

            <div>
            <div className='relative rounded-md shadow-sm'>
                <textarea type="text" id='message' rows="4" className='form-input block w-full py-3 px-4 border placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-teal-400 focus:ring-1 transition ease-in-out duration-200' placeholder='Message' required/>
            </div>
            </div>
            
            <div>
                <span className='inline-flex rounded-md shadow-sm'>
                    <button type="submit" className='inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-400 hover:bg-zinc-500 focus:outline-none transition duration-200 ease-in-out'>
                        Submit
                    </button>
                </span>
            </div>

            </form>
            
        </div>
        </div>
        </div>
    )
}