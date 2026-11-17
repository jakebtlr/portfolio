"use client";

import React, { useEffect, useState } from "react";
import LinkButton from "../components/LinkButton";
import HeroCard, { heroRowStyle, heroRowLabelStyle, heroRowValueStyle } from "../components/HeroCard";

const EMAIL = "butlerjacob919@gmail.com";

export default function ContactPage() {
    const [copied, setCopied] = useState(false);
    const [tokyoTime, setTokyoTime] = useState(null);

    // Rendered after mount so the static HTML doesn't bake in the build-time clock.
    useEffect(() => {
        const format = new Intl.DateTimeFormat("en-US", {
            timeZone: "Asia/Tokyo",
            hour: "numeric",
            minute: "2-digit",
            weekday: "short",
        });
        let timeoutId;
        // Update right as each new minute starts, rescheduling every time so it never drifts.
        const tick = () => {
            const now = new Date();
            setTokyoTime(format.format(now));
            clearTimeout(timeoutId);
            timeoutId = setTimeout(tick, 60000 - (now.getSeconds() * 1000 + now.getMilliseconds()) + 50);
        };
        // Browsers throttle timers in background tabs, so catch up as soon as the tab is visible again.
        const onVisible = () => {
            if (document.visibilityState === "visible") tick();
        };
        tick();
        document.addEventListener("visibilitychange", onVisible);
        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener("visibilitychange", onVisible);
        };
    }, []);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard unavailable; the address is still visible to select manually.
        }
    };

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
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "2.5rem",
                    }}
                >
                    <div style={{ flex: "1 1 320px" }}>
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
                        I am currently seeking software development, product, and project management
                        opportunities starting in Summer 2027. Please feel free to reach out using any of the methods below.
                    </p>
                    </div>

                    <HeroCard title="At a glance">
                        <div style={heroRowStyle}>
                            <span style={heroRowLabelStyle}>Open to</span>
                            <span style={heroRowValueStyle}>
                                Software Development · Product Management · Project Management
                            </span>
                        </div>
                        <div style={heroRowStyle}>
                            <span style={heroRowLabelStyle}>Start</span>
                            <span style={heroRowValueStyle}>Summer 2027</span>
                        </div>
                        <div style={heroRowStyle}>
                            <span style={heroRowLabelStyle}>Location</span>
                            <span style={heroRowValueStyle}>
                                Tokyo, Japan · Open to relocating to North Carolina
                            </span>
                        </div>
                        <div style={{ ...heroRowStyle, paddingBottom: 0 }}>
                            <span style={heroRowLabelStyle}>My local time</span>
                            <span style={heroRowValueStyle}>
                                {tokyoTime ? `${tokyoTime} JST` : "JST (UTC+9)"}
                            </span>
                        </div>
                    </HeroCard>
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
                            <LinkButton href={`mailto:${EMAIL}`}>
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

                            <LinkButton href="/JacobButler_Resume.pdf" download>
                                ⬇ Resume
                            </LinkButton>
                        </div>

                        <div
                            style={{
                                marginTop: "2rem",
                                paddingTop: "1.5rem",
                                borderTop: "1px solid #e1e8ed",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "0.6rem",
                                color: "#4a5568",
                                fontSize: "0.95rem",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                }}
                            >
                                <span style={{ fontWeight: 600, color: "#1a2332", wordBreak: "break-all" }}>
                                    {EMAIL}
                                </span>
                                <button
                                    type="button"
                                    onClick={copyEmail}
                                    style={{
                                        backgroundColor: "white",
                                        color: "#1a2332",
                                        border: "1px solid #d1d9e0",
                                        borderRadius: "4px",
                                        padding: "0.35rem 0.8rem",
                                        fontSize: "0.85rem",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                    }}
                                >
                                    {copied ? "Copied ✓" : "Copy"}
                                </button>
                                <span aria-live="polite" style={{ position: "absolute", left: "-9999px" }}>
                                    {copied ? "Email address copied" : ""}
                                </span>
                            </div>
                            <div style={{ textAlign: "center" }}>Based in Tokyo, Japan (JST, UTC+9)</div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
