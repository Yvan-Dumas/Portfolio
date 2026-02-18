import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ActionButton from "./ActionButton";

import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
    const navLinks = [
        { name: 'Home', href: 'home' },
        { name: 'About', href: "about" },
        { name: 'Skills', href: "skills" },
        { name: 'Projects', href: 'projects' },
        { name: 'Journey', href: 'journey' },
        { name: 'Contact', href: 'contact' }
    ];

    // Smooth scroll with GSAP
    const handleClick = (e, id) => {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: { y: `#${id}`, offsetY: 0 }, ease: "power3.inOut" });
    };


    const { i18n } = useTranslation();

    // Change language
    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'fr' ? 'en' : 'fr';
        gsap.to(".smooth-lang", {
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
                // 2. On change la langue quand c'est invisible
                i18n.changeLanguage(newLanguage);

                // 3. On fait réapparaître le contenu avec le nouveau texte
                gsap.to(".smooth-lang", {
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }
        });        
    }

    return (
        <nav className="smooth-lang md:fixed top-0 z-50 w-full flex justify-between items-start max-w-full mx-auto px-6 py-6 pointer-events-none selection:bg-hover">

            {/* left part: navigation */}
            <div className="flex flex-col items-start leading-tight pointer-events-auto">
                <h1 className="font-bold text-base tracking-tight">Yvan Dumas</h1>
                <span className="text-sm ml-4">/ Portfolio</span>

                <ul className="flex flex-col ml-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a onClick={(e) => handleClick(e, link.href)} href={`#${link.href}`} className="font-extralight hover:underline transition-all text-sm">
                                / {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* right part: language btn */}
            <div className="pointer-events-auto">
                <ActionButton
                    handleClick={() => toggleLanguage()}
                    content={`Language : ${i18n.language === 'fr' ? 'FR (WIP)' : 'EN'}`} />
            </div>
        </nav>
    );
}