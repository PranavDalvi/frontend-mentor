const projects = [
  {
    title: "Product Preview Card Component",
    description:
      "A Product Preview Card Component showing a Product — Frontend Mentor challenge.",
    href: "./product-preview-card-component/index.html",
    img: "./product-preview-card-component/design/desktop-preview.jpg",
    alt: "Product Preview Card Component",
    markAsHot: true,
  },
  {
    title: "Recipe Page",
    description:
      "A simple responsive card showing a Recipe Page — Frontend Mentor challenge.",
    href: "./recipe-page/index.html",
    img: "./recipe-page/preview.jpg",
    alt: "Recipe Page preview",
    markAsHot: true,
  },
  {
    title: "Social Links Profile",
    description:
      "A simple responsive card showing a Social Links Profile — Frontend Mentor challenge.",
    href: "./social-links-profile/index.html",
    img: "./social-links-profile/preview.jpg",
    alt: "Social Links Profile preview",
    markAsHot: true,
  },
  {
    title: "Blog Preview Card",
    description:
      "A simple responsive card showing a Blog Preview — Frontend Mentor challenge.",
    href: "./blog-preview-card/index.html",
    img: "./blog-preview-card/preview.jpg",
    alt: "Blog Preview Card preview",
    markAsHot: true,
  },
  {
    title: "QR Code Component",
    description:
      "A simple responsive card showing a QR code — Frontend Mentor challenge.",
    href: "./qr-code-component/index.html",
    img: "./qr-code-component/preview.jpg",
    alt: "QR Code Component preview",
    markAsHot: true,
  },
  {
    title: "React Nav Bar 1",
    description: "A Responsive Nav bar — challenge.",
    href: "https://codesandbox.io/p/sandbox/reactjs-navbar-1-jnfktf",
    img: "./codePen/Navbar1.png",
    alt: "Navbar preview",
    markAsHot: true,
  },
  {
    title: "React Nav Bar 2",
    description: "A Responsive Nav bar — challenge.",
    href: "https://codesandbox.io/p/sandbox/reactjs-navbar-2-4wmhv6",
    img: "./codePen/Navbar2.png",
    alt: "Navbar preview",
    markAsHot: true,
  },
  {
    title: "Video Carousel",
    description: "A simple video-carousel — challenge.",
    href: "./video-carousel/Video-Carousel.html",
    img: "./video-carousel/video-carousel.png",
    alt: "Video Carousel preview",
    markAsHot: true,
  },
  {
    title: "Simple Responsive Table",
    description:
      "A simple responsive card showing a Simple Responsive Table — challenge.",
    href: "./simple-responsive-table-1/index.html",
    img: "./simple-responsive-table-1/simple-responsive-table-1.png",
    alt: "Simple Responsive Table preview",
    markAsHot: true,
  },
  {
    title: "HTML Login Page",
    description:
      "A simple responsive card showing a Login Page — Frontend Mentor challenge.",
    href: "./html-login-page/index.html",
    img: "./html-login-page/html-login-page.png",
    alt: "HTML Login Page preview",
    markAsHot: true,
  },
];

const grid = document.getElementById("projects-grid");
const totalProjects = projects.length;
const internalProjects = projects.filter(
  (project) => !/^https?:/i.test(project.href),
).length;
const externalProjects = totalProjects - internalProjects;

const counterBox = document.querySelector(".counter-box");
if (counterBox) {
  counterBox.innerHTML = `<small>VISITOR COUNTER</small>${String(
    4096 + totalProjects,
  ).padStart(7, "0")}`;
}

function buildCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const thumbWrap = document.createElement("div");
  thumbWrap.className = "project-thumb";

  const linkWrap = document.createElement("a");
  linkWrap.href = project.href;
  linkWrap.target = /^https?:/i.test(project.href) ? "_blank" : "_self";
  if (linkWrap.target === "_blank") {
    linkWrap.rel = "noreferrer";
  }
  linkWrap.setAttribute("aria-label", `${project.title} — open project`);

  const img = document.createElement("img");
  img.src = project.img;
  img.alt = project.alt || project.title;
  img.loading = "lazy";

  linkWrap.appendChild(img);
  thumbWrap.appendChild(linkWrap);

  let topline = null;
  if (project.markAsHot) {
    topline = document.createElement("div");
    topline.className = "project-topline";

    const blinkTag = document.createElement("span");
    blinkTag.className = "project-label blink";
    blinkTag.style.background = "#ff005d";
    blinkTag.textContent = "Hot";

    topline.appendChild(blinkTag);
  }

  const heading = document.createElement("h3");
  heading.className = "project-title";
  heading.textContent = project.title;

  const description = document.createElement("p");
  description.className = "project-desc";
  description.textContent = project.description;

  const actions = document.createElement("div");
  actions.className = "project-actions";

  const cta = document.createElement("a");
  cta.href = project.href;
  cta.textContent = "View project";
  cta.className = "pixel-button cool";
  cta.target = /^https?:/i.test(project.href) ? "_blank" : "_self";
  if (cta.target === "_blank") {
    cta.rel = "noreferrer";
  }

  actions.appendChild(cta);

  article.appendChild(thumbWrap);
  if (topline) {
    article.appendChild(topline);
  }
  article.appendChild(heading);
  article.appendChild(description);
  article.appendChild(actions);

  return article;
}

function renderProjects(list) {
  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  if (!Array.isArray(list) || list.length === 0) {
    const message = document.createElement("div");
    message.className = "no-js-msg";
    message.textContent = "No projects available.";
    grid.appendChild(message);
    return;
  }

  const fragment = document.createDocumentFragment();
  for (const project of list) {
    fragment.appendChild(buildCard(project));
  }
  grid.appendChild(fragment);

  const meta = document.querySelector(".projects-meta");
  if (meta && !meta.querySelector(".status-chip")) {
    const stats = document.createElement("div");
    stats.className = "status-chip";
    stats.textContent = `${totalProjects} projects • ${internalProjects} local • ${externalProjects} remote`;
    meta.appendChild(stats);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => renderProjects(projects));
} else {
  renderProjects(projects);
}
