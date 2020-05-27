import React from 'react';
import {useState, useEffect} from 'react';

export default function Search({handleSearch}){

    /*https://www.robinwieruch.de/local-storage-react*/
    const [value, setValue] = React.useState(
      localStorage.getItem('myValueInLocalStorage') || ''
    );

    React.useEffect(() => {
      localStorage.setItem('myValueInLocalStorage', value);
    },[value]);

    const onChange = event => setValue(event.target.value);


  return (
    <input type="text" value={value} placeholder="search for hotel" name="search" onChange={event => handleSearch(event), onChange }/>


  )

}
