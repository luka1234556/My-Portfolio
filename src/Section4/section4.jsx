import "./section4.css"
import { MdTimelapse, MdOutlineScreenshotMonitor } from "react-icons/md";
import { PiEyesFill } from "react-icons/pi";
import { VscDebugAlt } from "react-icons/vsc";
import { AiOutlineRise } from "react-icons/ai";

function Section4(){

    const listbox = [
        {id: 1, icon: <MdTimelapse/>, title: "Fast Delivery", subtitle: "I focus on clean structure and reusable components, so projects ship faster without messy code."},
        {id: 2, icon: <PiEyesFill />, title: "Detail-Oriented", subtitle: "Every pixel matters — I care about spacing, responsiveness, and UI consistency."},
        {id: 3, icon: <MdOutlineScreenshotMonitor />, title: "Fully Responsive", subtitle: "Mobile-first mindset. Everything works smoothly on all screen sizes."},
        {id: 4, icon: <VscDebugAlt  />, title: "Problem Solver", subtitle: "I don't just copy solutions — I understand problems and build scalable fixes."},
        {id: 5, icon: <AiOutlineRise />, title: "Growth Mindset", subtitle: "I constantly improve my stack — React, animations, performance and backend basics."}
    ]

    return(
        <section id="section4">
            <div className="heading">
                <h2>Why Work With Me?</h2>
                <ul className="trust-pill" >
                    {[
                        "Clean Code", 
                        "Performance Optimized", 
                        "SEO Friendly", 
                        "Git Workflow"
                    ].map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>


                <p className="subtitle">
                    I don't just build websites — <br />
                    I build fast, clean and scalable user experiences.
                </p>
            </div>

            <div>
                <div className="why-container">
                    {listbox.map((list, index) => (
                        <div
                        className="why-card"
                        key={index}
                        >   
                            <div className="heading-box">
                                <div className="icon-box">
                                    {list.icon}
                                </div>
                                
                                <h3>
                                    {list.title}
                                </h3>
                            </div>
                            
                            <p>{list.subtitle}</p>   
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Section4