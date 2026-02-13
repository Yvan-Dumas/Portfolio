export default function Button({ content }) {

    return (
        <button className="
        border-2 border-text font-bold rounded-full px-2 py-0.5 md:px-4 md:py-1 
        hover:bg-hover hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] active:scale-95 transition-all duration-500 ease-out
        cursor-pointer overflow-hidden pointer-event-auto
        ">
            { content }
        </button>
    );
}