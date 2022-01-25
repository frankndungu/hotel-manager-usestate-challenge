import styles from "./GuestDate.module.css";
const GuestDate = (props) => {
  //check in data
  const checkInDay = props.checkInDate.toLocaleString("en-US", {
    day: "2-digit",
  });
  const checkInMonth = props.checkInDate.toLocaleString("en-US", {
    month: "long",
  });
  const checkInYear = props.checkInDate.getFullYear();

  //check out data
  const checkOutDay = props.checkOutDate.toLocaleString("en-US", {
    day: "2-digit",
  });
  const checkOutMonth = props.checkOutDate.toLocaleString("en-US", {
    month: "long",
  });
  const checkOutYear = props.checkOutDate.getFullYear();

  return (
    <div className={styles["date"]}>
      <div className={styles["date__checkin"]}>
        <h4>Check In</h4>
        {checkInDay} {checkInMonth} {checkInYear}
      </div>
      <div className={styles["date__checkout"]}>
        <h4>Check Out</h4>
        {checkOutDay} {checkOutMonth} {checkOutYear}
      </div>
    </div>
  );
};
export default GuestDate;
