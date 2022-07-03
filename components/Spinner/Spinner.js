import Image from "next/future/image";
import * as s from "./Spinner.module.css";
import SPINNER_ANIMATION_IMAGE from "../../assets/images/spinner.gif";

function Spinner({ text, visible }) {
  if (!visible) {
    return null;
  }
  return (
    <div className={s.spinnerContainer}>
      <Image
        layout="raw"
        className={s.spinnerAnimation}
        src={SPINNER_ANIMATION_IMAGE}
        alt="Spinner animation"
      />
      <span className={s.spinnerText}>{text}</span>
    </div>
  );
}

export default Spinner;
