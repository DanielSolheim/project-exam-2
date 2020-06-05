
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from './../constants/api.js';


export default function HotelSpecific(){

  //setting States for Detail page
  const [detail, setDetail] = useState({
    establishment: []
  });

  //getting id param from url
  let {id} = useParams();




  useEffect (
    function(){
      fetch(BASE_URL)
        .then(response => response.json())
        .then(responseJSON => {
          // Find the index that is equall to id
          let currentArticle = responseJSON.find(i =>
              i.id === id
          );
          //sett staten av objectet til currentarticle
          setDetail({establishment: currentArticle});
        })
        .catch (function(err){
          console.log("noe gikk galt", err)
        })
    }, []
  )


  return(
    <div  className="HotelSpecific">
     <div className="hotelInfo">
        <h3 className="hotelInfo--name"> {detail.establishment.establishmentName} </h3>
        <div className="hotelInfo--image" style={{backgroundImage: `url(${detail.establishment.imageUrl})`}}>
        </div>
        <div className="hotelInfo--stats">
           <p className="hotelInfo--stats__price">{ "$" + detail.establishment.price} </p>
           <p className="hotelInfo--stats__maxGuests">{"MaxGuests: " + detail.establishment.maxGuests} </p>
           <p className="hotelInfo--stats__selfCatering">

           {(() => {
               switch (detail.establishment.selfCatering ) {
                 case "true":   return  "SelfCatering: Yes";
                 case "false":  return "SelfCatering: No";
               }
             })()}
           </p>
        </div>
        <p className="hotelInfo--description">
           {detail.establishment.description}
        </p>




          <form className="makeEnquiry" method="POST" action="https://www.dansol.no/hotel-api/enquiry-success.php">
              <h3 className="makeEnquiry--header"> Book a stay at {detail.establishment.establishmentName} now! </h3>
              <input className="makeEnquiry--establishment" type="text" name="establishment" id="establishment" defaultValue={detail.establishment.establishmentName} />
              <input className="makeEnquiry--name" type="text" placeholder="Full Name" name="clientName" id="clientName" />
              <input className="makeEnquiry--email" type="text" placeholder="Email" name="email" id="email" />
              <input className="makeEnquiry--adults" type="text" placeholder="Number Of Adults" name="adults" id="adults" />
              <input className="makeEnquiry--children" type="text" placeholder="Number of Children" name="children" id="children" />
              <textarea className="makeEnquiry--notes" type="text" placeholder="Message...." name="notes" id="notes">
              </textarea>
             <div className="makeEnquiry--dates">
                 <input type="date" name="checkin" id="checkin" />
                 <input type="date" name="checkout" id="checkout" />
            </div>
              <input  className="makeEnquiry--submit"  type="submit" />
           </form>

     </div>
    </div>
  );
};
