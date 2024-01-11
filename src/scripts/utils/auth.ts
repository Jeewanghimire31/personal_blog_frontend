export function isAuthenticated(): boolean {
  const accessToken = localStorage.getItem("accessToken");
  return !!accessToken;
}

export function getUserRole(): string | null {
  return localStorage.getItem("role");
}

// Check if the user is a logged-in user (not necessarily an admin)
export function isUserAuthenticated() {
  return isAuthenticated() && getUserRole() === "logged_in_user";
}

// Check if the user is an admin
export function isAdminAuthenticated() {
  return isAuthenticated() && getUserRole() === "admin";
}

// Middleware for admin pages
export function authorizeAdminPage() {
  if (!isAuthenticated()) {
    window.location.href = "../pages/login.html";
    return false;
  }
  return true;
}

// Middleware for pages accessible to logged-in users (non-admin)
export function authorizeLoggedInUserPage() {
  if (!isUserAuthenticated()) {
    window.location.href = "../pages/homepage.html";
    return false; // Indicate that navigation should not proceed
  }
  return true; // Indicate successful authorization
}
