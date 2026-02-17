import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();
    const [time, setTime] = useState("");

    // Mise à jour de l'heure locale
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="contact" className="mt-50 md:mt-0 md:min-h-screen w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* Left column */}
                <div>
                    <h2 className="text-section-heading font-bold max-w-full px-8 tracking-tight md:pt-15 mb-5 md:mb-10">
                        {t('contact.title')}
                    </h2>
                    <p className="text-xl text-secondary-text max-w-md">
                        {t('contact.subtitle')}
                    </p>
                    
                    {/* Local Time Widget */}
                    <div className="mt-12 flex items-center gap-2 text-sm font-mono uppercase tracking-widest">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Based in Lyon, FR — {time}
                    </div>
                </div>

                {/* Colonne Droite : Liens */}
                <div className="flex flex-col gap-6 justify-end">
                    <a href="mailto:ton@mail.com" className="text-3xl md:text-5xl font-medium hover:italic transition-all">
                        ton@mail.com
                    </a>
                    
                    <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8">
                        <ContactLink href="https://linkedin.com/..." label="LinkedIn" />
                        <ContactLink href="https://github.com/..." label="GitHub" />
                        <ContactLink href="/cv.pdf" label="Download CV" isBold />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactLink({ href, label, isBold }) {
    return (
        <a href={href} target="_blank" rel="noreferrer" 
           className={`text-lg hover:underline underline-offset-8 ${isBold ? 'font-bold' : 'text-secondary-text'}`}>
            {label}
        </a>
    );
}