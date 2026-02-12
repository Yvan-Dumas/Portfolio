import Button from "../components/Button";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center px-4 pt-5 min-h-screen">
      <div className="flex items-center text-4xl md:text-5xl font-bold mb-2">
        <span>Hi, </span>
        <span className="animate-wave origin-bottom-right relative -top-0.5">👋</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-bold">I'm Yvan Dumas</h2>
      <h3 className="text-base md:text-xl leading-tight">Engineering student in Computer Science at Polytech Lyon.</h3>
      <p className="text-secondary-text text-base md:text-xl">Based in Lyon, France</p>

      <p className="text-sm md:text-lg pt-5 pb-2 leading-tight">Looking for a 5-month internship abroad, starting in September 2026.</p>

      <Button content={"Contact me !"} />
    </section>
  );
}
