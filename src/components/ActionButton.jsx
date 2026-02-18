export default function ActionButton({ content, href, download }) {
    const className = "btn-style";

    if (href) {
        return (
            <a href={href} download={download} target="_blank" rel="noreferrer" className={className}>
                {content}
            </a>
        );
    }

    return (
        <button className={className}>
            {content}
        </button>
    );
}