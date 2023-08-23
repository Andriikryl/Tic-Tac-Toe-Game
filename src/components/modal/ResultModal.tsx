import Modal from "react-modal";
import style from "./style.module.css";
import ImasgeSon from "/48q18o.jpg";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0, 0.6)",
  },
};

interface Props {
  isOpen: boolean;
  close: () => void;
  startNewGame: () => void;
  winner: null | string;
}
export const ResultModal = ({ isOpen, close, startNewGame, winner }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      style={customStyles}
      ariaHideApp={false}
      className={style.modal}
    >
      <div className={style.modal__container}>
        <div className={style.image__box}>
          <img src={ImasgeSon} alt="mem" />
        </div>
        <h1 className={style.modal__title}>Game over</h1>
        <div className={style.modal__body}>
          <p className={style.modul__winner}>{winner}</p>
        </div>

        <div className={style.modal__footer}>
          <button className={style.button} onClick={close}>
            Close
          </button>
          <button className={style.button} onClick={startNewGame}>
            Start over
          </button>
        </div>
      </div>
    </Modal>
  );
};
