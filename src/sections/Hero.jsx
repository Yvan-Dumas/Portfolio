import gsap from "gsap";

import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import ScrollButton from "../components/ScrollButton";

export default function Hero() {
	const { t } = useTranslation();
	const container = useRef();

	// Texts and button apparition
	useGSAP(() => {
		const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } })
		tl.from(".hero-identity", { // Text (1st part)
			y: 30,
			opacity: 0,
			stagger: 0.5,
		})
			.from(".hero-info", { // Text (2nd part)
				y: 20,
				opacity: 0,
				stagger: 0.1,
			},)
			.from(".hero-btn", { // button
				scale : 0.9,
				opacity: 0,
			}, "-=0.6");
	}, { scope: container });

	return (
		<section ref={container} id="home" className="flex flex-col items-center justify-center text-center px-4 md:min-h-screen pb-50 md:pb-0 pt-50 md:pt-0">
			<div className="hero-identity flex items-center text-[clamp(2.5rem,7vw,3rem)] font-bold mb-2 leading-5">
				<span>{t('hero.greetings')}</span>
				<span className="animate-wave origin-bottom-right relative -top-0.5">👋</span>
			</div>

			<h2 className="hero-identity text-[clamp(1.5rem,7vw,2.5rem)] font-bold">{t('hero.name')}</h2>
			<h3 className="hero-info text-base md:text-xl leading-tight">{t('hero.state')}</h3>
			<p className="hero-info text-secondary-text text-base md:text-xl">{t('hero.location')}</p>

			<p className="hero-info text-sm md:text-lg pt-5 pb-2 leading-tight">{t('hero.internship')}</p>

			<div className="hero-btn py-2">
				<ScrollButton content={t('hero.button')} href={"#contact"} />
			</div>
		</section>
	);
}
