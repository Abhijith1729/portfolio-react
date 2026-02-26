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

          <h3>AI Career Advisor using Generative AI</h3>

          <p style={descStyle}>
            AI-powered career advisor built using Python and Streamlit. Integrated Gemma LLM via Ollama to generate role recommendations and roadmaps.
          </p>

          <div>
            <span style={tagStyle}>Python</span>
            <span style={tagStyle}>Streamlit</span>
            <span style={tagStyle}>Ollama</span>
            <span style={tagStyle}>LLM</span>
          </div>

          <div style={{ marginTop: "15px" }}>
            <a
              href="https://github.com/Abhijith1729/ai-career-advisor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button style={buttonStyle}>View Code</button>
            </a>
          </div>

        </div>


        {/* Project 2 */}
        <div style={cardStyle}>

          <h3>Cardiovascular Disease Prediction System (Team Project)</h3>

          <p style={descStyle}>
            Developed Streamlit frontend and integrated it with ML backend for real-time cardiovascular prediction and visualization.
          </p>

          <div>
            <span style={tagStyle}>Python</span>
            <span style={tagStyle}>Streamlit</span>
            <span style={tagStyle}>Frontend</span>
            <span style={tagStyle}>API Integration</span>
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

          <h3>Job Application Tracker</h3>

          <p style={descStyle}>
            Job tracking system built using Python, Streamlit, and SQLite with database integration and CRUD operations.
          </p>

          <div>
            <span style={tagStyle}>Python</span>
            <span style={tagStyle}>SQL</span>
            <span style={tagStyle}>SQLite</span>
            <span style={tagStyle}>Streamlit</span>
          </div>

          <div style={{ marginTop: "15px" }}>
            <button style={buttonStyle}>
              In Progress
            </button>
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