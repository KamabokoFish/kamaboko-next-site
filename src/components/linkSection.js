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
    width: 94%;
    height: 120%;
    position: absolute;
    z-index: -5;
    border-radius: 3px;
    /* drop-shadow */
    filter: drop-shadow(0px 0px 11px rgba(167, 36, 223, 0.6));
  }
  @media (min-width: 486px) {
    .noise {
      height: 150%;
    }
  }
  @media (min-width: 1200px) {
    .noise {
      width: 82%;
    }
`;

const LinkSection = () => {
  return (
    <section css={linkSection}>
      <LinkCard />
      <img className='noise' src='/noise-4.gif' />
    </section>
  );
};

export default LinkSection;
