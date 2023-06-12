import "@/styles/globals.css";
import { Nunito_Sans } from "next/font/google";
import LoadingBar from "@/components/LoadingBar";
import { Provider } from "react-redux";
import store from "@/redux/store";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--nunito-font",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <style jsx global>{`
          :root {
            --nunito-font: ${nunito.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
        <LoadingBar />
      </Provider>
    </>
  );
}
