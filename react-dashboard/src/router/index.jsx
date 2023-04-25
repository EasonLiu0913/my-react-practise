import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import Dashborad from '../Pages/Dashborad';
import Home from '../pages/Home';
import Posts from '../pages/Posts';
import Users from '../pages/Users';
import User from '../pages/User';
import DashStatus from '../pages/DashStatus';

export const router = createBrowserRouter([
    {
        path: '/',
        id: 'Home',
        element: <Home />,
    },
    {
        path: '/dashboard',
        id: 'Dashboard',
        element: <Dashborad />,
        children: [
            {
                index: true,
                element: <DashStatus />,
            },
            {
                path: '/dashboard/users',
                id: 'DashboardUsers',
                element: <Users />,
            },
            {
                path: '/dashboard/user/:id',
                id: 'DashboardUser',
                element: <User />,
            },
            {
                path: '/dashboard/posts',
                id: 'DashboardPosts',
                element: <Posts />,
            },
        ],
    },
]);
