"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const linkStyle = (href) => ({
        color: pathname === href ? "white" : "#8b98a8",
        textDecoration: "none",
        fontSize: "0.95 rem",
        fontWeight: 500,
        padding: "0.25rem 0",
        borderBottom: pathname === href ? "2px solid white" : "2px solid transparent",
        transition: "color 0.2s, border-color 0.2s",
    });

    return (
        <nav 
            style={{
                backgroundColor: "#1a2332",
                padding: "1.5rem 2rem",
                boxShadow:  "0 2px 4px rgba(0,0,0,0.1)",
                position: "sticky",
                top: 0,
                zIndex: 1000,
            }}
        >
            <div 
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1.5rem",
                  }}
            >
                <Link
                    href="/"
                    style={{
                        color: "white",
                        margin: 0,
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        letterSpacing: "0.5px",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                    }}
                    >
                    JACOB BUTLER
                </Link>

                <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
                    <Link href="/" style={linkStyle("/")}>About</Link>
                    <Link href="/projects" style={linkStyle("/projects")}>Projects</Link>
                    <Link href="/contact" style={linkStyle("/contact")}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}