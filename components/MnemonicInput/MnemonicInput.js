import * as s from "./MnemonicInput.module.css";

function MnemonicInput({ id, tabIndex, onChange, value }) {
  return (
    <input
      className={s.input}
      id={id}
      tabIndex={tabIndex}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      maxLength={15}
    />
  );
}

export default MnemonicInput;
