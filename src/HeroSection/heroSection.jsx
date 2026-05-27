import "./heroSection.css"
import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";


function heroSection(){

    const mySkills = `I'm Luka, a front-end developer focused on building clean, responsive and modern web experiences using React and modern UI technologies.`;
    const [welcome, setWelcome] = useState("");
    
    useEffect(() => {
        let i = 0;

        const interval = setInterval(() => {
            setWelcome(mySkills.slice(0, i));
            i++;

            if(i > mySkills.length) clearInterval(interval);
        }, 25)

        return () => clearInterval(interval)
    }, []);

    
    return(
        <>
            <section 
            className="section-1">
                <div>
                    <div className="description">
                        <div className="hero-badge">
                            AVAILABLE FOR FREELANCE
                        </div>

                        <h1>
                            Crafting Responsive <span>React</span> Interfaces
                        </h1>
                        
                        <p>
                            {welcome}
                        </p>

                        <div className="tech-stack">
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>Tailwind</span>
                            <span>CSS</span>
                        </div>

                        <nav className="hero-buttons">
                            <a href="#contact">
                                CONTACT NOW
                            </a>
                            
                            <a 
                            href="#projects">
                                EXPLORE
                                <IoIosArrowForward
                                className="arrow-icon"
                                rotate={22}
                                size={20}/>
                            </a>
                        </nav>
                    </div>

                </div>

                <div className="luka-Kartvelishvili">
                    <img 
                    width={400}
                    height={400}
                    src="luka.png"
                    alt="Web Developer" 
                    />
                </div>
            </section>
        </>
    )
}

export default heroSection