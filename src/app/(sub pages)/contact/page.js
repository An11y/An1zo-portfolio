import Form from "@/components/contact/Form";
import { motion } from "framer-motion";

export const metadata = {
    title: "Contact - Anton Bugaev",
    description: "Get in touch with Anton Bugaev for project collaborations, consultations, or any inquiries. Frontend React Developer with 2+ years commercial experience.",
};

export default function Contact() {
    return (
        <>
            <article className='relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-12'>
                <div className='flex flex-col items-center justify-center space-y-8 w-full max-w-4xl px-4'>
                    <div className="text-center space-y-6">
                        <h1 className='text-foreground font-bold text-center text-4xl md:text-5xl lg:text-6xl'>
                            Let's <span className="gradient-text">Connect</span>
                        </h1>
                        <p className='text-center font-light text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed'>
                            Frontend React Developer with 2+ years of commercial experience. Ready to help bring your ideas to life 
                            through modern, high-performance React applications and technical consultation.
                        </p>
                    </div>

                    {/* Quick Contact Options */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                        <div className="bg-background/20 backdrop-blur-sm border border-accent/30 rounded-xl p-6 text-center hover:border-accent/60 transition-all duration-300">
                            <div className="text-3xl mb-3">💼</div>
                            <h3 className="font-semibold text-foreground mb-2">Commercial Projects</h3>
                            <p className="text-sm text-muted">React/Next.js development and consulting</p>
                        </div>
                        <div className="bg-background/20 backdrop-blur-sm border border-accent/30 rounded-xl p-6 text-center hover:border-accent/60 transition-all duration-300">
                            <div className="text-3xl mb-3">🚀</div>
                            <h3 className="font-semibold text-foreground mb-2">Performance Optimization</h3>
                            <p className="text-sm text-muted">Frontend optimization and code reviews</p>
                        </div>
                        <div className="bg-background/20 backdrop-blur-sm border border-accent/30 rounded-xl p-6 text-center hover:border-accent/60 transition-all duration-300">
                            <div className="text-3xl mb-3">☕</div>
                            <h3 className="font-semibold text-foreground mb-2">Just Say Hi</h3>
                            <p className="text-sm text-muted">Connect and share ideas</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <Form/>

                {/* Additional Contact Info */}
                <div className="w-full max-w-4xl px-4">
                    <div className="bg-background/10 backdrop-blur-sm border border-accent/20 rounded-2xl p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-4">Response Time</h3>
                                <p className="text-muted mb-4">
                                    I typically respond to all inquiries within 24 hours. For urgent matters, 
                                    feel free to reach out via Telegram (@an_bugaev) for faster communication.
                                </p>
                                <div className="flex items-center text-accent">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-medium">Usually within 24 hours</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-4">Let's Discuss</h3>
                                <ul className="space-y-2 text-muted">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                                        React/Next.js Development
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                                        Frontend Optimization
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                                        Code Reviews & Consulting
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                                        Team Collaboration
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}