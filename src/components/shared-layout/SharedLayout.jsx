import { AppBar } from "components/app-bar/AppBar";
import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Spinner from 'react-bootstrap/Spinner';

export const SharedLayout = () => {
    return (
        <>
            <AppBar />
            <Suspense fallback={<Spinner animation="border" role="status" size="l"/>}>
                <Outlet />
            </Suspense>
            <ToastContainer autoClose={3000}/>
        </>
    );
}