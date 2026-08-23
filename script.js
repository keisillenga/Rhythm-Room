const startButtons = document.querySelectorAll("button");
startButtons.forEach(function(button) {
  if(button.textContent.includes("Start Learning")) {
    button.addEventListener("click", function() {
      const  lessons = document.querySelector("section:nth-of-type(2)");
      if(lessons) {
        lessons.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  }
});
