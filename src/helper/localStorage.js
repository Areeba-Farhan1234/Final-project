const getUsers = () => {
  return JSON.parse(localStorage.getItem("users"));
};

const addUser = (newUser) => {
  const previousUsers = JSON.parse(localStorage.getItem("users")) || [];
  localStorage.setItem("users", JSON.stringify([...previousUsers, newUser]));
};

export { getUsers, addUser };
