import React from "react";

const Pagination = ({numPages, onGetPage , currentPage}) => {
  //Agregamos en un array los valores de la pagina
  const pageNumbers = [];
  for (let i = 1; i <= numPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="col mt-4">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((pageValue) => {
          return (
              <li key={pageValue} className={`page-item ${pageValue === currentPage ? 'active': ""}`}>
                <button className="page-link"
                onClick={(e)=> onGetPage(e,pageValue)}
                >
                  {pageValue}
                </button>
              </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
