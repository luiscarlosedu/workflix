import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import Footer from './components/Footer';
// pages
import Home from "./pages/Home";
import Movie from './pages/Movie';
import Error from "./pages/Error";
import Favorites from './pages/Favorites';

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/movie/:id" element={<Movie/>} />
                <Route path="/favorites" element={<Favorites/>} />

                <Route path="*" element={<Error/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;