import React from 'react';
import {Link} from 'react-router-dom';


export default function EnquirySuccess(){


  /* https://learnersbucket.com/examples/javascript/unique-id-generator-in-javascript/*/
  //unique id for reservation code
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  }



  return(
    <div className="EnquirySuccess">
       <div className="successWrapper">
          <div className="successWrapper--icon"> </div>
          <div className="successWrapper--message"> You added a new Establishment</div>
          <p className="successWrapper--code"> Your reservation code is: <span> {s4()} </span>  </p>
          <div className="successWrapper--link">
              <Link  to="/" >
                  Go back to homepage
              </Link>
           </div>
        </div>
    </div>
  )
}
