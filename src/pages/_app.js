import "@/styles/globals.css";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--nunito-font",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --nunito-font: ${nunito.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />;
    </>
  );
}
