export default function SkillCard({ skill }) {
    return (
        <div className="flex items-center flex-none 
            border border-text rounded-full 
            px-2 py-0.5
            w-30
            md:w-38 h-auto
            text-sm
            md:text-base
            hover:scale-105 transition-all duration-200 ease-in hover:bg-hover hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        ">
            <img src={skill.icon} alt={`${skill.name} logo`} className="object-contain flex-none h-auto w-8 md:w-10"/>
            <div className="flex-1 flex items-center justify-center overflow-visible text-center">
                <p className="leading-none">{skill.name}</p>
            </div>
        </div>
    );
}