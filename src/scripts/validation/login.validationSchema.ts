import * as yup from "yup";

const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8).max(25).required("Password is required"),
});

export default loginValidationSchema;
