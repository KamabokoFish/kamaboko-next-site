/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import ProfileCard from './profileCard';

const profileSection = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`

const ProfileSection = () => {
  return (
    <section css={profileSection}>
      <ProfileCard />
    </section>
  );
};

export default ProfileSection;
