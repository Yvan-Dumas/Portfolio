import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ScrollDots() {
    const container = useRef();
    const sections = ["home", "about", "skills", "projects", "journey", "contact"];

    useGSAP(() => {
        // animation
        gsap.from(".dot-trigger", {
            scale: 0,
            opacity: 0,
            x: 20,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
        })

        const dots = gsap.utils.toArray(".dot-trigger", container.current);

        dots.forEach((dot) => {
            const sectionId = dot.getAttribute("data-target");
            const section = document.getElementById(sectionId);

            // Trigger to change the color of the dot
            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "bottom center",
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(dot, { backgroundColor: "#1A1A1A", duration: 0.2 });
                    } else {
                        gsap.to(dot, { backgroundColor: "transparent", duration: 0.2 });
                    }
                },
            });
        });
        ScrollTrigger.refresh();
    }, {scope: container});

    // When clicking on a dot
    const handleClick = (id) => {
        gsap.to(window, { duration: 1, scrollTo: { y: `#${id}`, offsetY: 0 }, ease: "power3.inOut" });
    };

    return (
        <nav ref={container} className="smooth-lang hidden fixed right-8 top-1/2 -translate-y-1/2 z-50 md:flex flex-col gap-3 selection:bg-hover">
            {sections.map((id) => (
                <button
                    key={id}
                    data-target={id}
                    onClick={() => handleClick(id)}
                    className="dot-trigger w-3 h-3 rounded-full border-2 border-text cursor-pointer"
                    aria-label={`Scroll to ${id}`}
                />
            ))}
        </nav>
    );
}