import React from 'react';
import {Link} from 'react-router-dom';


export default function ContactSuccess(){



  return(
    <div className="ContactSuccess">
     <div className="successWrapper">
        <div className="successWrapper--icon"> </div>
        <div className="successWrapper--message"> Thanks for your message. You will recieve an answer on mail shortly</div>
        <div className="successWrapper--link">
            <Link  to="/" >
                Go back to homepage
            </Link>
         </div>
      </div>
    </div>
  )
}
