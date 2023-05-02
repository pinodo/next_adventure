import NavBar from "../components/ui/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />

        <div>{children}</div>
      </body>
    </html>
  );
}
