import React from 'react';
import { Product } from './styled';

export default function ProductCard(props) {
    const { product } = props;
    console.log('product', product);
    return (
        <>
            <Product>
                <img
                    src={`http://localhost:5173/Alameda-imgs/pic_${product.id}.jpg`}
                    alt=""
                />
                <h3>{product.name}</h3>
                <p>${product.price}.00</p>
            </Product>
        </>
    );
}
