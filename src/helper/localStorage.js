const getUsers = () => {
  return JSON.parse(localStorage.getItem("users"));
};

const addUser = (newUser) => {
  const previousUsers = JSON.parse(localStorage.getItem("users")) || [];
  localStorage.setItem("users", JSON.stringify([...previousUsers, newUser]));
};

const getJobs = () => {
  return JSON.parse(localStorage.getItem("jobs"));
};

const addJob = (newJob, isArray) => {
  const previousUsers = JSON.parse(localStorage.getItem("jobs")) || [];
  localStorage.setItem("jobs", JSON.stringify(isArray ? newJob : [...previousUsers, newJob]));
};

export { getUsers, addUser, getJobs, addJob };
