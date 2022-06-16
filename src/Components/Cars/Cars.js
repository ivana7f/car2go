import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Pagination from "../Pagination/Pagination";
import classes from "./Cars.module.scss";
import CarsList from "./CarsList/CarsList";
import Search from "./Search/Search";

function Cars() {
  const [currentPage, setCurrenPage] = useState(1);
  const [carsPerPage] = useState(3);

  const error = false;
  const isLoading = false;

  const cars = [
    {
      id: 1,
      name: "Opel Astra H",
      brand: "Opel",
      price: 50,
      seats: 5,
      doors: 5,
      transmission: "automatic",
      airCond: true,
      fuel: "diesel",
      bags: 2,
      additionalInfo: {
        1: "Audio input",
        2: "Bluetooth",
        3: "Heated seats",
        4: "USB input",
        5: "FM Radio",
      },
    },
    {
      id: 2,
      name: "Fiat Panda",
      brand: "Fiat",
      price: 30,
      seats: 5,
      doors: 3,
      transmission: "manual",
      airCond: false,
      bags: 1,
      fuel: "gasoline",
      additionalInfo: {
        1: "Audio input",
        2: "Bluetooth",
        3: "Heated seats",
        4: "USB input",
        5: "FM Radio",
      },
    },
    {
      id: 3,
      name: "Audi a5",
      brand: "audi",
      price: 40,
      seats: 5,
      doors: 3,
      transmission: "manual",
      airCond: false,
      bags: 1,
      fuel: "gasoline",
      additionalInfo: {
        1: "Audio input",
        2: "Bluetooth",
        3: "Heated seats",
        4: "USB input",
        5: "FM Radio",
      },
    },
    {
      id: 4,
      name: "Renault Clio",
      brand: "renault",
      price: 60,
      seats: 5,
      doors: 3,
      transmission: "manual",
      airCond: false,
      bags: 1,
      fuel: "gasoline",
      additionalInfo: {
        1: "Audio input",
        2: "Bluetooth",
        3: "Heated seats",
        4: "USB input",
        5: "FM Radio",
      },
    },
    {
      id: 5,
      name: "Volvo",
      brand: "volvo",
      price: 30,
      seats: 5,
      doors: 3,
      transmission: "manual",
      airCond: false,
      bags: 1,
      fuel: "gasoline",
      additionalInfo: {
        1: "Audio input",
        2: "Bluetooth",
        3: "Heated seats",
        4: "USB input",
        5: "FM Radio",
      },
    },
    {
      id: 6,
      name: "Mercedes",
      brand: "mercedes",
      price: 10,
      seats: 5,
      doors: 3,
      transmission: "manual",
      airCond: false,
      bags: 1,
      fuel: "gasoline",
      additionalInfo: {
        1: "Audio input",
        2: "Bluetooth",
        3: "Heated seats",
        4: "USB input",
        5: "FM Radio",
      },
    },
  ];

  // const {
  //   data: cars,
  //   isLoading,
  //   error,
  // } = useFetch("https://restcountries.com/v3.1/all");

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
      {!error && !isLoading && <CarsList cars={currentCars} />}
      {!error && !isLoading && (
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
