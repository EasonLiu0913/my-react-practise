import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ProductsPage from './components/ProductPage';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    Link,
} from 'react-router-dom';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <div>
                    <h1>Home</h1>
                    <Link to="product">Product Page</Link>
                </div>
            ),
        },
        {
            path: 'product',
            element: <ProductsPage />,
        },
        {
            path: 'product/:id',
            element: <ProductDetails />,
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
