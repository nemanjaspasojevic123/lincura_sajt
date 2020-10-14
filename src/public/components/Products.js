import React from 'react';
import { Footer } from '../../Footer';
import { Navbar } from '../../Navbar';
import '../style/Products.css'

export const Products = () => {
    return (     
            <div className="products">
            <Navbar />
                <div className="product-one">
                    <span className="text-product-one">Koren Lincure</span>
                    <img src={require("../../assets/Lincura_sa_Tare.jpg")} alt="no img" className="product-one-img"></img>
                </div>
                <div className="product-two">
                    <span className="text-product-two">Seme Lincure</span>
                    <img src={require("../../assets/Lincura seme mockup.jpg")} alt="no img" className="product-two-img"></img>
                </div>
                <div className="product-three">
                    <span className="text-product-three">Rakija sa korenom Lincure</span>
                    <img src={require("../../assets/Lincura rakija.jpg")} alt="no img" className="product-three-img"></img>
                </div>
                <Footer /> 
            </div>      
    )
}