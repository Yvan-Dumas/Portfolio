import gsap from 'gsap';
import AnimatedCursor from "react-animated-cursor";

import { useGSAP } from '@gsap/react';
import { ReactLenis } from 'lenis/react';
import { useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


import Navbar from './components/Navbar';
import ScrollDots from './components/ScrollDots';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Journey';
import Contact from './sections/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
	const lenisRef = useRef();

	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 768);
		checkMobile(); // initial check
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	useGSAP(() => {
		ScrollTrigger.normalizeScroll(true);

		function update(time) {
			lenisRef.current?.lenis?.raf(time * 1000)
		}
		gsap.ticker.add(update)
		return () => gsap.ticker.remove(update)
	}, []);

	return (
		<>
			{!isMobile && <AnimatedCursor
				innerSize={10}
				outerSize={40}
				innerScale={0.8}
				outerScale={2}
				outerAlpha={0}
				trailingSpeed={8}
				hasBlendMode={true}
				innerStyle={{
					backgroundColor: 'var(--color-text)',
					zIndex: 9999
				}}
				outerStyle={{
					border: '1px solid var(--color-text)',
					zIndex: 9998
				}}
				clickables={[
					'a',
					'button',
					'input',
					'select',
					'textarea',
					'.link',
				]}
			/>}
			<ReactLenis root options={{
				autoRaf: false,
				duration: 1.5,
				lerp: 0.08,
				wheelMultiplier: 1,
				infinite: false,
				touchMultiplier: 2,
				smoothTouch: false,
				enabled: !isMobile
			}} ref={lenisRef}>
				<Navbar />
				<ScrollDots />
				<main className='smooth-lang selection:bg-hover md:px-36'>
					<Hero />
					<About />
					<Skills />
					<Projects />
					<Education />
					<Contact />
				</main>
			</ReactLenis>
		</>
	);
}