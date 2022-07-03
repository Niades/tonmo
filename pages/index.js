import Image from "next/image";
import ARROW_DOWN_ICON from "../assets/images/arrow-down.svg";
import * as s from "./Home.module.css";

const BACKSPACE_KEYCODE = 8;

export default function Home() {
  return (
    <>
      <main className={s.main}>
        <section className={s.header}>
          <h1>TONmo</h1>
          <h3>Fast and secure way to send TON via Payment Channels</h3>
        </section>
        <form>
          <section className={s.sender}>
            <label className={s.senderLabel} htmlFor="sender">
              From
            </label>
            <span className={s.senderSubtitle}>Any TON wallet</span>
            <input
              id="sender"
              className={s.walletAddressInput}
              type="text"
              placeholder="Wallet address"
            />
          </section>
          <section className={s.arrow}>
            <Image
              width={20}
              height={20}
              layout="fixed"
              src={ARROW_DOWN_ICON}
            />
          </section>
          <section className={s.receiver}>
            <label className={s.receiverLabel}>To</label>
            <span className={s.receiverSubtitle}>Any TON wallet</span>
            <input
              className={s.walletAddressInput}
              id="receiver"
              type="text"
              placeholder="Wallet address"
            />
          </section>
          <section className={s.amountSection}>
            <label>Amount</label>
            <input
              className={s.sumInput}
              max={99999}
              type="number"
              placeholder="Amount"
              onKeyDown={(e) => {
                if (e.keyCode !== BACKSPACE_KEYCODE) {
                  if (e.target.value.length > 6) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }
              }}
            />
            <span className={s.sumInputEnd}>TON</span>
          </section>
          <button className={s.sendBtn} type="button" onClick={() => {}}>
            Send
          </button>
        </form>
      </main>
    </>
  );
}
