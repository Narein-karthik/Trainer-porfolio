import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://narein-karthik-portfolio.example"),
  title: "Narein Karthik E | AI & Data Analytics Trainer",
  description: "Portfolio of Narein Karthik E — AI engineer, technical trainer, founder of DTEKSKILZ and Senior Expert Member at Top Engineers in Bengaluru.",
  keywords: ["AI trainer Bengaluru", "data analytics trainer", "institutional workshops", "DTEKSKILZ", "Narein Karthik E"],
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: { title: "Narein Karthik E | Practical Technology Training", description: "Practical technology training for students and institutions.", type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Narein Karthik E | AI & Data Analytics Trainer", description: "Practical technology training for students and institutions.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
