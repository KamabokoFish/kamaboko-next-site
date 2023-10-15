/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { BiMailSend } from 'react-icons/bi';

const cardStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  width: 330px;
  height: 80px;
  padding-bottom: 8px;

  background: rgba(243, 240, 240, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 35px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);

  color: white;
  border-radius: 10px;
`;

const mailHeader = css`
  display: flex;
  align-items: center;
`

const ContactCard = () => {
  return (
    <motion.div
      css={cardStyle}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <p css={mailHeader}><BiMailSend size={28} color={'#b095db'} /></p>
      <strong>kadoma.fukakusa248(🍥)gmail.com</strong>
    </motion.div>
  );
};

export default ContactCard;
