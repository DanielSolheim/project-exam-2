import React from 'react';
import {useState, useEffect} from 'react';
import {BASE_URLL} from './../constants/api.js';
import {Link} from 'react-router-dom';


export default function SearchResult(){

   const [searchedEstablishments, setSearchedEstablishments] = useState({
     establishmentData: [],
   });

   const searchValue = localStorage.getItem('myValueInLocalStorage');


   const [searchFromLocal, setSearchFromLocal] = useState([searchValue])
   console.log(searchFromLocal);




   //search Function and Save the contents to local storage
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





   useEffect(function(){
     fetch(BASE_URLL)
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
                    <p>{i.maxGuests}</p>
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


/*{searchedEstablishments.map(function(establishment){

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
})}*/



/*  <div className="result--image" style={{i.backgroundImage: `url(${imageUrl})`}}>  </div> */
