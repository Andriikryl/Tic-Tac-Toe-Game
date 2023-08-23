import style from "./style.module.css";
interface IButton {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: IButton) {
  return (
    <button onClick={onClick} className={style.button}>
      <span>{text}</span>
    </button>
  );
}
