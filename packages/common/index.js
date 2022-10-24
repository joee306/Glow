const Yup = require("yup");

const formSchema = Yup.object({
  username: Yup.string()
    .required("Username required")
    .min(3, "Username too short")
    .max(30, "Username too long!"),
  password: Yup.string()
    .required("Password required")
    .min(8, "Password too short")
    .max(30, "Password too long!"),
});

module.exports = { formSchema };
