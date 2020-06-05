import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom";

import Admin from "./../admin/Admin.js";
import AdminLogin from "./../admin/AdminLogin.js";
import Home from "./../home/Home.js";
import Contact from "./../contact/Contact.js";
import SearchResult from './../home/SearchResult';
import HotelSpecific from './../home/HotelSpecific';
import EnquirySuccess from './../home/EnquirySuccess';
import ContactSuccess from './../contact/ContactSuccess';
import AddEstablishmentSuccess from './../admin/AddEstablishmentSuccess';


export default function Layout() {
   return (
    <Router>
      <div className="Layout">
       <div className="header--container">
        <header className="main--header">
          <Link to="/" className="logo">
            <img src="https://res.cloudinary.com/dyic445sm/image/upload/v1591387692/Holidaze/logo-01_l8lrip.png" alt="logo" />
          </Link>
          <nav className="main--menu">
            <NavLink className="main--menu__link" to="/"> Home </NavLink>
            <NavLink className="main--menu__link" to="/contact"> Contact </NavLink>
            <NavLink className="main--menu__link" to="/adminLogin"> Admin </NavLink>
          </nav>
        </header>
       </div>
       <div className="container">
       <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/contact" component={Contact} />
             <Route path="/adminLogin" component={AdminLogin} />
             <Route path="/admin" component={Admin} />
             <Route path="/establishments" component={SearchResult} />
             <Route path="/establishment/:id" component={HotelSpecific} />
             <Route path="/booking-confirmed" component={EnquirySuccess} />
             <Route path="/contact-confirmed" component={ContactSuccess} />
             <Route path="/addEstablishment-confirmed" component={AddEstablishmentSuccess} />
       </Switch>
      </div>
      <footer>
           <div> <i>@Daniel Solheim </i> </div>
      </footer>

     </div>
    </Router>
   );
}
