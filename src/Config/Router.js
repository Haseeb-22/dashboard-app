import React from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
import Dashboard from "../Screens/Dashboard";
import Services from "../Screens/Services";
import Home from "../Screens/Home";
import NotFound from "../Screens/NotFound";
import CardRender from "../Screens/dashboard_screen/CardRender";


export default function ReactRouter() {
  return (
    <Router>


        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="About" element={<About/>}/>
            <Route path="Contact" element={<Contact/>}/>
            <Route path="Services" element={<Services/>}/>
            <Route path="Dashboard/*" element={<Dashboard/>}/>
            <Route path='CardRender' element={<CardRender/>} />
            <Route path="*" element={<NotFound/>}/>
           
        </Routes>
     
    </Router>
  );
}
