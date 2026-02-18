import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ActionButton from "../components/ActionButton";

import linkedinImg from "../assets/images/contact/linkedin.svg";
import githubImg from "../assets/images/contact/github.svg";

export default function Contact() {
    const { t } = useTranslation();
    const [time, setTime] = useState("");

    // Local time update
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="contact" className="pt-50 md:pt-0 md:min-h-screen pb-10 md:pb-20">
            <h2 className="text-section-heading font-bold max-w-full px-8 tracking-tight md:pt-15 mb-5 md:mb-10">
                {t('contact.title')}
            </h2>

            <div className="flex flex-col gap-6 px-5 md:px-20 mt-20 items-start">
                {/* mail */}
                <a href="mailto:yvandumas05@gmail.com" className="text-xl md:text-2xl font-medium transition-all hover:text-secondary-text w-max">
                    yvandumas05@gmail.com
                </a>

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
                <ActionButton
                    content={t('contact.resume')}
                    href={"/DumasYvan-resume.pdf"}
                />
                
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