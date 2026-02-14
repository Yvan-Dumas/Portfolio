import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ScrollDots() {
    useEffect(() => {
        const dots = document.querySelectorAll(".dot-trigger");

        dots.forEach((dot) => {
            const sectionId = dot.getAttribute("target");

            ScrollTrigger.create({
                trigger: `#${sectionId}`,
                start: "top center",
                end: "bottom center",
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(dot, { backgroundColor: "#1A1A1A", scale: 1, duration: 0.3 });
                    } else {
                        gsap.to(dot, { backgroundColor: "transparent", scale: 1, duration: 0.3 });
                    }
                },
            });
        });
    }, []);

    const handleClick = (id) => {
        gsap.to(window, { duration: 1, scrollTo: { y: `#${id}`, offsetY: 100 }, ease: "power3.inOut" });
    };

    return (
        <nav className="hidden fixed right-8 top-1/2 -translate-y-1/2 z-50 md:flex flex-col gap-5 selection:bg-hover">
            {["home", "about", "skills", "projects", "journey"].map((id) => (
                <button
                    key={id}
                    target={id}
                    onClick={() => handleClick(id)}
                    className="dot-trigger w-3 h-3 rounded-full border-2 border-text cursor-pointer"
                />
            ))}
        </nav>
    );
}