import "./footer.css";
import {
  FaLinkedin,
  FaBriefcase,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram
} from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { SiUpwork } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer>   
      <div className="at-top">
        <button
        onClick={() =>{
            window.scrollTo({
                top: 0, behavior: "smooth"
            })
        }}
        >
            <IoMdArrowDropup size={24} />
            TOP
        </button>
      </div>

      {/* TOP SECTION */}
      <div className="footer-container">

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact</h3>

          <address>
            <p>
              <FaMapMarkerAlt className="footer-icon" />
              Kutaisi, Georgia
            </p>

            <p>
              <FaPhoneAlt className="footer-icon" />
              +995 574-09-01-06
            </p>

            <p>
              <FaPhoneAlt className="footer-icon" />
              +995 511-71-94-52
            </p>

            <p>
              <MdEmail className="footer-icon" />
              lukaqartveli2023@gmail.com
            </p>

          </address>
        </div>

        {/* ABOUT */}
        <nav className="footer-section">
          <h3>About Me</h3>

          <ul>
            {[{id: 1, text: "Frontend React Developer"},
              {id: 2, text: "Responsive Web Design"},
              {id: 3, text: "Clean UI & Animations"},
              {id: 4, text: "Open for freelance work"}].map((about, index) => (
                <li 
                key={index}>
                    {about.text}
                </li>
              ))}
          </ul>
        </nav>

        {/* EXPERIENCE */}
        <div className="footer-section">
          <h3>Languages</h3>

          <ul>
            {[{id: 5, text: "English (B1)"},
              {id: 6, text: "German (A2)"},
              {id: 7, text: "Russian (B2)"},
              {id: 8, text: "Georgian (Native)"}].map((about, index) => (
                <li 
                key={index}>
                    {about.text}
                </li>
              ))}
          </ul>
        </div>

        {/* SOCIALS */}
        <div className="footer-section">
          <h3>Add me</h3>

          <nav className="social-links">
            {[
                {icon: <FaLinkedin />, link: "https://www.linkedin.com/in/luka-kartvelishvili-976475351/", rel: "noopener noreferrer"},
                {icon: <FaBriefcase />, link: "https://www.fiverr.com/sellers/lkwebdev/edit", rel: "noopener noreferrer"},
                {icon: <SiUpwork />, link: "https://www.upwork.com/freelancers/~01e64eeb723749fe69", rel: "noopener noreferrer"},
                {icon: <FaFacebookF />, link: "https://www.facebook.com/luka.qartveli.3/", rel: "noopener noreferrer"},
                {icon: <FaInstagram/>, link: "https://www.instagram.com/luka_kartvelishvili2/", rel: "noopener noreferrer"},
            ].map((links, index) => (
                <a 
                key={index}
                rel={links.rel}
                target="_blank"
                href={links.link}>
                    {links.icon}
                </a>
            ))}

          </nav>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© 2026 MyPortfolio. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;