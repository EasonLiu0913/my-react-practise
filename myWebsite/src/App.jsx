import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import ProductsPage from './pages/ProductPage';
import Product from './components/ProductCard';
import ProductDetails from './pages/ProductDetails';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Router,
    Route,
    RouterProvider,
    Link,
} from 'react-router-dom';
import './App.css';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="/product" element={<ProductsPage />}></Route>
                <Route path="/product/:id" element={<ProductDetails />} />
            </Route>
        )
    );

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
