import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation, Trans } from "react-i18next";
import { useRef } from "react";

import ActionButton from "../components/ActionButton";

import chopperImg from "../assets/images/Chopper.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const { t } = useTranslation();
    const container = useRef();

    // Animations
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
            }
        });

        // title animation
        tl.from("h2", {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })
            // text and button animation
            .from(".about-content > *", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            }, "-=0.6");

        // image animation
        gsap.fromTo("img",
            { rotation: -5 },
            {
                rotation: 5,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 70%",
                    end: "bottom top",
                    scrub: 1,
                }
            });
    }, { scope: container })

    return (
        <section ref={container} id="about" className="pb-50 md:pb-0 md:min-h-screen">
            <h2 className="text-section-heading font-bold max-w-full mx-auto px-8 tracking-tight md:pt-15">{t('about.title')}</h2>
            <div className="flex flex-col items-center center md:flex-row px-10 md:pl-20 gap-10 md:gap-20">
                <div className="about-content flex flex-col gap-5 items-start">
                    <p className="mt-10 md:mt-15 whitespace-pre-line">
                        <Trans
                            t = {t}
                            i18nKey="about.description"
                            components={{
                                b: <strong className="font-bold" />,
                                l: <a href="https://www.instagram.com/venty_3d/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-4 decoration-1 hover:decoration-2 transition-all duration-300 font-bold"
                                />
                            }}
                        />
                    </p>
                    {/* Resume */}
                    <div>
                        <ActionButton
                            content={t('contact.resume')}
                            href={"/resume/YvanDumas-resume.pdf"}
                        />
                    </div>
                </div>
                <a href="https://www.instagram.com/venty_3d/" target="_blank" rel="noopener noreferrer">
                    <img src={chopperImg} alt="3D modeling of Tony Tony Chopper from One Piece" className="flex-none w-[18vw] min-w-37.5 max-w-125 object-contain aspect-auto drop-shadow-2xl" />
                </a>
            </div>
        </section>
    );
}