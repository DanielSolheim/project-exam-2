import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

import Messages from "./Messages.js";
import Enqueries from "./Enqueries.js";
import AddEstablishment from "./AddEstablishment.js";

export default function Admin(){
  return(
    <Router>
       <div className="Admin">

          <nav className="admin--menu">
            <NavLink className="admin--menu__link" to="/admin/"> Enqueries </NavLink>
            <NavLink className="admin--menu__link" to="/admin/add-establishment"> Add Establishment </NavLink>
            <NavLink className="admin--menu__link" to="/admin/messages"> Messages </NavLink>
          </nav>

          <Switch>
             <Route path="/admin/" exact component={Enqueries}/>
             <Route path="/admin/add-establishment" component={AddEstablishment} />
             <Route path="/admin/messages" component={Messages} />
          </Switch>

       </div>
     </Router>
  );
}
