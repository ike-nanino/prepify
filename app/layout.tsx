import type { Metadata } from "next";
import { Mona_Sans} from "next/font/google";
import type { Viewport } from 'next'
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});


 
export const viewport: Viewport = {
  themeColor: 'black',
}


export const metadata: Metadata = {
  title: {
    default: "Prepify - AI-Powered Interview Preparation",
    template: "%s | Prepify - AI Interview Coach"
  },
  description: "Ace your job interviews with Prepify. Experience realistic AI-powered mock interviews, real-time coaching, feedback, and expert-crafted question banks. Loved by 50,000+ professionals.",
  applicationName: "Prepify",
  keywords: [
    "AI interview platform",
    "mock interview practice",
    "technical interviews",
    "career prep tools",
    "AI interview coach",
    "behavioral interview questions",
    "software engineering interviews",
    "prep for tech interviews"
  ],
  
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
  },

  // Open Graph - Modern Requirements
  openGraph: {
    title: "Prepify - Crush Interviews with AI-Powered Practice",
    description: "Practice interviews with AI and get detailed feedback instantly",
    url: "https://prepifyy.vercel.app",
    siteName: "Prepify",
    images: [
      {
        url: "https://prepifyy.vercel.app/og-image.jpg", // Absolute URL required
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
    description: "Nail your next job interview with AI-powered mock sessions and real-time coaching.",
    images: ["https://prepifyy.vercel.app/og-image.jpg"], // Absolute URL
    creator: "@nanino",
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

  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Prepify",
    statusBarStyle: "black-translucent",
    capable: true,
  },

  // Verification - Needs Actual Codes
  verification: {
    google: "google-site-verification=3pLyWnVH_-VBzUabZAeF-mBwwZUcvaA7vNzwox6lkRE",
  },

  // Internationalization
  alternates: {
    canonical: "https://prepifyy.vercel.app",
    languages: {
      "en-US": "https://prepifyy.vercel.app/en",
      "es-ES": "https://prepifyy.vercel.app/es",
    },
    types: {
      "application/rss+xml": "https://prepifyy.vercel.app/rss.xml",
    },
  },

  // Modern Additions
  category: "education",
  metadataBase: new URL("https://prepifyy.vercel.app"),
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
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} antialiased pattern`}
      >
        {children}

        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
