import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product';
import ProductDetails from '../ProductDetails';
import { Link } from 'react-router-dom';
import './style.css';
import fetchProductData from '../customHooks/fetchProductData';

export default function ProductsPage() {
    const productData = fetchProductData();

    return (
        <>
            <div className="pageTitle">products page</div>

            <div className="productArea">
                {productData.map((product) => {
                    return (
                        <Link
                            to={`/product/${product.name}`}
                            key={product.id.toString()}
                        >
                            <Product product={product} />
                        </Link>
                    );
                })}
            </div>
        </>
    );
}
