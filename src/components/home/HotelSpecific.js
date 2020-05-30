
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from './../constants/api.js';


export default function HotelSpecific(){

  const [detail, setDetail] = useState([]);


let {id} = useParams();



let url = BASE_URL ;


useEffect(() => {
    fetch(url)
      .then(function(result){
        return result.json()
      })
      .then(function(data){
        setDetail(data)
      })
      .catch(function (error){
        console.log(error)
      })

}, [url])


  return(
    <div  className="HotelSpecific">
    {detail.map(function(establishment){
       return (
           <div  key={establishment.id[id]} >
               {establishment.establishmentName}
           </div>
       )
    })}
    </div>
  );
};
