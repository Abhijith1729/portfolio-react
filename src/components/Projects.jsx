function Projects() {

  return (

    <section id="projects" className="container">

      <h2 style={{fontSize:"32px", marginBottom:"20px"}}>
        Projects
      </h2>


      <div className="projects-grid">


        {/* Project 1 */}

        <div className="project-card">

          <h3>
            AI Career Advisor
          </h3>

          <p>
            Generative AI web app that recommends career roles and learning
            roadmaps based on user skills using an LLM API.
          </p>


          <div className="project-tags">

            <span className="project-tag">Python</span>
            <span className="project-tag">Streamlit</span>
            <span className="project-tag">LLM API</span>
            <span className="project-tag">Deployment</span>

          </div>


          <div className="project-buttons">

            <a
              href="https://github.com/Abhijith1729/ai-career-advisor"
              target="_blank"
              rel="noopener noreferrer"
            >

              <button className="btn btn-primary">
                View Code
              </button>

            </a>


            <a
              href="https://ai-career-advisor-g3g6ua83aufmpo8mnzjmcn.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
            >

              <button className="btn btn-secondary">
                Live Demo
              </button>

            </a>

          </div>

        </div>


        {/* Project 2 */}

        <div className="project-card">

          <h3>
            Cardiovascular Disease Prediction
          </h3>

          <p>
            Machine learning application that predicts cardiovascular disease
            using ensemble models with an interactive Streamlit interface.
          </p>


          <div className="project-tags">

            <span className="project-tag">Python</span>
            <span className="project-tag">Machine Learning</span>
            <span className="project-tag">Scikit-learn</span>
            <span className="project-tag">Streamlit</span>

          </div>


          <div className="project-buttons">

            <a
              href="https://github.com/Abhijith1729/Cardiovascular-disease-prediction-using-ensemble-techniques"
              target="_blank"
              rel="noopener noreferrer"
            >

              <button className="btn btn-primary">
                View Code
              </button>

            </a>

          </div>

        </div>


        {/* Project 3 */}

        <div className="project-card">

          <h3>
            Modern Calculator
          </h3>

          <p>
            Responsive calculator built with JavaScript featuring clean UI
            and real-time calculations.
          </p>


          <div className="project-tags">

            <span className="project-tag">HTML</span>
            <span className="project-tag">CSS</span>
            <span className="project-tag">JavaScript</span>

          </div>


          <div className="project-buttons">

            <a
              href="https://github.com/Abhijith1729/modern-calculator-js"
              target="_blank"
              rel="noopener noreferrer"
            >

              <button className="btn btn-primary">
                View Code
              </button>

            </a>

          </div>

        </div>


      </div>

    </section>

  )

}

export default Projects