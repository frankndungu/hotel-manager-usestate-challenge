import Guests from "../Current Guests/Guests";
const GuestHotel = (props) => {
  const currentGuests = [];
  const todayDate = new Date();

  for (const guest of props.guestData) {
    if (
      guest.checkInDate.getFullYear() <= todayDate.getFullYear() &&
      guest.checkOutDate.getFullYear() >= todayDate.getFullYear()
    ) {
      if (
        guest.checkInDate.getMonth() <= todayDate.getMonth() &&
        guest.checkOutDate.getMonth() >= todayDate.getMonth()
      ) {
        if (
          guest.checkInDate.getDate() <= todayDate.getDate() &&
          guest.checkOutDate.getDate() >= todayDate.getDate()
        ) {
          currentGuests.push(guest);
        }
      }
    }
  }

  return (
    <div>
      <h1>CURRENT GUESTS IN HOTEL</h1>
      <Guests guestData={currentGuests}></Guests>
    </div>
  );
};
export default GuestHotel;
