import React from 'react';
import {Link} from 'react-router-dom';

export default function AdminLogin(){
  return (
    <div className="AdminLogin">


      <form  className="login">
          <div className="login--item login--item__username">
            <input placeholder="Username" type="text" name="username"    id="username"></input>
          </div>

          <div className="login--item login--item__password">
            <input placeholder="Password..... " type="password" name="password"   id="password"></input>
          </div>

         <Link  className="login--item login--item__button" to="/admin">
          <input className="main--button" value="Login" type="submit"></input>
        </Link >

      </form>
    </div>

  );
}
