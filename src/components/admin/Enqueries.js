import React from 'react';
import {ENQUIRIES_URLL} from './../constants/api';
import {useState, useEffect} from 'react';

export default function Enqueries(){

  const [enquiries, setEnquiries] = useState([]);

  //fetching the api
   useEffect(function(){
     fetch(ENQUIRIES_URLL)
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
         <div className="enquiry">
           <p className="enquiry--name"> {enquiry.clientName} </p>
         </div>
     )
    })}
    </div>
  );
}
