import { useTranslation } from "react-i18next";
import JourneyCard from "../components/JourneyCard";

// Icons imports
import briefcaseImg from "../assets/images/journey/briefcase.svg";
import clipboardImg from "../assets/images/journey/clipboard.svg";
import graduationCapImg from "../assets/images/journey/graduation-cap.svg";

export default function Education() {
    const { t } = useTranslation();

    // Cards data
    const journeyData = [
        { title: t('journey.polytech.title'), date: t('journey.polytech.date'), description: t('journey.polytech.description'), image: graduationCapImg },
        { title: t('journey.carrefour.title'), date: t('journey.carrefour.date'), description: t('journey.carrefour.description'), image: briefcaseImg },
        { title: t('journey.peip.title'), date: t('journey.peip.date'), description: t('journey.peip.description'), image: graduationCapImg },
        { title: t('journey.cntb.title'), date: t('journey.cntb.date'), description: t('journey.cntb.description'), image: briefcaseImg },
        { title: t('journey.lycee.title'), date: t('journey.lycee.date'), description: t('journey.lycee.description'), image: graduationCapImg },
        { title: t('journey.iris.title'), date: t('journey.iris.date'), description: t('journey.iris.description'), image: clipboardImg },  
    ];

    return (
        <section id="journey" className="pt-50 md:pt-50 md:min-h-screen">
            <h2 className="text-section-heading font-bold max-w-full px-8 tracking-tight md:pt-15 mb-5 md:mb-10">{t('journey.title')}</h2>

            <div className="relative md:mx-20">
                {/* Timeline */}
                <div className="absolute mx-5 md:mx-0 md:left-1/2 h-full w-0.5 rounded-full bg-text"/>

                {/* Education and Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-25 items-center gap-y-10 md:gap-y-20 lg:gap-y-50 mx-12">
                    {journeyData.map((item, index) => (
                        <JourneyCard
                            key={index}
                            index={ index }
                            {...item}
                            isLeft={index % 2 === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}