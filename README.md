# Jacob Butler – Portfolio Website

Source code for my personal portfolio website, built with Next.js and React.

I'm a UNC Charlotte Computer Science graduate (B.A., Human-Computer Interaction concentration, May 2026), now pursuing a Master in Management at Temple University, Japan Campus in Tokyo. The site covers my background, my projects and research, and how to reach me. I'm looking for software development, product management, and project management roles starting Summer 2027.

## Live Site
- Portfolio: https://jbutler-portfolio.vercel.app/

## Projects & Research

### RockAuto.com E-Commerce Redesign (Capstone Project)

A team-based academic redesign of an auto parts e-commerce platform, completed in the Interaction Design Projects capstone at UNC Charlotte (Aug–Dec 2025).

I did the UI/UX research and design for the core shopping flows, then built:
- Product detail pages with dynamic content and recommendations
- Shopping cart with real-time calculations and quantity controls
- 3-step checkout flow with form validation
- Product comparison tool for side-by-side evaluation

**Links**
- Live demo: https://itis4390-rockauto.loganphinney.com/
- Repository: https://github.com/LPhinney1/ITIS4390-capstone-rockauto

> Note: This project is an academic prototype. Transactions are simulated and no real payments are processed.

### E-Commerce REST API

A solo backend project (Apr–May 2026): a RESTful API for products, orders, and customer reviews built with Node.js, Express, PostgreSQL, and Prisma.

- 17 endpoints with JWT authentication and role-based access for admins and customers
- Layered architecture: routes, controllers, services, and repositories
- Interactive OpenAPI 3.0 / Swagger documentation, deployed on Render

**Links**
- Live API docs: https://ecommerce-api-u7bn.onrender.com/api/docs/
- Repository: https://github.com/jakebtlr/ecommerce-api

### Human-Centered AI Research: AI Interface Sense-Making Study

Research at UNC Charlotte (Jan–May 2026) on how interface design can help students actively learn from AI chatbots instead of passively consuming answers.

- Designed a high-fidelity Figma prototype adding four sense-making features (step-by-step reasoning, assumptions made, confidence level, reflection prompts) to an AI chatbot interface
- Ran a within-subjects user study comparing the prototype against standard AI tools
- Wrote an ACM-format research paper with design recommendations for student-facing AI interfaces

## Tech Stack
- Next.js (App Router, static export)
- React
- JavaScript
- Vercel (hosting and Vercel Analytics)

## Local Development
```bash
npm install
npm run dev
```
Open http://localhost:3000 in your browser.

To build the static site into `out/`:
```bash
npm run build
```
