import React from 'react';

export default function EstablishmentForm(){
  return (
    <div className="EstablishmentForm">
       <form className="new--establishment">

           <div className="establishment--item establishment--item__name">
             <input placeholder="Establishment Name......" type="text" name="establishmentName"></input>
           </div>

           <div className="establishment--item establishment--item__email">
             <input placeholder="Email......" type="text" name="establishmentEmail"></input>
           </div>

           <div className="establishment--item establishment--item__image">
             <input placeholder="imageUrl" type="text" name="establishmentImage"></input>
           </div>

           <div className="establishment--item establishment--item__price">
             <input placeholder="Price per night......" type="text" name="establishmentPrice"></input>
           </div>

           <div className="establishment--item establishment--item__max">
             <input placeholder="Max Guests......" type="text" name="establishmentMax"></input>
           </div>

           <div className="establishment--item establishment--item__latitude">
             <input placeholder="Latitude......" type="text" name="establishmentLatitude"></input>
           </div>

           <div className="establishment--item establishment--item__longitude">
             <input placeholder="Longitude......" type="text" name="establishmentLongitude"></input>
           </div>

           <div className="establishment--item establishment--item__description">
             <input placeholder="Description......" type="text" name="establishmentDescription"></input>
           </div>

           <div className="establishment--item establishment--item__id">
             <input placeholder="Id......" type="text" name="establishmentId"></input>
           </div>

           <div className="establishment--item establishment--item__name">
             <input type="radio" value="yes" />
             <input type="radio" value="no" />
           </div>


       </form>
    </div>
  );
}
