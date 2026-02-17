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
        <div style={{
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)"
        }}>

          <h3>
            Cardiovascular Disease Prediction System
          </h3>

          <p style={{ marginTop: "10px", color: "#cbd5e1" }}>
            Machine learning system that predicts cardiovascular disease using ECG data and ensemble models.
          </p>

          {/* Tech Stack */}
          <div style={{ marginTop: "10px" }}>
            <span style={tagStyle}>Python</span>
            <span style={tagStyle}>Machine Learning</span>
            <span style={tagStyle}>Scikit-learn</span>
            <span style={tagStyle}>StreamLit</span>
            <span style={tagStyle}>Pandas</span>
          </div>

          {/* Buttons */}
          <div style={{ marginTop: "15px" }}>

            <a
              href="https://github.com/Abhijith1729/Cardiovascular-disease-prediction-using-ensemble-techniques"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button style={buttonStyle}>
                View Code
              </button>
            </a>

          </div>

        </div>


        {/* Project 2 */}
        <div style={{
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)"
        }}>

          <h3>
            Modern Calculator (JavaScript)
          </h3>

          <p style={{ marginTop: "10px", color: "#cbd5e1" }}>
            Responsive calculator built using HTML, CSS, and JavaScript with modern UI and interactive features.
          </p>

          {/* Tech Stack */}
          <div style={{ marginTop: "10px" }}>
            <span style={tagStyle}>HTML</span>
            <span style={tagStyle}>CSS</span>
            <span style={tagStyle}>JavaScript</span>
          </div>

          {/* Buttons */}
          <div style={{ marginTop: "15px" }}>

            <a
              href="https://github.com/Abhijith1729/modern-calculator-js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button style={buttonStyle}>
                View Code
              </button>
            </a>

          </div>

        </div>

      </div>

    </section>
  )
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
