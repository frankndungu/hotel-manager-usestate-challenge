import Chart from "../Chart/Chart";
import FilterYear from "../Filter/FilterYear";
const TrafficHotel = (props) => {
  const dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  const fillDataPoints = (guestData, dataPoints) => {
    let days = 0;
    for (const guest of guestData) {
      let checkInMonth = guest.checkInDate.getMonth();
      let checkOutMonth = guest.checkOutDate.getMonth();
      let year = guest.checkInDate.getFullYear(); //it can be checkOutDate also because he will be checking in and out in the same year
      if (checkInMonth === checkOutMonth) {
        days = guest.checkOutDate.getDate() - guest.checkInDate.getDate();
        dataPoints[guest.checkInDate.getMonth()].value += days;
      }
      if (checkInMonth !== checkOutMonth) {
        let daysInCheckInMonth =
          daysInMonth(checkInMonth, year) - guest.checkInDate.getDate();
        let daysInCheckOutMonth = guest.checkOutDate.getDate();

        dataPoints[checkInMonth].value += daysInCheckInMonth;
        dataPoints[checkOutMonth].value += daysInCheckOutMonth;
      }
    }
  };

  fillDataPoints(props.guestData, dataPoints);

  const selectYearHandler = (chosenYear) => {
    props.onSelectYear(chosenYear);
  };

  return (
    <div>
      <h1>TRAFFIC OF HOTEL</h1>
      <FilterYear
        onSelectYear={selectYearHandler}
        selectedYear={props.selectedYear}
      />
      <Chart dataPoints={dataPoints}></Chart>
    </div>
  );
};
export default TrafficHotel;
