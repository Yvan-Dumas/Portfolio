export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 pt-5">
      <div className="text-4xl md:text-6xl font-bold mb-2">
        Hi, <span className="inline-block animate-wave">👋</span>
      </div>

      <h2 className="text-3xl md:text-3xl font-bold">I'm Yvan Dumas</h2>
      <h3 className="text-lg md:text-xl">Engineering student in Computer Science at Polytech Lyon.</h3>
      <p className="text-secondary-text text-base md:text-lg">Based in Lyon, France</p>

      <p className="pt-5 pb-1">Looking for a 5-month internship abroad, starting in September 2026.</p>

      <button className="border-2 rounded-full px-4 text-base">Contact me</button>
    </section>
  );
}
