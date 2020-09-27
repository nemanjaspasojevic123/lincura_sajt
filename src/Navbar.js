import React from 'react';
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
            <Link className="navbar-brand" to="/" >
                <img src={require("./assets/clipart3024702.png")} alt="no img" width="50px" height="40px"/>
            </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" >O nama</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products" >Proizvodi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery" >Galerija</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reference" >Reference</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/impressions" >Knjiga utisaka</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" >Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}