export default function BentoItem({title, image, className, link, description}) {
    return (
        <div className={`
            group flex flex-col
            hover:scale-[1.02] transition-all duration-500 active:scale-95 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-hover
            h-full w-full
            rounded-lg md:rounded-2xl
            ${className}
        `}>
            {/* Image */}
            <div className="flex-1 min-h-0 overflow-hidden rounded-lg md:rounded-2xl">
                <a href={link} target="_blank" rel="noreferrer" className="block h-full w-full">
                    <img 
                        src={image} 
                        alt={`${title} project.`} 
                        className="w-full h-full object-cover object-center"
                    />
                </a>
            </div>

            {/* Description */}
            <div className="h-10 md:h-8 flex items-center justify-center">
                <p className="md:opacity-0 md:group-hover:opacity-100 transition-opacity px-2 text-sm leading-tight">
                    {description}
                </p>
            </div>
        </div>
    );
}