import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: 'Jacob Butler - Front-End Developer',
  description: 'UNC Charlotte Computer Science graduate specializing in Human-Computer Interaction, now pursuing a Master in Management at Temple University, Japan Campus. Experienced in JavaScript, TypeScript, React, and Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <div
          style={{
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            backgroundColor: "#f8f9fa",
            minHeight: "100vh",
            color: "#2c3e50",
          }}
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
