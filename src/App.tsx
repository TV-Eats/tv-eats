import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Contact from "./pages/Contact";
import Shows from "./pages/Shows";
import Error from "./pages/Error";
import Layout from "./components/Layout";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/restaurants" element={<Restaurants />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/shows" element={<Shows />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Layout>
            </BrowserRouter>


        </div>
    )
}