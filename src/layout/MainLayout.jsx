import React from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/shared/navbar/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className='mx-auto container'>
                <Outlet/> 
            </div>
            <Footer/>
           
        </div>
    );
};

export default MainLayout;