import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer'
import GoogleTag from '../../components/GoogleTag/GoogleTag';
import GoogleAnalytics from '../../components/GoogleAnalytics/GoogleAnalytics';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rose Pointe Garden Company",
  description: "Premium garden and landscape design services tailored to your space.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/apple-touch-icon.png", rel: "apple-touch-icon", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/ico2.ico" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && (
          <>
            <GoogleTag />
            <GoogleAnalytics />
          </>
        )}
      </body>
    </html>
  );
}
