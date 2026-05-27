import "./section6.css";
import emailjs from "@emailjs/browser";
import { useEffect, useState, useRef } from "react";
import { FaBug, FaPaintBrush, FaMobileAlt, FaMoon, FaTelegramPlane, 
    FaDiscord, FaWhatsapp } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { MdRocketLaunch, MdEmail } from "react-icons/md";
import { PiSealWarningLight } from "react-icons/pi";


function Section6() {
    const [message, setMessage] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [contactMethod, setContactMethod] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [warning, setWarning] = useState("");
    const [loading, setLoading] = useState(false);

    const formRef = useRef();

    const addTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const removeTag = (tagToRemove) => {
        setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (loading) return; // 🛑 prevent double submit

        if (!message.trim()) {
            setWarning("Please write a message first.");
            return;
        }

        if (!contactMethod) {
            setWarning("Please select a contact method.");
            return;
        }

        if (formRef.current.website?.value) return;

        setWarning("");
        setLoading(true);

        emailjs
        .sendForm(
            "service_6ge6x6v",
            "template_aqf8bmb",
            formRef.current,
            "-WpQgiDocO7itXVRY"
        )
        .then(() => {
            setSubmitted(true);
            setMessage("");
            setSelectedTags([]);
            setContactMethod("");
        })
        .catch((error) => {
            console.log(error);
            setWarning("Failed to send message. Try again.");
        })
        .finally(() => {
            setLoading(false);
        });
    };

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => {
                setSubmitted(false);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [submitted]);

    useEffect(() => {
        if (warning) {
            const timer = setTimeout(() => {
                setWarning("");
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [warning]);

    return (
        <form
        id="contact"
        ref={formRef}
        className="contact-box"
        onSubmit={handleSubmit}
        >
            
            {submitted && (
                <div className="sub-box">
                    <div className="success-card">
                        <h4 className="success-text">
                            Message Sent Successfully
                        </h4>

                        <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="close-btn"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <div className="contact-inner">
                <h2>Let's Build Something Great</h2>

                <p>
                    More into direct contact? feel free to text — from bug fixes to full frontend projects.
                </p>

                {/* TAGS */}
                <div className="service-tags">
                    {[
                        "#BugFix",
                        "#Responsive Issue",
                        "#React website",
                        "#Dark-Light Modes",
                        "#LandingPage",
                        "#Full stack website",
                        "#Modern UI/UX",
                        "#Business website"
                    ].map((tag, index) => (
                        <button
                        key={index}
                        type="button"
                        className={selectedTags.includes(tag) ? "active-tag" : ""}
                        onClick={() => addTag(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* CONTACT METHOD */}
                <div className="contact-method">
                    <p>Preferred Contact:</p>

                    <div className="contact-options">
                        {[
                            { text: "Email", icon: <MdEmail /> },
                            { text: "Discord", icon: <FaDiscord /> },
                            { text: "Telegram", icon: <FaTelegramPlane /> },
                            { text: "WhatsApp", icon: <FaWhatsapp /> }
                        ].map((method, index) => (
                            <button
                            key={index}
                            type="button"
                            className={`contacts ${
                                contactMethod === method.text ? "active-contact" : ""
                            }`}
                            onClick={() => setContactMethod(method.text)}
                            >
                                <span>{method.icon}</span>
                                {method.text}
                            </button>
                        ))}
                    </div>

                    <p className="respond">
                        <PiSealWarningLight size={22}/>
                        “I usually respond within 24h via selected method”
                    </p>
                </div>

                {/* SELECTED TAGS */}
                <div className="selected-tags">
                    {selectedTags.map((tag, index) => (
                        <div className="tag-chip" key={index}>
                            <span>{tag}</span>
                            <button type="button" onClick={() => removeTag(tag)}>
                                <IoClose />
                            </button>
                        </div>
                    ))}
                </div>

                {/* MESSAGE */}
                <textarea
                name="message"
                maxLength={300}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                placeholder="Hello, I need help with..."
                />

                <div className="message-info">
                    <span>{message.length}/300</span>
                </div>

                {/* HIDDEN FIELDS (EMAILJS) */}
                <input
                type="hidden"
                name="tags"
                value={selectedTags.join(", ")}
                />

                <input
                type="hidden"
                name="contact_method"
                value={contactMethod}
                />

                <input
                type="text"
                name="website"
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
                />

                {/* WARNING */}
                {warning && 
                <p className="form-status">
                    {warning}
                </p>}

                {/* SUBMIT */}
                <div className="submit-box">
                    <button 
                    type="submit" 
                    className="send-btn" 
                    disabled={loading}>
                        {loading ? "Sending..." : "Submit"}
                    </button>

                    <p>Frontend-focused • Responsive-first • Modern UI</p>
                </div>
            </div>
        </form>
    );
}

export default Section6;