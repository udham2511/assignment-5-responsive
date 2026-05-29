const primaryHeader = document.querySelector("header");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries) => {
    primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
  },
  {
    root: null,
    threshold: [0],
  },
);

navObserver.observe(scrollWatcher);

document.getElementById("learn-link").addEventListener("mouseover", () => {
  document.querySelector(".learn-dropdown").classList.add("active");
  document.querySelector(".navbar").classList.add("hovered");
  document.querySelector(".shop-dropdown").classList.remove("active");
});

document.getElementById("shop-link").addEventListener("mouseover", () => {
  document.querySelector(".shop-dropdown").classList.add("active");
  document.querySelector(".learn-dropdown").classList.remove("active");
  document.querySelector(".navbar").classList.add("hovered");
});

document.querySelector("header").addEventListener("mouseleave", () => {
  document.querySelector(".learn-dropdown").classList.remove("active");
  document.querySelector(".shop-dropdown").classList.remove("active");
  document.querySelector(".navbar").classList.remove("hovered");
});
