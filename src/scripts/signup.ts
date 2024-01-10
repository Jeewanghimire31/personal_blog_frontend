import { FormData } from "./interfaces/FormData";
import { navigateTo } from "./main";
import Toast from "./utils/Toastify";
import { isUserAuthenticated } from "./utils/auth";
import Axios from "./utils/axios";
import { clearErrorMessages, displayErrorMessage } from "./utils/displayValidationError";
import signupValidationSchema from "./validation/signup.validationSchema";

// api call
const signup = async (formData: FormData) => {
  try {
    // Clear previous error messages
    clearErrorMessages();
    // Validate form data against the schema
    await signupValidationSchema.validate(formData, { abortEarly: false });

    // If validation passes, proceed with API call
    const response = await Axios.post("/user/signup", formData);
    console.log("API Response:", response.data);

    // clear the form
    if (response.status === 200 && response.data.success) {
      Toast(response.data.message);
      const formElement = document.getElementById(
        "signup-form"
      ) as HTMLFormElement;
      formElement.reset();

      // send to login page after signup
      setTimeout(() => {
        navigateTo('../pages/login.html');
      }, 3000);
    }
  } catch (error: any) {
    // console.log(error.errors); //error message it gives
    if (error.name === "ValidationError") {
      // Yup validation error
      error.errors.forEach((errorMessage: string) => {
        const field = errorMessage.split(" ")[0].toLowerCase(); // Extract field name from the error message
        displayErrorMessage(field, errorMessage);
      });
    } else {
      console.error("API Error:", error.response.data.message);
      Toast(error.response.data.message);
    }
  }
};

document.getElementById("signupButton")?.addEventListener("click", () => {
  // Create an object to hold the form data
  const formData: FormData = {
    username: (<HTMLInputElement>document.getElementById("username")).value,
    email: (<HTMLInputElement>document.getElementById("email")).value,
    password: (<HTMLInputElement>document.getElementById("password")).value,
    confirmPassword: (<HTMLInputElement>(
      document.getElementById("confirmpassword")
    )).value,
  };

  // Call the signup function with the form data
  signup(formData);
});
