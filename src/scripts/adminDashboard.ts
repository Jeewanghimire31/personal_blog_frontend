import { nodeScriptReplace } from "./utils/script.helper";

document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners for navigation
  const navItemsContainer = document.querySelector(".nav-items");
  navItemsContainer?.addEventListener("click", handleNavigation);

  // Load default content
  loadContent("/src/pages/admin/overview.html");
});

async function loadContent(page: any) {
  const contentContainer = document.querySelector(".content");

  if (contentContainer !== null) {
    try {
      const response = await fetch(page);

      // Parse the response as text
      const data = await response.text();

      // Set the innerHTML of the container to the fetched data
      contentContainer.innerHTML = data;
      nodeScriptReplace(contentContainer);

      // Dynamically load and execute the script associated with the loaded content
      // const scriptSrc = page.replace(".html", ".ts");
      // await import(scriptSrc);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error("Error loading content:", error);
    }
  } else {
    // Log an error message if the content container element is not found
    console.error("Content container not found");
  }
}

function handleNavigation(event: Event) {
  const target = event.target as HTMLElement;

  if (target.classList.contains("overview")) {
    loadContent("/src/pages/admin/overview.html");
  } else if (target.classList.contains("blogs")) {
    loadContent("/src/pages/admin/blogs.html");
  } else if (target.classList.contains("logout")) {
    logout();
  }
}

function logout() {
  alert("Logout logic goes here");
  localStorage.clear();
}
