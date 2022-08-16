import { AppBar } from "components/app-bar/AppBar";
import { Suspense } from "react";
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
    return (
        <>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </>
    );
}