import { useTranslation, Trans } from "react-i18next";

import chopperImg from "../assets/images/Chopper.png";

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about">
            <h2 className="text-section-heading font-bold max-w-full mx-auto px-8 tracking-tight">{t('about.title')}</h2>
            <div className="flex flex-col items-center center md:flex-row px-10 md:pl-20 gap-10">
                <p className="mt-10 md:mt-15 whitespace-pre-line">
                    <Trans
                    i18nKey="about.description"
                    components={{ b: <strong className="font-bold" /> }}
                    />
                </p>
                <img src={chopperImg} alt="3D modeling of Tony Tony Chopper from One Piece" className="flex-none w-[20vw] min-w-37.5 max-w-125 object-contain aspect-auto drop-shadow-2xl animate-float" />
            </div>
            <p><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></p>
        </section>
    );
}