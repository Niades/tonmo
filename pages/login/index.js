import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setMnemonicWord } from "../../store/mnemonics";
import { range } from "../../util";
import MnemonicInput from "../../components/MnemonicInput/MnemonicInput";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";
import { addWallet } from "../../store/tonweb";
import { createChannel, setChannelId } from "../../store/channel";
import * as s from "./Login.module.css";

function Login() {
  const router = useRouter();
  const channelId = useSelector((state) => state.channel.value.id);
  const [spinnerV, setSpinnerV] = useState(false);
  const mnemonics = useSelector((state) => state.mnemonics.value);
  const dispatch = useDispatch();
  useEffect(() => {
    document.querySelector("#mnemonic-1").focus();
    return () => {};
  }, []);
  const startBtnOnClick = useCallback(() => {
    setSpinnerV(true);
    dispatch(addWallet([mnemonics]));
    dispatch(createChannel());
  });
  console.log(router.query)
  if (channelId !== null) {
    if(Object.keys(router.query) === 0) {
      const channelId = router.query.next.split('/')[2];
      dispatch(setChannelId(channelId));
      router.push("/channel/" + channelId);
    } else {
      router.push("/channel/" + channelId);
      return null;
    }
  }
  return (
    <main className={s.main}>
      <Spinner visible={spinnerV} text="Creating wallet..." />
      <section className={s.header}>
        <h1>TONmo</h1>
        <h3>
          Fast and secure way to send TON to another party via a{" "}
          <a
            target="_blank"
            rel="noreferrer"
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
                  onChange={(newText) =>
                    dispatch(setMnemonicWord([newText, idx]))
                  }
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
                  onChange={(newText) =>
                    dispatch(setMnemonicWord([newText, idx + 12]))
                  }
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
      <Button
        disabled={mnemonics.some((m) => m === "")}
        onClick={startBtnOnClick}
      >
        Start
      </Button>
    </main>
  );
}

export default Login;
