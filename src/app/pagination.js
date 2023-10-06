

import React from "react";
import styles from './table.css';



const Pagination = ({currentPage, datalength, onPageChange}) => {
  const totalPages = Math.ceil(datalength / 20);
    const pageNumbers = [...Array(totalPages).keys()].map((num)=>num+1)
    return (
      <div className="buttons" style={{display:'flex',width:'100%',justifyContent:'flex-end'}}>
        <h2 style={{ textAlign: 'center' }}>_____________________COUNTRY CODE TABLE_____________________</h2>
          <button onClick={() => onPageChange(1)}>First</button>
          <button disabled={currentPage===1} onClick={() => onPageChange(currentPage - 1  )}>Prev</button>
          <button disabled={currentPage===totalPages} onClick={() => onPageChange(currentPage + 1  )}>Next</button>
          <button onClick={() => onPageChange(totalPages)}>Last</button>
        </div>
      
       
      );
}
export default Pagination