import React from 'react';

export default function EstablishmentForm(){


  let s5 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  }

  return (
    <div className="EstablishmentForm">
       <form className="new--establishment" method="POST" action="https://www.dansol.no/hotel-api/add-establishments-success.php">

         <div className="establishment--item establishment--item__name">
            <input placeholder="Establishment Name......" type="text" name="establishmentName" id="establishmentName"></input>
          </div>

          <div className="establishment--item establishment--item__email">
            <input placeholder="Email......" type="text" name="establishmentEmail" id="establishmentEmail"></input>
          </div>

          <div className="establishment--item establishment--item__image">
            <input placeholder="imageUrl" type="text" name="imageUrl" id="imageUrl"></input>
          </div>

          <div className="establishment--item establishment--item__price">
            <input placeholder="Price per night......" type="text" name="price" id="price"></input>
          </div>

          <div className="establishment--item establishment--item__max">
            <input placeholder="Max Guests......" type="text" name="maxGuests" id="maxGuests"></input>
          </div>

          <div className="establishment--item establishment--item__latitude">
            <input placeholder="Latitude......" type="text" name="googleLat" id="googleLat"></input>
          </div>

          <div className="establishment--item establishment--item__longitude">
            <input placeholder="Longitude......" type="text" name="googleLong" id="googleLong"></input>
          </div>

          <div className="establishment--item establishment--item__description">
            <input placeholder="Description......" type="text" name="description" id="description"></input>
          </div>

          <div className="establishment--item establishment--item__id">
            <input placeholder="Id......" defaultValue={s5()} type="text" name="id" id="id"></input>
          </div>

          <div className="establishment--item establishment--item__selfCatering">
            <p> SelfCatering: </p>

            <label for="true">True</label>
            <input type="radio" id="true" name="selfCatering" value="true" />

            <label for="false">False</label>
            <input type="radio"    id="false" name="selfCatering" value="false" />
          </div>

           <input type="submit"  className="establishment--item establishment--item__submit" />
       </form>
    </div>
  );
}
