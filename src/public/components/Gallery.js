import React from 'react';
import { Navbar } from '../../Navbar';

export const Gallery = () => {
    return (
        <div>
            <Navbar />
            <div className = "images">
            <img src={require("../../assets/20190511_185328.jpg")} alt="no img" width="1000px" height="auto"/>
            </div>
        </div>
    )
}