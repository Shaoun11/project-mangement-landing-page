import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../views/pages/Home.jsx";



const Web = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
          
            </Routes>
        </BrowserRouter>
    );
};
export default Web;