"use client";

export default function Footer() {
    const linkStyle = {
        color: "#8b98a8",
        textDecoration: "none",
        borderBottom: "1px solid transparent",
        transition: "border-bottom-color 0.2s",
        paddingBottom: "0.25px",
    }

    const handleMouseEnter = (e) => {
        e.currentTarget.style.borderBottomColor = "#8b98a8";
    }

    const handleMouseLeave = (e) => {
        e.currentTarget.style.borderBottomColor = "transparent";
    }
    
    return (
        <footer
            style={{
                backgroundColor: "#1a2332",
                color: "#8b98a8",
                padding: "1.5rem 2rem",
                textAlign: "center",
                borderTop: "1px solid #2c3e50",
                fontSize: "0.9rem",
            }}
        >
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
                © 2025 Jacob Butler. All rights reserved.
            </p>
            <p style={{ margin: "0.25rem 0 0 0" }}>
                <a 
                    href="https://www.linkedin.com/in/jacob-butler919/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    LinkedIn
                </a>
                {" • "}
                <a 
                    href="https://github.com/jakebtlr"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    GitHub
                </a>
            </p>
        </footer>
    );
}