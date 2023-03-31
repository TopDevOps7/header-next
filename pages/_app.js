import React from "react";
import App from "next/app";
import Top from "../components/Top";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "../styles/style.css";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="__className_9865b9" style={{ overflow: "hidden" }}>
        <Top></Top>
        <Header></Header>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
