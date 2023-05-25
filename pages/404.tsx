import Layout from "@/components/Layout";
import Head from "next/head";

const Custom404 = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <Layout>
        <h3 className="text-center text-textPrimary">
          OoO :( Page not found :( 0o0
        </h3>
      </Layout>
    </>
  );
};

export default Custom404;
