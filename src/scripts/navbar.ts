import { isAdminAuthenticated, isUserAuthenticated } from "./utils/auth";

const authOptionElement = document.getElementById("auth-option");


async function updateAuthOption() {
    if (!authOptionElement) return;
  if (await isUserAuthenticated() || isAdminAuthenticated()) {
    // User is authenticated, show Logout option
    authOptionElement.innerHTML = '<a href="#" onclick="logout()" id="logout-option">Logout</a>';
    const logoutOption = document.getElementById("logout-option");
    if(!logoutOption) return;
    logoutOption.addEventListener("click", ()=>{
        localStorage.clear();
    })
  } else {
    // User is not authenticated, show Register/Login options
    authOptionElement.innerHTML =
      '<a href="../pages/signup.html">Register</a> | <a href="../pages/login.html">Login</a>';
  }
}
updateAuthOption(); 
