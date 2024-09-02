import * as React from 'react';
import Layout from '../components/constant/layout';
import BannerSection from '../components/Pages/AboutPage/bannerSection';
import ContentSection from '../components/Pages/AboutPage/contentSection';
import ParallaxSection from '../components/Pages/AboutPage/parallaxSection';
import VolunteerSection from '../components/Pages/AboutPage/volunteerSection';


export default function About () {
    return(
        <div>
            <Layout>
                {/* Banner Section */}
                <BannerSection/>

                {/* Content Section */}
                <ContentSection/>

                {/* Parallax Section */}
                <ParallaxSection/>

                {/* Volunteer Section */}
                <VolunteerSection/>
            </Layout>
        </div>
    )
}