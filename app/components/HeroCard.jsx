export default function HeroCard({ title, children }) {
    return (
        <aside
            aria-label={title}
            style={{
                flex: "0 1 380px",
                backgroundColor: "#f8f9fa",
                border: "1px solid #e1e8ed",
                borderRadius: "6px",
                padding: "1.5rem",
            }}
        >
            <div
                style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#718096",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: "1rem",
                }}
            >
                {title}
            </div>
            {children}
        </aside>
    );
}

export const heroRowStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
    padding: "0.75rem 0",
    borderTop: "1px solid #e1e8ed",
};

export const heroRowLabelStyle = {
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#718096",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
};

export const heroRowValueStyle = {
    fontSize: "0.95rem",
    color: "#1a2332",
    fontWeight: 500,
    lineHeight: 1.5,
};
