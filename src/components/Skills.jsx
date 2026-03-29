import { motion } from "framer-motion"

import {
FaReact,
FaNodeJs,
FaPython,
FaGitAlt,
FaGithub
} from "react-icons/fa"

import {
SiJavascript,
SiMysql
} from "react-icons/si"


function Skills(){

return(

<section id="skills" className="container">

<h2>
Skills
</h2>

<div className="skills-grid">


<motion.div
className="skill-card"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.5}}
viewport={{once:true}}
>

<h3>Languages</h3>

<div className="skill-items">

<div className="skill-item">
<SiJavascript className="skill-icon"/>
<span>JavaScript</span>
</div>

<div className="skill-item">
<FaPython className="skill-icon"/>
<span>Python</span>
</div>

<div className="skill-item">
<SiMysql className="skill-icon"/>
<span>SQL</span>
</div>

</div>

</motion.div>



<motion.div
className="skill-card"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.5,delay:0.1}}
viewport={{once:true}}
>

<h3>Frameworks</h3>

<div className="skill-items">

<div className="skill-item">
<FaReact className="skill-icon"/>
<span>React</span>
</div>

<div className="skill-item">
<FaNodeJs className="skill-icon"/>
<span>Node.js</span>
</div>

</div>

</motion.div>



<motion.div
className="skill-card"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.5,delay:0.2}}
viewport={{once:true}}
>

<h3>Tools</h3>

<div className="skill-items">

<div className="skill-item">
<FaGitAlt className="skill-icon"/>
<span>Git</span>
</div>

<div className="skill-item">
<FaGithub className="skill-icon"/>
<span>GitHub</span>
</div>

</div>

</motion.div>


</div>

</section>

)

}

export default Skills