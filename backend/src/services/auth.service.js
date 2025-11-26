const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET, EXPIRE } = require("../config/jwt");

const user = {
  email: "admin@gmail.com",
  password: bcrypt.hashSync("123456", 10),
};

exports.login = async (email, password) => {
  if (email !== user.email) throw new Error("Email incorrect");

  const match = bcrypt.compareSync(password, user.password);
  if (!match) throw new Error("Wrong password");

  return jwt.sign({ email }, SECRET, { expiresIn: EXPIRE });
};
