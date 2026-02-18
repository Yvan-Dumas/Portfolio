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
        <section id="contact" className="pt-50 md:pt-50 md:min-h-screen">
            <h2 className="text-section-heading font-bold max-w-full px-8 tracking-tight md:pt-15 mb-5 md:mb-10">
                {t('contact.title')}
            </h2>
            <div className="px-5 md:px-20 mt-20">
                <a href="mailto:yvandumas05@gmail.com" className="text-xl md:text-2xl font-medium transition-all">
                    yvandumas05@gmail.com
                </a>

                <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8">
                    <ContactLink href="https://linkedin.com/..." label="LinkedIn" />
                    <ContactLink href="https://github.com/..." label="GitHub" />
                    <ContactLink href="/cv.pdf" label="Download resume" isBold />
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