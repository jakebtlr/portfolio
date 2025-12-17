"use client";

import React from "react";
import LinkButton from "../components/LinkButton";

export default function ContactPage() {
    return (
        <>
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
                        Contact
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
                        I am currently seeking front-end development opportunities starting in Summer
                        2026. Please feel free to reach out using any of the methods below.
                    </p>
                </div>
            </header>

            {/* Main */}
            <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}>
                <section style={{ marginBottom: "4rem" }}>
                    <div
                        style={{
                            backgroundColor: "white",
                            border: "1px solid #e1e8ed",
                            borderRadius: "4px",
                            padding: "2.5rem 2rem",
                        }}
                    >
                        <p
                        style={{
                            fontSize: "1rem",
                            color: "#4a5568",
                            marginBottom: "2rem",
                            lineHeight: "1.8",
                            textAlign: "center",
                            maxWidth: "640px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                        >
                        Whether you’d like to discuss an opportunity, collaborate on a
                        project, or just connect, I’d be happy to hear from you.
                        </p>

                        <div
                            style={{
                                display: "flex",
                                gap: "1.25rem",
                                justifyContent: "center",
                                flexWrap: "wrap",
                            }}
                        >
                            <LinkButton href="mailto:jbutler20004@gmail.com" external>
                                Email Me
                            </LinkButton>

                            <LinkButton
                                href="https://www.linkedin.com/in/jacob-butler919/"
                                external
                            >
                                LinkedIn
                            </LinkButton>

                            <LinkButton href="https://github.com/jakebtlr" external>
                                GitHub
                            </LinkButton>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
