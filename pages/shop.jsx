import * as React from 'react';
import Layout from '../components/constant/layout';
import BannerSection from '../components/Pages/ShopPage/bannerSection';
import ItemSection from '../components/Pages/ShopPage/itemSection';


export default function Shop () {
    return (
        <>
            <div>
                <Layout>
                    {/* Banner Section */}
                    <BannerSection/>

                    {/* Shop Section */}
                    <ItemSection/>

                </Layout>
            </div>
        </>
    )
}