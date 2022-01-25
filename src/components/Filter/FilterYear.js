import styles from "./FilterYear.module.css";
const FilterYear = (props) => {
  
  const selectedYearHandler = (event) => {
    props.onSelectYear(event.target.value);
  };

  return (
    <div className={styles["select-year"]}>
      <label>Pick a year</label>
      <select value={props.selectedYear} onChange={selectedYearHandler}>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
      <h4>You selected a year <span> {props.selectedYear}</span></h4>
    </div>
  );
};
export default FilterYear;
