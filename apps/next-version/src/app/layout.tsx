// --- Font Awesome setup (must be first) ---
// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// config.autoAddCss = false;

// --- Global styles ---
import "./globals.css";

// --- Components ---
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// --- Next.js metadata type ---
import type { Metadata } from "next";

// --- Metadata for the whole app ---
export const metadata: Metadata = {
  title: "Strike The Hub",
  description: "FPS Games Portal",
};

// --- Root layout ---
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
