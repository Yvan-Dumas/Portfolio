import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Button({ content, href }) {
    // Buttons style
    const className=`
            border-2 border-text font-bold rounded-full px-2 py-0.5 md:px-4 md:py-1 
            hover:bg-hover hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] active:scale-95 transition-all duration-500 ease-out
            cursor-pointer overflow-hidden
        `

    // Smooth scroll with GSAP
    const handleClick = () => {
        console.log("a");
        gsap.to(window, { duration: 1, scrollTo: { y: href, offsetY: 0 }, ease: "power3.inOut" });
    };

    if (href) {
        return (
            <a onClick={() => handleClick()}  className={className}>
                {content}
            </a>
        );
    }

    return (
        <button className={className}>
            {content}
        </button>
    );
}