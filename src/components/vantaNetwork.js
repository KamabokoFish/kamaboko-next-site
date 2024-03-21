/** @jsxImportSource @emotion/react */

import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import { css } from '@emotion/react';
import styles from '@/styles/h2Glitch.module.scss';

const sectionFlex = css`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 75px;

  @media (min-width: 780px) {
    margin-top: 90px;
  }
`;

const h2Style = css`
  position: absolute;
  top: 2px;
  left: 40px;
  font-size: 2.2rem;
  font-family: 'Jura', sans-serif !important;
  font-weight: 300 !important;
  color: white;
  z-index: 5;

  @media (min-width: 780px) {
    top: 12px;
    left: 55px;
    font-size: 3rem;
  }
  @media (min-width: 1200px) {
    left: 356px;
    font-size: 3rem;
  }
`;

const divVantaStyle = css`
  display: flex;
  width: 92%;
  height: 125px !important;
  justify-content: center;

  @media (min-width: 780px) {
    width: 93%;
    height: 185px !important;
  }
  @media (min-width: 1200px) {
    width: 85%;
  }
`;

export const VantaRender = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 50.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x483bb8,
          backgroundColor: 0x171133,
          maxDistance: 34.0,
          spacing: 31,
          showDots: true,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section css={sectionFlex}>
      <h2
        css={h2Style}
        className={styles.h2Glitch}
        suppressContentEditableWarning={true}
        contentEditable='false'
      >
        KaMaboko&#39;s
        <br />
        DeveLoPMent
        <br />
        WebSiTE.
      </h2>
      <div css={divVantaStyle} ref={vantaRef}></div>
    </section>
  );
};
