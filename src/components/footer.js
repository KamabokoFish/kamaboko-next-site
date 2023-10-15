/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const footer = css`
  position: sticky;
  margin-top: 50px;
  margin-bottom: 20px;
  top: 95vh;
  width: 100%;
  height: 30px;

  color: #8d9d9d;
  font-size: 1.2rem;
  font-family: 'Jura', sans-serif;
  text-align: center;
`;

const Footer = () => {
  return (
    <footer css={footer}>
      kadoma-fukakusa {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
