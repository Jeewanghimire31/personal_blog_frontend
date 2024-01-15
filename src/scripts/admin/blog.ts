import { BlogForm } from "../interfaces/FormData";
import Toast from "../utils/Toastify";
import Axios from "../utils/axios";

const addBlogDialogButton = document.getElementById("add-blog-dialog");
const addDialogForm = document.getElementById(
  "add-dialog-form"
) as HTMLFormElement;
const closeDialogButton = document.getElementById("close-dialog")!;
const cancelBlogButton = document.getElementById("cancel-blog")!;

// * open hidden dialog box
addBlogDialogButton?.addEventListener("click", () => {
  if (!addDialogForm) return;
  addDialogForm.style.display = "block";
  addDialogForm.style.display === "block" ? "none" : "block";
  console.log("hello");
});

//* close dialog box
closeDialogButton?.addEventListener("click", () => {
  addDialogForm.style.display = "none";
});

// * cancel button event
cancelBlogButton?.addEventListener("click", () => {
  const confirmCancel = confirm("Are you sure you want to cancel?");

  // * confirm cancel
  if (confirmCancel) {
    addDialogForm.style.display = "none";
  }
});

// * add blog and send to backend request
const addBlog = async (formData: BlogForm) => {
  try {
    const response = await Axios.post("/blogs", formData);
    console.log("API Response:", response);

    if (response.status === 200 && response.data && response.data.success) {
      Toast(response.data.message);
      const formElement = document.getElementById(
        "blog-form"
      ) as HTMLFormElement;
      formElement.reset();
    }
  } catch (error: any) {
    console.error(
      "API Error:",
      error.response ? error.response.data.message : error.message
    );
  }
};

// * taking input value and binding in formData
document
  .getElementById("add-blog-button")
  ?.addEventListener("click", async (event: Event) => {
    event?.preventDefault();
    console.log("Add Blog button clicked");
    // Create an object to hold the form data
    const formData: BlogForm = {
      // image: (<HTMLInputElement>document.getElementById("image")).value,
      title: (<HTMLInputElement>document.getElementById("title")).value,
      content: (<HTMLInputElement>document.getElementById("description")).value,
    };

    //* Call the addBlog function with the form data
    await addBlog(formData);
  });
