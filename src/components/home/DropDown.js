import React from 'react';
import {Link} from 'react-router-dom';


export default function DropDown({establishment}){
  return(
    <Link to={"establishment/" + establishment.id}  className="DropDown">
        <img className=" dropdown--item dropdown--item__image" src={establishment.imageUrl} alt={establishment.establishmentName}/>
        <div className="dropdown--item dropdown--item__name"> {establishment.establishmentName} </div>
    </Link>
  );
};
