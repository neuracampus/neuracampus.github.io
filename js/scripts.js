/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
<script>
fetch("/data/home-jobs.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("home-jobs").innerHTML = html;
  });

fetch("/data/home-blogs.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("home-blogs").innerHTML = html;
  });
</script>
document.addEventListener("DOMContentLoaded", () => {
  const homeJobsContainer = document.getElementById("home-jobs");
  if (!homeJobsContainer) return;

  fetch("jobs.html")
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // Get all job cards from jobs page
      const jobCards = doc.querySelectorAll(".job-card");

      // Show only latest 3 jobs
      jobCards.forEach((card, index) => {
        if (index < 3) {
          const col = document.createElement("div");
          col.className = "col-lg-4 col-md-6 mb-4";
          col.innerHTML = card.outerHTML;
          homeJobsContainer.appendChild(col);
        }
      });
    })
    .catch(err => console.error("Home jobs load error:", err));
});
