import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
})
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Lehigh Entrepreneurship Club Site",
  description: "Lehigh's Premier Entrepreneurship Club",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
