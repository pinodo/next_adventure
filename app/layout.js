export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

// Every app should have RootLayout inside the app folder
// This is the common layout that applies to all the pages (e.g. navbar)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>This is a landing page</h1>
        <nav>
          <a href="/" style={{ padding: "0 3px 0 0" }}>
            Home
          </a>
          <a href="/login" style={{ padding: "0 3px 0 0" }}>
            Login
          </a>
        </nav>

        <div>{children}</div>
      </body>
    </html>
  );
}