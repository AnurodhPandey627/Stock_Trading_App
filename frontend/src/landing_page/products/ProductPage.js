/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Hero from "./Hero";
import ImageOnLeft from "./ImageOnLeft";
import ImageOnRight from "./ImageOnRight";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <ImageOnLeft
        imageUrl="media/images/kite.png"
        productTitle="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <ImageOnRight
        imageUrl="media/images/products-console.png"
        productTitle="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <ImageOnLeft
        imageUrl="media/images/products-coin.png"
        productTitle="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <ImageOnRight
        imageUrl="media/images/kiteconnect.png"
        productTitle="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <ImageOnLeft
        imageUrl="media/images/varsity.png"
        productTitle="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mb-5" style={{fontSize:"1.14rem"}}>Want to know more about our technology stack? Check out the <a href="#" style={{textDecoration:"None"}}>Zerodha.tech</a> blog.</p>
      <Universe />
    </>
  );
}

export default ProductPage;
