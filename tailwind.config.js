/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily:{
                inter: ['var(--font-inter)']
            },
            colors:{
                background: 'rgb(var(--background))',
                foreground: 'rgb(var(--foreground))',
                muted: 'rgb(var(--muted))',
                accent: 'rgb(var(--accent))',
            },
            backgroundImage:{
                'firefly-radial': "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217,217,217, 0) 100%)",
                'white-radial-bright': "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(217, 217, 217, 0) 100%)",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                'glass-inset': 'inset 0 17px 5px -9px rgba(60, 130, 160, 0.25)',
                'glass-sm': '5px 5px 20px 0px rgba(60, 130, 160, 0.55)',
                'glass-hover': '0 0 15px 3px rgba(255, 180, 90, 0.4)',
                'glass-strong': '0 0 25px 5px rgba(60, 130, 160, 0.5)',
                'glow': '0 0 20px rgba(var(--accent), 0.3)',
                'glow-lg': '0 0 40px rgba(var(--accent), 0.4)',
            },
            keyframes:{
                'spin-reverse':{
                    '0%': {transform: 'rotate(0deg)'},
                    '100%': {transform: 'rotate(-360deg)'}
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.7 }
                },
                'slide-in-left': {
                    '0%': { transform: 'translateX(-100%)', opacity: 0 },
                    '100%': { transform: 'translateX(0)', opacity: 1 }
                },
                'slide-in-right': {
                    '0%': { transform: 'translateX(100%)', opacity: 0 },
                    '100%': { transform: 'translateX(0)', opacity: 1 }
                },
                'fade-in-up': {
                    '0%': { transform: 'translateY(30px)', opacity: 0 },
                    '100%': { transform: 'translateY(0)', opacity: 1 }
                }
            },
            animation:{
                'spin-slow': 'spin 40s linear infinite',
                'spin-slow-reverse': 'spin-reverse 40s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'slide-in-left': 'slide-in-left 0.5s ease-out',
                'slide-in-right': 'slide-in-right 0.5s ease-out',
                'fade-in-up': 'fade-in-up 0.6s ease-out',
            },
            screens:{
                xs: '480px',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            }
        }
    },
    plugins: [],
};
