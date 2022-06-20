import React from "react";
import { useParams } from "react-router-dom";
import classes from "./CarItem.module.scss";
import useFetch from "../../../hooks/useFetch";

function CarItem() {
  const { id } = useParams();

  const {
    data: car,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/cars/" + id + "/");

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {!error && !isLoading && (
        <div>
          <p>{car.brand}</p>
        </div>
      )}
    </div>
  );
}

export default CarItem;
