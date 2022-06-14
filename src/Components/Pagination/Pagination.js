import React from "react";

function Pagination(props) {
  const paginate = props.paginate;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalCars / props.carsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
