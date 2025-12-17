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
              Computer Science student at UNC Charlotte specializing in Human-Computer
              Interaction.
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
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#4a5568",
              marginBottom: "1rem",
            }}
          >
            I am a senior at the University of North Carolina at Charlotte pursuing a
            B.A. in Computer Science with a concentration in Human-Computer Interaction.
            My academic focus combines technical software development with user-centered
            design principles.
          </p>
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
            Technical Skills
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
                  category: "Frontend Development",
                  skills: [
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "HTML5/CSS3",
                    "Tailwind CSS",
                  ],
                },
                {
                  category: "Backend & Database",
                  skills: ["Node.js", "PostgreSQL", "SQL", "Java"],
                },
                {
                  category: "Tools & Methodologies",
                  skills: [
                    "Git/GitHub",
                    "Figma",
                    "Agile Development",
                    "Responsive Design",
                    "UI/UX Design",
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

        {/* Contact Section */}
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
            Contact
          </h3>
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid #e1e8ed",
              borderRadius: "4px",
              padding: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                color: "#4a5568",
                marginBottom: "1.5rem",
                lineHeight: "1.8",
              }}
            >
              I am currently seeking front-end development opportunities for Summer 2026.
              Please feel free to reach out to discuss potential opportunities.
            </p>

            <div style={{ display: "flex", gap: "1.25rem", justifyContent: "center" }}>
              <LinkButton href="mailto:jbutler20004@gmail.com" external>
                Email Me
              </LinkButton>

              <LinkButton href="https://www.linkedin.com/in/jacob-butler919/" external>
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
