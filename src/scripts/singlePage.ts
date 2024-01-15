import { BlogForm } from "./interfaces/FormData";
import { getMetaDataFromToken } from "./utils/auth";
import Axios from "./utils/axios";

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

getMetaDataFromToken();

document.addEventListener("DOMContentLoaded", () => {
  const getBlog = async () => {
    const response = await Axios.get(`/blogs/${myParam}`);
    console.log(response.data.data);
    updateSinglePageContainer(response.data.data);
  };
  getBlog();
});


function updateSinglePageContainer(data: BlogForm) {
  const singlePageContainer = document.getElementById("single-page-container");
  console.log(singlePageContainer);

  if (!singlePageContainer) return;

  // Update the content inside the container
  singlePageContainer.innerHTML = `
        <section class="single-blog-section">
            <div class="blog-title col-12 col-md-8 col-sm-6">${data.title}</div>
            <div class="blog-image col-12 col-md-8 col-sm-6">
                <img src="http://127.0.0.1:5500/assets/img/post-landscape-1.jpg" alt="">
            </div>
            <div class="blog-description col-12 col-md-8 col-sm-6">${data.content}</div>
        </section>
    `;
  
}

