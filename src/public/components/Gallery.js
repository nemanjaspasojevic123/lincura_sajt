import React from 'react';
import { Navbar } from '../../Navbar';

export const Gallery = () => {
    return (
        <div>
            <Navbar />
            <p>
                Galerija
            </p>
            <div className = "images">
            <img src={require("../../assets/hqdefault.jpg")} alt="no img" width="600px" height="auto"/>
            </div>
        </div>
    )
}