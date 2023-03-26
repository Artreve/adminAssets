import React from "react";

const Pagination = ({numPages, onGetPage }) => {
  //Agregamos en un array los valores de la pagina
  const pageNumbers = [];
  for (let i = 1; i <= numPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="col mt-4">
      <ul className="pagination justify-content-center">
        <li class="page-item disabled">
          <button className="page-link">Anterior</button>
        </li>
        {pageNumbers.map((pageValue) => {
          return (
            <>
              <li key={pageValue} className="page-item">
                <button className="page-link"
                onClick={()=> /*onGetPage(pageValue)*/ console.log(pageValue)}
                >
                  {pageValue}
                </button>
              </li>
            </>
          );
        })}
        <li className="page-item">
          <button className="page-link">Siguiente</button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;