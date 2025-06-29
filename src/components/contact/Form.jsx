"use client"
import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import emailjs from "@emailjs/browser";
import {toast, Toaster} from "sonner";
import {motion} from "framer-motion";

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        } 
    }
}

const item = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0, transition: { duration: 0.5 }}
}

export default function Form() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {register, handleSubmit, formState: {errors}, reset, watch} = useForm();
    
    const watchedFields = watch();

    const sendEmail = (params) => {
        setIsSubmitting(true);
        const toastId = toast.loading('Sending your message...', {
            duration: 5000,
        })

        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                params,
                {
                    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                    limitRate: {
                        throttle: 5000,
                    },
                }
            )
            .then(
                () => {
                    toast.success('Message sent successfully! I\'ll get back to you soon.', {
                        id: toastId,
                        duration: 5000,
                    });
                    reset();
                },
                (error) => {
                    console.error('EmailJS Error:', error);
                    toast.error('Failed to send message. Please try again.', {
                        id: toastId,
                        duration: 5000,
                    })
                }
            )
            .finally(() => {
                setIsSubmitting(false);
            })
    };

    const onSubmit = (data) => {
        const templateParams = {
            to_name: "Anton Bugaev",
            from_name: data.Name,
            reply_to: data.Email,
            message: data.Message,
        };

        sendEmail(templateParams);
    };

    return (
        <>
            <Toaster richColors={true} position="top-center"/>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className='max-w-lg w-full mx-auto'
            >
                <motion.div variants={item} className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground mb-2">Get In Touch</h2>
                    <p className="text-muted">Let&apos;s discuss your next project or just say hello!</p>
                </motion.div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='space-y-6'
                >
                    {/* Name Field */}
                    <motion.div variants={item} className="space-y-2">
                        <label className="block text-sm font-medium text-foreground">
                            Name *
                        </label>
                        <input
                            type="text" 
                            placeholder="Your full name" 
                            {...register("Name", {
                                required: 'Name is required',
                                minLength: {
                                    value: 2, 
                                    message: 'Name must be at least 2 characters'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'Name must be less than 50 characters'
                                }
                            })}
                            className={`w-full p-4 rounded-lg bg-background/50 border ${
                                errors.Name ? 'border-red-500' : 'border-accent/30'
                            } text-foreground placeholder-muted backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent`}
                        />
                        {errors.Name && (
                            <span className='text-red-400 text-sm flex items-center'>
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.Name.message}
                            </span>
                        )}
                    </motion.div>

                    {/* Email Field */}
                    <motion.div variants={item} className="space-y-2">
                        <label className="block text-sm font-medium text-foreground">
                            Email *
                        </label>
                        <input 
                            type="email" 
                            placeholder="your.email@example.com" 
                            {...register("Email", {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Please enter a valid email address'
                                }
                            })}
                            className={`w-full p-4 rounded-lg bg-background/50 border ${
                                errors.Email ? 'border-red-500' : 'border-accent/30'
                            } text-foreground placeholder-muted backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent`}
                        />
                        {errors.Email && (
                            <span className='text-red-400 text-sm flex items-center'>
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.Email.message}
                            </span>
                        )}
                    </motion.div>

                    {/* Message Field */}
                    <motion.div variants={item} className="space-y-2">
                        <label className="block text-sm font-medium text-foreground">
                            Message *
                            <span className="text-muted text-xs ml-2">
                                ({watchedFields.Message?.length || 0}/500)
                            </span>
                        </label>
                        <textarea 
                            placeholder='Tell me about your project, ideas, or just say hello...' 
                            rows={6}
                            {...register("Message", {
                                required: 'Message is required',
                                minLength: {
                                    value: 10,
                                    message: 'Message must be at least 10 characters'
                                },
                                maxLength: {
                                    value: 500,
                                    message: 'Message must be less than 500 characters'
                                }
                            })} 
                            className={`w-full p-4 rounded-lg bg-background/50 border ${
                                errors.Message ? 'border-red-500' : 'border-accent/30'
                            } text-foreground placeholder-muted backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none`}
                        />
                        {errors.Message && (
                            <span className='text-red-400 text-sm flex items-center'>
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.Message.message}
                            </span>
                        )}
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        variants={item}
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform ${
                            isSubmitting 
                                ? 'bg-muted/30 text-muted cursor-not-allowed' 
                                : 'bg-gradient-to-r from-accent to-accent/80 text-background hover:from-accent/90 hover:to-accent hover:scale-105 hover:shadow-lg'
                        } focus:outline-none focus:ring-4 focus:ring-accent/30`}
                    >
                        {isSubmitting ? (
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </div>
                        ) : (
                            <div className="flex items-center justify-center">
                                <span>Send Message</span>
                                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </div>
                        )}
                    </motion.button>
                </form>

                {/* Contact Info */}
                <motion.div variants={item} className="mt-12 text-center">
                    <p className="text-muted mb-4">Prefer to reach out directly?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="mailto:your.email@example.com"
                            className="flex items-center text-accent hover:text-accent/80 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Email Me
                        </a>
                        <a
                            href="https://t.me/an_bugaev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-accent hover:text-accent/80 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                            Telegram
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}