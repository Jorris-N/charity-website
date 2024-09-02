import * as React from 'react'
import Responsivenav from './responsivenav'
import Topnav from './topnav'
import Webnav from './webnav'



export default function Navbar(){
    return(
        <div className='w-full'>
            {/* top section */}
            <Topnav />
            {/* web navigation bar */}
            <Webnav />
            {/* responsive navigation */}
            <Responsivenav />
        
        </div>
    )
}