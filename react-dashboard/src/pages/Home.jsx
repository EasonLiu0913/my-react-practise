import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-500">
            <Link className="text-lime-500 text-5xl" to="/dashboard">
                Enter Dashboard
            </Link>
        </div>
    );
};

export default Home;
