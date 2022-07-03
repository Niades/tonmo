import * as s from "./Button.module.css";

function Button({ children, onClick, disabled }) {
  return (
    <button disabled={disabled} className={s.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
