import style from "./style.module.css";
import IMageCat from "/cat-madium.jpeg";
export default function MediumDescription() {
  return (
    <div className={style.box}>
      <div className={style.image__box}>
        <img src={IMageCat} alt="cat" />
      </div>
      <p className={style.box__text}>
        This mode is like a game of chance - sometimes things will go your way,
        and sometimes they won't.
      </p>
    </div>
  );
}
