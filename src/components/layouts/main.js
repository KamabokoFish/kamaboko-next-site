/** @jsxImportSource @emotion/react */

import Head from 'next/head';
import Navbar from '../navbar';
import Footer from '../footer';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';

const divStyle = css`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  @media (min-width: 900px) {
    width: 850px;
  }
  @media (min-width: 1200px) {
    width: 1000px;
  }
`;

const variants = {
  init: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Main = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='kadoma-profile-site' />
        <meta name='author' content='kadoma-fukakusa' />
        <link rel='icon' href='/kadoma-icon.jpg' type='image/x-icon' />
        <title>Nyowa-Site</title>
      </Head>

      <div css={divStyle}>
        <Navbar />
        <motion.main
          initial='init'
          animate='enter'
          exit='exit'
          variants={variants}
          transition={{ duration: 1.0, type: 'easeInOut' }}
          style={{ position: 'relative' }}
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  );
};

export default Main;
