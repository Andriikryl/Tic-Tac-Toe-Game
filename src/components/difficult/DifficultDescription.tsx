import style from "./style.module.css";
import IMageCat from "/cat-difficult.webp";
export default function DifficultDescription() {
  return (
    <div className={style.box}>
      <div className={style.image__box}>
        <img src={IMageCat} alt="cat" />
      </div>
      <p className={style.box__text}>
        This mode is like trying to herd cats while juggling flaming torches.
        Good luck.
      </p>
    </div>
  );
}
