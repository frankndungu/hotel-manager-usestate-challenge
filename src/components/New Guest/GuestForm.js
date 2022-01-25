import { useState } from "react";
import styles from "./GuestForm.module.css";
const GuestForm = (props) => {
  const [guestName, setGuestName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [pricePerNight, setPricePerNight] = useState("");

  const changeGuestNameHandler = (event) => {
    setGuestName(event.target.value);
  };
  const changeRoomNumberHandler = (event) => {
    setRoomNumber(event.target.value);
  };
  const changeCheckInDateHandler = (event) => {
    setCheckInDate(event.target.value);
  };
  const changeCheckOutDateHandler = (event) => {
    setCheckOutDate(event.target.value);
  };
  const changePricePerNightHandler = (event) => {
    setPricePerNight(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const guestData = {
      guestName: guestName,
      roomNumber: roomNumber,
      checkInDate: new Date(checkInDate),
      checkOutDate: new Date(checkOutDate),
      pricePerNight: pricePerNight,
    };

    props.onPassGuestData(guestData);

    setGuestName("");
    setRoomNumber("");
    setCheckInDate("");
    setCheckOutDate("");
    setPricePerNight("");
  };

  return (
    <div className={styles["guest-form"]}>
        <form onSubmit={submitHandler}>
          <div className={styles["guest-form__guest-data"]}>
            <div className={styles["guest-form__control"]}>
              <label htmlFor="">Guest Name</label>
              <input
                type="text"
                value={guestName}
                onChange={changeGuestNameHandler}
                required
              />
            </div>
            <div className={styles["guest-form__control"]}>
              <label htmlFor="">Room Number</label>
              <input
                value={roomNumber}
                type="number"
                min="0"
                step="1"
                onChange={changeRoomNumberHandler}
                required
              />
            </div>
          </div>
          <div className={styles["guest-form__guest-data"]}>
            <div className={styles["guest-form__control"]}>
              <label htmlFor="">Check In</label>
              <input
                value={checkInDate}
                type="date"
                min="2019-01-01"
                max="2021-12-31"
                onChange={changeCheckInDateHandler}
                required
              />
            </div>
            <div className={styles["guest-form__control"]}>
              <label htmlFor="">Check Out</label>
              <input
                value={checkOutDate}
                type="date"
                min="2019-01-01"
                max="2021-12-31"
                onChange={changeCheckOutDateHandler}
                required
              />
            </div>
          </div>
          <div className={styles["guest-form__control"]}>
            <label htmlFor="">Price per Night</label>
            <input
              value={pricePerNight}
              type="number"
              placeholder="$"
              min="1"
              step="0.01"
              onChange={changePricePerNightHandler}
              required
            />
          </div>
          <div className={styles["guest-form__action"]}>
            <button type="submit">Add Guest</button>
          </div>
     
        </form>
    </div>
  );
};
export default GuestForm;
