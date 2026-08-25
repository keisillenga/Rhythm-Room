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
const animatedElements = document.querySelectorAll(
  ".card, .lesson, .feature-box, .practice-box, .profile-card"
  );
const observer = new IntersectionObserver(
  function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15
  }
  );
animatedElements.forEach(function(element) {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

  observer.observe(element);
});
const searchInput =  document.querySelector(".search input");
if (searchInput) {
  searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase();
    const rows = document.querySelectorAll("table tr");
    rows.forEach(function(row, index) {
      if (index === 0) {
        return;
      }
      const songName = row.textContent.toLowerCase();
      if (songName.includes(searchText)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
}
        
    
  
