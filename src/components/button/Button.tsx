import style from "./style.module.css";
interface IButton {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: IButton) {
  return (
    <button onClick={onClick} className={style.button}>
      <span className={style.spark__container}>
        <span className={style.spark} />
      </span>
      <span className={style.backdrop} />
      <span className={style.text}>{text}</span>
    </button>
  );
}
