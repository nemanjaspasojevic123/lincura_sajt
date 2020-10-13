import React from 'react';
import { Navbar } from '../../Navbar';
import '../style/Products.css'

export const Products = () => {
    return (
        <div>
            <Navbar />
            <div className="products">
                <div className="product-one">
                    <span>Koren Lincure</span>
                    <img src={require("../../assets/Lincura_sa_Tare.jpg")} alt="no img" className="product-one-img"></img>
                </div>
                <div className="product-two">
                    <span>Seme Lincure</span>
                    <img src={require("../../assets/Lincura seme mockup.jpg")} alt="no img" className="product-two-img"></img>
                </div>
                <div className="product-three">
                    <span>Rakija sa korenom Lincure</span>
                    <img src={require("../../assets/Lincura rakija.jpg")} alt="no img" className="product-three-img"></img>
                </div>
            </div>
        </div>
    )
}