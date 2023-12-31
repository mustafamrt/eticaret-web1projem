import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingCompanents from "./companents/loadingCompanent";

const HomePage = lazy(() => import('./view/homePage'));

function RouterControle() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Suspense fallback={<LoadingCompanents />} ><HomePage  /></Suspense>} />


            </Routes>
        </BrowserRouter>
    );
}

export default RouterControle;