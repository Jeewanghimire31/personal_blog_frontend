export const displayErrorMessage = (field: string, message: string) => {
    const errorElement = document.getElementById(`${field}-error`);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.color = "red";
    }
  };

  export const clearErrorMessages = () => {
    const errorContainers = document.querySelectorAll(".form-outline");
    errorContainers.forEach((container) => {
      const errorMessage = container.querySelector(".error-message");
      if (errorMessage) {
        errorMessage.textContent = "";
      }
    });
  };