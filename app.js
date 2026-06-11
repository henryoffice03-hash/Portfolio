const express = require('express');
const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Project data
const projects = [
    {
        id: 1,
        title: "Project 1",
        summary: "Brief description of project 1",
        description: "Detailed description of what this project does, the technologies used, and the impact.",
        technologies: ["React", "Node.js", "MongoDB"],
        role: "Full Stack Developer",
        image: "https://via.placeholder.com/400x300?text=Project+1",
        github: "https://github.com/yourname/project1",
        demo: "https://project1-demo.com"
    },
    {
        id: 2,
        title: "Project 2",
        summary: "Brief description of project 2",
        description: "Detailed description of what this project does, the technologies used, and the impact.",
        technologies: ["Python", "Flask", "PostgreSQL"],
        role: "Backend Developer",
        image: "https://via.placeholder.com/400x300?text=Project+2",
        github: "https://github.com/yourname/project2",
        demo: ""
    },
    {
        id: 3,
        title: "Project 3",
        summary: "Brief description of project 3",
        description: "Detailed description of what this project does, the technologies used, and the impact.",
        technologies: ["Vue.js", "Django", "PostgreSQL"],
        role: "Full Stack Developer",
        image: "https://via.placeholder.com/400x300?text=Project+3",
        github: "https://github.com/yourname/project3",
        demo: "https://project3-demo.com"
    }
];

// Developer info
const developer = {
    name: "Your Name",
    phone: "+1 (XXX) XXX-XXXX",
    linkedin: "https://linkedin.com/in/yourprofile"
};

// Routes
app.get('/', (req, res) => {
    res.render('index', { projects, developer });
});

app.get('/project/:id', (req, res) => {
    const project = projects.find(p => p.id === parseInt(req.params.id));
    if (!project) {
        return res.status(404).send('Project not found');
    }
    res.render('project', { project, developer });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Portfolio running at http://localhost:${PORT}/`);
});
