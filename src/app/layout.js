import "../styles/globals.css";

export const metadata = {
  title: "Vishakha Mane Portfolio",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}