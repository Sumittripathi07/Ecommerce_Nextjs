import React from "react";
import {Product, HeroBanner, FooterBanner } from "../components";
import { client } from "../lib/client";
import Head from 'next/head'

const Home = ({products,bannerData}) => {
  return (
    <>
    <Head>
        <title>@yourDoorstep</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeroBanner heroBanner={bannerData.length && bannerData[0] } />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Products of many veriaties</p>
      </div>
      <div className="products-container">
        {products?.map(
          (product) => <Product key={product.id} product={product} />
        )}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
 const query = '*[_type == "product"]';
  const products = await client.fetch(query);

 const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: {
      products,
      bannerData,
    },
  };
}

export default Home;
