/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import WorksCard from './worksCard';

const worksSection = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  margin-top: 84px;
`;

const WorksSection = () => {
  return (
    <section css={worksSection}>
      <WorksCard />
    </section>
  );
};

export default WorksSection;
