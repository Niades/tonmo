import { Provider } from "react-redux";
import Script from "next/script";
import store from "../store/store";
import "../styles/fonts.css";
import "../styles/globals.css";
import "../styles/theme.css";
import "../services/TonWebPayments";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Script src="https://cdn.scaledrone.com/scaledrone.min.js"></Script>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
