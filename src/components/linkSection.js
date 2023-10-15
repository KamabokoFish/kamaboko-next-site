/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import LinkCard from './linkCard'

const linkSection = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 70px;
`
const LinkSection = () => {
  return (
    <section css={linkSection}>
      <LinkCard />
    </section>
  )
}

export default LinkSection
