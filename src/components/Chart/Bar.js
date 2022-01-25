import styles from './Bar.module.css'
const Bar = (props) => {
  let barHeight = "0%";
  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className={styles.bar}>
      <div className={styles["bar__shape"]}>
        <div className={styles["bar__fill"]} style={{height: barHeight}}></div>
      </div>
      <div className={styles["bar__label"]}>{props.label}</div>
    </div>
  );
};
export default Bar;
