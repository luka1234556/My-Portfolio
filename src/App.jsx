import "./index.css"
import Lenis from "lenis";
import { useState, useEffect } from "react";
import { PiArrowFatLinesUpFill } from "react-icons/pi";
import Header from "./Header/header"
import HeroSection from "./HeroSection/heroSection"
import Section2 from "./Section2/section2"
import Section3 from "./Section3/section3"
import Section4 from "./Section4/section4"
import Section5 from "./Section5/section5"
import Section6 from "./Section6/section6"
import Footer from "./Footer/footer"

function App() {

    /*For dark/light modes */
    const [darkMode, setDarkMode] = useState(true);

    /*Side effect for turning dark to light and back*/
    useEffect(() => {
        if(darkMode){
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        }
        else{
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
        }

    }, [darkMode]);

    /*Lenis for better scroll experience */
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, []);

    return(

        <div className="project-box">
           
            <div
            className={`
                background-image 
                ${darkMode ? "dark" : "light"}`}
            />

            <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            />
        

            <button 
            onClick={() => {
                window.scrollTo({top:0, behavior: "smooth"})
            }}
            className="scroller-up">
                <PiArrowFatLinesUpFill size={22} />
            </button>

            <main>
                <HeroSection />
         
                <Section2 />

                <Section3  />

                <Section4 />

                <Section5 />

                <Section6 />
            </main>

            <Footer />
        </div>
    )
  
}

export default App;