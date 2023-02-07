import React from 'react'
import './styles/Pagination.css'

const Pagination = ({numbersPage,setPage,location,RESIDENTS_PERPAGE,page}) => {
  return (
    <ul className='pagination'>
      
    {
      numbersPage(location,RESIDENTS_PERPAGE).map(numbersPage => <li onClick={()=> setPage(numbersPage)} key={numbersPage} 
      className={page === numbersPage ? `pagination__active` : `pagination__normal`}>{numbersPage}</li>)
     
    }
    
    
  </ul>
  )
}

export default Pagination
