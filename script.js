const btnElement = document.querySelector(".btn-mobile-nav");
const HeaderElement = document.querySelector(".header");
const sectionHeroEl = document.querySelector(".section-hero");
const heroImgbox = document.querySelector(".hero-img-box");
const partnerBox = document.querySelector(".logos");

btnElement.addEventListener("click", function (e) {
  if (HeaderElement.classList[1] === undefined) {
    heroImgbox.classList.add("hidden-box");
    partnerBox.classList.add("hidden-box");
  } else {
    heroImgbox.classList.remove("hidden-box");
    partnerBox.classList.remove("hidden-box");
  }
  HeaderElement.classList.toggle("nav-open");
});

const obs = new IntersectionObserver(
  function (entries) {
    let ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

const allsections = document.querySelectorAll(".section");
const aboutus = document.querySelector(".aboutus-text-box");

const reveal_section = function (entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
};
const sectionObserver = new IntersectionObserver(reveal_section, {
  root: null,
  threshold: 0.15,
});
allsections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

const TargetImg = document.querySelectorAll("img[data-src]");
console.log(TargetImg);

const Load_Img = function (entries, observe) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return false;
  entry.target.src = entry.target.dataset.src;
  console.log(entry.target.src);
  entry.target.classList.remove("lazy-img");
};

const imageObserver = new IntersectionObserver(Load_Img, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

TargetImg.forEach((img) => imageObserver.observe(img));
