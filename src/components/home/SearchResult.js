import React from 'react';
import {useState, useEffect} from 'react';
import {BASE_URL} from './../constants/api.js';
import {Link} from 'react-router-dom';


export default function SearchResult(){

   //settig stated for the elements that i searched
   const [searchedEstablishments, setSearchedEstablishments] = useState({
     establishmentData: [],
   });

   //saving localstorage
   const searchValue = localStorage.getItem('myValueInLocalStorage');

   // passing localstorage value to the localStorage state.
   const [searchFromLocal, setSearchFromLocal] = useState([searchValue])
   console.log(searchFromLocal);




   //Onload search for displaying the right establishments
   var filterSearch = function(array){

      let filteredSearch = searchedEstablishments.establishmentData;

       filteredSearch = filteredSearch.filter((i) => {
       const lowerCaseName = i.establishmentName.toLowerCase();
       if(searchValue == null){
         return true;
       }
       else if(lowerCaseName.match(searchFromLocal)){
          return true;
        }
        return false;
      });
      return filteredSearch;
   }

  //fetching the establishment api
   useEffect(function(){
     fetch(BASE_URL)
       .then(function(response){
         return response.json();
       })
       .then(function(json){
         setSearchedEstablishments({establishmentData: json})
       })
       .catch(function(error){
         console.log(error)
       })
   },[])


  return (
    <div>
    <h3 className="searchresult--header" > Places in Bergen that matched with {searchFromLocal} </h3>

    <div className="result--container">
      {
        filterSearch(searchedEstablishments.establishmentData).map( i =>
          <div className="result" key={i.id}>
              <p className="result--name"> {i.establishmentName} </p>
              <div className="result--image" style={{backgroundImage: `url(${i.imageUrl})`}}>  </div>
              <div className="result--bottomBar">
                  <div className="bottomBar--price">
                      <p>{i.price + "$"} </p>
                  </div>
                  <div className="bottomBar--persons">
                    <p>{"MaxGuests: " + i.maxGuests}</p>
                  </div>
                  <Link to={"establishment/" + i.id} className="bottomBar--link">
                    <button className="bottomBar--link__button  main--button" type="submit" > See More! </button>
                  </Link>
              </div>
          </div>
        )
      }
    </div>
  </div>
  )
}
