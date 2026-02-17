function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#020617",
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: "0",
      zIndex: "1000"
    }}>

      {/* Logo */}
      <h2 style={{
        color: "white",
        fontWeight: "bold",
        userSelect: "none"
      }}>
        Portfolio
      </h2>

      {/* Navigation Links */}
      <div>

        <a href="#about" style={linkStyle}>
          About
        </a>

        <a href="#skills" style={linkStyle}>
          Skills
        </a>

        <a href="#projects" style={linkStyle}>
          Projects
        </a>

        <a href="#contact" style={linkStyle}>
          Contact
        </a>

      </div>

    </nav>
  )
}

const linkStyle = {
  color: "white",
  marginLeft: "25px",
  textDecoration: "none",
  cursor: "pointer",
  fontSize: "16px"
}

export default Navbar
