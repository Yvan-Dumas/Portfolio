import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollDots() {

    useGSAP(() => {
        const dots = document.querySelectorAll(".dot-trigger");

        dots.forEach((dot) => {
            const sectionId = dot.getAttribute("target");

            // Trigger to change the color of the dot
            ScrollTrigger.create({
                trigger: `#${sectionId}`,
                start: "top center",
                end: "bottom center",
                scrub : true,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(dot, { backgroundColor: "#1A1A1A", scale: 1, duration: 0.2 });
                    } else {
                        gsap.to(dot, { backgroundColor: "transparent", scale: 1, duration: 0.2 });
                    }
                },
            });
        });
    }, []);

    // When clicking on a dot
    const handleClick = (id) => {
        gsap.to(window, { duration: 1, scrollTo: { y: `#${id}`, offsetY: 0 }, ease: "power3.inOut" });
    };

    return (
        <nav className="hidden fixed right-8 top-1/2 -translate-y-1/2 z-50 md:flex flex-col gap-5 selection:bg-hover">
            {["home", "about", "skills", "projects", "journey", "contact"].map((id) => (
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