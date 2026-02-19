import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import ActionButton from "../components/ActionButton";

import linkedinImg from "../assets/images/contact/linkedin.svg";
import githubImg from "../assets/images/contact/github.svg";

gsap.registerPlugin(ScrollTrigger);


export default function Contact() {
    const { t } = useTranslation();
    const [time, setTime] = useState("");
    const container = useRef();

    // Local time update
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Animations
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
            }
        });

        // title animation
        tl.from("h2", {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })
            // text and button animation
            .from(".contact-content > *", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            }, "-=0.6");

    }, { scope: container })

    return (
        <section ref={container} id="contact" className="md:min-h-screen pb-10">
            <h2 className="text-section-heading font-bold max-w-full px-8 tracking-tight md:pt-15 mb-5 md:mb-10">
                {t('contact.title')}
            </h2>

            <div className="contact-content flex flex-col gap-6 px-10 md:px-20 mt-10 md:mt-20 items-start">
                {/* mail */}
                <div>
                <a href="mailto:yvandumas05@gmail.com" className="text-xl md:text-2xl font-medium transition-all hover:text-secondary-text w-max">
                    yvandumas05@gmail.com
                </a>
                </div>

                {/* Linkedin */}
                <ContactLink
                    href="https://www.linkedin.com/in/yvan-dumas/"
                    label="LinkedIn"
                    icon={linkedinImg}
                />

                {/* Github */}
                <ContactLink
                    href="https://github.com/Yvan-Dumas"
                    label="GitHub"
                    icon={githubImg}
                />

                {/* Resume */}
                <div>
                <ActionButton
                    content={t('contact.resume')}
                    href={"/DumasYvan-resume.pdf"}
                />
                </div>

                {/* Local time */}
                <div className="mt-5 md:mt-10 flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-secondary-text">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Lyon, FR — {time}
                </div>
            </div>
        </section>
    );
}

function ContactLink({ href, label, icon }) {
    return (
        <a href={href} target="_blank" rel="noreferrer"
            className={`flex items-center gap-3 text-lg hover:underline underline-offset-8`}>
            <img src={icon} alt={`${label} icon`} className="w-8 h-8 opacity-80" />
            {label}
        </a>
    );
}