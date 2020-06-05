import React from 'react';


export default function Search({handleSearch}){




  return (
    <input type="text"  autocomplete="off" placeholder="Search for Hotel Name or Search for All Places" name="search" onChange={event => handleSearch(event)  }/>
  )

}
