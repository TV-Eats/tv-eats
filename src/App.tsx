import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Contact from "./pages/Contact";
import Shows from "./pages/Shows";
import Error from "./pages/Error";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/restaurants" element={<Restaurants />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/shows" element={<Shows />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}