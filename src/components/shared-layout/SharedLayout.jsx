import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { AppBar } from "components/app-bar/AppBar";
import { StyledSpinner } from "./SharedLayout.styled";
import { ToastContainer } from "react-toastify";


export const SharedLayout = () => {
    return (
        <>
            <AppBar />
            <Suspense fallback={<StyledSpinner animation="border" role="status" />}>
                <Outlet />
            </Suspense>
            <ToastContainer autoClose={2000}/>
        </>
    );
}