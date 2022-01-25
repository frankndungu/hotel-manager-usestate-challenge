import GuestDate from "./GuestDate";
import styles from "./CurrentGuest.module.css";
const CurrentGuest = (props) => {
  return (
    <li className={styles["current-guest"]}>
      <h3>#{props.roomNumber}</h3>
      <h3>{props.guestName}</h3>
      <GuestDate
        checkInDate={props.checkInDate}
        checkOutDate={props.checkOutDate}
      />
      <h3>${props.pricePerNight}</h3>
    </li>
  );
};
export default CurrentGuest;
