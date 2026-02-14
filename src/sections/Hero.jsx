import { useTranslation } from "react-i18next";

import Button from "../components/Button";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="flex flex-col items-center justify-center text-center px-4 pt-5 min-h-screen">
      <div className="flex items-center text-4xl md:text-5xl font-bold mb-2">
        <span>{t('hero.greetings')}</span>
        <span className="animate-wave origin-bottom-right relative -top-0.5">👋</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-bold">{t('hero.name')}</h2>
      <h3 className="text-base md:text-xl leading-tight">{t('hero.state')}</h3>
      <p className="text-secondary-text text-base md:text-xl">{t('hero.location')}</p>

      <p className="text-sm md:text-lg pt-5 pb-2 leading-tight">{t('hero.internship')}</p>

      <Button content={t('hero.button')} />
    </section>
  );
}
