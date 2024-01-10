import { FormData } from "./interfaces/FormData";
import Toast from "./utils/Toastify";
import Axios from "./utils/axios";
import {
  clearErrorMessages,
  displayErrorMessage,
} from "./utils/displayValidationError";
import loginValidationSchema from "./validation/login.validationSchema";

const login = async (formData: FormData) => {
  console.log(formData);
  try {
    // Clear previous error messages
    clearErrorMessages();

    await loginValidationSchema.validate(formData, { abortEarly: false });

    // api call
    // If validation passes, proceed with API call
    const response = await Axios.post("/user/login", formData);
    console.log("API Response:", response.data);

    // clear the form
    if (response.status === 200 && response.data.success) {
      // Store tokens in localStorage
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      Toast(response.data.message);
      const formElement = document.getElementById(
        "login-form"
      ) as HTMLFormElement;
      formElement.reset();

      // send to login page after signup
      // setTimeout(() => {
      //   window.location.href = "../pages/homepage.html";
      // }, 3000);
    }
  } catch (error: any) {
    if (error.name === "ValidationError") {
      // Yup validation error
      error.errors.forEach((errorMessage: string) => {
        const field = errorMessage.split(" ")[0].toLowerCase(); // Extract field name from the error message
        displayErrorMessage(field, errorMessage);
      });
    } else {
      console.log(error);
      Toast(error.response.data.message);
    }
  }
};

document.getElementById("loginButton")?.addEventListener("click", () => {
  const formData: FormData = {
    email: (<HTMLInputElement>document.getElementById("email")).value,
    password: (<HTMLInputElement>document.getElementById("password")).value,
  };
  login(formData);
});
