// src/app/layout.js
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ClientLayout from "@/app/components/ClientLayout";

export const metadata = {
  title: "LEO Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>
          {children}
          <Toaster />
        </ClientLayout>
      </body>
    </html>
  );
}