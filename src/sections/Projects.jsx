import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

import BentoItem from "../components/BentoItem";

// Images imports
import ticTacToeImg from "../assets/images/projects/ticTacToe.png";
import movizitorImg from "../assets/images/projects/movizitor.png";
import jetpackEscapeImg from "../assets/images/projects/jetpackEscape.png";
import gameboyImg from "../assets/images/projects/gameboy.png";
import blogImg from "../assets/images/projects/blog.png";
import calculatorImg from "../assets/images/projects/calculator.png";

// Bento items sizes
const square = "row-span-2 md:col-span-1 md:row-span-1"
const large = "row-span-2 col-span-1 md:col-span-2 md:row-span-1";

const projects = [
    { title: "Tic-Tac-Toe with react", image: ticTacToeImg, size: square, link: "https://github.com/Yvan-Dumas/React-TicTacToe", description: "Tic-Tac-Toe game built with react" },
    { title: "Movizitor", image: movizitorImg, size: large, link: "https://github.com/Yvan-Dumas/movizitor/", description: "Movie recommendation website built with Django" },
    { title: "Jetpack Escape", image: jetpackEscapeImg, size: large, link: "https://github.com/Yvan-Dumas/Jetpack-Escape", description: "2D endless runner game" },
    { title: "Calculator", image: calculatorImg, size: square, link: "https://github.com/Yvan-Dumas/Odin-Calculator", description: "Fully functional Javascript calculator" },
    { title: "Gameboy", image: gameboyImg, size: square, link: "https://www.instagram.com/venty_3d/", description: "3D modeling instagram account"  },
    { title: "Blog", image: blogImg, size: large, link: "https://github.com/Yvan-Dumas/Blog-projet-isi1", description: "Blog website with role-based access control system" },
]

gsap.registerPlugin(ScrollTrigger);



export default function Projects() {
    const { t } = useTranslation();

    const container = useRef();

    // Animations
    useGSAP(() => {

        // title
        gsap.from("h2", {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            }
        });

        // Bento items
        const items = gsap.utils.toArray(".bento-item");
        items.forEach((item) => {
            gsap.from(item, {
                y: 40,
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                }
            });
        });
    }, { scope: container });


    return (
        <section ref={container} id="projects" className="pb-50 md:pb-50 md:min-h-screen">
            <h2 className="text-section-heading font-bold max-w-full mx-auto px-8 tracking-tight md:pt-15 mb-5 md:mb-10">{t('projects.title')}</h2>

            {/* bento grid */}
            <div className="
                bento-grid grid grid-cols-1 md:grid-cols-3 gap-5
                px-5 md:px-20
                auto-rows-[30vw] md:auto-rows-[20vw]
            ">
                {projects.map((project, id) => (
                    <div key={id} className={`bento-item ${project.size}`}>
                        <BentoItem
                            title={project.title}
                            image={project.image}
                            link={project.link}
                            description={project.description}
                        />
                    </div>
                ))
                }
            </div>
        </section>
    );
}