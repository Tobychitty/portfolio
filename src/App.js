import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'

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
                <i className="devicon-linkedin-plain contact-icon" onMouseEnter={() => setContactText("LinkedIn")} onMouseLeave={() => setContactText("")}></i>
              </a>
              <i className="devicon-github-original contact-icon" onMouseEnter={() => setContactText("GitHub")} onMouseLeave={() => setContactText("")}></i>
              <FontAwesomeIcon icon={faMedium} className='contact-icon' onMouseEnter={() => setContactText("Medium")} onMouseLeave={() => setContactText("")}/>
              <i className="devicon-twitter-original contact-icon" onMouseEnter={() => setContactText("Twitter")} onMouseLeave={() => setContactText("")}></i>
            </div>
            <p id='hover-text'>{contactText}</p>
          </div>
        </div>
        <div className='main-right'>
          <div id='project-grid'>
            <div id='project-1' className='project'>
              <div id='bg-box-hollow' className='bg-box'></div>
            </div>
            <div id='project-2' className='project'>
              <div id='bg-box-full' className='bg-box'></div>
            </div>
            <div id='project-3' className='project'>
              <div id='bg-box-full' className='bg-box'></div>
            </div>
            <div id='project-4' className='project'>
              <div id='bg-box-hollow' className='bg-box'></div>
            </div>
          </div>
        </div>
      </main>
      <section>

      </section>
    </div>
  );
}

export default App;
