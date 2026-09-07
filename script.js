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
let timerSeconds = 0;
let timerInterval = null;
function startTimer() {
  if (timerInterval !== null) {
    return;
  }
  timerInterval = setInterval(function() {
    timerSeconds++;
    updateTimer();
  }, 1000);
}
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}
function resetTimer() {
  stopTimer();
  timerSeconds = 0;
  updateTimer();
}
function updateTimer() {
  const timer = document.getElementById("timer");
  if (!timer) {
    return;
  }
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  timer.textContent =
    String(minutes).padStart(2, "0") +
    ":";
    String(seconds).padStart(2, "0");
}
const startTimerButton = 
  document.getElementById("startTimer");
const stopTimerButton =
  document.getElementById("stopTimer");
const resetTimeButton =
  document.getElementById("resetTime");
if(startTimerButton) {
  startTimerButton.addEventListener(
    "click",
    startTimer
    );
}
if(stopTimerButton) {
  stopTimerButton.addEventListener(
    "click",
    stopTimer
    );
}
if(resetTimerButton) {
  resetTimerButton.addEventListener(
    "click",
    resetTimer
    );
}
const lessons = document.querySelectorAll(".lesson");
lesson.forEach(function(lesson, index) {
  const button = document.createElement("button");
  button.textContent = "Mark as Complete";
  button.classList.add("lesson-button");
  lesson.appendChild(button);
  button.addEventListener("click", function() {
    lesson.classList.toggle("completed");
    if (lesson.classList.contains("completed")) {
      button.textContent = " Completed ";
      button.style.background = "#16803c";
    } else {
      button.tectContent = "Mark as Complete";
      button.style.background = "";
    }
    saveProgress();
  });
});
function saveProgress() {
  const completedLessons =
    document.querySelectorAll(
      ".lesson.completed"
      ).length;
  localStorage.setItem(
    "completedLessons",
    completedLessons
    );
}
function loadProgress() {
  const completedLessons =
    praseInt(
      localStorage.getItem(
        "completedLessons"
        )
      ) || 0;
  const lessonElements =
    document.querySelectorAll(".lesson");
  lessonElements.forEach(function(lesson, index) {
    if (index < completedLessons) {
      lesson.classList.add("completed");
      const button =
        lesson.querySelector(
          ".lesson-button"
          );
      if (button) {
        button.textContent =
          " Completed ";
        button.style.background =
          "#16803c";
      }
    }
  )};
}
loadProgress();
function updateProgress() {
  const progressBar =
    document.querySelector(
      ".progress span"
      );
  const totalLessons =
    document.querySelectorAll(
      ".lesson"
      ).length;
  const completedLessons =
    document.querySelectorAll(
      ".lesson.completed"
      ).length;
  if (
    progressBar &&
    totalLessons > 0
    ) {
    const percentage =
      (completedLessons / totalLessons) * 100;
    progressBar.style.width =
      percentage + "%";
  }
}
document.addEventListener(
  "click",
  function(event) {
    if (
      event.target.classList.contains(
        ".lesson-button"
        )
      ) {
      updateProgress();
    }
  }
  );
const songRows =
  document.querySelectorAll("table tr");
songRows.forEach(function(row, index) {
  if (index === 0) {
    return;
  }
  const favoriteButton =
    document.createElement("button");
  favoriteButton.textContent = "";
  favoriteButton.classList.add(
    "favorite-button"
    );
  row.appendChild(
    document.createElement("td")
    );
  row.lastElementChild(
    favoriteButton
    );
  favoriteButton.addElementListener(
    "click",
    function() {
      favoriteButton.classList.toggle(
        "favorite"
        );
      if (
        favoriteButton.classList.contains(
          "favorite"
          )
        ) {
        favoriteButton.textContent = "";
      } else {
        favoriteButton.textContent = "";
      }
    }
    );
  )};
const contactForm =
  document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener(
    "submit",
    function(event) {
      event.preventDafault();
      alert(
        "Thank  you! Your message has been sent "
        );
      contactForm.reset();
    }
    );
}
 const notes = [
   "",
   "",
   "",
   "",
   ""
   ];
function createMusicNote() {
  const note =
    document.createElement("div");
  note.classList.add("music-note");
  note.textContent =
    notes[
    Math.floor(
      Math.rondom() * notes.length
      )
    ];
  note.style.left =
    Math.rondom() * 100 + "vw";
  note.style.animationDuration =
    8 + Math.rondom() * 10 + "s";
  note.style.fontSize =
    20 + Math.rondom() * 30 + "px";
  document.body.appendChild(note);
  setTimeout(function() {
    note.remove();
  }, 18000);
}
setInterval(
  creatMusicNote,
  2500
  );
const currentPage =
  window.location.pathname
        .split("/")
        .pop();
const navigationLinks =
  document.querySelectorAll("nav a");
navigationLinks.forEach(function(link) {
  const linkPage =
    link.getAttribute("href");
  if (linkPage === currentPage) {
    link.style.background =
      "#d90429";
  }
});
const  topButton =
  document.createElement("button");
topButton.textContent = "";
topButton.classList.add(
  "top-button"
  );
document.body.appendChild(
  topButton
  );
window.addElementListener(
  "scroll",
  function() {
    if(window.scrollY > 500) {
      topButton.style.display =
        "block";
    } else {
      topButton.style.display =
        "none";
    }
  }
  );
topButton.addElementListener(
  "click",
  function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  );
        
    
  
