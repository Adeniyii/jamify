/* eslint-disable react/jsx-no-useless-fragment */
import { store } from "lib/store";
import { Provider } from "react-redux";
import Layout from "components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Provider>
  );
};

export default MyApp;
