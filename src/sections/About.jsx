import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about">
            <h2 className="text-section-heading font-bold max-w-full mx-auto px-8 tracking-tight">{t('about.title')}</h2>
            <p className="mt-10 md:mt-15 px-10 md:px-20">{t('about.description')}
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
            </p>
        </section>
    );
}