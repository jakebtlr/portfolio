"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const navRef = useRef(null);

    // Publish the header's height so other sticky elements can sit directly below it.
    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;
        const update = () =>
            document.documentElement.style.setProperty("--header-height", `${nav.offsetHeight}px`);
        update();
        const observer = new ResizeObserver(update);
        observer.observe(nav);
        return () => observer.disconnect();
    }, []);

    const isActive = (href) =>
        href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

    const linkStyle = (href) => ({
        color: isActive(href) ? "white" : "#8b98a8",
        textDecoration: "none",
        fontSize: "0.95 rem",
        fontWeight: 500,
        padding: "0.25rem 0",
        borderBottom: isActive(href) ? "2px solid white" : "2px solid transparent",
        transition: "color 0.2s, border-color 0.2s",
        whiteSpace: "nowrap",
    });

    return (
        <nav
            ref={navRef} 
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
                    flexWrap: "wrap",
                    gap: "0.75rem 1.5rem",
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

                <div style={{ display: "flex", gap: "1.25rem", alignItems: "center", flexWrap: "wrap" }}>
                    <Link href="/" style={linkStyle("/")} aria-current={isActive("/") ? "page" : undefined}>About</Link>
                    <Link href="/projects" style={linkStyle("/projects")} aria-current={isActive("/projects") ? "page" : undefined}>Projects &amp; Research</Link>
                    <Link href="/contact" style={linkStyle("/contact")} aria-current={isActive("/contact") ? "page" : undefined}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}