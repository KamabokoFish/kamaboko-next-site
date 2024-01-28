/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const worksStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;

  width: 85%;
  /* height: 300px;  */
  padding: 20px 30px 20px 30px;
  color: white;

  background: rgba(243, 240, 240, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 35px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;

  img {
    border-radius: 10px;
    width: 80%;
  }
  p {
    font-size: 17px;
  }
  h2 {
    font-size: 21px;
  }

  @media (min-width: 780px) {
    img {
      width: 60%;
    }
    p {
      font-size: 22px;
    }
    h2 {
      font-size: 26px;
    }
  }
`;

const worksData = [
  {
    id: 0,
    title: 'にょわクジ2024',
    image: '/nyowa-roullete.png',
    href: 'https://nyowa-rou-2024.netlify.app/',
    desc: '新年を占うためのおみくじ🎍',
  },
  {
    id: 1,
    title: 'バリデーション・モック',
    image: '/password-mock.png',
    href: 'https://password-mock.netlify.app/',
    desc: 'パス入力欄のモック🔒',
  },
];

const worksCard = () => {
  return (
    <>
      {worksData.map((work) => {
        return (
          <motion.a
            href={work.href}
            key={work.id}
            css={worksStyle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 900, damping: 80 }}
          >
            <h2>{work.title}</h2>
            <img src={work.image} alt='works-image' />
            <p>{work.desc}</p>
          </motion.a>
        );
      })}
    </>
  );
};

export default worksCard;
