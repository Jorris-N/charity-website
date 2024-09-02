import * as React from 'react';
import ContactForm from './contactForm';

export default function ContactSection () {
    return (
        <>
            <div className='xl:w-9/12 lg:w-9/12 w-full mx-auto px-6 xl:px-0 py-12 '>
                <div className='mb-12 relative bg-white border rounded-lg shadow-sm'>
            <div className='absolute inset-0'>
                <div className='absolute inset-y-0 left-0 w-1/2'></div>
            </div>
            <div className='relative mx-auto lg:grid lg:grid-cols-5 bg-teal-400 rounded-md'>
                <div className=' py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12'>
                    <div className='max-w-lg mx-auto'>
                        <h2 className='text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9'>
                            Get in Touch
                        </h2>
                        <p className='mt-3 text-lg leading-6 text-gray-500'>
                        Drop us a line, or give us a heads up if you are interested in visiting us.
                        </p>
                        <dl className='mt-8 text-base leading-6 text-gray-500'>
                            <div>
                                <dt className='sr-only'>Postal Address</dt>
                                <dd className='space-y-2'>
                                    <p>Red Elephant Bistro Building, </p>
                                    <p>Along MSA - NRB Highway, </p>
                                    <p>Voi, Taita Taveta County.</p>
                                </dd>
                            </div>
                            <div className='mt-6'>
                                <dt className='sr-only'>Phone number</dt>
                                <dd className='flex'>
                                <svg className="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className='ml-3'>
                                        +254-768-290099
                                    </span>
                                </dd>
                            </div>
                            <div className='mt-3'>
                                <dt className='sr-only'>Email</dt>
                                <dd className='flex'>
                                <svg className="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>   
                                    <span className='ml-3'>info@dutcredit.co.ke</span> 
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                
              <ContactForm/>
            </div>
                </div>
            </div>
        </>
    )
}