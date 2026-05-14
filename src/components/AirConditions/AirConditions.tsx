import css from "./AirConditions.module.css";
export default function AirConditions() {
  return (
    <div>
      <h2>Air conditions</h2>
      <div className={css.container}>
        <div className={css.condition}>
          <h3 className={css.title}></h3>
          <p className={css.text}></p>
        </div>
        <div className={css.condition}>
          <h3 className={css.title}></h3>
          <p className={css.text}></p>
        </div>
      </div>
      <div className={css.container}>
        <div className={css.condition}>
          <h3 className={css.title}></h3>
          <p className={css.text}></p>
        </div>
        <div className={css.condition}>
          <h3 className={css.title}></h3>
          <p className={css.text}></p>
        </div>
      </div>
    </div>
  );
}
