import React from "react";
import { useParams } from "react-router-dom";
import classes from "./CarItem.module.scss";
import useFetch from "../../../hooks/useFetch";

function CarItem() {
  const { name } = useParams();

  const {
    data: car,
    isLoading,
    error,
  } = useFetch("https://restcountries.com/v3.1/name/" + name);

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {!error && !isLoading && (
        <div>
          <p>{car[0].area}</p>
          <p>{car[0].name.common}</p>
        </div>
      )}
    </div>
  );
}

export default CarItem;
