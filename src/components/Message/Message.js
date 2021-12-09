import css from "./Message.module.css";
import polygon from "./polygon.svg";

export const Message = ({ isActive }) => {
  return (
    <div className={isActive ? `${css.active}` : `${css.Message}`}>
      <p className={css.styleP}>
        У вас есть действующие договора бронирования и по этому мы не можем
        удалить объект.
        <br />
        <br /> Вы сможете удалить объект когда у вас не будет действующих
        договоров бронирования.
      </p>
      <img src={polygon} alt="triangle" className={css.triangle} />
    </div>
  );
};
