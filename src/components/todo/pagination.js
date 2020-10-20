import React ,{useContext}from 'react';
import {PaginationContext} from '../context/paginationCo';


const Pagination =  ({totalItems}) => {
  const pageNumbers = [];
  const pagination = useContext(PaginationContext);

  for (let i = 1; i <= Math.ceil(totalItems / pagination.itemPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
      <li  className='page-item'>
            <a onClick={pagination.currentPage > 1 ? () => pagination.paginate(pagination.currentPage-1): () => pagination.paginate(pagination.currentPage)} className='page-link'>
              Previous
            </a>
          </li>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => pagination.paginate(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
        <li className='page-item'>
            <a onClick={ pageNumbers.length != pagination.currentPage ? () => pagination.paginate(pagination.currentPage+1): () => pagination.paginate(pagination.currentPage)} className='page-link'>
              Next
            </a>
          </li>
      </ul>
    </nav>
  );
};

export default Pagination;
