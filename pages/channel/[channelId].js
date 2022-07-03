import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import ARROW_DOWN_ICON from "../../assets/images/arrow-down.svg";
import * as s from "./Channel.module.css";
import Button from "../../components/Button/Button";

const BACKSPACE_KEYCODE = 8;

export default function Channel() {
  const channelId = useSelector((state) => state.channel.value.id);
  const [fromAddress, setFromAddress] = useState("Initializing");
  const fromWallet = useSelector((state) => state.tonweb.value.wallets[0]);
  useEffect(() => {
    const fetchAddress = async () => {
      if (fromWallet !== undefined) {
        const address = await fromWallet.getAddress();
        setFromAddress(address.toString(true, true, true));
      }
    };
    fetchAddress();
  }, [setFromAddress, fromWallet]);
  const channelAddress = `http://${global.location.hostname}/login?next=/channel/${channelId}`;
  return (
    <>
      <main className={s.main}>
        <section className={s.header}>
          <h1>TONmo</h1>
        </section>
        <section className={s.channelStatusSection}>
          Channel status: Inactive
        </section>
        <section className={s.linkSection}>
          Share this link with the other party:
          <input type="text" value={channelAddress} />
          <Button onClick={() => {}}>Copy Link</Button>
        </section>
        <form>
          <section className={s.sender}>
            <label className={s.senderLabel} htmlFor="sender">
              From
            </label>
            <span className={s.senderSubtitle}>Your TON wallet</span>
            <input
              disabled={true}
              id="sender"
              className={s.walletAddressInput}
              type="text"
              placeholder="Wallet address"
              value={fromAddress}
            />
          </section>
          <section className={s.arrow}>
            <Image
              alt="Arrow down"
              width={20}
              height={20}
              layout="fixed"
              src={ARROW_DOWN_ICON}
            />
          </section>
          <section className={s.receiver}>
            <label className={s.receiverLabel}>To</label>
            <span className={s.receiverSubtitle}>Other party's TON wallet</span>
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
          <Button disabled={true}>Send</Button>
        </form>
      </main>
    </>
  );
}
