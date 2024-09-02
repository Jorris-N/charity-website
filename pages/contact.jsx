import * as React from 'react';
import Layout from '../components/constant/layout';
import BannerSection from '../components/Pages/ContactPage/bannerSection';
import ContactSection from '../components/Pages/ContactPage/contactSection';


export default function Contact () {
    return (
        <>
            <div>
                <Layout>
                    {/* Banner Section */}
                    <BannerSection/>

                    {/* Contact Section */}
                    <ContactSection/>
                </Layout>
            </div>
        </>
    )
}