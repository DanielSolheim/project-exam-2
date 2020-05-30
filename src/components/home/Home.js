import React from "react";
import {useState, useEffect} from 'react';
import {BASE_URL} from './../constants/api.js';
import Search from './Search';
import DropDown from './DropDown';
import { Link } from 'react-router-dom';




export default function Home (){


  //settting states for data
  const [establishments, setEstablishments] = useState([]);
  const [filteredEstablishments, setFilteredEstablishments] = useState([]);


 //states for search dropdown
  const [showResults, setShowResults] = React.useState(false)
  let onClick = () => setShowResults(true)





     //search Function and Save the contents to local storage
     var filterGames = function(e){
       const searchValue = e.target.value.toLowerCase();

       //filtering establishments
       const filteredArray = establishments.filter(function(establishment){
          const lowerCaseName = establishment.establishmentName.toLowerCase();

          //return only when establishment names match
          if(e.target.value === ""){
            return false
          }
          else if (lowerCaseName.match(searchValue)){
            return true
          }
          return false
       });
       setFilteredEstablishments(filteredArray);

     }




  //fetching the api
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



  // save search to local storage
   const [value, setValue] = React.useState(
      localStorage.getItem('myValueInLocalStorage') || ''
    );

    useEffect(() => {
      localStorage.clear();
      localStorage.setItem('myValueInLocalStorage', value);
    },[value]);

    const onChange = event => setValue(event.target.value);





  return (
    <div className="Home">
      <div className="home--content center-container">

         <section className="home--form">
               <h1 className="home--heading"> Search for places to stay in Bergen </h1>

               <form className="home--form__section">
                 <div  onKeyDown={onClick}  value={value} onChange={onChange} className="home--form__item home--form__item__search">
                   <Search handleSearch={filterGames}/>

                   <div className="dropdown--container__outer ">
                     {filteredEstablishments.map(function(establishment){
                        return (
                            <div  key={establishment.id} className="dropdown--container__inner">
                              { showResults ? <DropDown establishment={establishment} /> : null }
                            </div>
                        )
                     })}
                   </div>
                 </div>

                 <div className="home--form__item home--form__item__checkinn">
                  <input type="date"  placeholder="checkinn" name="check-out" />
                 </div>
                 <div className="home--form__item home--form__item__checkout">
                  <input type="date"  placeholder="checkout" name="check-inn" />
                 </div>

                   <Link to="/establishments">
                     <div className="home--form__item home--form__item__submit">
                      <input  type="submit"  name="submit" value="Search"/>
                     </div>
                   </Link>



               </form>
          </section>
      </div>



    </div>
  );
};
