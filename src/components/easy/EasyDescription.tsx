import style from "./style.module.css";
import IMageCat from "/cat-easy.jpeg";

export default function EasyDescription() {
  return (
    <div className={style.box}>
      <div className={style.image__box}>
        <img src={IMageCat} alt="cat" />
      </div>
      <p className={style.box__text}>
        This mode is so easy, you could play it while sleeping. In fact, we
        recommend you do.
      </p>
    </div>
  );
}
