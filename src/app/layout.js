import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Eduquery",
  description: "Genera google forms con IA",

};
import { FormsProvider } from "@/context/Form";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      <link rel="icon"  href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <FormsProvider>
          {children}
       </FormsProvider>
      </body>
    </html>
  );
}
