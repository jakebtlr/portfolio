"use client";

import React from "react";
import Link from "next/link";
import LinkButton from "./components/LinkButton";

const featuredWork = [
  {
    label: "Capstone · Aug–Dec 2025",
    title: "RockAuto.com E-Commerce Redesign",
    summary:
      "Led the UI/UX research, design, and front-end build of four core shopping flows (product detail, cart, 3-step checkout, and comparison) with a 6-person team, using Next.js, React, TypeScript, and PostgreSQL.",
    href: "/projects/rockauto",
    cta: "View project showcase",
    image: "/product-detail.png",
    imageAlt: "RockAuto product detail page redesign",
  },
  {
    label: "Human-Centered AI Research · Jan–May 2026",
    title: "AI Interface Sense-Making Study",
    summary:
      "Designed a Figma prototype that adds sense-making features to an AI chatbot to promote active learning, tested it in a within-subjects user study, and wrote up the findings as an ACM-format paper.",
    href: "/projects#research",
    cta: "View research",
    image: "/hcai-prototype.webp",
    imageAlt: "AI study assistant prototype showing step-by-step reasoning, assumptions, and confidence level",
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Hero Section */}
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
            flexWrap: "wrap-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2.5rem",
          }}
        >
          <div style={{ flex: "1 1 320px" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "300",
              margin: "0 0 1rem 0",
              color: "#1a2332",
            }}
          >
            Developer &amp; Product Builder
          </h2>
          <div style={{ maxWidth: "540px" }}>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#1a2332",
                lineHeight: "1.6",
                margin: "0 0 0.75rem 0",
              }}
            >
              UNC Charlotte Computer Science graduate specializing in Human-Computer
              Interaction, now pursuing a Master in Management in Tokyo.
            </p>

            <p
              style={{
                fontSize: "0.95rem",
                color: "#5a6c7d",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Focused on building responsive, user-centered web applications with
              JavaScript, TypeScript, React, and Next.js.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
              <LinkButton href="/projects">View Projects &amp; Research →</LinkButton>
              <LinkButton href="/JacobButler_Resume.pdf" download>
                ⬇ Download Resume
              </LinkButton>
            </div>
          </div>
          </div>
          <img
            src="/headshot.jpg"
            alt="Jacob Butler"
            width={800}
            height={1200}
            style={{
              width: "clamp(160px, 45vw, 260px)",
              maxWidth: "100%",
              height: "auto",
              aspectRatio: "2 / 3",
              objectFit: "cover",
              borderRadius: "8px",
              border: "1px solid #e1e8ed",
              boxShadow: "0 4px 12px rgba(26, 35, 50, 0.08)",
            }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}>
        {/* About Section */}
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
            About
          </h3>
          <div style={{ maxWidth: "760px" }}>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: "#4a5568",
                margin: "0 0 1rem 0",
              }}
            >
              I&apos;m a UNC Charlotte Computer Science graduate (Human-Computer Interaction
              concentration, 3.80 GPA), now pursuing a Master in Management at Temple
              University, Japan Campus in Tokyo. I like working across the whole product:
              researching what users need, designing the experience, and building it.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: "#4a5568",
                margin: 0,
              }}
            >
              Before tech, I spent four years as a Shift Lead and Certified Trainer, running
              onboarding and coordinating teams in a high-volume, customer-facing environment.
              I&apos;m seeking software development, product management, and project management
              roles starting Summer 2027.
            </p>
          </div>
        </section>

        {/* Featured Work */}
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
            Featured Work
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {featuredWork.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                  border: "1px solid #e1e8ed",
                  borderRadius: "4px",
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 6px 18px rgba(26, 35, 50, 0.12)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div
                  style={{
                    aspectRatio: "16 / 9",
                    backgroundColor: "#f8f9fa",
                    borderBottom: "1px solid #e1e8ed",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                    }}
                  />
                </div>
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#718096",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.label}
                  </div>
                  <h4
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#1a2332",
                      margin: "0 0 0.6rem 0",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.7",
                      color: "#4a5568",
                      margin: "0 0 1rem 0",
                      flex: 1,
                    }}
                  >
                    {item.summary}
                  </p>
                  <span style={{ fontWeight: 600, color: "#1a2332", fontSize: "0.95rem" }}>
                    {item.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Skills Section */}
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
            Skills
          </h3>
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid #e1e8ed",
              borderRadius: "4px",
              padding: "2rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
                {
                  category: "Product",
                  skills: [
                    "User Research",
                    "Wireframing & Prototyping",
                    "Usability Testing",
                    "Product Discovery",
                    "Software Development Lifecycle",
                    "Market Research",
                  ],
                },
                {
                  category: "Frontend",
                  skills: [
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "HTML/CSS",
                    "Tailwind CSS",
                    "Responsive Design",
                  ],
                },
                {
                  category: "Backend & Data",
                  skills: [
                    "Node.js",
                    "SQL",
                    "PostgreSQL",
                    "REST APIs",
                    "OpenAPI",
                    "Express",
                    "Prisma ORM",
                  ],
                },
                {
                  category: "Tools & Methods",
                  skills: [
                    "Figma",
                    "Git/GitHub",
                    "Agile/Scrum",
                    "Excel",
                    "PowerPoint",
                    "Word",
                  ],
                },
              ].map((group) => (
                <div key={group.category}>
                  <h4
                    style={{
                      fontWeight: "600",
                      color: "#1a2332",
                      marginBottom: "1rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      fontSize: "0.9rem",
                    }}
                  >
                    {group.category}
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        style={{
                          padding: "0.4rem 0",
                          color: "#4a5568",
                          fontSize: "0.95rem",
                          borderBottom: "1px solid #f1f3f5",
                        }}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
