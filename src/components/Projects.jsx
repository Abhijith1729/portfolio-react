import { motion } from "framer-motion"

const projects = [
  {
    title: "AI Career Advisor",
    description:
      "Generative AI web app recommending personalized career paths using LLM API and Streamlit.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    tags: ["Python", "Streamlit", "LLM API"],
    code: "https://github.com/Abhijith1729/ai-career-advisor",
    live: "https://ai-career-advisor-g3g6ua83aufmpo8mnzjmcn.streamlit.app"
  },

  {
    title: "Cardiovascular Disease Prediction",
    description:
      "Machine learning system predicting cardiovascular risk using ensemble learning techniques.",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    tags: ["Python", "Scikit-learn", "Streamlit"],
    code:
      "https://github.com/Abhijith1729/Cardiovascular-disease-prediction-using-ensemble-techniques"
  },

  {
    title: "Modern Calculator",
    description:
      "Fully responsive calculator built with modern JavaScript and clean UI design.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/Abhijith1729/modern-calculator-js"
  }
]

function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="projects-container">

        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >

              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">

                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}

                </div>

                <div className="project-buttons">

                  <a href={project.code} target="_blank" rel="noreferrer">
                    <button className="btn btn-primary">Code</button>
                  </a>

                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <button className="btn btn-secondary">Live</button>
                    </a>
                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects