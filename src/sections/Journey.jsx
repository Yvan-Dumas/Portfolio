import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

import JourneyCard from "../components/JourneyCard";

// Icons imports
import briefcaseImg from "../assets/images/journey/briefcase.svg";
import clipboardImg from "../assets/images/journey/clipboard.svg";
import graduationCapImg from "../assets/images/journey/graduation-cap.svg";

gsap.registerPlugin(ScrollTrigger);



export default function Education() {
    const { t } = useTranslation();

    // Cards data
    const journeyData = [
        { title: t('journey.polytech.title'), date: t('journey.polytech.date'), description: t('journey.polytech.description'), image: graduationCapImg },
        { title: t('journey.carrefour.title'), date: t('journey.carrefour.date'), description: t('journey.carrefour.description'), image: briefcaseImg },
        { title: t('journey.peip.title'), date: t('journey.peip.date'), description: t('journey.peip.description'), image: graduationCapImg },
        { title: t('journey.cntb.title'), date: t('journey.cntb.date'), description: t('journey.cntb.description'), image: briefcaseImg },
        { title: t('journey.lycee.title'), date: t('journey.lycee.date'), description: t('journey.lycee.description'), image: graduationCapImg },
        { title: t('journey.iris.title'), date: t('journey.iris.date'), description: t('journey.iris.description'), image: clipboardImg },
    ];

    const container = useRef();

    // Animations
    useGSAP(() => {
        // title
        gsap.from("h2", {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            }
        });


        // Timeline and dot
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current.querySelector(".relative"),
                start: "top 70%",
                end: "bottom 50%",
                scrub: 1,
            }
        });
        tl.to(".timeline-line", { scaleY: 1, ease: "none" }, 0);
        tl.to(".timeline-dot", {
            yPercent: 100,
            top: "100%",
            y: -12,
            ease: "none",
        }, 0);


        const items = gsap.utils.toArray(".journey-item");
        // Responsive with matchMedia
        let mm = gsap.matchMedia();
        // Desktop config
        mm.add("(min-width: 768px)", () => {
            items.forEach((item, index) => {
                const isPair = index % 2 === 0;
                gsap.from(item, {
                    x: isPair ? -100 : 100,
                    opacity: 0,
                    duration: 1.2,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                    }
                });
            });
        });
        // mobile config
        mm.add("(max-width: 767px)", () => {
            items.forEach((item) => {
                gsap.from(item, {
                    x: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 60%",
                    }
                });
            });
        });
        return () => mm.revert();
    }, { scope: container });

    return (
        <section ref={container} id="journey" className="pb-50 md:pb-50 md:min-h-screen">
            <h2 className="text-section-heading font-bold max-w-full px-8 tracking-tight md:pt-15 mb-5 md:mb-10">{t('journey.title')}</h2>

            <div className="relative ">
                {/* Timeline */}
                <div className="absolute mx-5 md:mx-0 md:left-1/2 h-full w-[0.15rem]">
                    {/* line */}
                    <div className="timeline-line origin-top h-full w-full rounded-full bg-text scale-y-0" />
                    {/* bullet */}
                    <div className="timeline-dot absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-text rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </div>

                {/* Education and Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-10 lg:gap-x-20 items-center gap-y-10 md:gap-y-20 lg:gap-y-50 xl:gap-y-70 mx-10">
                    {journeyData.map((item, index) => (
                        <div key={index} className={`journey-item`}>
                            <JourneyCard
                                index={index}
                                {...item}
                                isLeft={index % 2 === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}