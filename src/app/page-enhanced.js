import React from 'react';
import Image from "next/image";
import bg from "../../public/background/home-bg.jpg";
import dynamic from "next/dynamic";
import { Main } from "@/components/models/Main";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";

const RenderModel = dynamic(() => import("@/components/RenderModel"), { ssr: false });
const Navigation = dynamic(() => import("@/components/navigation"), { ssr: false });
const AutoScrollingText = dynamic(() => import("@/components/AutoScrollingText"), { ssr: false });

const MemoizedMain = React.memo(Main);

export default function Home() {
    return (
        <>
            {/* Hero Section with 3D Model */}
            <main className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden">
                {/* Background Image */}
                <Image
                    priority
                    sizes="100vw"
                    src={bg}
                    alt="An1zo Portfolio Background"
                    fill
                    className="absolute -z-50 w-full h-full object-cover object-center"
                />

                {/* 3D Model in the background */}
                <div className="absolute inset-0 -z-10">
                    <RenderModel>
                        <MemoizedMain />
                    </RenderModel>
                </div>

                {/* Hero Content */}
                <HeroSection />

                {/* Navigation */}
                <div className="relative w-full h-screen pointer-events-none">
                    <Navigation />
                </div>

                {/* Auto-scrolling text */}
                <AutoScrollingText />
            </main>

            {/* Additional Sections */}
            <div className="relative z-10 bg-gradient-to-b from-background/90 to-background">
                {/* Featured Projects Section */}
                <FeaturedProjects />
                
                {/* Testimonials Section */}
                <Testimonials />
                
                {/* Quick Stats Section */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { number: "5+", label: "Happy Clients" },
                                { number: "15+", label: "Projects Completed" },
                                { number: "2+", label: "Years Experience" },
                                { number: "24/7", label: "Support Available" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-muted">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Ready to Bring Your Ideas to Life?
                        </h2>
                        <p className="text-muted mb-8 max-w-2xl mx-auto">
                            Let's collaborate to create something amazing together. 
                            From concept to deployment, I'll help you build exceptional digital experiences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-accent text-background font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Start a Project
                            </a>
                            <a
                                href="/projects"
                                className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-background transition-all duration-300"
                            >
                                View My Work
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
