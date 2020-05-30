import React from 'react';
import {useState, useEffect} from 'react';
import {BASE_URL} from './../constants/api.js';
import {Link} from 'react-router-dom';


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
    <div>
    <h3 className="searchresult--header" > Places in bergen that matched with {myLocal} </h3>
    <div className="result--container">
         {searchedEstablishments.map(function(establishment){
          return (
              <div className="result" key={establishment.id}>
                  <p className="result--name"> {establishment.establishmentName} </p>
                  <div className="result--image" style={{backgroundImage: `url(${establishment.imageUrl})`}}>

                  </div>


                  <div className="result--bottomBar">
                      <div className="bottomBar--price">
                          <p>{establishment.price + "$"} </p>
                      </div>

                      <div className="bottomBar--persons">
                        <p>{establishment.maxGuests}</p>
                      </div>

                      <Link to={"establishment/" + establishment.id} className="bottomBar--link">
                        <button className="bottomBar--link__button  main--button" type="submit" > Checkout </button>
                      </Link>
                  </div>
              </div>
          )
         })}
    </div>
  </div>
  )
}
