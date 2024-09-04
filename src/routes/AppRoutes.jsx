import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes