import { AppBar } from "components/app-bar/AppBar";
import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

export const SharedLayout = () => {
    return (
        <>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <ToastContainer autoClose={3000}/>
        </>
    );
}