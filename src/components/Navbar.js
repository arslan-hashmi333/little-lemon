import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container">
        <Link className="navbar-brand text-white font-weight-bold" to="/">Little Lemon</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
    <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
    <li className="nav-item"><Link className="nav-link text-white" to="/menu">Menu</Link></li>
    <li className="nav-item"><Link className="nav-link text-white" to="/reservation">Booking</Link></li>
    <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
    </ul>
    </div>
    </div>
    </nav>
);
}

export default Navbar;