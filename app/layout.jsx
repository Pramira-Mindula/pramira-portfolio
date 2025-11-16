import {JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "Pramira Mindula - Software Engineering Student & Web Developer",
  description: "Portfolio of Pramira Mindula, a passionate Software Engineering student at SLIIT specializing in web development and creating innovative projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${jetbrainsMono.variable}`}>
        
        <Header/>
        
        {children}

      </body>
    </html>
  );
}
