import { Metadata } from "next";
import "@/app/global.css";
export const metadata: Metadata = {
    title: "Fluid Pixls | Web Design Agency",
    description: "Fluid Pixls is a web design agency that specializes in creating beautiful and functional websites for businesses of all sizes.",
  };
  
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}