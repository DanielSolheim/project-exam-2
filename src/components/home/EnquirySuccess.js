import React from 'react';
import {Link} from 'react-router-dom';


export default function EnquirySuccess(){

  /* https://learnersbucket.com/examples/javascript/unique-id-generator-in-javascript/*/
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  }



  return(
    <div className="EnquirySuccess">
       <div> Thanks for your booking </div>
       <div> Green image </div>
       <p> Your reservation code is <span> {s4()} </span>  </p>
       <Link to="/" >
           Go back to homepage
       </Link>
    </div>
  )
}
