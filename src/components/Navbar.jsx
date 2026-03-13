import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ActionButton from "./ActionButton";

import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const container = useRef();
    const [isOpen, setIsOpen] = useState(false);

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
                scale: 0.9,
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
                i18n.changeLanguage(newLanguage);
                gsap.to(".smooth-lang", {
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }
        });
    }

    return (
        <nav ref={container} className="smooth-lang fixed top-0 z-50 w-full flex justify-between items-start px-6 py-6 pointer-events-none">

            {/* Left part */}
            <div className="flex flex-col items-start leading-tight pointer-events-auto">
                <h1 className="hidden md:block font-bold text-base tracking-tight">Yvan Dumas</h1>
                <span className="hidden md:block navbar-portfolio-text text-sm ml-2 lg:ml-4">/ Portfolio</span>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-base mt-1 opacity-70 hover:opacity-100 transition-opacity"
                >
                    {isOpen ? "[ menu ]" : "[ menu ]"}
                </button>

                {/* links list */}
                <ul className={`
                    navbar-content flex flex-col ml-4 lg:ml-8 transition-all duration-300
                    ${isOpen ? "opacity-100 h-auto mt-1" : "opacity-0 h-0 overflow-hidden md:opacity-100 md:h-auto md:mt-0"}
                `}>
                    {navLinks.map((link) => (
                        <li key={link.name} className="py-1 md:py-0">
                            <a
                                onClick={(e) => { handleClick(e, link.href); setIsOpen(false); }}
                                href={`#${link.href}`}
                                className="font-extralight hover:underline text-sm"
                            >
                                / {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right part : language button */}
            <div className="navbar-btn pointer-events-auto">
                <ActionButton
                    handleClick={() => toggleLanguage()}
                    content={i18n.language.toUpperCase()}
                />
            </div>
        </nav>
    );
}