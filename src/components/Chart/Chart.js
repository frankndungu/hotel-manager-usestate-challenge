import Bar from "./Bar";
import styles from "./Chart.module.css";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxDataPointValue = Math.max(...dataPointValues);
  return (
    <div className={styles.chart}>
      {props.dataPoints.map((dataPoint) => (
        <Bar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxDataPointValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
