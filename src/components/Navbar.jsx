import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ActionButton from "./ActionButton";

import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const container = useRef();

    const navLinks = [
        { name: t('navbar.home'), href: 'home' },
        { name: t('navbar.about'), href: "about" },
        { name: t('navbar.skills'), href: "skills" },
        { name: t('navbar.projects'), href: 'projects' },
        { name: t('navbar.journey'), href: 'journey' },
        { name: t('navbar.contact'), href: 'contact' }
    ];

    // Animations
    useGSAP(() => {
        const tl = gsap.timeline();

        // name animation
        tl.from("h1", {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })
            // button
            .from(".navbar-btn", {
				scale : 0.9,
				opacity: 0,
			})
            // text under name
            .from(".navbar-portfolio-text", {
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })
            // links
            .from(".navbar-content > *", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1
            }, "-=0.6");

    }, { scope: container })



    // Smooth scroll with GSAP
    const handleClick = (e, id) => {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: { y: `#${id}`, offsetY: 0 }, ease: "power3.inOut" });
    };


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
        <nav ref={container} className="smooth-lang md:fixed top-0 z-50 w-full flex justify-between items-start max-w-full mx-auto px-6 py-6 pointer-events-none selection:bg-hover">

            {/* left part: navigation */}
            <div className="flex flex-col items-start leading-tight pointer-events-auto">
                <h1 className="font-bold text-base tracking-tight">Yvan Dumas</h1>
                <span className="navbar-portfolio-text text-sm ml-4">/ Portfolio</span>

                <ul className="navbar-content flex flex-col ml-8">
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
            <div className="navbar-btn pointer-events-auto">
                <ActionButton
                    handleClick={() => toggleLanguage()}
                    content={`${t('navbar.language')} : ${i18n.language === 'fr' ? 'FR' : 'EN'}`} />
            </div>
        </nav>
    );
}