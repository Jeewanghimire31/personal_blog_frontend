import * as yup from "yup";

const signupValidationSchema = yup.object().shape({
  username: yup.string().min(5).max(25).required("Username is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8).max(25).required("Password is required"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "ConfirmPassword must match to password"),
});

export default signupValidationSchema;
