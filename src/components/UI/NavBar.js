import { useState } from "react";
import styles from "./NavBar.module.css";
const NavBar = (props) => {
  const [addGuestSite, setAddGuestSite] = useState("add-guest");
  const [guestHotelSite, setGuestHotelSite] = useState("guest-hotel");
  const [profitHotelSite, setProfitHotelSite] = useState("profit-hotel");
  const [trafficHotelSite, setTrafficHotelSite] = useState("traffic-hotel");
  const [openedNav, setOpenedNav] = useState(false);

  const addGuestHandler = () => {
    setAddGuestSite("add-guest");
    props.onChosePage(addGuestSite);
    setOpenedNav(false);
  };
  const guestHotelHandler = () => {
    setGuestHotelSite("guest-hotel");
    props.onChosePage(guestHotelSite);
    setOpenedNav(false);
  };
  const profitHotelHandler = () => {
    setProfitHotelSite("profit-hotel");
    props.onChosePage(profitHotelSite);
    setOpenedNav(false);
  };
  const trafficHotelHandler = () => {
    setTrafficHotelSite("traffic-hotel");
    props.onChosePage(trafficHotelSite);
    setOpenedNav(false);
  };

  const openSmNav = () => {
    if (openedNav === true) {
      setOpenedNav(false);
    }
    if (openedNav === false) {
      setOpenedNav(true);
    }
  };
  return (
    <nav>
      <div className={styles.logo}>
        <h3 className={styles["logo-text"]}>
          HOTEL
          <span>
            <h3>MG</h3>
          </span>
        </h3>
      </div>
      <ul
        className={`${styles["nav-paths"]} ${
          openedNav ? styles["show-sm-nav"] : ""
        }`}
      >
        <li
          className={`${
            props.chosenPage === addGuestSite ? styles.active : ""
          }`}
        >
          <button type="button" onClick={addGuestHandler}>
            ADD GUEST
          </button>
        </li>
        <li
          className={`${
            props.chosenPage === guestHotelSite ? styles.active : ""
          }`}
        >
          <button type="button" onClick={guestHotelHandler}>
            CURRENT GUESTS
          </button>
        </li>
        <li
          className={`${
            props.chosenPage === profitHotelSite ? styles.active : ""
          }`}
        >
          <button type="button" onClick={profitHotelHandler}>
            PROFIT OF HOTEL
          </button>
        </li>
        <li
          className={`${
            props.chosenPage === trafficHotelSite ? styles.active : ""
          }`}
        >
          <button type="button" onClick={trafficHotelHandler}>
            TRAFFIC OF HOTEL
          </button>
        </li>
      </ul>
      <div className={styles["burger-icon"]} onClick={openSmNav}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </nav>
  );
};
export default NavBar;
