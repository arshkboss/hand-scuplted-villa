import { Metadata } from "next";
import Nav from "@/app/components/nav";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Villa Haven | Luxury Forest Retreat",
    description: "Experience luxury in nature at our hand-sculpted forest villa retreat.",
  };
  
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}