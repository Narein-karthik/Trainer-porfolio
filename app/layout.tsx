import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://narein-karthik-portfolio.example"),
  title: "Narein Karthik E | AI & Data Analytics Trainer",
  description: "Portfolio of Narein Karthik E — AI engineer and trainer offering data analytics, Power BI, machine learning, Generative AI, RAG engineering and MCP workshops.",
  keywords: ["AI trainer Bengaluru", "Data Analytics Workshop", "SQL and Python Training", "Power BI Workshop", "Machine Learning Workshop", "Generative AI Workshop", "RAG Engineering Workshop", "MCP Training", "AI Application Development", "Engineering Student Workshops", "DTEKSKILZ", "Narein Karthik E"],
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: { title: "Narein Karthik E | Practical Technology Training", description: "Practical technology training for students and institutions.", type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Narein Karthik E | AI & Data Analytics Trainer", description: "Practical technology training for students and institutions.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
