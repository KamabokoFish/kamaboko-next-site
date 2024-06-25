/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import LinkCard from './linkCard';
import Image from 'next/image';
import noiseImage from '../../public/noise-4.gif'

const linkSection = css`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 70px;

  .noise {
    width: 92%;
    height: 115%;
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
      width: 60%;
    }
`;

const LinkSection = () => {
  return (
    <section css={linkSection}>
      <LinkCard />
      {/* <Image className='noise' src={noiseImage} priority={true} alt='noise' /> */}
    </section>
  );
};

export default LinkSection;
