/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Link from 'next/link';
import styles from '@/styles/textGlitch.module.scss';

const headerStyle = css`
  width: 90%;
  transform: translateY(20px);
  color: white;
  z-index: 10;
  margin: 0 auto;
  position: sticky;
  position: -webkit-sticky;
  top: 0;

  ::before {
    transform: skewX(-28deg);
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -10;

    background: rgba(243, 240, 240, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 35px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    /* background-color: #00fbff; */
  }
`;

const navWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 18px;
  font-family: 'Jura', sans-serif;

  @media (min-width: 780px) {
    padding: 0px 10px 0px 28px;
  }
`;

const h1Style = css`
  position: relative;
  font-weight: 500 !important;
  font-size: 1.5rem;
  @media (min-width: 780px) {
    font-size: 1.7rem;
  }
`;

const headerNav = css`
  display: flex;
  justify-content: space-between;
  aling-items: center;
  position: relative;
`;

// line-heightでaタグを縦に中央揃えすることに注意
const liStyle = css`
  position: relative;
  padding: 0px 5px;
  font-weight: 500 !important;
  font-size: 1.2rem;
  height: 50px;
  z-index: 10;

  transition: 0.3s ease;
  &:hover{
    opacity: 0.7;
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    line-height: 50px; 
    z-index: 10;
    opacity: 1;
  }
  @media (min-width: 780px) {
    padding: 0px 10px;
  }
`;

const linkStyle = css`
  color: white;
`

const navs = [
  {
    id: 1,
    href: '/',
    name: 'Home',
  },
  {
    id: 2,
    href: '/works',
    name: 'Works',
  },
  // {
  //   id: 3,
  //   href: '/works',
  //   name: 'Works',
  // },
];

const Navbar = () => {
  return (
    <header css={headerStyle}>
      <div css={navWrapper}>
        <div>
          <h1 css={h1Style} className={styles.glitchText}>KADOMA</h1>
        </div>
        <nav css={headerNav}>
          {navs.map((nav) => {
            return (
              <li key={nav.id} css={liStyle}>
                <Link href={nav.href} css={linkStyle}>{nav.name}</Link>
              </li>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
