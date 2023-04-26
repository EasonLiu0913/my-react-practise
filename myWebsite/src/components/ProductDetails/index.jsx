import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import fetchProductData from '../customHooks/fetchProductData';
import './style.css';
import Product from '../Product';

export default function ProductDetails() {
    const productsData = fetchProductData();
    const BASEURL = 'http://localhost:5173/';
    const params = useParams();
    console.log('productsData', productsData);
    const product = productsData[params.id];

    const [quantity, setQuantity] = useState(1);

    // 每次都要隨機取得四個不與 params.id 產品重複的推薦商品
    const newProductsList = productsData.filter(
        (item) => item.id !== +params.id
    );
    const ranNums = shuffle(newProductsList);
    const suggestList = [
        ranNums.next().value,
        ranNums.next().value,
        ranNums.next().value,
        ranNums.next().value,
    ];

    function* shuffle(array) {
        var i = array.length;
        while (i--) {
            yield array.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        }
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function getRandomNumber(maxLimit) {
        let rand = Math.floor(Math.random() * maxLimit);
        console.log(rand);
        return rand;
    }

    return (
        product && (
            <>
                <div className="conatainer">
                    <div className="bread-crumbs">
                        <Link to="/">Home</Link>
                        <span> / </span>
                        <Link to="/product">Products</Link>
                        <span> / </span>
                        <span>product</span>
                    </div>
                    <div className="product-info-area">
                        <div className="product-img">
                            <img
                                src={`${BASEURL}/Alameda-imgs/pic_${params.id}.jpg`}
                                alt=""
                            />
                        </div>
                        <div className="product-info">
                            <h2>{product.name}</h2>
                            <h3>{`$${product.price}.00`}</h3>
                            <div>
                                <p>DESCRIPTION</p>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Suscipit explicabo fuga
                                    doloremque tempora velit laudantium modi
                                    quisquam pariatur ab mollitia magni illum
                                    aspernatur, alias asperiores! Adipisci
                                    blanditiis velit unde id!
                                </p>
                            </div>
                            <div>
                                <p>DETAILS</p>
                                <ul>
                                    <li>100% Cotton</li>
                                    <li>Machine wash cold </li>
                                    <li>Tumble dry low</li>
                                </ul>
                            </div>
                            <div>
                                <p>Size:</p>
                                <select name="size" id="size">
                                    <option value="0" key="0">
                                        Select Size
                                    </option>
                                    <option value="S" key="S">
                                        S
                                    </option>
                                    <option value="M" key="M">
                                        M
                                    </option>
                                    <option value="L" key="L">
                                        L
                                    </option>
                                    <option value="XL" key="XL">
                                        XL
                                    </option>
                                </select>
                            </div>
                            <div>
                                <p>Quantity:</p>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="suggest">
                        <h2>You Might Also Like</h2>
                        <div className="suggest-products">
                            {console.log('suggestList2', suggestList)}
                            {suggestList &&
                                suggestList.length > 0 &&
                                suggestList.map((product) => {
                                    if (product) {
                                        return (
                                            <Link
                                                to={`/product/${product.id}`}
                                                key={product.id}
                                            >
                                                <Product product={product} />
                                            </Link>
                                        );
                                    }
                                })}
                        </div>
                    </div>
                </div>
            </>
        )
    );
}
