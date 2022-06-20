import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import classes from "./Cars.module.scss";
import CarsList from "./CarsList/CarsList";
import Search from "./Search/Search";
import cloneDeep from "lodash/cloneDeep";
import useFetch from "../../hooks/useFetch";

function Cars() {
  const [currentPage, setCurrenPage] = useState(1);
  const [carsPerPage] = useState(3);

  const {
    data: cars,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/cars/");

  const [filteredCars, setFilteredCars] = useState("");

  // when search button is clicked
  function onFilter(filterData) {
    // deep clone of cars object
    let filteredObject = cloneDeep(cars);

    if (filterData.car !== "") {
      filteredObject = Object.fromEntries(
        Object.entries(filteredObject).filter(
          (car) => car[1].brand === filterData.car
        )
      );
    }
    if (filterData.minValue !== "") {
      filteredObject = Object.fromEntries(
        Object.entries(filteredObject).filter(
          (car) => car[1].price >= filterData.minValue
        )
      );
    }
    if (filterData.maxValue !== "") {
      filteredObject = Object.fromEntries(
        Object.entries(filteredObject).filter(
          (car) => car[1].price <= filterData.maxValue
        )
      );
    }
    if (filterData.sort === "lowest") {
      let a = Object.entries(filteredObject).sort(function (a, b) {
        return a[1].price - b[1].price;
      });
      console.log(a);
      console.log(Object.fromEntries(a));
    }
    // if (filterData.sort === "highest") {
    //   filteredObject = filteredArray.sort(
    //     (car1, car2) => car2.price - car1.price
    //   );
    // }
    setFilteredCars(filteredObject);
  }

  // paginationn
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = Object.fromEntries(
    Object.entries(filteredCars).slice(indexOfFirstCar, indexOfLastCar)
  );

  function paginate(number) {
    setCurrenPage(number);
  }

  return (
    <div>
      <Search onFilter={onFilter} />
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {!error && !isLoading && <CarsList cars={currentCars} />}
      {!error && !isLoading && (
        <Pagination
          carsPerPage={carsPerPage}
          totalCars={Object.keys(filteredCars).length}
          paginate={paginate}
        />
      )}
    </div>
  );
}

export default Cars;
