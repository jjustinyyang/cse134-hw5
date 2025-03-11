class ProjectCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
            :host {
            display: block;
            width: var(--card-width, 320px);
            background: var(--card-bg, #f9f9f9);
            border-radius: var(--card-border-radius, 12px);
            box-shadow: var(--card-shadow, 3px 3px 15px rgba(0, 0, 0, 0.15));
            padding: var(--card-padding, 20px);
            transition: transform 0.3s ease-in-out;
            }
            :host(:hover) {
            transform: scale(1.08);
            }
            .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            }
            h2 {
            font-size: var(--card-title-size, 1.4em);
            color: var(--card-title-color, #222);
            margin: 0;
            }
            .logo {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            }
            p {
            font-size: var(--card-text-size, 1.1em);
            color: var(--card-text-color, #444);
            margin: 10px 0;
            }
            a {
            text-decoration: none;
            color: var(--card-link-color, #0056b3);
            font-weight: bold;
            }
            </style>
            <div class="header">
            <h2></h2>
            <img class="logo" src="" alt="">
            </div>
            <p></p>
            <a href="#" target="_blank">Learn More</a>
        `;
    }

    static get observedAttributes() {
        return ['project', 'img-src', 'description', 'link'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'project') this.shadowRoot.querySelector('h2').textContent = newValue;
        if (name === 'img-src') {
            this.shadowRoot.querySelector('img').src = newValue;
            this.shadowRoot.querySelector('img').alt = `Image of ${newValue} logo`;
        }
        if (name === 'description') this.shadowRoot.querySelector('p').textContent = newValue;
        if (name === 'link') this.shadowRoot.querySelector('a').href = newValue;
    }
}

customElements.define('project-card', ProjectCard);

const projects = [
    {
        project: "LeadYouth",
        imgSrc: "media/leadyouth.png",
        imgAlt: "LeadYouth company logo",
        description: "At LeadYouth, I will be developing an AI-driven mobile app aimed at enhancing leadership training for youth. This project involves integrating AI models to support features such as personality development, leadership simulations, and speech training. Over four months, I will design, develop, and test the app, ensuring it aligns with LeadYouth’s mission.",
        link: "https://www.leadyouth.org/"
    },
    {
        project: "Tag-N-Trac",
        imgSrc: "media/tagntrac.png",
        imgAlt: "Tag-N-Trac company logo",
        description: "At Tag-N-Trac, I developed an AI assistant using OpenAI's Assistant API to enable natural language queries on the company dashboard. This improved user experience by making data retrieval and analysis more intuitive. I also integrated backend systems with API endpoints to track asset lifecycles, retrieve sensor data, manage alerts, and generate reports, streamlining logistics and monitoring processes.",
        link: "https://tagntrac.ai/"
    },
    {
        project: "Hermes Epitek",
        imgSrc: "media/hermes.png",
        imgAlt: "Hermes Epitek company logo",
        description: "I built a dynamic web application that visualized historical factory alarm data using JavaScript, Chart.js, and MySQL, enabling users to analyze trends through interactive graphs. By implementing API integration, I optimized data filtering and extraction, improving the accuracy and accessibility of operational insights for manufacturing decision-making.",
        link: "https://www.hermes.com.tw/en/"
    },
    {
        project: "ERSP Software Researcher",
        imgSrc: "media/ersp.jpeg",
        imgAlt: "ERSP program research project logo",
        description: "I worked on Proofessor, an AI tutor leveraging GPT-4 to assist students in writing mathematical proofs. Using Python, prompt engineering, and OpenAI’s API, I designed interactive tutoring sessions that provided structured feedback. Additionally, I integrated Lean 4 for auto-formalization, enhancing proof validation and student learning outcomes.",
        link: "https://ersp.ucsd.edu/"
    },
    {
        project: "Computer Science Tutor",
        imgSrc: "media/tutor.png",
        imgAlt: "UCSD Computer Science tutoring icon",
        description: "I led lab sessions for 80 students in CSE 15L (Software Tools & Techniques Lab), teaching Linux OS, Vim, shell scripting, JUnit testing, and Git version control. I provided hands-on guidance, helping students build foundational software development skills.",
        link: "https://cse.ucsd.edu/"
    }
];

localStorage.setItem('projects', JSON.stringify(projects));

function loadLocal() {
    const projectsContainer = document.getElementById('projects-container');
    const projects = JSON.parse(localStorage.getItem('projects'));

    if (projects && projects.length > 0) {
        projectsContainer.innerHTML = '';
        projects.forEach(project => {
            const projectCard = document.createElement('project-card');
            projectCard.classList.add('project');
            projectCard.setAttribute('project', project.project);
            projectCard.setAttribute('img-src', project.imgSrc);
            projectCard.setAttribute('img-alt', project.imgAlt);
            projectCard.setAttribute('description', project.description);
            projectCard.setAttribute('link', project.link);

            projectsContainer.appendChild(projectCard);
        });
    }
}

function loadRemote() {
    const projectsContainer = document.getElementById('projects-container');
    fetch('https://my-json-server.typicode.com/jjustinyyang/cse134-hw5db/projects')
        .then(response => response.json())
        .then(projects => {
            if (projects && projects.length > 0) {
                projectsContainer.innerHTML = '';
                projects.forEach(project => {
                    const projectCard = document.createElement('project-card');
                    projectCard.classList.add('project');
                    projectCard.setAttribute('project', project.project);
                    projectCard.setAttribute('img-src', project.imgSrc);
                    projectCard.setAttribute('img-alt', project.imgAlt);
                    projectCard.setAttribute('description', project.description);
                    projectCard.setAttribute('link', project.link);

                    projectsContainer.appendChild(projectCard);
                });
            }
        })
        .catch(error => console.error('Error fetching remote projects:', error));
}

document.getElementById('load-local-btn').addEventListener('click', loadLocal);
document.getElementById('load-remote-btn').addEventListener('click', loadRemote);