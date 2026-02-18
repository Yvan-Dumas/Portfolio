import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Button({ content, href }) {

    // Smooth scroll with GSAP
    const handleClick = () => {
        gsap.to(window, { duration: 1, scrollTo: { y: href, offsetY: 0 }, ease: "power3.inOut" });
    };
    
    return (
        <a onClick={() => handleClick()} className="btn-style md:py-2 md:px-6">
            {content}
        </a>
    );
}