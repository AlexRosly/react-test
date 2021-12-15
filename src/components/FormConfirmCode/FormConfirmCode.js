import css from "./FormConfirmCode.module.css";

export const FormConfirmCode = () => {
  return (
    <form className={css.form}>
      <div className={css.textWrapper}>
        <h2 className={css.title}>Впишите код подтверждения,</h2>
        <p className={css.paragraf}>
          который мы отправили на ваш
          <br /> адрес электронной почты.
        </p>
      </div>
      <p className={css.message}>
        Вы ввели не верный код подтверждения.
        <br /> Попробуйте снова.
      </p>
      <label className={css.label}>
        <input className={css.input} type="text" name="name" placeholder="" />
        <span className={css.inputText}>Введите код подтверждения:</span>
      </label>
      <p className={css.attetion}>Код подтверждения действует 3 минуты</p>
    </form>
  );
};
