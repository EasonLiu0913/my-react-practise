import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../../components/ProductCard';
import { Link } from 'react-router-dom';
import fetchProductData from '../../customHooks/fetchProductData';
// import './style.css';
import { Container } from './styled';

export default function ProductsPage() {
    const productData = fetchProductData();

    return (
        <>
            <Container>
                <div className="bread-crumbs">
                    <Link to="/">Home</Link>
                    <span> / </span>
                    <span>Products</span>
                </div>
                <div className="productArea">
                    {productData.map((product) => {
                        return (
                            <Link
                                to={`/product/${product.id}`}
                                key={product.id}
                            >
                                <Product product={product} />
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </>
    );
}
