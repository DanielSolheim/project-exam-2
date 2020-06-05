import React from 'react';
import {Link} from 'react-router-dom';

export default function AdminLogin(){
  /*No password or username for login, Just click the login Button*/

  return (
    <div className="AdminLogin">


      <form  className="login">

          <div className="login--item login--item__username">
            <label> Usernames: </label>
            <input  type="text" name="username"    id="username"></input>
          </div>

          <div className="login--item login--item__password">
            <label> Password:  </label>
            <input type="password" name="password"   id="password"></input>
          </div>

         <Link  className="login--item login--item__button" to="/admin">
          <input className="main--button" value="Login" type="submit"></input>
        </Link >

      </form>
    </div>

  );
}
