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
                        Projects &amp; Research
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
                        Selected projects and research highlighting UI/UX research and design, front-end development, and
                        human-centered AI.
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
                        Projects
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
                            Conducted UI/UX research and design, then led front-end development for core shopping features including
                            product browsing, cart management, and checkout processes.
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
                                "Conducted UI/UX research and designed the shopping experience, translating user and stakeholder needs into the flows and interfaces the team built",
                                "Developed responsive product detail pages with dynamic content rendering and similar product recommendations",
                                "Built shopping cart system with real-time calculations, quantity controls, and persistent data storage",
                                "Implemented multi-step checkout flow with form validation and a simulated payment step",
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
                        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
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

            {/* Research */}
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
                    Research
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
                        From Answers to Understanding: AI Interface Sense-Making Study
                    </h4>

                    <p
                        style={{
                            fontSize: "0.95rem",
                            color: "#718096",
                            marginBottom: "1.5rem",
                            fontStyle: "italic",
                        }}
                    >
                        Human-Centered AI Research | University of North Carolina at Charlotte | January 2026 - May 2026
                    </p>

                    <p
                        style={{
                            fontSize: "1rem",
                            lineHeight: "1.8",
                            color: "#4a5568",
                            marginBottom: "1.5rem",
                        }}
                    >
                        Students increasingly rely on AI chatbots for quick answers, which can encourage passive consumption
                        instead of real understanding. This study explored how interface design can promote active learning by
                        integrating sense-making features into an AI study assistant, and how those features affect students&apos;
                        understanding, trust, and critical evaluation of AI responses.
                    </p>

                    <a
                        href="https://www.figma.com/make/sB5OL64shXXS05bK6zRNg2/AI-Chatbot-Interface-Prototype?t=iwiyPvE9nHmJzDVf-20&fullscreen=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "block", marginBottom: "0.5rem" }}
                    >
                        <img
                            src="/hcai-prototype.webp"
                            alt="AI study assistant prototype showing a response with a confidence badge, step-by-step reasoning, assumptions made, a confidence level bar, and a reflection prompt"
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                                border: "1px solid #e1e8ed",
                                borderRadius: "4px",
                            }}
                        />
                    </a>
                    <p
                        style={{
                            fontSize: "0.85rem",
                            color: "#718096",
                            fontStyle: "italic",
                            margin: "0 0 1.5rem 0",
                        }}
                    >
                        The Study Assistant prototype. Click the image to open the interactive prototype.
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
                            Sense-Making Features
                        </h5>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                gap: "1rem",
                            }}
                        >
                            {[
                                {
                                    title: "Step-by-Step Reasoning",
                                    text: "Breaks the answer into the chain of reasoning behind it so students can follow and check each step.",
                                },
                                {
                                    title: "Assumptions Made",
                                    text: "Surfaces how the AI interpreted the question, so students can spot when it misunderstood them.",
                                },
                                {
                                    title: "Confidence Level",
                                    text: "Shows how certain the answer is and why, helping students calibrate how much to trust it.",
                                },
                                {
                                    title: "Reflection Prompts",
                                    text: "Asks the student a question about the answer before they move on, encouraging active thinking.",
                                },
                            ].map((feature) => (
                                <div
                                    key={feature.title}
                                    style={{
                                        border: "1px solid #e1e8ed",
                                        borderRadius: "4px",
                                        padding: "1rem",
                                        backgroundColor: "#f8f9fa",
                                    }}
                                >
                                    <div style={{ fontWeight: "600", color: "#1a2332", marginBottom: "0.4rem" }}>
                                        {feature.title}
                                    </div>
                                    <div style={{ fontSize: "0.9rem", color: "#4a5568", lineHeight: "1.6" }}>
                                        {feature.text}
                                    </div>
                                </div>
                            ))}
                        </div>
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
                            Key Contributions
                        </h5>

                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {[
                                "Designed a high-fidelity Figma prototype integrating four sense-making features into an AI chatbot interface to promote active student learning over passive AI answer consumption",
                                "Conducted a within-subjects user study comparing the prototype against standard AI tools, measuring perceived understanding, trust calibration, critical evaluation, and usability",
                                "Synthesized a 20-source literature review with study findings into a full ACM-format research paper with design recommendations for student-facing AI interfaces",
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
                            Methods &amp; Tools
                        </h5>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {["Figma", "User Research", "Within-Subjects Study", "Usability Testing", "Literature Review", "ACM Research Paper"].map((tag) => (
                                <span
                                    key={tag}
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
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                        <LinkButton href="https://acrobat.adobe.com/id/urn:aaid:sc:US:40c53d62-2663-44fa-a8bc-ba8d5ddbb98b" external>
                            Read the Paper →
                        </LinkButton>

                        <LinkButton
                            href="https://www.figma.com/make/sB5OL64shXXS05bK6zRNg2/AI-Chatbot-Interface-Prototype?t=iwiyPvE9nHmJzDVf-20&fullscreen=1"
                            external
                        >
                            View Interactive Prototype →
                        </LinkButton>
                    </div>
                </div>
            </section>
        </main>
    </div>
  );
}
