import { motion } from "framer-motion"

function Projects(){

  return(

    <section id="projects" className="container">

      <h2 className="section-title">
        Projects
      </h2>

      <div className="projects-grid">

        <motion.div
          className="project-card"
          whileHover={{ scale:1.05 }}
        >

          <h3>AI Career Advisor</h3>

          <p>
            Generative AI web app recommending career paths using LLM API.
          </p>

          <div className="project-tags">
            <span>Python</span>
            <span>Streamlit</span>
            <span>LLM API</span>
          </div>

          <div className="project-buttons">

            <a href="https://github.com/Abhijith1729/ai-career-advisor" target="_blank">
              <button className="btn btn-primary">Code</button>
            </a>

            <a href="https://ai-career-advisor-g3g6ua83aufmpo8mnzjmcn.streamlit.app" target="_blank">
              <button className="btn btn-secondary">Live</button>
            </a>

          </div>

        </motion.div>


        <motion.div
          className="project-card"
          whileHover={{ scale:1.05 }}
        >

          <h3>Cardiovascular Disease Prediction</h3>

          <p>
            ML model predicting cardiovascular risk using ensemble learning.
          </p>

          <div className="project-tags">
            <span>Python</span>
            <span>Scikit-learn</span>
            <span>Streamlit</span>
          </div>

          <div className="project-buttons">

            <a href="https://github.com/Abhijith1729/Cardiovascular-disease-prediction-using-ensemble-techniques" target="_blank">
              <button className="btn btn-primary">Code</button>
            </a>

          </div>

        </motion.div>


        <motion.div
          className="project-card"
          whileHover={{ scale:1.05 }}
        >

          <h3>Modern Calculator</h3>

          <p>
            Responsive calculator built with JavaScript.
          </p>

          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-buttons">

            <a href="https://github.com/Abhijith1729/modern-calculator-js" target="_blank">
              <button className="btn btn-primary">Code</button>
            </a>

          </div>

        </motion.div>

      </div>

    </section>

  )
}

export default Projects