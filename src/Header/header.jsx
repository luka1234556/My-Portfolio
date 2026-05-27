import "./header.css"
import { useState, useEffect, useRef } from "react";
import { RiCodeSSlashFill } from "react-icons/ri";
import { IoSparkles } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";

function Header({ darkMode, setDarkMode }){

    const [openMenu, setOpenMenu] = useState(false);

    return(
        <header>
            <nav className="header-container">
                <ul className="screen-heading">
                    {[
                        { text: "Projects", link: "#projects" },
                        { text: "Experience", link: "#skills" },
                        { text: "More", link: "#beyond" },
                        { text: "Contact", link: "#contact" },
                    ].map((links, index) => (
                        <li key={index}>
                            <a  
                            href={links.link} 
                            rel="noopener noreferrer">
                                {links.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="header-right">
                <button
                className={`theme-toggle ${darkMode? "sun-mode" : "moon-mode"}`}
                onClick={() => setDarkMode(!darkMode)}
                >
                    {
                        darkMode 
                        ? <IoSunny size={26} /> 
                        : <IoMoon size={26} />
                    }
                </button>
            </div>
                
            <nav className="mobile-icon-nav">
                <ul>
                    {[
                        { icon: <FaLaptopCode />, link: "#projects" },
                        { icon: <RiCodeSSlashFill />, link: "#skills" },
                        { icon: <IoSparkles />, link: "#beyond" },
                        { icon: <FiSend />, link: "#contact" },
                    ].map((item, index) => (
                        <li key={index}>
                            <a 
                            href={item.link}>
                                {item.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header