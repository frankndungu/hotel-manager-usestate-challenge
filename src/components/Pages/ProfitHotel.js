import Chart from "../Chart/Chart";
import FilterYear from "../Filter/FilterYear";
const ProfitHotel = (props) => {
  const dataPoints = [
    { label: "Jan", value: 2 },
    { label: "Feb", value: 1 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 1 },
    { label: "May", value: 0 },
    { label: "Jun", value: 1 },
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
    let profit = 0;
    for (const guest of guestData) {
      let checkInMonth = guest.checkInDate.getMonth();
      let checkOutMonth = guest.checkOutDate.getMonth();
      let year = guest.checkInDate.getFullYear(); //it can be checkOutDate also because he will be checking in and out in the same year
      if (checkInMonth === checkOutMonth) {
        profit = (guest.checkOutDate.getDate() - guest.checkInDate.getDate()) * guest.pricePerNight;
        dataPoints[guest.checkInDate.getMonth()].value += profit;
      }
      if (checkInMonth !== checkOutMonth) {
        let profitInCheckInMonth =
          (daysInMonth(checkInMonth, year) - guest.checkInDate.getDate())  * guest.pricePerNight;
        let profitInCheckOutMonth = guest.checkOutDate.getDate() * guest.pricePerNight;

        dataPoints[checkInMonth].value += profitInCheckInMonth;
        dataPoints[checkOutMonth].value += profitInCheckOutMonth;
      }
    }
  };

  fillDataPoints(props.guestData, dataPoints);

  const selectYearHandler = (chosenYear) => {
    props.onSelectYear(chosenYear);
  };
  return (
    <div>
      <h1>PROFIT OF HOTEL</h1>
      <FilterYear
        onSelectYear={selectYearHandler}
        selectedYear={props.selectedYear}
      />
      <Chart dataPoints={dataPoints}></Chart>
    </div>
  );
};
export default ProfitHotel;
