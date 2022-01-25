import GuestForm from "../New Guest/GuestForm";
const AddGuest = (props) => {

  const passGuestData = passedGuestData => {
    const guestData = {
      id: Math.random().toString(),
      ...passedGuestData
    }
    props.onAddGuestData(guestData);
  }

  return (
    <div>
      <h1>ADD GUEST</h1>
      <GuestForm onPassGuestData={passGuestData} />
    </div>
  );
};
export default AddGuest;
