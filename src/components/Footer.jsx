function Footer() {
  return (
    <footer className="footer">

      <p>© {new Date().getFullYear()} Vyshnava Abhijith</p>

      <div className="footer-links">

        <a
          href="https://github.com/Abhijith1729"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/abhijith-vyshnava-03b49b25a"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

      </div>

    </footer>
  )
}

export default Footer