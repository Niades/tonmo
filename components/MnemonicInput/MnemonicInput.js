import * as s from "./MnemonicInput.module.css";

function MnemonicInput({ id, tabIndex }) {
  return (
    <input
      className={s.input}
      id={id}
      tabIndex={tabIndex}
      type="text"
      maxLength={15}
    />
  );
}

export default MnemonicInput;
