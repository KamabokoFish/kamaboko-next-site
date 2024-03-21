/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// import roulletImage from '../../public/nyowa-roullete.png'
// import passwordImage from '../../public/password-mock.png'

const worksStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 22px;

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
    font-size: 22px;
  }
  .description {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 780px) {
    img {
      width: 50%;
    }
    p {
      font-size: 21px;
    }
    h2 {
      font-size: 26px;
    }
  }
`;

const worksData = [
  {
    id: 0,
    title: 'おみクジ2024',
    image: '/nyowa-roullete.jpg',
    href: 'https://nyowa-rou-2024.netlify.app/',
    mainDesc: '新年を占うためのおみくじ🎍',
    techDesc: 'HTML,CSS,JS,Three.js',
    // otherDesc: 'Deployed by Netlify'
  },
  {
    id: 1,
    title: 'バリデーション・モック',
    image: '/password-mock.jpg',
    href: 'https://password-mock.netlify.app/',
    mainDesc: 'パス入力欄のモックUI',
    techDesc: 'HTML,CSS,JS,Vanilla-Tilt',
    // otherDesc: 'Deployed by Netlify'
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
            <div className='description'>
              <p>{work.mainDesc}</p>
              <span>{work.techDesc}</span>
              {/* <span>{work.otherDesc}</span> */}
            </div>
          </motion.a>
        );
      })}
    </>
  );
};

export default worksCard;
