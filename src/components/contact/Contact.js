import React from "react";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';



const schema = yup.object().shape({
  clientName: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().min(10, 'message mustdasdas be at least 10 characters').required('Message is required')
});


export default function Contact(){

  const{ register, errors } = useForm({
    validationSchema: schema
  })

  return (
    <div className="Contact">
     <form className="form" method="POST" action="http://localhost/hotel-api/contact-success.php">

        <div className="form--item form--item__name">
          <label for="clientName">Full name</label>
          <input type="text" name="clientName"    id="clientName"></input>
          {errors.clientName && <p className="errorMessage"> {errors.clientName.message} </p>}
        </div>

        <div className="form--item form--item__name">
          <label for="email">Email Address</label>
          <input type="text" name="email" id="email"></input>
          {errors.email && <p className="errorMessage"> {errors.email.message} </p>}
        </div>

        <div className="form--item form--item__name">
          <label for="message">Message</label>
          <textarea name="message" id="message" rows="8"    cols="80"></textarea>
          {errors.message && <p className="errorMessage"> {errors.message.message} </p>}
        </div>

        <div className="form--item form--item__name">
          <input className="main--button" type="submit"></input>
        </div>
     </form>
    </div>
  )
}
