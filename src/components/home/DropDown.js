import React from 'react';
import {Link} from 'react-router-dom';


export default function DropDown({establishment}){
  //this shows up when you search
  return(
    <Link to={"establishment/" + establishment.id}  className="DropDown">
         <div className=" dropdown--item dropdown--item__image" style={{backgroundImage: `url(${establishment.imageUrl})`}}>  </div>
         <div className="dropdown--item dropdown--item__name"> {establishment.establishmentName} </div>
    </Link>
  );
};
