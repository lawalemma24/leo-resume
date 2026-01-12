// src/app/layout.js
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "LEO Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}