function Hero() {
  return (
    <section className="container" style={{ textAlign: "center" }}>

      <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
        Hi, I'm Abhijith Vyshnava
      </h1>

      <h2 style={{ marginTop: "10px", color: "#cbd5e1" }}>
        Aspiring Software Developer
      </h2>

      <p style={{ marginTop: "15px", color: "#94a3b8" }}>
        I build web applications and software solutions using modern technologies.
      </p>

      <div style={{ marginTop: "25px" }}>

        {/* GitHub Button */}
        <a
          href="https://github.com/Abhijith1729"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              padding: "10px 20px",
              marginRight: "15px",
              cursor: "pointer",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "6px"
            }}
          >
            GitHub
          </button>
        </a>

        {/* Resume Download Button */}
        <a href="/pwc_abhijith(1).pdf" download>
          <button
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              backgroundColor: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "6px"
            }}
          >
            Download Resume
          </button>
        </a>

      </div>

    </section>
  )
}

export default Hero
