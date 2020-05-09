import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

import Admin from "./../admin/Admin.js";
import Home from "./../home/Home.js";
import Contact from "./../contact/Contact.js";


export default function Layout() {
   return (
    <Router>
     <div className="Layout">
      <div className="header--container">
       <header className="main--header">
         <div className="logo">
           <img src="./images/logo-01.png" alt="logo" />
         </div>
         <nav className="main--menu">
           <NavLink className="main--menu__link" to="/"> Home </NavLink>
           <NavLink className="main--menu__link" to="/contact"> Contact </NavLink>
           <NavLink className="main--menu__link" to="/admin"> Admin </NavLink>
         </nav>
       </header>
      </div>
      <div className="container">
       <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/contact" component={Contact} />
             <Route path="/admin" component={Admin} />
      </Switch>
      </div>  
     </div>
    </Router>
   );
}
