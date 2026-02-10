export default function Navbar() {
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: "#about" },
        { name: 'Skills', href: "#skills" },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience & Education', href: '#experience' }
    ];

    return (
        <nav className="sticky top-0 z-50 w-full flex justify-between items-start px-8 py-6">

            {/* left part: navigation */}
            <div className="flex items-baseline gap-1 leading-4.5">
                <h1 className="font-bold text-lg">Yvan Dumas</h1>
                <span>/ Portfolio</span>

                <ul className="flex flex-col">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="font-extralight hover:underline">
                                / {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>

            {/* right part: language btn */}
            <button className="border-2 rounded-full px-4 text-base">
                Language
            </button>
        </nav>
    );
}