const fetchUsers = async () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((err) => ({
      error: err,
    }));

export default fetchUsers;
