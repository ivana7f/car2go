import React, { useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./CarItem.module.scss";
import useFetch from "../../../hooks/useFetch";
import RentForm from "../RentForm/RentForm";
import ConfirmRent from "../ConfirmRent/ConfirmRent";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

let car1 = "https://i.postimg.cc/kgXvNnLx/audi.jpg";

function CarItem() {
  const [isRented, setIsRented] = useState(false);
  const [rentData, setRentData] = useState({});
  const [totalPrice, setToTalPrice] = useState(0);

  const { id } = useParams();

  const { data, isLoading, error } = useFetch(
    "http://localhost:8000/cars/" + id + "/"
  );

  const car = Object.fromEntries(data);

  function onRent(rentData) {
    setRentData(rentData);
    setIsRented(true);
    setToTalPrice(rentData.days * car.price);
  }

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <LoadingSpinner />}
      {!error && !isLoading && (
        <div className={classes.container}>
          <div className={classes.img}>
            <img src={car1} />
          </div>
          <div className={classes.carDetails}>
            <p>
              <span> Brand:</span> {car.brand}
            </p>
            <p>
              <span>Model:</span> {car.model}
            </p>
            <p>
              <span>Seats</span>: {car.seats}
            </p>
            <p>
              <span>Doors:</span> {car.doors}
            </p>
            <p>
              <span>Air Conditioning:</span> {car.ac ? "Yes" : "No"}
            </p>
            <p>
              <span>Fuel:</span> {car.fuel}
            </p>
            <p>
              <span>Gearbox:</span> {car.gearbox}
            </p>
            <p>
              <span>ABS:</span> {car.abs ? "Yes" : "No"}
            </p>
            <p>
              <span>Year:</span> {car.year}
            </p>

            <div className={classes.priceDetails}>
              <p className={classes.price}>
                <span>Price:</span> {car.price}$ per day
              </p>
            </div>
          </div>
          {!isRented && <RentForm onRent={onRent} />}
          {isRented && (
            <ConfirmRent rentData={rentData} totalPrice={totalPrice} />
          )}
        </div>
      )}
    </div>
  );
}

export default CarItem;
