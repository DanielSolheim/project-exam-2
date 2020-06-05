import React from 'react';
import {Link} from 'react-router-dom';


export default function AddEstablishmentSuccess(){



  return(
    <div className="AddEstablishmentSuccess">
      <div className="successWrapper">
         <div className="successWrapper--icon"> </div>
         <div className="successWrapper--message"> You added a new Establishment</div>
         <div className="successWrapper--link">
             <Link  to="/" >
                 Go back to homepage
             </Link>
          </div>
       </div>
    </div>
  )
}
