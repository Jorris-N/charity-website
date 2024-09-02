import * as React from 'react'
import Image from 'next/image';
import Logo from '../../../public/images/logo-grey-1.png'
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';


export default function Responsivenav(){

    const [showValues, setShowValues] = useState (false);
    const dropdown = useRef(null);
    
    useEffect ( () =>{
        if (!showValues) return;
        function handleClick (event) {
            if (dropdown.current && !dropdown.current.contains(event.target)){
                setShowValues(false);
            }
        }
        window.addEventListener ("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
     [showValues]},);

     function toggling() {
        return setShowValues(!showValues);
    }
    
    const navigation={
    navlinks:[
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
        },
        {
            id: 7,
            Name: 'Donate',
            href: '#'
        }
    ]
}

    return(
        <div className='w-full xl:hidden flex flex-row px-4 py-6 justify-between'>
            <div className=' items-center flex flex-col lg:px-12 px-8'>
                <div>
                    <Image src={Logo} alt="Logo" width={300} height={50}/>
                </div>
            </div>
            <div className=' lg:px-12 px-8 text-zinc-400'>
                <button type='button' onClick={toggling}>
                    <svg className="w-10 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                {showValues && (
                    <div className='w-full px-6 fixed inset-y-0 bg-zinc-700 h-1/2 flex flex-col-z-50 mt-20 text-center justify-center' style={{right:0}}>
                        <nav className='flex flex-col divide-y divide-slate-400 w-full'>
                            <button className='text-right mr-4' onClick={toggling}>
                                <FontAwesomeIcon icon={faTimesCircle} className='h-8 py-2'/>
                            </button>
                            {
                                navigation.navlinks.map ((link) => (
                                    <Link href={link.href} key={link.id}>
                                        <a className='uppercase text-white py-3 px-4'> 
                                            {link.Name}
                                        </a>
                                    </Link>
                                ))
                            }
                        </nav>
                    </div>
                )
                }
            </div>
        </div>
    )
}