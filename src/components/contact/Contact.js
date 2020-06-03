import React from "react";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';





export default function Contact(){


  const schema = yup.object().shape({
    clientName: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    message: yup.string().min(10, 'message mustdasdas be at least 10 characters').required('Message is required')
  });

  const{ register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  function onSubmit(data){
    console.log('data', data);

  }



  return (
    <div className="Contact">
     <form className="form" method="POST" action="http://dansol.no/hotel-api/contact-success.php" onSubmit={handleSubmit(onSubmit)}   >

        <div className="form--item form--item__name">
          <label htmlFor="clientName">Full name</label>
          <input type="text" name="clientName"    id="clientName" ref={register()}></input>
          {errors.clientName && <p className="errorMessage"> {errors.clientName.message} </p>}
        </div>

        <div className="form--item form--item__name">
          <label htmlFor="email">Email Address</label>
          <input type="text" name="email" id="email" ref={register()}></input>
          {errors.email && <p className="errorMessage"> {errors.email.message} </p>}
        </div>

        <div className="form--item form--item__name">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="8"    cols="80" ref={register()}></textarea>
          {errors.message && <p className="errorMessage"> {errors.message.message} </p>}
        </div>

        <div className="form--item form--item__name">
          <input className="main--button"  type="submit"></input>
        </div>
     </form>
    </div>
  )
}
