export const metadata = {
  title: 'Jacob Butler - Front-End Developer',
  description: 'Computer Science student at UNC Charlotte specializing in Human-Computer Interaction. Experienced in React, Next.js, and TypeScript.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
