/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cardStyle = css`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 230px;

  background: rgba(243, 240, 240, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 35px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);

  overflow: hidden;
  color: white;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  :hover {
    height: 350px;
  }
`;

const iconStyle = css`
  margin-top: 15px;
  border-radius: 20%;
`;
const iconHeader = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const paragraph = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 15px;
`;

const ProfileCard = () => {
  return (
    <motion.div
      css={cardStyle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 900, damping: 80 }}
    >
      <Image
        css={iconStyle}
        className='profile-icon'
        src='/kadoma-icon.jpg'
        alt='Picture of kadoma'
        width={130}
        height={130}
      />
      <div css={iconHeader} className='icon-header'>
        <small>かまぼこ</small>
        <h3>Kamaboko-Atsu</h3>
        <small>Frontend Dev.</small>
      </div>
      <div css={paragraph} className='paragraph'>
        <p>パソコンをｶﾀｶﾀしています</p>
        <p>フロントエンドがすき</p>
        <p>好きなもの:</p>
        <p>React,OCaml,Neovim,etc...</p>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
