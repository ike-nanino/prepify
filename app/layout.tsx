import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Prepify - AI-Powered Interview Preparation",
    template: "%s | Prepify"
  },
  description: "Master your interviews with AI-powered mock sessions, real-time feedback, and comprehensive question banks. Trusted by 50,000+ job seekers.",
  applicationName: "Prepify",
  keywords: ["interview preparation", "AI mock interviews", "job search", "career coaching", "technical interviews"],
  
  // Icon Section - Modern Approach
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5"
      }
    ]
  },

  // Open Graph - Modern Requirements
  openGraph: {
    title: "Prepify - AI Interview Coach",
    description: "Practice interviews with AI and get detailed feedback instantly",
    url: "https://prepify.vercel.app",
    siteName: "Prepify",
    images: [
      {
        url: "https://prepify.vercel.app/og-image.jpg", // Absolute URL required
        width: 1200,
        height: 630,
        alt: "Prepify AI Interview Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter - Modern Structure
  twitter: {
    card: "summary_large_image",
    title: "Prepify - AI Interview Coach",
    description: "Practice interviews with AI and get detailed feedback instantly",
    images: ["https://prepify.vercel.app/og-image.jpg"], // Absolute URL
    creator: "@prepify_team",
    site: "@prepify",
  },

  // Robots.txt - Enhanced
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // PWA Configuration
  themeColor: "#1a1a1a",
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Prepify",
    statusBarStyle: "black-translucent",
    capable: true,
    startupImage: [
      {
        url: "/apple-touch-startup-image-2048x2732.png",
        media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      },
    ],
  },

  // Verification - Needs Actual Codes
  verification: {
    google: "google-site-verification=your_actual_code_here",
    other: {
      me: ["your@email.com"],
    },
  },

  // Internationalization
  alternates: {
    canonical: "https://prepify.vercel.app",
    languages: {
      "en-US": "https://prepify.vercel.app/en",
      "es-ES": "https://prepify.vercel.app/es",
    },
    types: {
      "application/rss+xml": "https://prepify.vercel.app/rss.xml",
    },
  },

  // Modern Additions
  category: "education",
  metadataBase: new URL("https://prepify.vercel.app"),
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
