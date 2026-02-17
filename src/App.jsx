import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactLenis } from 'lenis/react';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from './components/Navbar';
import ScrollDots from './components/ScrollDots';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Journey';
import Contact from './sections/Contact';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {
	const lenisRef = useRef();

	useGSAP(() => {
		ScrollTrigger.normalizeScroll(true);

		function update(time) {
			lenisRef.current?.lenis?.raf(time * 1000)
		}
		gsap.ticker.add(update)
		return () => gsap.ticker.remove(update)
	}, []);

	return (
		<ReactLenis root options={{
			autoRaf: false,
			duration: 1.5,
			lerp: 0.08,
			wheelMultiplier: 1,
			infinite: false,
			touchMultiplier: 2,
		}} ref={lenisRef}>
			<Navbar />
			<ScrollDots />
			<main className='selection:bg-hover md:px-36'>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Education />
				<Contact />
			</main>
		</ReactLenis>
	);
}