import React from "react";
import {useState, useEffect} from 'react';
import {BASE_URL} from './../constants/api.js';
import Search from './Search';

export default function Home (){


  //settting states for data
  const [establishments, setEstablishments] = useState([]);
  const [filteredEstablishments, setFilteredEstablishments] = useState([]);


  //search Function
  var filterGames = function(e){
    const searchValue = e.target.value.toLowerCase();

    //filtering establishments
    const filteredArray = establishments.filter(function(establishment){
       const lowerCaseName = establishment.establishmentName.toLowerCase();
       //return only when games match
       if (lowerCaseName.match(searchValue)){

         return true
       }
       return false
    });
    setFilteredEstablishments(filteredArray);
  }








   useEffect(function(){
     fetch(BASE_URL)
       .then(function(response){
         return response.json();
       })
       .then(function(json){
         setEstablishments(json)
         setFilteredEstablishments(json)
       })
       .catch(function(error){
         console.log(error)
       })
   },[])

   console.log(establishments);





  return (
    <div className="Home">
      <div className="home--content center-container">

         <section className="home--form">
               <h1 className="home--heading"> Search for places to stay in Bergen </h1>

               <form className="home--form__section">
                 <div className="home--form__item home--form__item__search">
                   <Search handleSearch={filterGames}/>

                   {filteredEstablishments.map(function(establishment){
                    return (
                    <div className="search-container">
                      <div className="search-dropdown__item search" key={establishment.id}>
                          <img src={establishment.imageUrl} alt={establishment.establishmentName}/>
                          <div  className="search-dropdown">  {establishment.establishmentName} </div>
                      </div>
                    </div>
                    )
                   })}


                 </div>
                 <div className="home--form__item home--form__item__checkinn">
                  <input type="date"  placeholder="checkinn" name="check-out" />
                 </div>
                 <div className="home--form__item home--form__item__checkout">
                  <input type="date"  placeholder="checkout" name="check-inn" />
                 </div>
                 <div className="home--form__item home--form__item__submit">
                  <input type="submit"  name="submit" />
                 </div>
               </form>
          </section>
      </div>



    </div>
  )
}
