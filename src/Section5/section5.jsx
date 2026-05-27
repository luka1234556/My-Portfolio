import "./section5.css"
import { useEffect, useState } from "react";
import { MdLocationOn, MdEventAvailable } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { TbTimezone } from "react-icons/tb";

function Section5(){

    const [time, setTime] = useState("");

    const infoCards = [
        {
            title: "Location",
            icon: <MdLocationOn size={20} />,
            info: "Tbilisi, Georgia"
        },

        {
            title: "Local Time",
            icon: <IoMdTime size={20} />,
            info: time
        },

        {
            title: "Timezone",
            icon: <TbTimezone size={20} />,
            info: "GMT +4"
        },

        {
            title: "Availability",
            icon: <MdEventAvailable size={20} />,
            info: "Open to freelance & remote projects"
        }
    ];

    useEffect(() => {
        const updateTime = () => {
            const currentTime = new Intl.DateTimeFormat("en-US", {
                timeZone: "Asia/Tbilisi",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            }).format(new Date());

            setTime(currentTime);
        };

        updateTime();

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        <section 
        id="beyond"
        className="section5">
            <div className="section5-content">

                <div className="status">
                    <span />
                    Available for freelance work
                </div>

                <h2 className="sec5-header">
                    Beyond Coding & Development
                </h2>

                <p className="section5-description">
                    I enjoy building modern user interfaces,
                    learning new technologies, and improving
                    my frontend development skills through
                    real-world projects and creative ideas.
                </p>

                <div className="time">

                    {infoCards.map((infos, index) => (
                        <div
                        className="time-card"
                        key={index}
                        >
                            <span>
                                {infos.icon}

                                <h4>
                                    {infos.title}
                                </h4>
                            </span>

                            <p>
                                {infos.info}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="experience">
                    <div className="experience-card">
                        <h3>
                            Education
                        </h3>

                        <p>
                            Akaki Tsereteli State University
                            <br />
                            2021 — 2025
                            <br />
                            Bachelor's Degree in Computer Science
                        </p>
                    </div>

                    <div className="experience-card">
                        <h3>
                            Interests
                        </h3>
                        <ul>
                            <li>
                                Sports — boxing, jogging, gym, basketball
                            </li>

                            <li>
                                Art — drawing animations & characters
                            </li>

                            <li>
                                Cooking — trying new recipes like
                                khinkali, pelmeni, ice cream & jelly desserts
                            </li>
                        </ul>
                    </div>

                    <div className="experience-card">
                        <h3>
                            Languages
                        </h3>

                        <ul>
                            <li>Georgian — Native</li>
                            <li>English — B1</li>
                            <li>Russian — B1</li>
                            <li>German — A2</li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="images">
                {[
                    { source: "Me/img-1.jpg", alt: "Luka portrait 1" },
                    { source: "Me/img-2.png", alt: "Luka portrait 2" },
                    { source: "Me/img-3.png", alt: "Luka portrait 3" }
                ].map((img, index) => (
                     <div className="image-frame" key={index}>
                        <img
                        src={import.meta.env.BASE_URL + img.source}
                        alt={img.alt}
                        className="luka-dev"
                        loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Section5