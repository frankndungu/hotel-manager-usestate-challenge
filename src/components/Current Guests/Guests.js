import CurrentGuest from "./CurrentGuest";
import styles from "./Guests.module.css";
const Guests = (props) => {
  if (props.guestData.length === 0) {
    return <h1>NO GUESTS IN YOUR HOTEL</h1>;
  }

  return (
    <div>
      <ul className={styles["guest-list"]}>
        {props.guestData.map((guest) => (
          <CurrentGuest
            key={guest.id}
            guestName={guest.guestName}
            roomNumber={guest.roomNumber}
            checkInDate={guest.checkInDate}
            checkOutDate={guest.checkOutDate}
            pricePerNight={guest.pricePerNight}
          />
        ))}
      </ul>
    </div>
  );
};
export default Guests;
