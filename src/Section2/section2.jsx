import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { LuArrowBigRightDash, LuArrowBigLeftDash } from "react-icons/lu";
import "./section2.css"

import { TbArrowBigRightLinesFilled, TbArrowBigLeftLinesFilled } from "react-icons/tb";

function Section2(){

    const projects = [
        {
            title: "CodeMeter",
            description: "CodeMeter is a modern frontend platform with multi-language support (i18n), responsive design, and a clean UI structure. The website helps beginner developers test their knowledge in technologies such as HTML, CSS, JavaScript, Tailwind CSS, React, and more. It contains 10+ pages and uses flexible navigation buttons to improve the user experience across different sections and pages.",
            tech: ["React", "i18n", "TAILWIND CSS", "Responsive"],
            live: "https://code-meter-psi.vercel.app",
            github: "https://github.com/luka1234556/CodeMeter",

            images: [
                "/CodeMeter/Image-1.png",
                "/CodeMeter/Image-2.png",
                "/CodeMeter/Image-3.png",
                "/CodeMeter/Image-4.png",
            ],
        },

        {
            title: "NEXCENT",
            description: "Nexcent is a frontend project built from a Figma design using HTML, CSS, and Vanilla JavaScript. The main goal of this project was to showcase my frontend development skills. The website is fully responsive and built without any frameworks, focusing on clean structure and pure Vanilla JavaScript.",
            tech: ["HTML", "CSS", "Vanilla Javascript", "Responsive"],
            live: "https://figma-to-html-tan.vercel.app",
            github: "https://github.com/luka1234556/CodeMeter",

            images: [
                "/FigmaToHtml/Image1.png",
                "/FigmaToHtml/Image2.png",
                "/FigmaToHtml/Image3.png",
                "/FigmaToHtml/Image4.png",
            ],
        },

        {
            title: "IMDB",
            description: "IMDB is a movie website built with React and API integration to display detailed movie information. This project gave me experience working with external APIs and handling dynamic data. For example, movie ratings, descriptions, and other information are fetched directly from the API and displayed for each movie.",
            tech: ["React", "API KEY", "TAILWIND CSS", "Responsive"],
            live: "https://movie-project-phi-kohl.vercel.app",
            github: "https://github.com/luka1234556/movie-project",

            images: [
                "/APIMovies/pic1.png",
                "/APIMovies/pic2.png",
                "/APIMovies/pic3.png",
                "/APIMovies/pic4.png",
            ],
        },

        {
            title: "PSpace",
            description: "PSpace was my first frontend project and gave me valuable experience in building structured layouts such as headers and footers. It also helped me understand how to organize projects properly and deploy them on platforms like GitHub and Vercel.",
            tech: ["React", "Javascript", "TAILWIND CSS", "Responsive"],
            live: "https://project-pspace.vercel.app/#/personalPage",
            github: "https://github.com/luka1234556/project_pspace",

            images: [
                "/PSpace/pic-1.png",
                "/PSpace/pic-2.png",
                "/PSpace/pic-3.png",
                "/PSpace/pic-4.png",
            ],
        },
    ];

    const [currentImage, setCurrentImage] = useState(
        projects.map(() => 0)
    );

    const [fullscreen, setFullscreen] = useState(null);
    const [visibleProjects, setVisibleProjects] = useState([]);


    const nextImage = (projectIndex) => {
        setCurrentImage((prev) =>
            prev.map((item, index) =>
                index === projectIndex
                    ? (item + 1) % projects[projectIndex].images.length
                    : item
            )
        );
    };

    const prevImage = (projectIndex) => {
        setCurrentImage((prev) =>
            prev.map((item, index) =>
                index === projectIndex
                    ? item === 0
                        ? projects[projectIndex].images.length - 1
                        : item - 1
                    : item
            )
        );
    };


    {/*For mobile swipe function*/}

    const handlers = (projectIndex) =>
        useSwipeable({
            onSwipedLeft: () => nextImage(projectIndex),
            onSwipedRight: () => prevImage(projectIndex),
        });


    useEffect(() => {
        const cards = document.querySelectorAll(".project-showcase");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.dataset.index;

                        setVisibleProjects((prev) => [
                            ...new Set([...prev, Number(index)]),
                        ]);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, []);

    useEffect(() => {
        projects.forEach((project) => {
            project.images.forEach((img) => {
                const image = new Image();
                image.src = img;
            });
        });
    }, []);

    useEffect(() => {
        if (fullscreen !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [fullscreen]);

    return(
        <section 
        id="projects"
        className="projects-section"
        >

        {/*ADVERTISEMENT */}
            <div className="section-header">
                <h2>
                    My Projects
                </h2>

                <p>
                    A few projects that showcase my skills in real-world scenarios
                </p>
            </div>

        {/*- - - - - - - - - - - - - - - - - - - - - - - - - -*/}
            <div className="project-box">
                {projects.map((project, projectIndex) => (
                    <div
                    key={projectIndex}
                    data-index={projectIndex}
                    className={`project-showcase ${
                        visibleProjects.includes(projectIndex)
                            ? "show-project"
                            : ""
                    }`}
                    >
                        <div>
                            <div
                            className="project-images"
                            {...handlers(projectIndex)}
                            >
                                <div className="tablet-btn">
                                    <button
                                    onClick={() => prevImage(projectIndex)}
                                    className="arrow-tablet"
                                    >
                                        <LuArrowBigLeftDash className="left"/>
                                    </button>

                                    <button
                                    onClick={() => nextImage(projectIndex)}
                                    className="arrow-tablet"
                                    >
                                        <LuArrowBigRightDash className="right" />
                                    </button>
                                </div>

                                <button
                                onClick={() => prevImage(projectIndex)}
                                className="arrow"
                                >
                                    <LuArrowBigLeftDash className="left"/>
                                </button>

                                <img
                                src={project.images[currentImage[projectIndex]]}
                                alt={project.title}
                                className="imagebox-1"
                                onClick={() => {
                                    if (window.innerWidth > 768) {
                                        setFullscreen(projectIndex);
                                    }
                                }}
                                />

                                <button
                                onClick={() => nextImage(projectIndex)}
                                className="arrow"
                                >
                                    <LuArrowBigRightDash className="right" />
                                </button>
                            </div>
                            
                            {/* DOTS */}
                            <span className="image-dots">
                                {project.images.map((_, imageIndex) => (
                                    <span
                                    key={imageIndex}
                                    className={currentImage[projectIndex] === imageIndex ? "dot active-dot" : "dot"}
                                    onClick={() =>
                                        setCurrentImage((prev) =>
                                            prev.map((item, index) =>
                                                index === projectIndex
                                                    ? imageIndex
                                                    : item
                                            )
                                        )
                                    }
                                    />
                                ))}
                            </span>
                        </div>

                        <div className="project-content">
                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="tech">
                                <ul>
                                    {project.tech.map((item, index) => (
                                        <li 
                                        key={index}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <nav className="buttons">
                                <a 
                                href={project.live} 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    Live <SiVercel size={16}/>
                                </a>

                                <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    GitHub <FaGithub size={16}/>
                                </a>
                            </nav>
                        </div>
                    </div>
                ))}

                {/* GLOBAL FULLSCREEN OVERLAY */}
                {fullscreen !== null && (
                    <div
                    className="fullscreen-overlay"
                    onClick={() => setFullscreen(null)}
                    >
                        <button
                        className="fullscreen-close"
                        onClick={() => setFullscreen(null)}
                        >
                            ✕
                        </button>

                        <button
                        className="fullscreen-arrow left-full"
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage(fullscreen);
                        }}
                        >
                            <LuArrowBigLeftDash />
                        </button>

                        <img
                        src={projects[fullscreen].images[currentImage[fullscreen]]}
                        className="fullscreen-image"
                        onClick={(e) => e.stopPropagation()}
                        loading="lazy"
                        />
                        

                        <button
                        className="fullscreen-arrow right-full"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage(fullscreen);
                        }}
                        >
                            <LuArrowBigRightDash />
                        </button>
                    </div>
                )}
            </div>
            
        </section>
    )
}

export default Section2;