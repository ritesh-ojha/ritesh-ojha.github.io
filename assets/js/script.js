AOS.init();


function toggleMenu() {
  

  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var options = {
  strings: ["Data Analyst",'Data Engineer', 'Freelancer','DevOps Engineer','.....'],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true
};

var typed = new Typed(".typed-text", options);


// document.addEventListener("DOMContentLoaded", function() {
//   var profile = document.getElementById("profile");
//   var isBackground1 = true;

//   setInterval(function() {
//     if (isBackground1) {
//       profile.classList.remove("background1");
//       profile.classList.add("background2");
//     } else {
//       profile.classList.remove("background2");
//       profile.classList.add("background1");
//     }
//     isBackground1 = !isBackground1;
//   }, 2000); // Change background every 5 seconds
// });

let image = document.getElementById("section__pic");
let images = ['./assets/img/IMG_6647.webp','./assets/img/IMG_6646.webp']
let index = 0;

setInterval(function(){
  image.setAttribute('src', images[index]);
  index = (index + 1) % images.length;
}, 3000);



const summaryText = [
  "Welcome! I'm Ritesh Ojha, a dedicated Data Analyst and Data Engineer passionate about transforming raw data into actionable insights. With a Bachelor's degree in IT(Data Science) from Ajeenkya DY Patil University, I specialize in leveraging advanced analytics and cloud technologies to drive business growth and innovation. From data wrangling and visualization to building scalable data pipelines and predictive models, I thrive on solving complex data challenges and delivering impactful solutions. Certified in Google Data Analytics and AWS Academy Cloud Foundations, I am committed to continuous learning and staying at the forefront of emerging trends in data science and engineering. Let's connect and explore how data can empower your organization's success!",
];

const highlightedWords = ["Python", "SQL","Power BI",'JavaScript','visualizing','web scraping','data preprocessing','Pandas'];

for (let i = 0; i < summaryText.length; i++) {
  for (const word of highlightedWords) {
    const regex = new RegExp("\\b(" + word + ")\\b", "gi");
    summaryText[i] = summaryText[i].replace(regex, "<span class='highlight'>$1</span>");
  }
}

const typedSummary = new Typed(".typed-text-summary", {
  strings: summaryText,
  typeSpeed: 1,
  backSpeed: 20,

});



document.addEventListener("DOMContentLoaded", function() {
  // Fetch data from data.json
  fetch('./assets/json/data.json')
    .then(response => response.json())
    .then(data => {
      // Call a function to populate the experience details
      populateExperienceDetails(data);
    })

  
  function populateExperienceDetails(data) {
    // console.log(data);
    const container = document.getElementById('about-containers');
    // Loop through the data and create HTML elements for each skill category
    data.forEach(category => {
      const detailsContainer = document.createElement('div');
      detailsContainer.classList.add('details-container');
      detailsContainer.setAttribute('data-aos',"zoom-in");

      const subTitle = document.createElement('h2');
      subTitle.classList.add('experience-sub-title');
      subTitle.textContent = category.title;

      const articleContainer = document.createElement('div');
      articleContainer.classList.add('article-container');

      category.skills.forEach(skill => {
        const article = document.createElement('article');
        article.setAttribute('data-aos',"zoom-out-down");
        const icon = document.createElement('img');
        icon.src = "./assets/img/checkmark.png";
        icon.alt = "Experience icon";
        icon.classList.add('icon');

        const content = document.createElement('div');
        const skillTitle = document.createElement('h3');
        skillTitle.textContent = skill.name;
        const skillLevel = document.createElement('p');
        skillLevel.textContent = skill.level;

        // Add progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'skill-progress';
        const fill = document.createElement('div');
        fill.className = 'progress-fill';
        const levels = { 'Advanced': 90, 'Intermediate': 70, 'Basic': 50 };
        fill.style.width = levels[skill.level] + '%';
        progressBar.appendChild(fill);
        content.appendChild(skillTitle);
        content.appendChild(skillLevel);
        content.appendChild(progressBar);

        article.appendChild(icon);
        article.appendChild(content);

        articleContainer.appendChild(article);
      });

      detailsContainer.appendChild(subTitle);
      detailsContainer.appendChild(articleContainer);

      container.appendChild(detailsContainer);
    });
  }
});







document.addEventListener("DOMContentLoaded", function () {
  fetch("./assets/json/project.json")
    .then(response => response.json())
    .then(data => {
      const projectsContainer = document.getElementById("projects-container");

      // Loop through each project in the JSON data
      data.projects.forEach(project => {
        // Create project container
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("details-container", "color-container");
        projectContainer.setAttribute('data-aos',"zoom-in");

        // Create link for lightbox
        const lightboxLink = document.createElement("a");
        lightboxLink.href = project.image; // Set the image URL
        lightboxLink.classList.add("portfolio-details-lightbox");
        lightboxLink.setAttribute("data-glightbox", ""); // Add data-glightbox attribute
        lightboxLink.setAttribute("data-title", project.title); // Add data-title attribute

        // Create image element
        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.title;
        img.classList.add("project-img");

        // Add tooltip for project summary
        img.setAttribute("title", project.summary);

        // Append image to lightbox link
        lightboxLink.appendChild(img);

        // Create project title for outside lightbox
        const title = document.createElement("h2");
        title.classList.add("experience-sub-title", "project-title");
        title.textContent = project.title;

        // Create GitHub button for outside lightbox
        const githubBtn = document.createElement("button");
        githubBtn.classList.add("btn", "btn-color-1");
        githubBtn.textContent = "Github";
        githubBtn.onclick = function () {
          window.location.href = project.github;
        };

        // Create Live Demo button for outside lightbox
        const demoBtn = document.createElement("button");
        demoBtn.classList.add("btn", "btn-color-1");
        demoBtn.textContent = "Live Demo";
        demoBtn.onclick = function () {
          window.open(project.demo, '_blank');
        };

        // Create tech badges container
        const techContainer = document.createElement('div');
        techContainer.className = 'project-tech';
        project.skills.forEach(skill => {
          const badge = document.createElement('span');
          badge.className = 'tech-badge';
          badge.textContent = skill;
          techContainer.appendChild(badge);
        });

        // Append elements to project container for outside lightbox
        projectContainer.appendChild(lightboxLink); // Image and iframe inside lightbox
        projectContainer.appendChild(title);
        projectContainer.appendChild(techContainer);
        projectContainer.appendChild(githubBtn);
        projectContainer.appendChild(demoBtn);

        // Append project container to projects container
        projectsContainer.appendChild(projectContainer);
      });

      // Initialize lightbox
      const lightbox = GLightbox({
        selector: '.portfolio-details-lightbox'
      });
    })
    .catch(error => {
      console.error("Error fetching projects:", error);
    });
});


// Dynamic Copyright Year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  document.documentElement.setAttribute('data-theme', isLight ? 'dark' : 'light');
  localStorage.setItem('theme', isLight ? 'dark' : 'light');
  themeToggle.innerHTML = isLight ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// Scroll Progress
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  document.getElementById('scroll-progress').style.width = scrollPercent + '%';
});

// Back to Top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hide Loading Screen
window.addEventListener('load', () => {
  document.getElementById('loading-screen').style.opacity = '0';
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
  }, 500);
});
