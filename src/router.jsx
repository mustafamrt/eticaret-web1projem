import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingCompanents from "./companents/loadingCompanent";


const HomePage = lazy(() => import('./view/homePage'));
const AboutPage = lazy(() => import('./view/aboutPage'));
const HelpPage = lazy(() => import('./view/helpPage'));
const LoginPage = lazy(() => import('./view/loginPage'));
const RegisterPage = lazy(() => import('./view/registerPage'));
function RouterControle() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Suspense fallback={<LoadingCompanents />} ><HomePage  /></Suspense>} />
                <Route path="/hakkimizda" element={<Suspense fallback={<LoadingCompanents />} ><AboutPage  /></Suspense>} />

                <Route path="/yardim" element={<Suspense fallback={<LoadingCompanents />} ><HelpPage  /></Suspense>} />
                <Route path="/login" element={<Suspense fallback={<LoadingCompanents />} ><LoginPage  /></Suspense>} />
                <Route path="/register" element={<Suspense fallback={<LoadingCompanents />} ><RegisterPage  /></Suspense>} />

            </Routes>
        </BrowserRouter>
    );
}

export default RouterControle;