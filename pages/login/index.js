import { useState, useEffect } from "react";
import MnemonicInput from "../../components/MnemonicInput";
import * as s from "./Login.module.css";

function range(start, end) {
  var foo = [];
  for (var i = start; i <= end; i++) {
    foo.push(i);
  }
  return foo;
}

function Login() {
  const [mnemonics, setMnemonics] = useState([]);
  useEffect(() => {
    document.querySelector('#mnemonic-1').focus();
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
          TON Wallet with your mnemonic words.
        </p>
      </section>
      <section className={s.mnemonicFieldsSection}>
        <div>
          {range(1, 12).map((number) => {
            return (
              <div className={s.mnemonicInputContainer} key={number}>
                <label htmlFor={`mnemonic-${number}`}>{number}.</label>
                <MnemonicInput id={`mnemonic-${number}`} tabIndex={number} />
              </div>
            );
          })}
        </div>
        <div>
          {range(13, 24).map((number) => {
            return (
              <div className={s.mnemonicInputContainer} key={number}>
                <label htmlFor={`mnemonic-${number}`}>{number}.</label>
                <MnemonicInput
                  id={`mnemonic-${number}`}
                  tabIndex={12 + number}
                />
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <span className={s.safetyDisclaimer}>This information is stored <u>only</u> on your computer.</span>
      </section>
    </main>
  );
}

export default Login;
