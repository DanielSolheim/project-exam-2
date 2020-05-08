import React from 'react';
import Message from "./Message.js";
import Enqueries from "./Enqueries.js";
import AddEstablishment from "./AddEstablishment.js";

export default function Admin(){
  return(
    <div className="Admin">
     Hello From Admin
     <Message />
     <Enqueries />
     <AddEstablishment />  
    </div>
  );
}
