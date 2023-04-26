import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Nav } from './styled';

export default function Header() {
    return (
        <>
            <Nav>
                <Link to="/" style={{ marginRight: '20px' }}>
                    Home
                </Link>
                <Link to="/product">Product Page</Link>
            </Nav>

            <Outlet />
        </>
    );
}
