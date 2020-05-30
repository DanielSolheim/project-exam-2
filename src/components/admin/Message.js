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
    <div className="Message">
    {messages.map(function(message){
     return (
         <div   className="dropdown--container__inner">
           <p> {message.clientName} </p>
         </div>
     )
    })}
    </div>
  );
}
