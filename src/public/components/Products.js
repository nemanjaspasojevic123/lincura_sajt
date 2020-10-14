import React from 'react';
import { Footer } from '../../Footer';
import { Navbar } from '../../Navbar';
import '../style/Products.css'

export const Products = () => {
    return (     
            <div className="products">
            <Navbar />
                <div className="product-one">
                    <div className="text-product-one">
                    <h3>Koren Lincure</h3>
                    <p>Osušen koren (Gentianae radix)</p>
                    <p>Pakovanje: 100 g</p>
                    </div>
                    <img src={require("../../assets/Lincura_sa_Tare.jpg")} alt="no img" className="product-one-img"></img>
                </div>
                <div className="product-two">
                    <h3 className="text-product-two">Seme Lincure</h3>
                    <img src={require("../../assets/Lincura seme mockup.jpg")} alt="no img" className="product-two-img"></img>
                </div>
                <div className="product-three">
                    <h3 className="text-product-three">Rakija sa korenom Lincure</h3>
                    <img src={require("../../assets/Lincura rakija.jpg")} alt="no img" className="product-three-img"></img>
                </div>
                <Footer /> 
            </div>      
    )
}