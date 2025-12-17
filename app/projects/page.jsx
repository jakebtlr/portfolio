"use client";

import React from "react";
import LinkButton from "../components/LinkButton";

export default function ProjectsPage() {
  return (
    <div
        style={{
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            backgroundColor: "#f8f9fa",
            minHeight: "100vh",
            color: "#2c3e50",
        }}
    >
        {/* Hero */}
        <header
                style={{
                    backgroundColor: "white",
                    padding: "5rem 2rem",
                    borderBottom: "1px solid #e1e8ed",
                }}
            >
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <h2
                        style={{
                            fontSize: "2.25rem",
                            fontWeight: "300",
                            margin: "0 0 1rem 0",
                            color: "#1a2332",
                        }}
                    >
                        Projects
                    </h2>
                    <p
                        style={{
                            fontSize: "1rem",
                            color: "#5a6c7d",
                            maxWidth: "520px",
                            lineHeight: "1.7",
                        margin: 0,
                        }}
                    >
                        Selected work highlighting front-end development, UI/UX decisions, and
                        user-centered implementation.
                    </p>
                </div>
            </header>

        {/* Main Content */}
        <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}>
            {/* Featured Project */}
                <section style={{ marginBottom: "4rem" }}>
                    <h3
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "600",
                            color: "#1a2332",
                            marginBottom: "1.5rem",
                            paddingBottom: "0.75rem",
                            borderBottom: "3px solid #1a2332",
                        }}
                    >
                        Featured Project
                    </h3>

                    <div
                        style={{
                            backgroundColor: "white",
                            border: "1px solid #e1e8ed",
                            borderRadius: "4px",
                            padding: "2rem",
                            marginBottom: "2rem",
                        }}
                    >
                        <h4
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: "600",
                                color: "#1a2332",
                                marginBottom: "0.5rem",
                            }}
                        >
                            RockAuto.com E-Commerce Redesign
                        </h4>

                        <p
                            style={{
                                fontSize: "0.95rem",
                                color: "#718096",
                                marginBottom: "1.5rem",
                                fontStyle: "italic",
                            }}
                        >
                            Interaction Design Projects Capstone | University of North Carolina at Charlotte | August 2025 - December
                            2025
                        </p>

                        <p
                            style={{
                                fontSize: "1rem",
                                lineHeight: "1.8",
                                color: "#4a5568",
                                marginBottom: "1.5rem",
                            }}
                        >
                            Collaborated with a 6-person team to redesign the user experience for an auto parts e-commerce platform.
                            Led front-end development for core shopping features including product browsing, cart management, and
                            checkout processes.
                        </p>

                        <div style={{ marginBottom: "1.5rem" }}>
                            <h5
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                    color: "#1a2332",
                                    marginBottom: "0.75rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px",
                                }}
                            >
                                Key Contributions
                            </h5>

                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {[
                                "Developed responsive product detail pages with dynamic content rendering and similar product recommendations",
                                "Built shopping cart system with real-time calculations, quantity controls, and persistent data storage",
                                "Implemented multi-step checkout flow with form validation and secure payment processing interface",
                                "Created product comparison tool enabling side-by-side evaluation of specifications and pricing",
                            ].map((item, index) => (
                            <li
                                key={index}
                                style={{
                                    padding: "0.5rem 0 0.5rem 1.5rem",
                                    position: "relative",
                                    color: "#4a5568",
                                    fontSize: "0.95rem",
                                    lineHeight: "1.6",
                                    borderLeft: "2px solid #e1e8ed",
                                    marginLeft: "0.5rem",
                                }}
                            >
                                <span
                                    style={{
                                        position: "absolute",
                                        left: "-5px",
                                        width: "8px",
                                        height: "8px",
                                        backgroundColor: "#1a2332",
                                        borderRadius: "50%",
                                        top: "1rem",
                                    }}
                                ></span>
                                {item}
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div style={{ marginBottom: "1.5rem" }}>
                        <h5
                            style={{
                                fontSize: "1rem",
                                fontWeight: "600",
                                color: "#1a2332",
                                marginBottom: "0.75rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                            }}
                        >
                            Technologies
                        </h5>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js"].map((tech) => (
                                <span
                                    key={tech}
                                    style={{
                                        backgroundColor: "#e1e8ed",
                                        color: "#1a2332",
                                        padding: "0.4rem 0.9rem",
                                        fontSize: "0.85rem",
                                        fontWeight: "500",
                                        borderRadius: "3px",
                                        border: "1px solid #d1d9e0",
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div style={{ display: "flex", gap: "0.75rem" }}>
                            <LinkButton href="/projects/rockauto">View Project Showcase →</LinkButton>

                            <LinkButton href="https://itis4390-rockauto.loganphinney.com/" external>
                            View Live Site →
                            </LinkButton>

                            <LinkButton href="https://github.com/LPhinney1/ITIS4390-capstone-rockauto" external>
                            View GitHub Repository →
                            </LinkButton>
                        </div>

                        <p
                            style={{
                                fontSize: "0.85rem",
                                color: "#718096",
                                marginTop: "0.75rem",
                                fontStyle: "italic",
                                lineHeight: "1.6",
                            }}
                        >
                            Note: This was a collaborative team project. Some features developed by teammates may be incomplete due
                            to time constraints. The product detail pages, shopping cart, checkout flow, and comparison tool
                            showcased in the Project Showcase represent my individual contributions and are fully functional within
                            the project scope. As this is an academic prototype, transactions are simulated and no actual purchases
                            or payments are processed.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    </div>
  );
}
