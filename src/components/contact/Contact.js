import React from "react";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';





export default function Contact(){




  return (
    <div className="Contact">
     <form className="form" method="POST" action="http://localhost/hotel-api/contact-success.php"    >

        <div className="form--item form--item__name">
          <label htmlFor="clientName">Name</label>
          <input type="text" name="clientName"    id="clientName" ></input>

        </div>

        <div className="form--item form--item__name">
          <label htmlFor="email">Email Address</label>
          <input type="text" name="email" id="email"></input>

        </div>

        <div className="form--item form--item__name">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="8"    cols="80"></textarea>
        </div>

        <div className="form--item form--item__name">
          <input className="main--button"  type="submit"></input>
        </div>
     </form>
    </div>
  )
}
