/** @jsxImportSource @emotion/react */

import ContactCard from './contactCard';
import { css } from '@emotion/react';

const contactSection = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

const ContactSection = () => {
  return (
    <section css={contactSection}>
      <ContactCard />
    </section>
  );
};

export default ContactSection;
