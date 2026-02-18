import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Button from "./Button";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
    const navLinks = [
        { name: 'Home', href: 'home' },
        { name: 'About', href: "about" },
        { name: 'Skills', href: "skills" },
        { name: 'Projects', href: 'projects' },
        { name: 'Journey', href: 'journey' },
        { name : 'Contact', href : 'contact'}
    ];

    const handleClick = (e, id) => {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: { y: `#${id}`, offsetY: 0 }, ease: "power3.inOut" });
    };


    return (
        <nav className="md:fixed top-0 z-50 w-full flex justify-between items-start max-w-full mx-auto px-6 py-6 pointer-events-none selection:bg-hover">

            {/* left part: navigation */}
            <div className="flex flex-col items-start leading-tight pointer-events-auto">
                <h1 className="font-bold text-base tracking-tight">Yvan Dumas</h1>
                <span className="text-sm ml-4">/ Portfolio</span>

                <ul className="flex flex-col ml-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a onClick={ (e) => handleClick(e, link.href) } href={`#${link.href}`} className="font-extralight hover:underline transition-all text-sm">
                                / {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>

            {/* right part: language btn */}
            <div className="pointer-events-auto">
                <Button content={"> Language"}/>
            </div>
        </nav>
    );
}