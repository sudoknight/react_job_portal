// ****************************************************************************************************************
// It is the layout of the Main/Index route. 
// The content on this layout is displayed on all the pages of sub routes. Because it is layout or the parent route
// so it is common for all the sub route pages.
// ****************************************************************************************************************

import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <>
            {/* We added NavBar here because it has to be shown on everypage */}
            <Navbar />
            
              {/* Whatever router we are on, That content or page is going to come through the  */}
              {/* Outlet */}
            <Outlet />
            <ToastContainer/ >
        </>
    )
};

export default MainLayout
