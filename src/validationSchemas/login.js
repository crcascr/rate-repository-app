import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required("E-mail is required"),
  password: yup
    .string()
    .min(5, "Password too short!")
    .max(1000, "Password too long!")
    .required("Password is required"),
});
