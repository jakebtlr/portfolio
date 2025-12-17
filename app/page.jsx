'use client';

import React, { useState } from 'react';
import LinkButton from "./components/LinkButton";


export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "Product Detail Page",
      description: "Comprehensive product view with detailed specifications, pricing, and similar product recommendations. Features clean layout with product imagery and clear call-to-action buttons.",
      image: "/product-detail.png",
      tags: ["React", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Shopping Cart",
      description: "Dynamic cart interface with real-time total calculations, quantity controls, and personalized vehicle context. Includes order summary sidebar with promo code functionality and security indicators.",
      image: "/shopping-cart.png",
      tags: ["React", "State Management", "PostgreSQL"]
    },
    {
      title: "Product Comparison",
      description: "Side-by-side comparison tool enabling users to evaluate multiple products simultaneously. Features detailed specification tables and visual card comparison for informed purchasing decisions.",
      image: "/product-comparison.png",
      tags: ["React", "TypeScript", "Data Visualization"]
    },
    {
      title: "Checkout Flow - Step 1",
      description: "Multi-step checkout beginning with contact and shipping information collection. Clean form design with validation and persistent order summary for transparency throughout the process.",
      image: "/checkout-step1.png",
      tags: ["Form Validation", "UX Design", "Next.js"]
    },
    {
      title: "Checkout Flow - Step 2",
      description: "Secure payment processing interface with card information input and billing address collection. Features clear security messaging and streamlined form layout.",
      image: "/checkout-step2.png",
      tags: ["Payment Integration", "Security", "TypeScript"]
    },
    {
      title: "Order Confirmation",
      description: "Post-purchase confirmation page featuring order timeline, itemized receipt, and next steps. Provides users with order tracking information and support contact options.",
      image: "/checkout-confirmation.png",
      tags: ["UI/UX", "Order Management", "React"]
    }
  ];

  return (
    <div style={{ 
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
      color: "#2c3e50"
    }}>
      {/* Navigation Bar */}
      <nav style={{
        backgroundColor: "#1a2332",
        padding: "1.5rem 2rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{
            color: "white",
            margin: 0,
            fontSize: "1.5rem",
            fontWeight: "600",
            letterSpacing: "0.5px"
          }}>
            JACOB BUTLER
          </h1>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{
        backgroundColor: "white",
        padding: "5rem 2rem",
        borderBottom: "1px solid #e1e8ed"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "2.5rem",
            fontWeight: "300",
            margin: "0 0 1rem 0",
            color: "#1a2332"
          }}>
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
              Computer Science student at UNC Charlotte specializing in
              Human-Computer Interaction.
            </p>

            <p
              style={{
                fontSize: "0.95rem",
                color: "#5a6c7d",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Focused on building responsive, user-centered web applications
              with React, Next.js, and TypeScript.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}>
        
        {/* About Section */}
        <section style={{ marginBottom: "4rem" }}>
          <h3 style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#1a2332",
            marginBottom: "1.5rem",
            paddingBottom: "0.75rem",
            borderBottom: "3px solid #1a2332"
          }}>
            About
          </h3>
          <p style={{
            fontSize: "1rem",
            lineHeight: "1.8",
            color: "#4a5568",
            marginBottom: "1rem"
          }}>
            I am a senior at the University of North Carolina at Charlotte pursuing a B.A. in Computer Science 
            with a concentration in Human-Computer Interaction. My academic focus combines technical software 
            development with user-centered design principles.
          </p>
          <p style={{
            fontSize: "1rem",
            lineHeight: "1.8",
            color: "#4a5568"
          }}>
            I am passionate about creating intuitive interfaces that solve real problems and enhance user experience. 
            I am currently seeking front-end development opportunities beginning in Summer 2026.
          </p>
        </section>

        {/* Featured Project */}
        <section style={{ marginBottom: "4rem" }}>
          <h3 style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#1a2332",
            marginBottom: "1.5rem",
            paddingBottom: "0.75rem",
            borderBottom: "3px solid #1a2332"
          }}>
            Featured Project
          </h3>
          
          <div style={{
            backgroundColor: "white",
            border: "1px solid #e1e8ed",
            borderRadius: "4px",
            padding: "2rem",
            marginBottom: "2rem"
          }}>
            <h4 style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#1a2332",
              marginBottom: "0.5rem"
            }}>
              RockAuto.com E-Commerce Redesign
            </h4>
            <p style={{
              fontSize: "0.95rem",
              color: "#718096",
              marginBottom: "1.5rem",
              fontStyle: "italic"
            }}>
              Interaction Design Projects Capstone | University of North Carolina at Charlotte | August 2025 - December 2025
            </p>
            <p style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#4a5568",
              marginBottom: "1.5rem"
            }}>
              Collaborated with a 6-person team to redesign the user experience for an auto parts e-commerce platform. 
              Led front-end development for core shopping features including product browsing, cart management, and checkout processes.
            </p>
            
            <div style={{ marginBottom: "1.5rem" }}>
              <h5 style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#1a2332",
                marginBottom: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                Key Contributions
              </h5>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0
              }}>
                {[
                  "Developed responsive product detail pages with dynamic content rendering and similar product recommendations",
                  "Built shopping cart system with real-time calculations, quantity controls, and persistent data storage",
                  "Implemented multi-step checkout flow with form validation and secure payment processing interface",
                  "Created product comparison tool enabling side-by-side evaluation of specifications and pricing"
                ].map((item, index) => (
                  <li key={index} style={{
                    padding: "0.5rem 0 0.5rem 1.5rem",
                    position: "relative",
                    color: "#4a5568",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    borderLeft: "2px solid #e1e8ed",
                    marginLeft: "0.5rem"
                  }}>
                    <span style={{
                      position: "absolute",
                      left: "-5px",
                      width: "8px",
                      height: "8px",
                      backgroundColor: "#1a2332",
                      borderRadius: "50%",
                      top: "1rem"
                    }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ marginBottom: "1.5rem" }}>
              <h5 style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#1a2332",
                marginBottom: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                Technologies
              </h5>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem"
              }}>
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js"].map((tech) => (
                  <span key={tech} style={{
                    backgroundColor: "#e1e8ed",
                    color: "#1a2332",
                    padding: "0.4rem 0.9rem",
                    fontSize: "0.85rem",
                    fontWeight: "500",
                    borderRadius: "3px",
                    border: "1px solid #d1d9e0"
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <div style={{ display: "flex", gap: "0.75rem" }}>  
                <LinkButton
                  href="https://itis4390-rockauto.loganphinney.com/"
                  external
                >
                  View Live Site →
                </LinkButton>
                

                <LinkButton
                  href="https://github.com/LPhinney1/ITIS4390-capstone-rockauto"
                  external
                >
                  View GitHub Repository →
                </LinkButton>
              </div>
              <p style={{
                fontSize: "0.85rem",
                color: "#718096",
                marginTop: "0.75rem",
                fontStyle: "italic",
                lineHeight: "1.6"
              }}>
                Note: This was a collaborative team project. Some features developed by teammates may be incomplete due to time constraints. 
                The product detail pages, shopping cart, checkout flow, and comparison tool showcased below represent my individual contributions and are fully functional within the project scope. 
                As this is an academic prototype, transactions are simulated and no actual purchases or payments are processed.
              </p>
            </div>
          </div>

          {/* Project Screenshots - Full Width Display */}
          <h4 style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            color: "#1a2332",
            marginBottom: "1.5rem",
            marginTop: "3rem"
          }}>
            Project Showcase
          </h4>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {projects.map((project, index) => (
              <div key={index} style={{
                backgroundColor: "white",
                border: "1px solid #e1e8ed",
                borderRadius: "4px",
                overflow: "hidden"
              }}>
                {/* Image - Full Width, Clickable */}
                <div 
                  onClick={() => setSelectedImage(project.image)}
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    position: "relative",
                    backgroundColor: "#f8f9fa"
                  }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      transition: "opacity 0.2s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                  />
                  <div style={{
                    position: "absolute",
                    bottom: "1rem",
                    right: "1rem",
                    backgroundColor: "rgba(26, 35, 50, 0.8)",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "3px",
                    fontSize: "0.85rem",
                    fontWeight: "500"
                  }}>
                    Click to enlarge
                  </div>
                </div>
                
                {/* Description */}
                <div style={{ padding: "1.5rem" }}>
                  <h5 style={{
                    fontSize: "1.15rem",
                    fontWeight: "600",
                    color: "#1a2332",
                    marginBottom: "0.75rem"
                  }}>
                    {project.title}
                  </h5>
                  <p style={{
                    fontSize: "0.95rem",
                    color: "#4a5568",
                    lineHeight: "1.6",
                    marginBottom: "1rem"
                  }}>
                    {project.description}
                  </p>
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem"
                  }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{
                        backgroundColor: "#f1f3f5",
                        color: "#5a6c7d",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "3px",
                        fontSize: "0.8rem",
                        fontWeight: "500"
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section style={{ marginBottom: "4rem" }}>
          <h3 style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#1a2332",
            marginBottom: "1.5rem",
            paddingBottom: "0.75rem",
            borderBottom: "3px solid #1a2332"
          }}>
            Technical Skills
          </h3>
          <div style={{
            backgroundColor: "white",
            border: "1px solid #e1e8ed",
            borderRadius: "4px",
            padding: "2rem"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem"
            }}>
              {[
                { category: "Frontend Development", skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML5/CSS3", "Tailwind CSS"] },
                { category: "Backend & Database", skills: ["Node.js", "PostgreSQL", "SQL", "Java"] },
                { category: "Tools & Methodologies", skills: ["Git/GitHub", "Figma", "Agile Development", "Responsive Design", "UI/UX Design"] }
              ].map((group) => (
                <div key={group.category}>
                  <h4 style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#1a2332",
                    marginBottom: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    fontSize: "0.9rem"
                  }}>
                    {group.category}
                  </h4>
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0
                  }}>
                    {group.skills.map((skill) => (
                      <li key={skill} style={{
                        padding: "0.4rem 0",
                        color: "#4a5568",
                        fontSize: "0.95rem",
                        borderBottom: "1px solid #f1f3f5"
                      }}>
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
          <h3 style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#1a2332",
            marginBottom: "1.5rem",
            paddingBottom: "0.75rem",
            borderBottom: "3px solid #1a2332"
          }}>
            Contact
          </h3>
          <div style={{
            backgroundColor: "white",
            border: "1px solid #e1e8ed",
            borderRadius: "4px",
            padding: "2rem"
          }}>
            <p style={{
              fontSize: "1rem",
              color: "#4a5568",
              marginBottom: "1.5rem",
              lineHeight: "1.8"
            }}>
              I am currently seeking front-end development opportunities for Summer 2026. 
              Please feel free to reach out to discuss potential opportunities.
            </p>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem"
            }}>
              <div style={{ display: "flex", gap: "1.25rem", justifyContent: "center" }}>  
                <LinkButton
                  href="mailto:jbutler20004@gmail.com"
                  external
                >
                  Email Me
                </LinkButton>
                

                <LinkButton
                  href="https://www.linkedin.com/in/jacob-butler919/"
                  external
                >
                  LinkedIn
                </LinkButton>


                <LinkButton
                  href="https://github.com/jakebtlr"
                  external
                >
                  GitHub
                </LinkButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: "#1a2332",
        color: "#8b98a8",
        padding: "2rem",
        textAlign: "center",
        borderTop: "1px solid #2c3e50"
      }}>
        <p style={{ margin: 0, fontSize: "0.9rem" }}>
          © 2025 Jacob Butler. All rights reserved.
        </p>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            cursor: "pointer",
            padding: "2rem"
          }}
        >
          <div style={{ maxWidth: "90%", maxHeight: "90%", position: "relative" }}>
            <img 
              src={selectedImage} 
              alt="Enlarged view"
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                objectFit: "contain"
              }}
            />
            <button 
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "-2rem",
                right: "-2rem",
                backgroundColor: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#1a2332",
                fontWeight: "bold"
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
