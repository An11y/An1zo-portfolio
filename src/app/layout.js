import {Inter} from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Sound from "@/components/Sound";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({
    subsets: ["latin"], variable: "--font-inter",
});

export const metadata = {
    title: "Anton Bugaev - Frontend React Developer | Portfolio", 
    description: "Portfolio of Anton Bugaev - Frontend React Developer with 2+ years of commercial experience. Specializing in React, Next.js, TypeScript, and modern web technologies.",
    keywords: ["Anton Bugaev", "Frontend Developer", "React Developer", "Next.js", "TypeScript", "JavaScript", "Web Developer", "Portfolio"],
    authors: [{ name: "Anton Bugaev" }],
    creator: "Anton Bugaev",
    publisher: "Anton Bugaev",
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Anton Bugaev - Frontend React Developer Portfolio",
        description: "Frontend React Developer with 2+ years commercial experience. Modern portfolio showcasing projects and skills",
        siteName: "Anton Bugaev Portfolio"
    },
    twitter: {
        card: "summary_large_image",
        title: "Anton Bugaev - Frontend React Developer",
        description: "Frontend React Developer with 2+ years commercial experience"
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>
                {children}
                <Sound/>
                <ThemeToggle/>
                <div id='my-modal'></div>
            </body>
        </html>
    );
}
