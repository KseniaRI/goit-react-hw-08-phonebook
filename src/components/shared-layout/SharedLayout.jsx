import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { NavBar } from "components/nav-bar/NavBar";
import { StyledSpinner } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <>
            <NavBar />
            <Suspense fallback={<StyledSpinner animation="border" role="status" />}>
                <Outlet />
            </Suspense>
            <ToastContainer autoClose={2000}/>
        </>
    );
}