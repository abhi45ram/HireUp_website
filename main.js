// Mobile Navigation

const mobileNav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const mobileMenuItems = document.querySelectorAll(".mobile-nav .menu-items li");

menuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

mobileMenuItems.forEach((i) => {
  i.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});

// Desktop Navigation
const options = {
  threshold: 0.8,
};

const addActiveClass = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
      let currentActive = document.querySelector(".desktop-nav a.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }

      let newActive = document.querySelector(
        `.desktop-nav a[href="#${entry.target.getAttribute("id")}"]`
      );

      newActive.classList.add("active");
    }
  });
};

const observer = new IntersectionObserver(addActiveClass, options);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  observer.observe(section);
});

// Mobile Search Functionality
document.querySelector("#searchForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  
  var location = document.querySelector("#locationInput").value;
  var jobRole = document.querySelector("#jobRoleInput").value;

 
  var filteredCandidates = candidates.filter(function(candidate) {
    return candidate.location.toLowerCase() === location.toLowerCase() &&
           candidate.jobRole.toLowerCase() === jobRole.toLowerCase();
  });

  
  displayResults(filteredCandidates);
});

// Function to display search results
function displayResults(results) {
  var resultsContainer = document.querySelector("#candidateResults");
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.textContent = "No candidates found.";
    return;
  }

  var html = "";
  for (var i = 0; i < results.length; i++) {
    var candidate = results[i];
    html += "<div>";
    html += "<h3>" + candidate.name + "</h3>";
    html += "<p>Location: " + candidate.location + "</p>";
    html += "<p>Job Role: " + candidate.jobRole + "</p>";
    
    html += "</div>";
  }

  resultsContainer.innerHTML = html;
}
