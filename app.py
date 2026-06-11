from flask import Flask, render_template
import json

app = Flask(__name__)

# Project data
PROJECTS = [
    {
        "id": 1,
        "title": "Project 1",
        "summary": "Brief description of project 1",
        "description": "Detailed description of what this project does, the technologies used, and the impact.",
        "technologies": ["React", "Node.js", "MongoDB"],
        "role": "Full Stack Developer",
        "image": "https://via.placeholder.com/400x300?text=Project+1",
        "github": "https://github.com/yourname/project1",
        "demo": "https://project1-demo.com"
    },
    {
        "id": 2,
        "title": "Project 2",
        "summary": "Brief description of project 2",
        "description": "Detailed description of what this project does, the technologies used, and the impact.",
        "technologies": ["Python", "Flask", "PostgreSQL"],
        "role": "Backend Developer",
        "image": "https://via.placeholder.com/400x300?text=Project+2",
        "github": "https://github.com/yourname/project2",
        "demo": ""
    },
    {
        "id": 3,
        "title": "Project 3",
        "summary": "Brief description of project 3",
        "description": "Detailed description of what this project does, the technologies used, and the impact.",
        "technologies": ["Vue.js", "Django", "PostgreSQL"],
        "role": "Full Stack Developer",
        "image": "https://via.placeholder.com/400x300?text=Project+3",
        "github": "https://github.com/yourname/project3",
        "demo": "https://project3-demo.com"
    }
]

# Developer info
DEVELOPER = {
    "name": "Your Name",
    "phone": "+1 (XXX) XXX-XXXX",
    "linkedin": "https://linkedin.com/in/yourprofile"
}

@app.route('/')
def index():
    return render_template('index.html', projects=PROJECTS, developer=DEVELOPER)

@app.route('/project/<int:project_id>')
def project(project_id):
    project = next((p for p in PROJECTS if p['id'] == project_id), None)
    if project is None:
        return "Project not found", 404
    return render_template('project.html', project=project, developer=DEVELOPER)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
