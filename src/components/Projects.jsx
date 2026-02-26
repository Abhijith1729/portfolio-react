function Projects() {
  return (
    <section id="projects" className="container">

      <h2>Projects</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>

        {/* Project 1 */}
        <div style={cardStyle}>

          <h3>AI Career Advisor</h3>

          <p style={descStyle}>
            Generative AI web app that recommends career roles and learning roadmaps based on user skills. Integrated LLM API and deployed on Streamlit Cloud.
          </p>

          <div>
            <span style={tagStyle}>Python</span>
            <span style={tagStyle}>Streamlit</span>
            <span style={tagStyle}>LLM API</span>
            <span style={tagStyle}>Deployment</span>
          </div>

          <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>

            <a
              href="https://github.com/Abhijith1729/ai-career-advisor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button style={buttonStyle}>View Code</button>
            </a>

            <a
              href="https://ai-career-advisor-g3g6ua83aufmpo8mnzjmcn.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button style={{
                ...buttonStyle,
                backgroundColor: "#16a34a"
              }}>
                Live Demo
              </button>
            </a>

          </div>

        </div>


        {/* Project 2 */}
        <div style={cardStyle}>

          <h3>Cardiovascular Disease Prediction System</h3>

          <p style={descStyle}>
            Machine learning application that predicts cardiovascular disease using ensemble models with an interactive Streamlit interface.
          </p>

          <div>
            <span style={tagStyle}>Python</span>
            <span style={tagStyle}>Machine Learning</span>
            <span style={tagStyle}>Scikit-learn</span>
            <span style={tagStyle}>Streamlit</span>
          </div>

          <div style={{ marginTop: "15px" }}>
            <a
              href="https://github.com/Abhijith1729/Cardiovascular-disease-prediction-using-ensemble-techniques"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button style={buttonStyle}>View Code</button>
            </a>
          </div>

        </div>


        {/* Project 3 */}
        <div style={cardStyle}>

          <h3>Modern Calculator</h3>

          <p style={descStyle}>
            Responsive calculator built with JavaScript featuring clean UI and real-time calculations.
          </p>

          <div>
            <span style={tagStyle}>HTML</span>
            <span style={tagStyle}>CSS</span>
            <span style={tagStyle}>JavaScript</span>
          </div>

          <div style={{ marginTop: "15px" }}>
            <a
              href="https://github.com/Abhijith1729/modern-calculator-js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button style={buttonStyle}>View Code</button>
            </a>
          </div>

        </div>

      </div>

    </section>
  )
}


/* Card Style */
const cardStyle = {
  backgroundColor: "#1e293b",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.3)"
}


/* Description Style */
const descStyle = {
  marginTop: "10px",
  color: "#cbd5e1",
  lineHeight: "1.5"
}


/* Tag Style */
const tagStyle = {
  display: "inline-block",
  backgroundColor: "#334155",
  padding: "5px 10px",
  borderRadius: "6px",
  marginRight: "8px",
  marginTop: "5px",
  fontSize: "12px"
}


/* Button Style */
const buttonStyle = {
  padding: "8px 15px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
}


export default Projects