// skill section

// Step 1: Create an array of skills with image paths
const skills = [
    { name: "HTML 5", img: "./img/skills/html-1.png" },
    { name: "CSS 3", img: "./img/skills/css-1.png" },
    { name: "JavaScript", img: "./img/skills/js-1.png" },
    { name: "Git", img: "./img/skills/git-1.png" },
    { name: "GitHub", img: "./img/skills/github_w.png" },
    { name: "Figma", img: "./img/skills/figma-1.png" },
    { name: "VS Code", img: "./img/skills/vs.png" },
    { name: "CodePen", img: "./img/skills/cpen-1.png" }
];

// Step 2: Select the skill container where skills should be added
const skillContainer = document.querySelector(".skill-container");

// Step 3: Loop through the skills array and create elements dynamically
skills.forEach(skill => {
    // Create skill-format div
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill-format");

    // Create image container
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("skill-img");

    // Create image element
    const imgElement = document.createElement("img");
    imgElement.src = skill.img;
    imgElement.alt = `${skill.name} Icon`;

    // Append image to imgDiv
    imgDiv.appendChild(imgElement);

    // Create h3 element for skill name
    const skillName = document.createElement("h3");
    skillName.textContent = skill.name;

    // Append imgDiv and h3 to skillDiv
    skillDiv.appendChild(imgDiv);
    skillDiv.appendChild(skillName);

    // Append skillDiv to the container
    skillContainer.appendChild(skillDiv);
});


// footer section
const footer = document.createElement("footer");
const body = document.querySelector("body");
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");
copyright.innerHTML = `<span>&#169 Lima Eftekhar ${thisYear} </span>`
footer.appendChild(copyright);