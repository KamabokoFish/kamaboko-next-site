/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const worksSection = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  margin-top: 75px;
`;

const worksHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 90px; 
  color: white;

  background: rgba(243, 240, 240, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 35px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
`;

const h2Style = css`
  font-size: 3.5rem;
  font-family: 'Jura', sans-serif;
  font-weight: 300;
`;

const WorksSection = () => {
  return (
    <section css={worksSection}>
      <div css={worksHeader}>
        <h2 css={h2Style}>MY Works...</h2>
      </div>
      <div css={worksHeader}>
        <h2 css={h2Style}>MY Works...</h2>
      </div>
      <div css={worksHeader}>
        <h2 css={h2Style}>MY Works...</h2>
      </div>
    </section>
  );
};

export default WorksSection;
