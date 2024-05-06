/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { FaTwitter, FaGithub } from 'react-icons/fa';
import { SiZenn } from 'react-icons/si';

const cardStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;

  background: rgba(243, 240, 240, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 35px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);

  color: white;
  border-radius: 10px;
`;

const linkStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  color: white;
  width: 100%;
  height: 100%;
`;

const links = [
  {
    id: 0,
    name: 'Twitter(X)',
    icon: <FaTwitter size={50} color={'#89e5f1'} />,
    href: 'https://twitter.com/kamaboko_suri3',
  },
  {
    id: 1,
    name: 'Github',
    icon: <FaGithub size={50} color={'#ead7ff'} />,
    href: 'https://github.com/Nyowa450',
  },
  {
    id: 2,
    name: 'Zenn',
    icon: <SiZenn size={50} color={'#96bcfd'} />,
    href: 'https://zenn.dev/fukakusa_kadoma',
  },
];

const LinkCard = () => {
  return (
    <>
      {links.map((link) => {
        return (
          <motion.div
            key={link.id}
            css={cardStyle}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link css={linkStyle} href={link.href}>
              {link.icon}
              <p>{link.name}</p>
            </Link>
          </motion.div>
        );
      })}
    </>
  );
};

export default LinkCard;
