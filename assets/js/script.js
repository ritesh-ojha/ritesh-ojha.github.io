AOS.init();


function toggleMenu() {
  

  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var options = {
  strings: ["Data Analyst",'Data Engineer', 'Freelancer','.....'],
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
  "Aspiring data analyst with experience in Python, SQL, JavaScript, and Power BI. Interned as a data analyst at Junior Robo, designing data systems in Google Sheets and visualizing sales data in Power BI dashboards. Additional experience includes web scraping, data preprocessing with Pandas, machine learning model evaluation, and leading a sales analysis project extracting e-commerce data. Seeking to utilize analytical skills, technical knowledge, and hands-on experience to add value as a data analyst.",
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

        content.appendChild(skillTitle);
        content.appendChild(skillLevel);

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



// document.addEventListener("DOMContentLoaded", function () {
//   fetch("./assets/json/project.json")
//     .then(response => response.json())
//     .then(data => {
//       const projectsContainer = document.getElementById("projects-container");

//       // Loop through each project in the JSON data
//       data.projects.forEach(project => {
//         // Create project container
//         const projectContainer = document.createElement("div");
//         projectContainer.classList.add("details-container", "color-container");

//         // Create link for lightbox
//         const lightboxLink = document.createElement("a");
//         lightboxLink.href = project.image; // Set the image URL
//         lightboxLink.classList.add("portfolio-details-lightbox");
//         lightboxLink.setAttribute("data-glightbox", ""); // Add data-glightbox attribute
//         lightboxLink.setAttribute("data-title", project.title); // Add data-title attribute

//         // Create image element
//         const img = document.createElement("img");
//         img.src = project.image;
//         img.alt = project.title;
//         img.classList.add("project-img");

//         // Append image to lightbox link
//         lightboxLink.appendChild(img);

//         // // Create iframe element
//         // const iframe = document.createElement("iframe");
//         // iframe.src = project.demo;
//         // iframe.classList.add("project-iframe");

//         // // Append iframe to lightbox link
//         // lightboxLink.appendChild(iframe);

//         // Create project title for outside lightbox
//         const title = document.createElement("h2");
//         title.classList.add("experience-sub-title", "project-title");
//         title.textContent = project.title;

//         // Create GitHub button for outside lightbox
//         const githubBtn = document.createElement("button");
//         githubBtn.classList.add("btn", "btn-color-1");
//         githubBtn.textContent = "Github";
//         githubBtn.onclick = function () {
//           window.location.href = project.github;
//         };

//         // Create Live Demo button for outside lightbox
//         const demoBtn = document.createElement("button");
//         demoBtn.classList.add("btn", "btn-color-1");
//         demoBtn.textContent = "Live Demo";
//         demoBtn.onclick = function () {
//           window.open(project.demo, '_blank');
//         };

//         // Append elements to project container for outside lightbox
//         projectContainer.appendChild(lightboxLink); // Image and iframe inside lightbox
//         projectContainer.appendChild(title);
//         projectContainer.appendChild(githubBtn);
//         projectContainer.appendChild(demoBtn);

//         // Append project container to projects container
//         projectsContainer.appendChild(projectContainer);
//       });

//       // Initialize lightbox
//       const lightbox = GLightbox({
//         selector: '.portfolio-details-lightbox'
//       });
//     })
//     .catch(error => {
//       console.error("Error fetching projects:", error);
//     });
// });









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

        // Append elements to project container for outside lightbox
        projectContainer.appendChild(lightboxLink); // Image and iframe inside lightbox
        projectContainer.appendChild(title);
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

