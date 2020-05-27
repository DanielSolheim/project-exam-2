import React from 'react';


export default function DropDown({establishment}){
  return(
    <div className="DropDown">
        <img className=" dropdown--item dropdown--item__image" src={establishment.imageUrl} alt={establishment.establishmentName}/>
        <div className="dropdown--item dropdown--item__name"> {establishment.establishmentName} </div>
    </div>
  )
}
