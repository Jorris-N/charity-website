import * as React from 'react'
import FooterSection from './navigation/footer'
import Navbar from './navigation/navbar'



export default function Layout({children}){
    return(
        <div>
            <header>
                <Navbar />
            </header>
        
         {/* main section which holds {child} content */}
         <main>{children}</main>

         {/* Footer */}
         <footer>
            <FooterSection/>
         </footer>

        </div>
    )
}