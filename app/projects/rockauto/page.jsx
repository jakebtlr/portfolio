"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function RockAutoShowcasePage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const closeButtonRef = useRef(null);
    const lastTriggerRef = useRef(null);

    const openImage = (item, trigger) => {
        lastTriggerRef.current = trigger;
        setSelectedImage(item);
    };

    const closeImage = () => {
        setSelectedImage(null);
        lastTriggerRef.current?.focus();
    };

    useEffect(() => {
        if (!selectedImage) return;
        closeButtonRef.current?.focus();
        const onKeyDown = (e) => {
            if (e.key === "Escape") closeImage();
        };
        document.addEventListener("keydown", onKeyDown);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [selectedImage]);

    const showcaseItems = [
        {
        title: "Product Detail Page",
        description:
            "Comprehensive product view with detailed specifications, pricing, and similar product recommendations. Features clean layout with product imagery and clear call-to-action buttons.",
        image: "/product-detail.png",
        tags: ["React", "Next.js", "Tailwind CSS"],
        },
        {
        title: "Shopping Cart",
        description:
            "Dynamic cart interface with real-time total calculations, quantity controls, and personalized vehicle context. Includes order summary sidebar with promo code functionality and security indicators.",
        image: "/shopping-cart.png",
        tags: ["React", "State Management", "PostgreSQL"],
        },
        {
        title: "Product Comparison",
        description:
            "Side-by-side comparison tool enabling users to evaluate multiple products simultaneously. Features detailed specification tables and visual card comparison for informed purchasing decisions.",
        image: "/product-comparison.png",
        tags: ["React", "TypeScript", "Data Visualization"],
        },
        {
        title: "Checkout Flow - Step 1",
        description:
            "Multi-step checkout beginning with contact and shipping information collection. Clean form design with validation and persistent order summary for transparency throughout the process.",
        image: "/checkout-step1.png",
        tags: ["Form Validation", "UX Design", "Next.js"],
        },
        {
        title: "Checkout Flow - Step 2",
        description:
            "Payment step with card information input and billing address collection. Features clear security messaging and a streamlined form layout. Payments are simulated; no real transactions are processed.",
        image: "/checkout-step2.png",
        tags: ["Form Design", "Trust & Security UX", "TypeScript"],
        },
        {
        title: "Order Confirmation",
        description:
            "Post-purchase confirmation page featuring order timeline, itemized receipt, and next steps. Provides users with order tracking information and support contact options.",
        image: "/checkout-confirmation.png",
        tags: ["UI/UX", "Order Management", "React"],
        },
    ];

    return (
        <div
            style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                backgroundColor: "#f8f9fa",
                minHeight: "100vh",
                color: "#2c3e50",
            }}
        >
            <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}>
                <Link
                    href="/projects"
                    style={{
                        display: "inline-block",
                        color: "#5a6c7d",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        marginBottom: "1.5rem",
                    }}
                >
                    ← Back to Projects &amp; Research
                </Link>
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
                    RockAuto Project Showcase - My Contributions
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                    {showcaseItems.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: "white",
                                border: "1px solid #e1e8ed",
                                borderRadius: "4px",
                                overflow: "hidden",
                            }}
                        >
                            {/* Image */}
                            <button
                                type="button"
                                onClick={(e) => openImage(item, e.currentTarget)}
                                aria-label={`Enlarge screenshot: ${item.title}`}
                                style={{
                                    display: "block",
                                    width: "100%",
                                    padding: 0,
                                    border: "none",
                                    cursor: "pointer",
                                    position: "relative",
                                    backgroundColor: "#f8f9fa",
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                        transition: "opacity 0.2s",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "1rem",
                                        right: "1rem",
                                        backgroundColor: "rgba(26, 35, 50, 0.8)",
                                        color: "white",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "3px",
                                        fontSize: "0.85rem",
                                        fontWeight: "500",
                                    }}
                                >
                                    Click to enlarge
                                </div>
                            </button>

                            {/* Description */}
                            <div style={{ padding: "1.5rem" }}>
                                <h5
                                    style={{
                                        fontSize: "1.15rem",
                                        fontWeight: "600",
                                        color: "#1a2332",
                                        marginBottom: "0.75rem",
                                    }}
                                >
                                    {item.title}
                                </h5>

                                <p
                                    style={{
                                        fontSize: "0.95rem",
                                        color: "#4a5568",
                                        lineHeight: "1.6",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    {item.description}
                                </p>

                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                    {item.tags.map((tag) => (
                                        <span
                                        key={tag}
                                        style={{
                                            backgroundColor: "#f1f3f5",
                                            color: "#5a6c7d",
                                            padding: "0.25rem 0.75rem",
                                            borderRadius: "3px",
                                            fontSize: "0.8rem",
                                            fontWeight: "500",
                                        }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${selectedImage.title} screenshot`}
                    onClick={closeImage}
                    style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2000,
                        cursor: "pointer",
                        padding: "4rem 1rem 1rem",
                    }}
                >
                    <button
                        ref={closeButtonRef}
                        type="button"
                        aria-label="Close enlarged image"
                        onClick={(e) => {
                            e.stopPropagation();
                            closeImage();
                        }}
                        style={{
                            position: "fixed",
                            top: "1rem",
                            right: "1rem",
                            backgroundColor: "white",
                            border: "none",
                            borderRadius: "50%",
                            width: "44px",
                            height: "44px",
                            fontSize: "1.5rem",
                            lineHeight: 1,
                            cursor: "pointer",
                            color: "#1a2332",
                            fontWeight: "bold",
                        }}
                    >
                        ×
                    </button>
                    <img
                        src={selectedImage.image}
                        alt={selectedImage.title}
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                        }}
                    />
                </div>
            )}
        </div>
    );
}
