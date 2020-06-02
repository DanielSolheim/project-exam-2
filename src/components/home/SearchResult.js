import React from 'react';
import {useState, useEffect} from 'react';
import {BASE_URL} from './../constants/api.js';
import {Link} from 'react-router-dom';


export default function SearchResult(){

   const [searchedEstablishments, setSearchedEstablishments] = useState([]);
   const [searchFromLocal, setSearchFromLocal] = useState([]);


   //search Function and Save the contents to local storage
   var filterSearched = function(){
     const searchValue = localStorage.getItem('myValueInLocalStorage').toLowerCase();

     //filtering establishments
     const filterSearch = searchedEstablishments.filter(function(establishment){
        const lowerCaseName = establishment.establishmentName.toLowerCase();

        //return only when establishment names match
        if(searchValue === ""){
          return true
        }
        else if (lowerCaseName.match(searchValue)){
          return true
        }
        return false
     });
     setSearchFromLocal(filterSearch);

   }




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
             const {id, establishmentName, price, maxGuests, imageUrl} = establishment;

          return (
              <div className="result" key={id}>
                  <p className="result--name"> {establishmentName} </p>
                  <div className="result--image" style={{backgroundImage: `url(${imageUrl})`}}>

                  </div>


                  <div className="result--bottomBar">
                      <div className="bottomBar--price">
                          <p>{price + "$"} </p>
                      </div>

                      <div className="bottomBar--persons">
                        <p>{maxGuests}</p>
                      </div>

                      <Link to={"establishment/" + id} className="bottomBar--link">
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
