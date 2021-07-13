/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/react";

import Header from "./components/Header";
import InputBox from "./components/InputBox";
import ItemsList from "./components/ItemsList";
import UserItem from "./components/UserItem";
import fetchUsers from "./utils/fetchUsers";

function App() {
  const [users, setUsers] = useState([]);
  const [usersFiltered, setUsersFiltered] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const usersToDisplay = searchedText ? [...usersFiltered] : users;

  useEffect(() => {
    const getUsers = async () => {
      const thisUsers = await fetchUsers();

      if (thisUsers && thisUsers.length > 0) setUsers(thisUsers);
    };

    getUsers();
  }, []);

  useEffect(() => {
    setUsersFiltered(
      searchedText &&
        users.filter((us) =>
          us.name.toLowerCase().includes(searchedText.toLowerCase())
        )
    );
  }, [searchedText, users]);

  return (
    <div css={styles.container}>
      <div css={styles.content}>
        <Header text="Users list" />
        <InputBox
          searchedText={searchedText}
          setSearchedText={setSearchedText}
          placeholderText="Search by user name..."
        />
        <ItemsList
          items={usersToDisplay.map((us, i) => (
            <UserItem key={us.username} item={us} id={i + 1} />
          ))}
        />
      </div>
    </div>
  );
}

const styles = {
  container: css`
    display: block;
    position: relative;
    max-width: 100vh;
    min-width: 100%;
    margin: 3em auto;
  `,
  content: css`
    width: 30em;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  `,
};

export default App;
