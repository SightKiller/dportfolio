import React from 'react';
import Html5Img from '../assets/html.png';
import Css3Img from '../assets/css.webp';
import JsImg from '../assets/js.png';
import ReactJsImg from '../assets/react.svg';
import NodeJsImg from '../assets/node.png';
import php from '../assets/php.png';
import mongo from '../assets/mongodb.png';
import tail from '../assets/tailwind.png';
import git from '../assets/git.png';
import gitHub from '../assets/github.png';
import c from '../assets/C_Logo.png';
import cpp from '../assets/C++.png';
import python from '../assets/python.jpeg';


// Skill data with proficiency levels
const skills = [
    { id: 1, name: "HTML", icon: Html5Img, level: "Intermediate" },
    { id: 2, name: "CSS", icon: Css3Img, level: "Intermediate" },
    { id: 3, name: "JavaScript", icon: JsImg, level: "Intermediate" },
    { id: 4, name: "React", icon: ReactJsImg, level: "Intermediate" },
    { id: 5, name: "Node.js", icon: NodeJsImg, level: "Beginner" },
    { id: 6, name: "PHP", icon: php, level: "Beginner" },
    { id: 7, name: "MongoDB", icon: mongo, level: "Beginner" },
    { id: 8, name: "Tailwind", icon: tail, level: "Intermediate" },
    { id: 9, name: "Git", icon: git, level: "Beginner" },
    { id: 10, name: "GitHub", icon: gitHub, level: "Beginner" },
    { id: 11, name: "C", icon: c, level: "Beginner" },
    { id: 12, name: "C++", icon: cpp, level: "Beginner" },
    { id: 13, name: "Python", icon: python, level: "Beginner" },
  ];
  

// Single skill card component
function SkillCard({ skill }) {
    const levelColor = {
      Beginner: "bg-red-200 text-red-800",
      Intermediate: "bg-yellow-200 text-yellow-800",
      Expert: "bg-green-200 text-green-800"
    };
  
    return (
      <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out fade-Out m-2">
        <div className="flex items-center space-x-3">
          <img src={skill.icon} alt={skill.name + " icon"} className="h-10 w-10" />
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{skill.name}</h3>
            <span className={`inline-block px-2 py-1 text-sm rounded-full ${levelColor[skill.level]}`}>
              {skill.level}
            </span>
          </div>
        </div>
      </div>
    );
  }
  

// Main Skills component
function Skills() {
  return (
    <div className="bg-secondary text-white p-5" id='skills'>
      <h1 className="projects-title ease-in-out fade-in">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
