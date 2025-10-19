import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';

const RootLayout = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;