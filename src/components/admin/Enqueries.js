import React from 'react';
import {ENQUIRIES_URL} from './../constants/api';
import {useState, useEffect} from 'react';
import newId from './../constants/newId';

export default function Enqueries(){

  const [enquiries, setEnquiries] = useState([]);

  //fetching the api
   useEffect(function(){
     fetch(ENQUIRIES_URL)
       .then(function(response){
         return response.json();
       })
       .then(function(json){
         setEnquiries(json)
       })
       .catch(function(error){
         console.log(error)
       })
   },[])



  return(
    <div className="Enqueries">
    {enquiries.map(function(enquiry){
     return (
         <div key={newId()} className="enquiry">
            <h3 className="enquiry--establishment"> {enquiry.establishment} </h3>
            <h4 className="enquiry--name"> {enquiry.clientName} </h4>
            <p className="enquiry--email">{ "Email: " + enquiry.email}</p>
            <p className="enquiry-checkin"> {"From: " + enquiry.checkin}  </p>
            <p className="enquiry--checkout">{"To: " + enquiry.checkout} </p>
            <p className="enquiry--children"> {"Children: " + enquiry.children} </p>
            <p className="enquiry--adults"> {"Adults: " + enquiry.adults} </p>
            <p className="enquiry--notes"> {"Notes: " + enquiry.notes} </p>
         </div>
     )
    })}
    </div>
  );
}
