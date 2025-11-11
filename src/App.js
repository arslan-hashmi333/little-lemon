import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import "./App.css";

function App() {
    return (
        <Router>
            <Navbar />

            <div className="container-fluid mt-4">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/menu" element={<Menu />}/>
                    <Route path="/reservation" element={<Reservation />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
