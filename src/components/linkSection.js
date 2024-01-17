/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import LinkCard from './linkCard';

const linkSection = css`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 70px;

  .noise {
    display: flex;
    width: 88%;
    height: 120%;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: -5;
    border-radius: 3px;
    /* drop-shadow */
    filter: drop-shadow(0px 0px 11px rgba(167, 36, 223, 0.6));
  }
  @media (min-width: 780px) {
    .noise {
      height: 150%;
      width: 85%;
      /* width:100%; */
    }
  }
`;

const LinkSection = () => {
  return (
    <section css={linkSection}>
      <LinkCard />
      <img className='noise' src='/noise-2.gif' />
    </section>
  );
};

export default LinkSection;
