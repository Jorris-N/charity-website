import * as React from 'react'
import Layout from '../components/constant/layout'
import AchievementSection from '../components/Pages/HomePage/achievementSection'
import AdoptionSection from '../components/Pages/HomePage/adoptionSection'
import AnnualNumber from '../components/Pages/HomePage/annualNumber'
import AreaSection from '../components/Pages/HomePage/area'
import BannerSection from '../components/Pages/HomePage/bannerSection'
import DonateSection from '../components/Pages/HomePage/donationSection'
import GallerySection from '../components/Pages/HomePage/gallery'
import SectorsSection from '../components/Pages/HomePage/sectorsSection'
import ShopSection from '../components/Pages/HomePage/shopSection'
import TeamSection from '../components/Pages/HomePage/teamSection'


export default function Home() {
  return (
    <div>
      <Layout>
        {/* BAnner Section */}
        <BannerSection/>

        {/* Sector Section */}
        <SectorsSection/>

        {/* Annual Perfomance Section */}
        <AnnualNumber/>
        <AreaSection/>

        {/* Monthly donation Section */}
        <DonateSection/>

        {/* Gallery Section */}
        <GallerySection/>

        {/* Adoption Section */}
        <AdoptionSection/>

        {/* Team Section */}
        <TeamSection/>

        {/* Shop Section */}
        <ShopSection/>

        {/* Achievement Section */}
        <AchievementSection/>
          
      </Layout>
    </div>
  )
}
