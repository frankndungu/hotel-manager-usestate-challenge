import styles from "./Main.module.css";
import { useState } from "react";
import AddGuest from "../Pages/AddGuest";
import GuestHotel from "../Pages/GuestHotel";
import ProfitHotel from "../Pages/ProfitHotel";
import TrafficHotel from "../Pages/TrafficHotel";

const DUMMY_DATA = [
  {
    id: "g1",
    guestName: "Nick",
    roomNumber: "10",
    checkInDate: new Date(2021, 10, 12),
    checkOutDate: new Date(2021, 10, 29),
    pricePerNight: 120,
  },
  {
    id: "g2",
    guestName: "Mike",
    roomNumber: "23",
    checkInDate: new Date(2019, 4, 12),
    checkOutDate: new Date(2019, 4, 24),
    pricePerNight: 220,
  },
  {
    id: "g3",
    guestName: "Angela",
    roomNumber: "42",
    checkInDate: new Date(2020, 5, 2),
    checkOutDate: new Date(2020, 5, 11),
    pricePerNight: 120,
  },
  {
    id: "g4",
    guestName: "John",
    roomNumber: "16",
    checkInDate: new Date(2021, 8, 10),
    checkOutDate: new Date(2021, 8, 28),
    pricePerNight: 50,
  },
  {
    id: "g5",
    guestName: "Emma",
    roomNumber: "1",
    checkInDate: new Date(2021, 11, 12),
    checkOutDate: new Date(2021, 11, 29),
    pricePerNight: 220,
  },
];

const Main = (props) => {
  const [guestData, setGuestData] = useState(DUMMY_DATA);
  const [selectedYear, setSelectedYear] = useState("2021");

  const addGuestData = (guestData) => {
    setGuestData((prevGuestData) => {
      return [guestData, ...prevGuestData];
    });
  };

  const selectYearHandler = (chosenYear) => {
    setSelectedYear(chosenYear);
    console.log("main");
  };

  const filteredData = [];
  for (const guest of guestData) {
    if (
      guest.checkInDate.getFullYear().toString() === selectedYear ||
      guest.checkOutDate.getFullYear().toString() === selectedYear
    ) {
      filteredData.push(guest);
    }
  }
  
  let content = <AddGuest />;
  if (props.pageName === "add-guest") {
    content = <AddGuest onAddGuestData={addGuestData} />;
  }
  if (props.pageName === "guest-hotel") {
    content = <GuestHotel guestData={guestData} />;
  }
  if (props.pageName === "profit-hotel") {
    content = (
      <ProfitHotel
        guestData={filteredData}
        onSelectYear={selectYearHandler}
        selectedYear={selectedYear}
      />
    );
  }
  if (props.pageName === "traffic-hotel") {
    content = (
      <TrafficHotel
        guestData={filteredData}
        onSelectYear={selectYearHandler}
        selectedYear={selectedYear}
      />
    );
  }

  return <main className={styles.main}>{content}</main>;
};
export default Main;
