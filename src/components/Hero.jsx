import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Hero() {

  return (

    <section className="hero container">

      <div className="hero-grid">

        <motion.div
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
        >

          <h1>
            Vyshnava Abhijith
          </h1>

          <h2>
            Software Engineer building scalable web apps
          </h2>

          <p>
            Passionate about building scalable systems and solving real problems with code.
          </p>

          <div className="hero-buttons">

            <a href="https://github.com/Abhijith1729" target="_blank">

              <button className="btn btn-primary">
                <FaGithub /> GitHub
              </button>

            </a>

            <a href="https://www.linkedin.com/in/abhijith-vyshnava-03b49b25a" target="_blank">

              <button className="btn btn-outline">
                <FaLinkedin /> LinkedIn
              </button>

            </a>

            <a href="/pwc_abhijith(1).pdf" download>

              <button className="btn btn-secondary">
                Resume
              </button>

            </a>

          </div>

        </motion.div>


        <motion.div
          className="hero-visual"
          initial={{ opacity:0, x:40 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:0.7 }}
        >

          <div className="code-box">

            <p>{`const developer = {`}</p>
            <p> name: "Abhijith",</p>
            <p> role: "Software Engineer",</p>
            <p> skills: ["React","Node","Python"],</p>
            <p>{`}`}</p>

          </div>

        </motion.div>

      </div>

    </section>

  )
}

export default Hero