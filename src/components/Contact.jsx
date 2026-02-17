function Contact() {
  return (
    <section id="contact" className="container">

      <h2>Contact</h2>

      <p style={{ marginTop: "15px" }}>
        Email: 
        <a 
          href="mailto:abhijithvyshnava@gmail.com"
          style={{ color: "#3b82f6", marginLeft: "5px" }}
        >
          abhijithvyshnava@gmail.com
        </a>
      </p>


      {/* GitHub Button */}
      <div style={{ marginTop: "15px" }}>

        <a
          href="https://github.com/Abhijith1729"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={{
            padding: "8px 15px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            GitHub Profile
          </button>
        </a>

      </div>

    </section>
  )
}

export default Contact
