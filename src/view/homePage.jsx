
import React, { lazy, Suspense } from 'react';
import { NavbarCompanent } from '../companents/navbar';
import HomeProductCoursel from '../companents/homeProductCoursel';
import productData from '../data/productData';

// const { NavbarCompanent } = lazy(() => import('../companents/navbar.jsx'));
const HomeCoursel = lazy(() => import('../companents/homeCoursel'));

function HomePage() {
    return (
        <>       <Suspense fallback={<div>Loading...</div>}>
            <NavbarCompanent />
            <HomeCoursel />
        </Suspense>


<HomeProductCoursel data={productData.slice(0, 10)} />
<HomeProductCoursel data={productData.slice(11, 20)} />
<HomeProductCoursel data={productData.slice(21, 30)} />
<HomeProductCoursel data={productData.slice(31, 40)} />
<HomeProductCoursel data={productData.slice(41, 50)} />
        </>
    );
}

export default HomePage;