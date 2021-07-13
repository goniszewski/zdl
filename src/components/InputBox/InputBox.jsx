/** @jsxImportSource @emotion/react */
import React from "react";
import { jsx, css } from "@emotion/react";

function InputBox({
  searchedText,
  setSearchedText,
  placeholderText = "Search here...",
}) {
  return (
    <div css={styles.container}>
      <input
        css={styles.input}
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
        placeholder={placeholderText}
      />
    </div>
  );
}

const styles = {
  container: css`
    display: flex;
    width: 100%;
    margin-bottom: 2em;
  `,
  input: css`
    line-height: 1.8em;
    padding: 0 0.5em;
    font-size: 1.1em;
    font-weight: 600;
    margin: 0 auto;
    border: 1px solid black;
    color: #6b6b6b;
  `,
};

export default InputBox;
