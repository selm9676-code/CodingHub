import type { Metadata } from "next";
import "./global.css";
import { Header } from "../components/header";

export const metadata: Metadata = {
  title: "Coding Hub",
  description:
    "Learn Python, JavaScript, HTML, CSS, Java, and Rust through structured beginner-friendly lessons."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
