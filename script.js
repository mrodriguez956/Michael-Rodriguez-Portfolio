window.onscroll = onScroll;

function onScroll() {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.body.classList.remove("scroll-top");
  }
  else {
    document.body.classList.add("scroll-top");
  }
}

function toggleAnimation() {
  const containers = document.querySelectorAll(".card");

  containers.forEach(container => {
    const captionText = container.querySelector(".caption-text");

    container.addEventListener("mouseenter", () => {
      captionText.classList.remove("animate__bounceOut");
      captionText.classList.add("animate__bounceIn");
    });

    container.addEventListener("mouseleave", () => {
      captionText.classList.remove("animate__bounceIn");
      captionText.classList.add("animate__bounceOut");
    });
  });
}

window.onload = toggleAnimation();

