export default function ActionButton({ content, href, download, handleClick }) {
    const className = "btn-style";

    if (href) {
        return (
            <a href={href} download={download} target="_blank" rel="noreferrer" className={className}>
                {content}
            </a>
        );
    }

    return (
        <button
            type="button"
            className={className}
            onClick={handleClick}
        >
            {content}
        </button>
    );
}