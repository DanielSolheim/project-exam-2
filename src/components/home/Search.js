import React from 'react';


export default function Search({handleSearch}){
  return (
    <input  type="text" placeholder="search for hotel" name="search" onChange={event => handleSearch(event)}/>


  )

}
