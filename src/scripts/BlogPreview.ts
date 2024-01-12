import { BlogForm } from "./interfaces/FormData";
import Axios from "./utils/axios";

interface BlogCardProps {
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
    </div>
  `;
}
