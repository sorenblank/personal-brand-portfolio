import "@/app/globals.css";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";

export const metadata = {
  metadataBase: "https://personal-brand-portfolio-nextjs.vercel.app",
  title: "Soren Blank",
  description: "I'm Soren D. Blank & I have a team of professionals who can help you grow your business. We offer web development, digital marketing, and graphics design services. We are professional, creative, and responsive. We are here to help you grow your business. Period.",
  image: "https://next-vcard-portfolio.vercel.app/embed.png",
  keywords: ["Soren", "Blank", "Soren D. Blank"],
  openGraph: {

    images: [
      {
        url: "https://personal-brand-portfolio-nextjs.vercel.app/og-image.png",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://personal-brand-portfolio-nextjs.vercel.app/og-image.png",
      },
    ]
  },
}

export const viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body id="top">
        <CustomCursor />
        <Preloader />
        {children}
      </body>
    </html>
  );
} 