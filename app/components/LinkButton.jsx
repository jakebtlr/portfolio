import Link from "next/link";

export default function LinkButton({ href, children, external = false }) {
    const baseStyle = { 
        display: "inline-block",
        backgroundColor: "#1a2332",
        color: "white",
        padding: "0.75rem 1.5rem",
        fontSize: "0.95rem",
        fontWeight: "600",
        borderRadius: "4px",
        textDecoration: "none",
        transition: "background-color 0.2s",
    };

    const hoverIn = (e) => {
        e.currentTarget.style.backgroundColor = "#2c3e50";
    };

    const hoverOut = (e) => {
        e.currentTarget.style.backgroundColor = "#1a2332";
    };

    if (external) {
        return (
            <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={baseStyle}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
            >
                {children}
            </a>
        );
    }

    return(
        <Link
            href={href}
            style={baseStyle}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
        >
            {children}
        </Link>
    );
}