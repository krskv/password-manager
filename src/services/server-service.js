export default class ServerService {
  getUserList = () => {
    return JSON.parse(localStorage.getItem("server-data"));
  };

  updateData = (user, passwordsData) => {
    const users = this.getUserList();
    const existingIdx = users ? users.findIndex((el) => el.email === user) : -1;

    if (existingIdx < 0) return 1;

    users[existingIdx].data = passwordsData;

    localStorage.setItem("server-data", JSON.stringify(users));
    return 0;
  };

  getUser = (email, password) => {
    const users = this.getUserList();
    const existingElement = users
      ? users.find((el) => el.email === email && el.password === password)
      : null;

    if (!existingElement)
      return {
        user: {},
        error: { isError: true, message: "Email or password is incorrect" },
      };
    return {
      user: { email: email, data: existingElement.data },
      error: { isError: false, message: "You have successfully logedin" },
    };
  };

  addUser = (userData) => {
    const users = this.getUserList();

    const existingIdx = users
      ? users.findIndex((el) => el.email === userData.email)
      : -1;

    if (existingIdx > -1)
      return {
        user: { email: userData.email, data: [] },
        error: { isError: true, message: "Email is already registered" },
      };

    if (users && users.length) {
      users.push({ ...userData, data: [] });
      localStorage.setItem("server-data", JSON.stringify(users));
    } else {
      var newArr = [];
      newArr[0] = { ...userData, data: [] };
      localStorage.setItem("server-data", JSON.stringify(newArr));
    }

    return {
      user: { email: userData.email, data: [] },
      error: { isError: false, message: "You have successfully registered." },
    };
  };
}
