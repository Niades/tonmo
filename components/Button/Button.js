import * as s from "./Button.module.css";

function Button({children, onClick}) {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      {children}
    </button>
  )
};

export default Button;