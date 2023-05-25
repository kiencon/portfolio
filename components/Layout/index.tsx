import React from "react";
import { TLayoutProps } from "@/@type";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }: TLayoutProps) => {
	return (
		<>
			<Head>
        <link rel="icon" href="/logo.ico" />
      </Head>
			<Header />
			<main className="container bg-secondary my-3 px-2 py-5">
				{children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;
