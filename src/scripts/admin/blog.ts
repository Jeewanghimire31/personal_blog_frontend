const addBlogDialogButton = document.getElementById("add-blog-dialog");
const addDialogForm = document.getElementById("add-dialog-form")!;

addBlogDialogButton?.addEventListener("click", () => {
  //   if (!addDialogForm) return;
  //   addDialogForm.style.display = "block";
  addDialogForm.style.display =
    addDialogForm.style.display === "block" ? "none" : "block";
  console.log("hello");
});
