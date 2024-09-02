import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';


export default function BottomFooter () {
    return(
        <div className='w-full bg-white text-zinc-400'>
            <div className='xl:flex xl:flex-row flex flex-col  f-full justify-between items-center justify-center  px-10 py-3'>
            <div className='py-1 text-md text-center xl:w-1/2 justify-center space-x-6 flex xl:pb-0 pb-2'>
                <h4 className='capitalize'> &copy; copyright 2022. all rights reserved. </h4>
            </div>
            <div className='py-1 text-sm text-center xl:w-1/2 justify-center space-x-6 flex xl:pb-0 pb-2'>
                <div>
                    <Link href='#'>
                        <a className='space-x-2 flex uppercase'>
                    <FontAwesomeIcon icon={faTwitter} className='h-5'/>
                    <h1> twitter </h1>
                    </a>
                    </Link>
                </div>

                <div>
                    <Link href='#'>
                        <a className='space-x-2 flex uppercase'>
                    <FontAwesomeIcon icon={faInstagram} className='h-5'/>
                    <h1> instagram </h1>
                    </a>
                    </Link>
                </div>

                <div>
                    <Link href='#'>
                        <a className='space-x-2 flex uppercase'>
                    <FontAwesomeIcon icon={faFacebookF} className='h-5'/>
                    <h1> facebook </h1>
                    </a>
                    </Link>
                </div>

                
            </div>

            </div>
        </div>
    )
}