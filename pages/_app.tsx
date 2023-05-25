import ErrorBoundary from "@/components/ErrorBoundary";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ErrorBoundary>
      <Script
        async={true}
        src="https://www.googletagmanager.com/gtag/js?id=G-G2GT3W4XM3"
      ></Script>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
};

export default App;
