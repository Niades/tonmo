import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/fonts.css";
import "../styles/globals.css";
import "../styles/theme.css";
import "../services/TonWebPayments";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
