import React from 'react';

export default function Product(props) {
    const { product } = props;
    console.log('product', product);
    return (
        <>
            <div className="product">
                <img
                    src={`http://localhost:5173/Alameda-imgs/pic_${product.id}.jpg`}
                    alt=""
                />
                <h3>{product.name}</h3>
                <p>${product.price}.00</p>
            </div>
        </>
    );
}
