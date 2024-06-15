import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Project from "./Project";
import Navigation from "./Navigation";
import Footer from "./Footer";

function App() {
    return (
        <div className="App background">
            <div className="container">
                <Navigation />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/project/:title" element={<Project />} />
                </Routes>

                <hr className="solid" />
                <Footer />
            </div>
        </div>
    );
}

export default App;
