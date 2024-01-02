
import React, { lazy, Suspense } from 'react';
import { NavbarCompanent } from '../companents/navbar';
import HomeProductCoursel from '../companents/homeProductCoursel';
import productData from '../data/productData';
import HomeKampanyaCoursel from '../companents/homeKampanyaCoursel';
import KampanyaData from '../data/kampanyaData';

// const { NavbarCompanent } = lazy(() => import('../companents/navbar.jsx'));
const HomeCoursel = lazy(() => import('../companents/homeCoursel'));

function HomePage() {
    return (
        <>      
            <NavbarCompanent />
            <HomeCoursel />



            <HomeKampanyaCoursel data={KampanyaData} />

            <div>
                <h3 className='font-bold text-3xl mx-16 mt-12' >Aradığınız Ürünler</h3>
                <HomeProductCoursel data={productData.slice(0, 10)} />
            </div>
            <div>
                <h3 className='font-bold text-3xl mx-16 mt-12' >İndirimli Ürünler</h3>
                <HomeProductCoursel data={productData.slice(0, 10)} />
            </div>
        </>
    );
}

export default HomePage;