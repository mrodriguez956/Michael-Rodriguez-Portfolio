window.onscroll = onScroll;

function onScroll() {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.body.classList.remove("scroll-top");
  }
  else {
    document.body.classList.add("scroll-top");
  }
}

function toggleAnimation()
{
  const containers = document.getElementsByClassName("card");
  const captionTexts = document.getElementsByClassName("caption-text");

  for (let i = 0; i < containers.length; i++)
  {
    const container = containers[i];
    const captionText = captionTexts[i];

    container.addEventListener("mouseenter", function(event)
    {
      if(event.currentTarget === container)
      {
        captionText.classList.remove("animate__bounceOut");
        captionText.classList.add("animate__bounceIn");
      }
    });

    container.addEventListener("mouseleave", function(event)
    {
      if(event.currentTarget === container)
      {
        captionText.classList.remove("animate__bounceIn");
        captionText.classList.add("animate__bounceOut");
        
      }
    });
    
  }


}


window.onload = toggleAnimation();

