import * as React from 'react'
import Image from 'next/image';
import Logo from '../../../public/images/logo-grey-1.png'
import Link from 'next/link';


export default function Webnav(){

    const navigation=[
        {
            id: 1,
            Name: 'Home',
            href:'/'
        },

        {
            id: 2,
            Name: 'About',
            href:'/about'
        },

        {
            id: 3,
            Name: 'Events',
            href: '#'
        },

        {
            id: 4,
            Name: 'Shop',
            href: '/shop'
        },

        {
            id: 5,
            Name: 'Blog',
            href: '#'
        },
        {
            id: 6,
            Name: 'Contact',
            href: '/contact'
        }
    ]
    
    return(
        <div className='w-full xl:flex flex-col hidden'>
            <div className=' items-center flex flex-col px-16 pt-8'>
                <div>
                    <Image src={Logo} alt="Logo" width={300} height={50}/>
                </div>
            </div>
                <div className='border-t border-zinc-300 mt-6'>
                    <nav className=''>
                        <div className='py-4 '>
                        <ul className='flex uppercase text-sm text-center justify-center space-x-12 w-full'>
                            {
                                navigation.map((link) => (
                                    <li className='flex flex-col font-medium border-r border-zinc-200' key={link.id}>
                                        <Link href={link.href}>
                                            <a className='text-zinc-400 px-2 mr-12'>{link.Name}</a>
                                        </Link>
                                    </li>
                                ))
                            
                            }
                            <li className='font-medium'>
                                <Link href='/donate'>
                                    <a className='bg-zinc-700 rounded-full py-1.5 px-4 text-white text-sm'>
                                        donate now
                                    </a>
                                </Link>

                            </li>
                        </ul>
                        </div>
                    </nav>
                </div>
        </div>
    )
}