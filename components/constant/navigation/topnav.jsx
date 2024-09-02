import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'; 
import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter,} from '@fortawesome/free-brands-svg-icons';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';


export default function Topnav(){
    return(
        <div className='w-full bg-zinc-700'>
            <div className='xl:flex xl:flex-row text-zinc-400 flex flex-col  f-full justify-between items-center justify-center  px-10 py-3'>
                {/* top links */}
                <div className='py-1 text-sm text-center xl:w-1/2 justify-center space-x-6 flex xl:pb-0 pb-2'>
                    <div className='flex justify-center space-x-2'>
                        <div className='hidden md:block'> LANGUAGES </div>
                        <div> EN </div>
                        <div> ES </div>
                    </div>
                    <div className='flex space-x-2 hidden md:block'>
                        <div className='flex space-x-2'>
                             <FontAwesomeIcon icon={faShareAlt} className='h-4'/> 
                             <h1>OUR SOCIAL</h1>
                        </div>
                    </div>
                    <div className='flex justify-center space-x-4'>
                        <div> <FontAwesomeIcon icon={faFacebookF}/> </div>
                        <div> <FontAwesomeIcon icon={faTwitter}/> </div>
                        <div> <FontAwesomeIcon icon={faLinkedinIn}/> </div>
                        <div> <FontAwesomeIcon icon={faPinterestP}/> </div>
                    </div>
                </div>
                {/* registration */}
                <div className='py-1 text-sm text-center xl:w-1/2 justify-center space-x-6 flex xl:pb-0 pb-2'>
                    <div className='space-x-2 flex'>
                        <FontAwesomeIcon icon={faUser} className='h-4'/>
                        <h1>REGISTER</h1>
                    </div>
                    <div className=' space-x-2 flex'>
                        <FontAwesomeIcon icon={faLock} className='h-4'/>
                        <h1>LOG IN</h1>
                    </div>

                </div>

            </div>
            
        </div>
    )
}