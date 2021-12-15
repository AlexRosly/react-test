import { createPortal } from "react-dom";
import { FormConfirmCode } from "../FormConfirmCode/FormConfirmCode";

import css from "./Modal.module.css";
import Rectangle from "./Img/Rectangle.jpg";
import IconCross from "./Img/IconCross.svg";

const modalRoot = document.querySelector("#modal-root");

export const Modal = () => {
  return createPortal(
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src={Rectangle} alt="img" width={142} className={css.img} />
        <button className={css.closeBtn}>
          <img src={IconCross} alt="icon-cross" className={css.icon} />
        </button>
        <div className={css.formWrapper}>
          <FormConfirmCode />
        </div>
      </div>
    </div>,
    modalRoot
  );
};
