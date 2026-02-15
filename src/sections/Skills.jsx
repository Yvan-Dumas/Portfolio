import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

import SkillCard from "../components/SkillCard";

import javaImg from "../assets/images/skills/java.svg";
import pythonImg from "../assets/images/skills/python.svg";
import htmlImg from "../assets/images/skills/html5.svg";
import cssImg from "../assets/images/skills/css3.svg";
import jsImg from "../assets/images/skills/js.svg";
import reactImg from "../assets/images/skills/react.svg";
import tailwindImg from "../assets/images/skills/tailwind.svg";
import sqlImg from "../assets/images/skills/sql.svg";
import cImg from "../assets/images/skills/c++.svg";
import figmaImg from "../assets/images/skills/figma.svg";
import djangoImg from "../assets/images/skills/django.png";
import gitImg from "../assets/images/skills/git.svg";
import { useGSAP } from "@gsap/react";


const row1 = [
    { name: "HTML", icon: htmlImg },
    { name: "CSS", icon: cssImg },
    { name: "JavaScript", icon: jsImg },
    { name: "React", icon: reactImg },
    { name: "Tailwind", icon: tailwindImg },
    { name: "Figma", icon: figmaImg },
];

const row2 = [
    { name: "Java", icon: javaImg },
    { name: "Python", icon: pythonImg },
    { name: "C++", icon: cImg },
    { name: "SQL", icon: sqlImg },
    { name: "Django", icon: djangoImg },
    { name: "git", icon: gitImg },
];


export default function Skills() {
    const { t } = useTranslation();
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);
    const container = useRef(null);

    useGSAP(() => {
        gsap.to(row1Ref.current, {
            xPercent: -33.33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333,
            ease: "none",
            duration: 15,
            repeat: -1,
        });

        gsap.set(row2Ref.current, { xPercent: -33.3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333 });
        gsap.to(row2Ref.current, {
            xPercent: 0,
            ease: "none",
            duration: 17,
            repeat: -1,
        });
    }, { scope: container });

    return (
        <section id="skills" className="min-h-screen">
            <h2 className="text-section-heading font-bold max-w-full mx-auto px-8 tracking-tight md:pt-15">{t('skills.title')}</h2>

            <div ref={container} className="
                flex flex-col gap-10 
                w-full  overflow-hidden
                mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] 
                [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
                mt-16 py-1
            ">
                {/* First row */}
                <div id="row1" ref={row1Ref} className="flex gap-2 md:gap-3 w-max">
                    {[...row1, ...row1, ...row1].map((skill, id) => (
                        <SkillCard skill={skill} key={`r1-${id}`} />
                    ))}
                </div>

                {/* Second row */}
                <div id="row2" ref={row2Ref} className="flex gap-2 md:gap-3 w-max">
                    {[...row2, ...row2, ...row2].map((skill, id) => (
                        <SkillCard skill={skill} key={`r2-${id}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}