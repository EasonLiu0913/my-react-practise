import './App.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import Header from './pages/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductLayout from './pages/ProductLayout';
import Products, { dataLoader as ProductsDataLoader } from './pages/Products';
import Product, { dataLoader as ProductDataLoader } from './pages/Product';
import ProductFeatures from './pages/ProductFeatures';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<ProductLayout />}>
                    <Route
                        index
                        element={<Products />}
                        loader={ProductsDataLoader}
                    />
                    <Route
                        path=":id"
                        element={<Product />}
                        loader={ProductDataLoader}
                    />
                    {/* <Route path="features" element={<ProductFeatures />} /> */}
                </Route>
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
