

function toggleMenu() {
  

  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var options = {
  strings: ["Data Analyst",'Data Engineer', 'Business Application Developer'],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true
};

var typed = new Typed(".typed-text", options);


document.addEventListener("DOMContentLoaded", function() {
  var profile = document.getElementById("profile");
  var isBackground1 = true;

  setInterval(function() {
    if (isBackground1) {
      profile.classList.remove("background1");
      profile.classList.add("background2");
    } else {
      profile.classList.remove("background2");
      profile.classList.add("background1");
    }
    isBackground1 = !isBackground1;
  }, 2000); // Change background every 5 seconds
});



const summaryText = [
  "Aspiring data analyst with experience in Python, SQL, JavaScript, and Power BI. Interned as a data analyst at Junior Robo, designing data systems in Google Sheets and visualizing sales data in Power BI dashboards. Additional experience includes web scraping, data preprocessing with Pandas, machine learning model evaluation, and leading a sales analysis project extracting e-commerce data. Seeking to utilize analytical skills, technical knowledge, and hands-on experience to add value as a data analyst.",
];

const highlightedWords = ["Python", "SQL","Power BI"];

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
    console.log(data);
    const container = document.getElementById('about-containers');
    // Loop through the data and create HTML elements for each skill category
    data.forEach(category => {
      const detailsContainer = document.createElement('div');
      detailsContainer.classList.add('details-container');

      const subTitle = document.createElement('h2');
      subTitle.classList.add('experience-sub-title');
      subTitle.textContent = category.title;

      const articleContainer = document.createElement('div');
      articleContainer.classList.add('article-container');

      category.skills.forEach(skill => {
        const article = document.createElement('article');
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





