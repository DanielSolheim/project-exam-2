import React from 'react';
import {useState, useEffect} from 'react';
import {BASE_URL} from './../constants/api.js';


export default function SearchResult(){

   const [searchedEstablishments, setSearchedEstablishments] = useState([]);


   useEffect(function(){
     fetch(BASE_URL)
       .then(function(response){
         return response.json();
       })
       .then(function(json){
         setSearchedEstablishments(json)
       })
       .catch(function(error){
         console.log(error)
       })
   },[])


   var myLocal = localStorage.getItem('myValueInLocalStorage');
   console.log(myLocal);

  return (
    <>
    {searchedEstablishments.map(function(establishment){
     return (
         <div>
            <p> {establishment.establishmentName} </p>
         </div>
     )
    })}
    </>
  )
}
