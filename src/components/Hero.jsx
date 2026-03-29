import { FaGithub, FaLinkedin } from "react-icons/fa"

function Hero(){

return(

<section className="container hero">

<div className="hero-left">

<h1>
Vyshnava <br/> Abhijith
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
className="btn btn-blue"
>
<FaGithub/> GitHub
</a>

<a
href="https://www.linkedin.com/in/abhijith-vyshnava-03b49b25a"
target="_blank"
className="btn btn-outline"
>
<FaLinkedin/> LinkedIn
</a>

<a
href="/pwc_abhijith(1).pdf"
className="btn btn-green"
download
>
Resume
</a>

</div>

</div>

<div className="hero-code">

<pre>
{`const developer = {

name: "Abhijith",
role: "Software Engineer",

skills: [
"React",
"Node",
"Python"
]

}`}
</pre>

</div>

</section>

)

}

export default Hero