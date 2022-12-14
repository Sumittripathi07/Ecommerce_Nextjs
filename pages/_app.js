import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Toaster } from 'react-hot-toast';
import React from 'react';
import Layout from './../components/Layout';
import { StateContext } from '../context/StateContext';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;



function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
          <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
