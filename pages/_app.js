import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/PizzaList.css"
import "../styles/PizzaCard.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></Script>

        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;