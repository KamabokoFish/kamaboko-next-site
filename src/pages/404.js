/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const notFountdiv = css`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

`

const notFoundStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
`;

export default function Custom404() {
  return (
    <div css={notFountdiv}>
      <h1 css={notFoundStyle}>
        <span>🧈</span>
        404 Not Found!
      </h1>
    </div>
  );
}
