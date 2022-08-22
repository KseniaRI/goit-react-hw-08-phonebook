import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
// import { AppBar } from "components/app-bar/AppBar";
import { StyledSpinner } from "./SharedLayout.styled";
import { ToastContainer } from "react-toastify";
import { NavBar } from "components/nav-bar/NavBar";


export const SharedLayout = () => {
    return (
        <>
            <NavBar />
            {/* <AppBar /> */}
            <Suspense fallback={<StyledSpinner animation="border" role="status" />}>
                <Outlet />
            </Suspense>
            <ToastContainer autoClose={2000}/>
        </>
    );
}