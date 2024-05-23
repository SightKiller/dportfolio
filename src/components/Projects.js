import React from 'react';
import E_Commerce from '../assets/1_SwFB1o_k1LGprN-XRUZQ8w.jpg';
import Portfolio from '../assets/Full-stack-web-developer.png';
import React_Game from '../assets/6495da7241185414c12ddc02_videoGamePlanet.png';
import GASC_Admission from '../assets/f2.png';
import Portfolio2 from '../assets/Full-Stack-Developer.png';

const Projects = () => {
  const projects = [
    {
      img: Portfolio,
      description:'Build a React portfolio using Tailwind CSS for styling and Email.js for contact functionality, showcasing personal projects and skills.',
      link:  'https://sightkiller.github.io/dportfolio/'
    },
    {
      img: React_Game,
      description: 'A React-based "Guess The Number" game where players attempt to identify a random number, with real-time feedback on each guess.',
      link: 'https://sightkiller.github.io/React_Game/'
    },
    {
      img: GASC_Admission,
      description: 'This project enhanced college admissions efficiency by integrating key processes into a digital web application.',
      link: 'https://www.linkedin.com/posts/dhanushs-infotech_nodejs-mongoose-mongodb-activity-7169363303083749376-WULh?utm_source=share&utm_medium=member_desktop'
    },
    {
      img: Portfolio2,
      description: 'I showcased my expertise in web development through the creation of a responsive portfolio for this assignment.',
      link: 'https://sightkiller.github.io/Portfolio/'
    }
    
  ];

  return (
    <section className="bg-primary text-white p-5 " id='projects'>
      <h1 className="projects-title ease-in-out fade-Out"><span className='main'>Latest</span> Projects</h1>
      <div className="projects-container ease-in-out fade-in">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="img-card">
              <img src={project.img} alt={`Project ${index + 1}`} className="project-image" />
              <div className="desc-card">
                <div className="project-desc">
                  <p>{project.description}</p>
                  <a href={project.link} className="project-btn">Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
