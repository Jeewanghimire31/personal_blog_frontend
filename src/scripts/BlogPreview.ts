import { BlogForm } from "./interfaces/FormData";
import { getUserRole } from "./utils/auth"; // Adjust the path based on your project structure
import Axios from "./utils/axios";
const searchInput = document.getElementById("blog-search-input");
let blogs: BlogForm[] = [];

searchInput?.addEventListener("keyup", (el) => {
  //@ts-ignore
  const query = el.target.value;
  blogContainer!.innerHTML = "Loading...";
  fetchBlogs(query);
});

interface BlogCardProps {
  blog_id?: string;
  title?: string;
  imageSrc?: string;
  content?: string;
  readMoreLink?: string;
}

const blogContainer = document.querySelector(".blog-container");
const renderBlogs = () => {
  if (blogContainer) {
    blogContainer.innerHTML = "";
    blogs.forEach((blog) => {
      const blogCardHTML = createBlogCard(blog);
      blogContainer.innerHTML += blogCardHTML;
    });
    loadButtons();
  }
};

const getBlogs = async (query?: string) => {
  const response = await Axios.get(`/blogs?query=${query ?? ""}`);
  blogs = response.data.data;
};

const fetchBlogs = async (query?: string) => {
  await getBlogs(query);
  renderBlogs();
  // addEventListenersToBlogs();
};

await fetchBlogs();

function createBlogCard({
  blog_id,
  title,
  imageSrc,
  content,
  readMoreLink,
}: BlogCardProps): string {
  return `
    <div class="blog-card blog-card-${blog_id}" >
      <img src="https://media.cnn.com/api/v1/images/stellar/prod/221218184732-messi-wc-trophy.jpg?c=original" alt="${title}" class="blog-card-image">
      <div class="blog-card-content">
        <h2 class="blog-title">${title}</h2>
        <p class="blog-description">${content}</p>
        <a href="/src/pages/singlePage.html?id=${blog_id}" class="read-more-button text-center">
        Read More
        <span class="read-more-line"></span>
        <span class="read-more-circle"></span>
        </a>
      </div>
    <div class="edit-blog d-flex align-items-end mb-2 gap-3 ">
    <div class="blog-edit-button" id="blog-edit-button-${blog_id}">edit</div>
    <div class="blog-delete-button" id="${blog_id}">Delete</div>
    </div>
    </div>
  `;
}

const editBlog = Array.from(document.querySelectorAll(".blog-edit-button"));

editBlog.forEach((blog) => {
  blog.addEventListener("click", () => {
    const blogId = blog.getAttribute("id") as string;
    console.log("clicked edit", blogId);
  });
});

// const deleteBlog = Array.from(document.querySelectorAll(".blog-delete-button"));

// deleteBlog.forEach((blog) => {
//   blog.addEventListener("click", () => {
//     const blogId = blog.getAttribute("id") as string;
//     console.log("clicked delete", blogId);
//   });
// });

const deleteBlog = Array.from(document.querySelectorAll(".blog-delete-button"));

deleteBlog.forEach((blog) => {
  blog.addEventListener("click", () => {
    const blogId = blog.getAttribute("id") as string;
    console.log("clicked delete", blogId);
    deleteBlogById(blogId);
  });
});

const deleteBlogById = async (blogId: string) => {
  try {
    const response = await Axios.delete(`/blogs/${blogId}`);

    if (response.status === 200) {
      blogs = blogs.filter((blog) => blog.blog_id !== blogId);

      renderBlogs();

      console.log(`Blog with ID ${blogId} deleted successfully`);
    } else {
      console.error(`Failed to delete blog with ID ${blogId}`);
    }
  } catch (error) {
    console.error(`Error deleting blog with ID ${blogId}:`, error);
  }
};

function loadButtons() {
  console.log("hello, me ");
  const editButton =
    document.querySelectorAll<HTMLElement>(".blog-edit-button");
  const deleteButton = document.querySelectorAll<HTMLElement>(
    ".blog-delete-button"
  );
  console.log(editButton);
  console.log(deleteButton);
  if (!editButton) return;
  if (!deleteButton) return;
  const userRole = getUserRole();
  console.log(userRole);

  if (userRole === "admin") {
    editButton.forEach((edit) => {
      edit.style.display = "block";
    });
    deleteButton.forEach((edit) => {
      edit.style.display = "block";
    });
  } else {
    editButton.forEach((edit) => {
      edit.style.display = "none";
    });
    deleteButton.forEach((edit) => {
      edit.style.display = "none";
    });
  }
}
