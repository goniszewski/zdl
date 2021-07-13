/** @jsxImportSource @emotion/react */
import React from "react";
import { jsx, css } from "@emotion/react";

function ItemsList({ items = [] }) {
  console.info({ items });
  return (
    <div css={styles.container}>
      {items.length > 0 ? items.map((it) => it) : "No users to show."}
    </div>
  );
}

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    line-height: 2em;

    @media screen and (min-width: 600px) {
      margin: 0 6em;
    }
  `,
};

export default ItemsList;
