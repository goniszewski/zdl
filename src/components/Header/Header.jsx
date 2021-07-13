/** @jsxImportSource @emotion/react */
import React from "react";
import { jsx, css } from "@emotion/react";

function Header({ text }) {
  return (
    <div css={styles.container}>
      <h1 css={styles.h1}>{text}</h1>
    </div>
  );
}

const styles = {
  container: css`
    display: flex;
    width: 100%;
    line-height: 2em;
  `,
  h1: css`
    height: 2em;
    font-weight: 500;
    margin: 0 auto;
  `,
};

export default Header;
