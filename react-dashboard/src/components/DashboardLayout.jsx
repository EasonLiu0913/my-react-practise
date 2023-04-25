import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Users', path: '/dashboard/users' },
    { name: 'Posts', path: '/dashboard/posts' },
];

const DashboardLayout = ({ children }) => {
    const location = useLocation().pathname;

    return (
        <>
            <header className="px-4 py-5 border-b bg-slate-500">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Navbar</h1>
                    <div>
                        <button className="mr-3">Login</button>
                    </div>
                </div>
            </header>

            <main className="flex" style={{ minHeight: 'calc(100vh - 77px)' }}>
                <div className="menu border-r px-4 py-5">
                    <ul>
                        {links.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        isActive && link.path === location
                                            ? 'text-blue-500'
                                            : 'text-gray-500'
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content w-full">{children}</div>
            </main>
        </>
    );
};

export default DashboardLayout;
