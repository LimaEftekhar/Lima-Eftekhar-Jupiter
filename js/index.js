// Populate the skill section list

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
copyright.innerHTML = `<span>&#169 ${thisYear} Lima Eftekhar. All rights reserved. </span>`
footer.appendChild(copyright);


// handle events for the message form
// let messageForm = document.querySelector("form[name='leave_message']");
document.addEventListener("DOMContentLoaded", function () {
    let messageForm = document.querySelector("form");
    
    if (!messageForm) {
        console.error("Form not found!");
        return;
    }

let messageSection = document.getElementById("message-section");
// let messageList = messageSection.querySelector('ul');
let messageList = document.getElementById("messages");

// Initially hide the message section
messageSection.style.display = "none";

// create unique id's for entries
let idCounter = 0;

// closure on idCounter
function makeId(){
    let id = "entry" + idCounter++;
    return id;
}

// save entries by id so their content can initialize  the edit form

let entryById = {};

// handle submission of new message list entries
messageForm.addEventListener("submit", (event) =>{
    event.preventDefault();

    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;

    console.log("Name:", name);
    console.log("Email: ", email);
    console.log("Message: ", message);

    let uid = makeId();
    
    let newMessage = document.createElement("li");
    newMessage.classList.add("message-item");

    newMessage.innerHTML = `<a href="mailto:${email} "> ${name}</a> <span> wrote: ${message}</span>`;
    newMessage.setAttribute("id", uid);

    entryById[uid] = {usersName: name, usersEmail: email, usersMessage: message};
    // newMessage.appendChild(makeEditButton());
    newMessage.appendChild(makeRemoveButton());

    messageList.appendChild(newMessage);
    //  // Show the message section after adding a message
    messageSection.style.display = 'flex'; 
   
    messageForm.reset();
  
});

// create a remove button in parentNode

function makeRemoveButton(){
    let removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.className = "remove-button";
    removeButton.addEventListener("click", () => {
        let entry = removeButton.parentNode;
        let uid1 = entry.getAttribute("id");
        delete entryById [uid1];
        entry.remove();
        if(messageList.childElementCount === 0){

        messageSection.style.display = "none";

        };

    });
    return removeButton;
}

});

// Create a fouch for github repos 
const userName = 'LimaEftekhar';
fetch(`https://api.github.com/users/${userName}/repos`)
.then ((response) => { 
    if (response.ok) {
        return response.text();
    }else {
        throw new Error("failed to fetch repositories");
    }
})

.then((data) => {
    const repositories = JSON.parse(data);
    console.log(repositories);
    
    // DOM Selection to select the projects section by id
    const projectsection = document.getElementById("projects");
    
    // Create a ul in the projects section 
    let projectList = document.createElement("ul"); 
    projectsection.appendChild(projectList);
    
  for (let repository of repositories) {
    
    // Create a new list item element
    let project = document.createElement("li");
    
    // Set the inner text of the project variable to the current repository's name 
    project.innerText = repository.name;
    
    // Append the project element to the projectlist element

    projectList.appendChild(project);

  }
})

.catch((error) => {
        if (error instanceof SyntaxError){
            console.error("Unparsable response from server");
        }else{
    console.error("Error fetching data: ", error.message);
        }
});