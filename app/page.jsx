"use client";

import React from "react";
import LinkButton from "./components/LinkButton";

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
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "300",
              margin: "0 0 1rem 0",
              color: "#1a2332",
            }}
          >
            Front-End Developer
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
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
              <LinkButton href="/projects">View Projects →</LinkButton>
              <LinkButton href="/JacobButler_Resume.pdf" download>
                ⬇ Download Resume
              </LinkButton>
            </div>
          </div>
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
          <h4 
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#4a5568",
              marginBottom: "1rem",
            }}
          >
            Background
          </h4>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#4a5568",
              marginBottom: "1rem",
            }}
          >
            I earned a B.A. in Computer Science with a concentration in Human-Computer
            Interaction from the University of North Carolina at Charlotte (May 2026),
            graduating with a 3.80 GPA and earning Chancellor's List and Dean's List honors
            three times each. I am now based in Tokyo, pursuing a Master in Management (MiM)
            at Temple University, Japan Campus.
          </p>
          <h4 
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#4a5568",
              marginBottom: "1rem",
            }}
          >
            Recent Work
          </h4>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#4a5568",
            }}
          >
            In my 14-week interaction design capstone, I led end-to-end product ownership of
            four core shopping flows for a RockAuto.com redesign. Working with a 6-person
            cross-functional team, I took product detail pages, the shopping cart, a 3-step
            checkout, and a product comparison tool from discovery through delivery using
            Next.js, React, TypeScript, and PostgreSQL.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#4a5568",
            }}
          >
            I also conducted human-centered AI research, designing a high-fidelity Figma
            prototype that adds sense-making features to an AI chatbot interface to promote
            active student learning. I ran a within-subjects user study against standard AI
            tools and wrote up the findings as an ACM-format research paper with design
            recommendations for student-facing AI interfaces.
          </p>
          <h4 
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#4a5568",
              marginBottom: "1rem",
            }}
          >
            Experience & Perspective
          </h4>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#4a5568",
            }}
          >
            In Summer 2025, I studied abroad in Japan and South Korea, broadening my 
            understanding of global design approaches and user experiences. My background 
            also includes leadership experience as a Shift Lead and Certified Trainer, where I
            owned onboarding and training programs and coordinated 6-7 person teams in a
            high-volume, customer-facing environment.
          </p>
          <h4 
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#4a5568",
              marginBottom: "1rem",
            }}
          >
            What I'm Looking For
          </h4>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#4a5568",
            }}
          >
            I am passionate about creating intuitive interfaces that solve real problems
            and enhance user experience. I am currently seeking front-end development
            opportunities beginning in Summer 2026.
          </p>
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
