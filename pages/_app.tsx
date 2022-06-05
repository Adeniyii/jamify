/* eslint-disable react/jsx-no-useless-fragment */
import { StoreProvider } from "easy-peasy";
import { store } from "lib/store";
import Layout from "components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <StoreProvider store={store}>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </StoreProvider>
  );
};

export default MyApp;
