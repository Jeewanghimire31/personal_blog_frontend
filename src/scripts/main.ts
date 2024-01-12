// import {
//   getUserRole,
//   isAdminAuthenticated,
//   isAuthenticated,
// } from "./utils/auth";

// interface Route {
//   authorize: () => boolean;
//   redirect?: string; // Make redirect optional
// }

// const routes: Record<string, Route> = {
//   "login.html": {
//     authorize: () => !isAuthenticated(),
//     redirect: "../pages/homepage.html",
//   },
//   "signup.html": {
//     authorize: () => !isAuthenticated(),
//     redirect: "../pages/homepage.html",
//   },
//   "homepage.html": {
//     authorize: () => true,
//   },
//   "blogPreview.html": {
//     authorize: () => isAuthenticated() && getUserRole() === "logged_in_user",
//     redirect: "../pages/login.html",
//   },
//   "adminDashboard.html": {
//     authorize: () => isAdminAuthenticated(),
//     redirect: "../pages/login.html",
//   },
//   "navbar.html": {
//     authorize: () => isAdminAuthenticated(),
//     redirect: "../pages/login.html",
//   },
// };

// export function navigateTo(path: string) {
//   const routeHandler = routes[path as keyof typeof routes];
//   if (routeHandler && routeHandler.authorize()) {
//     window.location.href = routeHandler.redirect || "../pages/homepage.html";
//   } else {
//     window.location.href = "../pages/homepage.html";
//   }
// }

// // Handle authorization on page load
// function handleAuthorization() {
//   const currentPage = window.location.pathname.split("/").pop();
//   const currentRoute = currentPage ? routes[currentPage] : undefined;

//   if (currentRoute && !currentRoute.authorize()) {
//     window.location.href = currentRoute.redirect || "../pages/login.html";
//   }
// }

// handleAuthorization();

console.log("hello from main.ts")
