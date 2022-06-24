import React, { useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./CarItem.module.scss";
import useFetch from "../../../hooks/useFetch";
import RentForm from "../RentForm/RentForm";
import ConfirmRent from "../ConfirmRent/ConfirmRent";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import NotFound from "../../NotFound/NotFound";
import ImageSlider from "../../ImageSlider/ImageSlider";
import CarDetails from "./CarDetails";
import EditCar from "./EditCar";

import car1 from "../../../img/car.png";
import car2 from "../../../img/bmw.jpeg";
import car3 from "../../../img/citroen.png";
import Modal from "../../Modal/Modal";

function CarItem() {
  const [isRented, setIsRented] = useState(false);
  const [rentData, setRentData] = useState({});
  const [totalPrice, setToTalPrice] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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

  const images = [{ url: car1 }, { url: car2 }, { url: car3 }];

  function deleteCar() {
    fetch("http://localhost:8000/cars/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error("Could not send data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      {openModal && <Modal setOpenModal={setOpenModal} deleteCar={deleteCar} />}
      {error && <NotFound error={error} />}
      {isLoading && <LoadingSpinner />}
      {!error && !isLoading && (
        <div className={classes.container}>
          <div className={classes.car}>
            <div>
              <ImageSlider slides={images} />
            </div>
            {!isEditing && <CarDetails car={car} id={id} />}
            {isEditing && (
              <EditCar car={car} id={id} setIsEditing={setIsEditing} />
            )}
          </div>

          {!isEditing && (
            <button
              onClick={() => setOpenModal(true)}
              className={classes.btnEdit}
            >
              Delete
            </button>
          )}
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className={classes.btnEdit}
            >
              Edit
            </button>
          )}

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
