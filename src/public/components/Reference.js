import React from 'react';
import { Footer } from '../../Footer';
import { Navbar } from '../../Navbar';
import "../style/Reference.css"

export const Reference = () => {
    return (
        <div>
            <Navbar />
            <div className="reference-one">
                <img src={require("../../assets/icon-5359553_1920.png")} alt="noImg" height="150px" className="reference-img-one"></img>
                <h4 className="name-one">Ime i Prezime</h4>
                <h5 className="title-one">Titula</h5>
                <p className="reference-txt-one">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div className="reference-two">
                <img src={require("../../assets/icon-5359554_1920.png")} alt="noImg" height="150px" className="reference-img-two"></img>
                <h4 className="name-two">Ime i Prezime</h4>
                <h5 className="title-two">Titula</h5>
                <p className="reference-txt-two">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div className="reference-three">
                <img src={require("../../assets/icon-5359553_1920.png")} alt="noImg" height="150px" className="reference-img-three"></img>
                <h4 className="name-three">Ime i Prezime</h4>
                <h5 className="title-three">Titula</h5>
                <p className="reference-txt-three">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <Footer />
        </div>
    )
}