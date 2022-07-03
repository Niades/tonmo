import { useEffect } from "react";
import { connect } from "react-redux";
import { range } from "../../util";
import MnemonicInput from "../../components/MnemonicInput/MnemonicInput";
import Button from "../../components/Button/Button";
import * as s from "./Login.module.css";

function Login({ mnemonics, setMnemonicWord }) {
  useEffect(() => {
    document.querySelector("#mnemonic-1").focus();
  }, []);
  return (
    <main className={s.main}>
      <section className={s.header}>
        <h1>TONmo</h1>
        <h3>
          Fast and secure way to send TON to another party via a{" "}
          <a
            target="_blank"
            className={s.paymentChannelsLink}
            href="https://telegra.ph/TON-Payments-07-01"
          >
            Payment Channel
          </a>
        </h3>
      </section>
      <section className={s.pageDescription}>
        <p>
          To open a payment channel, first of all, you have to log in to your
          TON Wallet with your 24 recovery words.
        </p>
      </section>
      <section className={s.mnemonicFieldsSection}>
        <div>
          {range(1, 12).map((number, idx) => {
            return (
              <div className={s.mnemonicInputContainer} key={number}>
                <label htmlFor={`mnemonic-${number}`}>{number}.</label>
                <MnemonicInput
                  onChange={(newText) => setMnemonicWord(newText, idx)}
                  value={mnemonics[idx]}
                  id={`mnemonic-${number}`}
                  tabIndex={number}
                />
              </div>
            );
          })}
        </div>
        <div>
          {range(13, 24).map((number, idx) => {
            return (
              <div className={s.mnemonicInputContainer} key={number}>
                <label htmlFor={`mnemonic-${number}`}>{number}.</label>
                <MnemonicInput
                  id={`mnemonic-${number}`}
                  tabIndex={12 + number}
                  onChange={(newText) => setMnemonicWord(newText, idx + 12)}
                  value={mnemonics[idx + 12]}
                />
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <span className={s.safetyDisclaimer}>
          This information is stored <u>only</u> on your computer.
        </span>
      </section>
      <Button>Initialize Payment Channel</Button>
    </main>
  );
}

const mapState = (state) => {
  return {
    mnemonics: state.mnemonics,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setMnemonicWord: (word, idx) =>
      dispatch.mnemonics.setMnemonicWord([word, idx]),
  };
};

export default connect(mapState, mapDispatch)(Login);
