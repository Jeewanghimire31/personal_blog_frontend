interface BlogCardProps {
  title?: string;
  imageSrc?: string;
  description?: string;
  readMoreLink?: string;
}

const blogContainer = document.getElementById("blog-container");

function createBlogCard({
  title,
  imageSrc,
  description,
  readMoreLink,
}: BlogCardProps): string {
  return `
    <div class="blog-card">
      <img src="${imageSrc}" alt="${title}" class="blog-card-image">
      <div class="blog-card-content">
        <h2 class="blog-title">${title}</h2>
        <p class="blog-description">${description}</p>
        <a href="${readMoreLink}" class="read-more-button text-center">
        Read More
        <span class="read-more-line"></span>
        <span class="read-more-circle"></span>
        </a>
      </div>
    </div>
  `;
}

if (blogContainer) {
  const blogData = [
    {
      title: "Blog Post 1",
      imageSrc: "/src/assets/img/background1.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eum debitis eligendi fugiat maxime nulla aliquam nihil obcaecati nobis, veniam vero cum omnis explicabo dicta quas, blanditiis dolorum placeat expedita? Odit, nam quo! Corrupti aspernatur est magnam, quas aut, illum nesciunt nisi soluta molestias obcaecati officia ullam libero accusamus odio?",
      readMoreLink: "blogpost1.html",
    },
    {
      title: "Blog Post 1",
      imageSrc: "/src/assets/img/background1.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eum debitis eligendi fugiat maxime nulla aliquam nihil obcaecati nobis, veniam vero cum omnis explicabo dicta quas, blanditiis dolorum placeat expedita? Odit, nam quo! Corrupti aspernatur est magnam, quas aut, illum nesciunt nisi soluta molestias obcaecati officia ullam libero accusamus odio?",
      readMoreLink: "blogpost1.html",
    },
    {
      title: "Blog Post 1",
      imageSrc: "/src/assets/img/background1.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eum debitis eligendi fugiat maxime nulla aliquam nihil obcaecati nobis, veniam vero cum omnis explicabo dicta quas, blanditiis dolorum placeat expedita? Odit, nam quo! Corrupti aspernatur est magnam, quas aut, illum nesciunt nisi soluta molestias obcaecati officia ullam libero accusamus odio?",
      readMoreLink: "blogpost1.html",
    },
    {
      title: "Blog Post 1",
      imageSrc: "/src/assets/img/background1.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eum debitis eligendi fugiat maxime nulla aliquam nihil obcaecati nobis, veniam vero cum omnis explicabo dicta quas, blanditiis dolorum placeat expedita? Odit, nam quo! Corrupti aspernatur est magnam, quas aut, illum nesciunt nisi soluta molestias obcaecati officia ullam libero accusamus odio?",
      readMoreLink: "blogpost1.html",
    },
    {
      title: "Blog Post 1",
      imageSrc: "/src/assets/img/background1.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eum debitis eligendi fugiat maxime nulla aliquam nihil obcaecati nobis, veniam vero cum omnis explicabo dicta quas, blanditiis dolorum placeat expedita? Odit, nam quo! Corrupti aspernatur est magnam, quas aut, illum nesciunt nisi soluta molestias obcaecati officia ullam libero accusamus odio?",
      readMoreLink: "blogpost1.html",
    },
  ];
  // * Render each blog card
  blogData.forEach((blog) => {
    const blogCardHTML = createBlogCard(blog);
    blogContainer.innerHTML += blogCardHTML;
  });
}
