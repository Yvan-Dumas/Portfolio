import { useTranslation, Trans } from "react-i18next";

import chopperImg from "../assets/images/Chopper.png";

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="mt-20 md:mt-0 md:min-h-screen py-20 md:py-0">
            <h2 className="text-section-heading font-bold max-w-full mx-auto px-8 tracking-tight md:pt-15">{t('about.title')}</h2>
            <div className="flex flex-col items-center center md:flex-row px-10 md:pl-20 gap-10 md:gap-20">
                <p className="mt-10 md:mt-15 whitespace-pre-line">
                    <Trans
                        i18nKey="about.description"
                        components={{ b: <strong className="font-bold" /> }}
                    />
                </p>
                <img src={chopperImg} alt="3D modeling of Tony Tony Chopper from One Piece" className="flex-none w-[18vw] min-w-37.5 max-w-125 object-contain aspect-auto drop-shadow-2xl animate-float" />
            </div>
        </section>
    );
}