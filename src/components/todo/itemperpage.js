import React, { useContext } from 'react';

import { PaginationContext }  from '../context/paginationCo'


function ChengeNumberOfPages  () {

const pagination = useContext(PaginationContext);
const changHandler = (e) =>{
    pagination.setItem(e.target.value)
}
  
    return (
      <div id="itemsPerPage">
      <p>change number of Items in the pages</p>
       <select onChange={changHandler}>
           <option value='2'>2</option>
           <option value='4'>4</option>
           <option value='6'>6</option>
           <option value='8'>8</option>
       </select>
       

      </div>
    );
  
}
export default ChengeNumberOfPages;
