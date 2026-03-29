import { FaGithub, FaLinkedin } from "react-icons/fa"

function Hero(){

  return(

    <section className="hero container">

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

        <a
          href="https://github.com/Abhijith1729"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-primary">

            <FaGithub style={{marginRight:"6px"}} />

            GitHub

          </button>
        </a>


        <a
          href="https://www.linkedin.com/in/abhijith-vyshnava-03b49b25a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-outline">

            <FaLinkedin style={{marginRight:"6px"}} />

            LinkedIn

          </button>
        </a>


        <a href="/pwc_abhijith(1).pdf" download>

          <button className="btn btn-secondary">

            Download Resume

          </button>

        </a>

      </div>

    </section>

  )
}

export default Hero