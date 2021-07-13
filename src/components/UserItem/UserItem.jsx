/** @jsxImportSource @emotion/react */
import React from "react";
import { jsx, css } from "@emotion/react";

function UserItem({ item, id }) {
  return (
    <div css={styles.container}>
      <div css={styles.itemContainer}>
        <span css={styles.itemNo}>{id}.</span>
        <span css={styles.itemFullname}>{item.name}</span>
        <span css={styles.itemUsername}>@{item.username}</span>
      </div>
    </div>
  );
}

const styles = {
  container: css`
    display: flex;
    width: 100%;
    line-height: 2em;
  `,
  itemContainer: css`
    display: flex;
    flex-direction: row;
  `,
  itemNo: css`
    text-align: right;
    width: 1.5em;
    color: #acacac;
    margin: 0 0.2em 0 auto;
  `,
  itemFullname: css`
    font-weight: 500;
    margin: 0 0.2em;
  `,
  itemUsername: css`
    margin: 0 0.2em;
    color: #acacac;
  `,
};

export default UserItem;
