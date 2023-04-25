import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

const Dashborad = ({ children }) => {
    return (
        <>
            <DashboardLayout>
                <Outlet />
            </DashboardLayout>
        </>
    );
};

export default Dashborad;
