import { BlogForm } from "./interfaces/FormData";
import Axios from "./utils/axios";

interface BlogCardProps {
  blog_id?: string;
  title?: string;
  imageSrc?: string;
  content?: string;
  readMoreLink?: string;
}
let blogs: BlogForm[] = [];

const renderBlogs = () => {
  if (blogContainer) {
    // * Render each blog card
    blogs.forEach((blog) => {
      const blogCardHTML = createBlogCard(blog);
      blogContainer.innerHTML += blogCardHTML;
    });
  }
};

const blogContainer = document.querySelector(".blog-container");

const getBlogs = async () => {
  const response = await Axios.get("/blogs");
  console.log(response.data.data);
  blogs = response.data.data;
};

const fetchBlogs = async () => {
  await getBlogs();
  renderBlogs();
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
    <div class="blog-card">
      <img src="https://media.cnn.com/api/v1/images/stellar/prod/221218184732-messi-wc-trophy.jpg?c=original" alt="${title}" class="blog-card-image">
      <div class="blog-card-content">
        <h2 class="blog-title">${title}</h2>
        <p class="blog-description">${content}</p>
        <a href="${readMoreLink}" class="read-more-button text-center">
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

editBlog.forEach((blog)=>{
  blog.addEventListener("click", ()=>{
    const blogId = blog.getAttribute("id") as string;
    console.log("clicked edit", blogId);
  })
})


const deleteBlog = Array.from(document.querySelectorAll(".blog-delete-button"));

deleteBlog.forEach((blog) => {
  blog.addEventListener("click", () => {
    const blogId = blog.getAttribute("id") as string;
    console.log("clicked delete", blogId);
  });
});
