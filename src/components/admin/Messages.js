import React from 'react';
import {CONTACT_URL} from './../constants/api';
import {useState, useEffect} from 'react';

export default function Message(){

const [messages, setMessages] = useState([]);


  //fetching the api
   useEffect(function(){
     fetch(CONTACT_URL)
       .then(function(response){
         return response.json();
       })
       .then(function(json){
         setMessages(json)
       })
       .catch(function(error){
         console.log(error)
       })
   },[])


  return(
    <div className="Messages">
    {messages.map(function(message){
     return (
         <div className="message">
           <p className="message--name"> {message.clientName} </p>
           <p className="message--message"> {message.message} </p>
           <p className="message--email"> {message.email} </p>
         </div>
     )
    })}
    </div>
  );
}
