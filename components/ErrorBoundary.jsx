//https://legacy.reactjs.org/docs/error-boundaries.html
import Head from "next/head";
import React from "react";
import Layout from "./Layout";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.error({ error, errorInfo });
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <Head>
            <meta name="robots" content="noindex"></meta>
            <meta
              name="google-site-verification"
              content="4bpjw_j_FV-V-SWaXEdUKowCX8NbXyZZOJv05g4gURo"
            />
          </Head>
          <Layout>
            <h3 className="text-center">
              OoO :( Có lỗi không mong muốn xảy ra, phimhaytv sẽ khắc phục sớm,
              mong các bạn thông cảm :( 0o0
            </h3>
          </Layout>
        </>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
