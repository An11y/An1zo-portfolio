/** @type {import('tailwindcss').Config} */
module.exports = {
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
                'white-radial-bright': "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(217, 217, 217, 0) 100%)"
            },
            boxShadow: {
                'glass-inset': 'inset 0 17px 5px -9px rgba(60, 130, 160, 0.25)', // Нежное внутреннее свечение под акцентный цвет
                'glass-sm': '5px 5px 20px 0px rgba(60, 130, 160, 0.55)', // Мягкое внешнее свечение, выделяющее элементы
                'glass-hover': '0 0 15px 3px rgba(255, 180, 90, 0.4)', // Лёгкое тёплое свечение при наведении (из highlight)
                'glass-strong': '0 0 25px 5px rgba(60, 130, 160, 0.5)', // Более выраженное акцентное свечение для важных элементов
            },
            keyframes:{
                'spin-reverse':{
                    '0%': {transform: 'rotate(0deg)'},
                    '100%': {transform: 'rotate(-360deg)'}
                }
            },
            animation:{
                'spin-slow': 'spin 40s linear infinite',
                'spin-slow-reverse': 'spin-reverse 40s linear infinite',
            },
            screens:{
                xs: '480px',
            }
        }
    },
    plugins: [],
};
