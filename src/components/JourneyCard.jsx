export default function JourneyCard({ title, date, description, image, isLeft, index }) {
    return (
        <div className={`
            ${isLeft ? 'md:col-start-1' : 'md:col-start-2'}
            flex gap-2
            rounded-2xl p-2 md:px-5
            border-2
            hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-hover
        `}>
            <img src={ image } alt="logo" className="h-10 w-auto"/>
            <div className="content ">
                <h3 className="font-bold">{ title }</h3>
                <p className="text-secondary-text italic font-light">{ date }</p>
                <p className="whitespace-pre-line">{ description }</p>
            </div>
        </div>
    );
}