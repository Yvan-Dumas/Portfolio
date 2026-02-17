export default function BentoItem({title, image, className, link}) {

    return (
        <div className={`
        overflow-hidden 
        rounded-lg md:rounded-2xl
        hover:scale-[1.02] transition-all duration-500
        h-full w-auto
        ${className}
        `}>
            <a href={link} target="_blank">
                <img src={image} alt={`${title} project.`} className="w-full h-full object-cover object-center"/>
            </a>
        </div>
    );
}