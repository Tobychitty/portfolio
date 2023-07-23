import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {

  const [ techText, setTechText ] = useState("")
  const [ contactText, setContactText ] = useState("")

  return (
    <div className="App">
      <main>
        <div className='main-left'>
          <div className='desc'>
            <h1>TOBY CHITTY</h1>
            <p>
             Software/Web Developer with 3 years of experience, located in the UK.
            </p>
          </div>
          <div id='technologies'>
            <h3>TECHNOLOGIES</h3>
            <div className='technologies-icons'>
              <i className="devicon-html5-plain tech-icon" onMouseEnter={() => setTechText("HTML 5")} onMouseLeave={() => setTechText("")}></i>
              <i className="devicon-css3-plain tech-icon" onMouseEnter={() => setTechText("CSS 3")} onMouseLeave={() => setTechText("")}></i>
              <i className="devicon-javascript-plain tech-icon" onMouseEnter={() => setTechText("JavaScript")} onMouseLeave={() => setTechText("")}></i>
              <i className="devicon-react-original tech-icon" onMouseEnter={() => setTechText("ReactJS")} onMouseLeave={() => setTechText("")}></i>
              <i className="devicon-python-plain tech-icon" onMouseEnter={() => setTechText("Python")} onMouseLeave={() => setTechText("")}></i>
              <i className="devicon-git-plain tech-icon" onMouseEnter={() => setTechText("Git")} onMouseLeave={() => setTechText("")}></i>
              <i className="devicon-firebase-plain tech-icon" onMouseEnter={() => setTechText("Firebase")} onMouseLeave={() => setTechText("")}></i>
              <i className="devicon-vscode-plain tech-icon" onMouseEnter={() => setTechText("Visual Studio Code")} onMouseLeave={() => setTechText("")}></i>
              <i className="devicon-figma-plain tech-icon" onMouseEnter={() => setTechText("Figma")} onMouseLeave={() => setTechText("")}></i>
            </div>
            <p id='hover-text'>{techText}</p>
          </div>
          <div id='contact'>
            <h3>CONTACT</h3>
            <div className='contact-icons'>
              <a href='https://www.linkedin.com/in/tobychitty/' target='blank'>
                <FontAwesomeIcon icon={faLinkedinIn} className='contact-icon' onMouseEnter={() => setContactText("LinkedIn")} onMouseLeave={() => setContactText("")}/>
              </a>
              <a href='https://github.com/Tobychitty' target='blank'>
                <FontAwesomeIcon icon={faGithub} className='contact-icon' onMouseEnter={() => setContactText("GitHub")} onMouseLeave={() => setContactText("")}/>
              </a>
              <a href='https://medium.com/@tobychitty' target='blank'>
                <FontAwesomeIcon icon={faMedium} className='contact-icon' onMouseEnter={() => setContactText("Medium")} onMouseLeave={() => setContactText("")}/>
              </a>
            </div>
            <p id='hover-text'>{contactText}</p>
          </div>
        </div>
        <div className='main-right'>
          <p id='projects-title' style={{marginBottom: '10px', fontSize: '14px', fontWeight: 600}}>PROJECTS</p>
          <div id='project-grid'>
            <div id='project-1' className='project'>

            </div>
            <div id='project-2' className='project'>

            </div>
            <div id='project-3' className='project'>

            </div>
            <div id='project-4' className='project'>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
