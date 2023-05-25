import Head from "next/head";
import Layout from "../components/Layout";

const Custom500 = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <Layout>
        <h3 className="text-center text-textPrimary">
          OoO :( Something went wrong :( 0o0
        </h3>
      </Layout>
    </>
  );
};

export default Custom500;
