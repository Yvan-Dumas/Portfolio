import { useTranslation } from "react-i18next";

export default function Education() {
    const { t } = useTranslation();

    return (
        <section id="journey" className="mt-50 md:min-h-screen w-full">
            <h2 className="text-section-heading font-bold max-w-full mx-auto px-8 tracking-tight md:pt-15">{t('skills.title')}</h2>
        </section>
    );
}