import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Pagination from "../Pagination/Pagination";
import classes from "./Cars.module.scss";
import CarsList from "./CarsList/CarsList";
import Search from "./Search/Search";

function Cars() {
  const [currentPage, setCurrenPage] = useState(1);
  const [carsPerPage] = useState(5);

  const {
    data: cars,
    isLoading,
    error,
  } = useFetch("https://restcountries.com/v3.1/all");

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  function paginate(number) {
    setCurrenPage(number);
  }

  return (
    <div>
      <Search />
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {cars && <CarsList cars={currentCars} />}
      {cars && (
        <Pagination
          carsPerPage={carsPerPage}
          totalCars={cars.length}
          paginate={paginate}
        />
      )}
    </div>
  );
}

export default Cars;
