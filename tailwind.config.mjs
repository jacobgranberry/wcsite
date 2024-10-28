import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["Gothic A1", ...defaultTheme.fontFamily.sans],
  			serif: ["Judson", ...defaultTheme.fontFamily.serif]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			brand: {
  				burgundy: '#800020',
  				black: '#02010A',
  				green: '#0D5F0C',
  				orange: '#F78F44',
  				blue: '#0081A7',
  				brown: '#7F5539',
  				red: '#B62A2A',
  				gray: '#3B3B3B',
  				navy_blue: '#022546',
  				gold: ' #D1AF57',
  				teal: '#008080',
  				dusty_rose: '#9F736F',
  				copper: '#8B452D',
  				olive_green: '#BAB86C',
  				plum: '#87407E',
  				mustard: '#FFDB58',
  				navy_gray: '#516278'
  			},
  			bgColor: '#f4f4f4',
  			primaryLightShade: '#FFFCF1',
  			primaryLightBorder: '#d9ceb2',
  			camel: '#8b6e50',
  			primaryGold: {
  				'50': 'hsl(49, 67%, 95%)',
  				'100': 'hsl(51, 67%, 88%)',
  				'200': 'hsl(48, 69%, 77%)',
  				'300': 'hsl(46, 70%, 64%)',
  				'400': 'hsl(44, 68%, 55%)',
  				'500': 'hsl(41, 66%, 47%)',
  				'600': 'hsl(36, 68%, 40%)',
  				'700': 'hsl(31, 65%, 33%)',
  				'800': 'hsl(28, 58%, 29%)',
  				'900': 'hsl(24, 51%, 26%)',
  				'950': 'hsl(21, 58%, 14%)',
  				DEFAULT: 'hsl(44, 68%, 55%)'
  			},
  			primaryDark: {
  				light: 'hsl(53, 8%, 22%)',
  				DEFAULT: 'hsl(50, 8%, 15%)',
  				dark: 'hsl(60, 10%, 10%)'
  			},
  			primaryRed: {
  				'50': 'hsl(0, 73%, 97%)',
  				'100': 'hsl(0, 73%, 94%)',
  				'200': 'hsl(0, 75%, 89%)',
  				'300': 'hsl(0, 70%, 82%)',
  				'400': 'hsl(0, 69%, 71%)',
  				'500': 'hsl(0, 64%, 60%)',
  				'600': 'hsl(0, 55%, 51%)',
  				'700': 'hsl(0, 56%, 39%)',
  				'800': 'hsl(0, 53%, 35%)',
  				'900': 'hsl(0, 47%, 31%)',
  				'950': 'hsl(0, 58%, 15%)',
  				DEFAULT: 'hsl(0, 56%, 39%)'
  			},
  			primaryLight: {
  				'50': 'hsl(44, 56%, 95%)',
  				'100': 'hsl(45, 57%, 92%)',
  				'200': 'hsl(43, 53%, 83%)',
  				'300': 'hsl(41, 55%, 72%)',
  				'400': 'hsl(38, 54%, 61%)',
  				'500': 'hsl(35, 53%, 53%)',
  				'600': 'hsl(31, 50%, 48%)',
  				'700': 'hsl(28, 50%, 40%)',
  				'800': 'hsl(26, 44%, 34%)',
  				'900': 'hsl(26, 41%, 28%)',
  				'950': 'hsl(25, 46%, 15%)',
  				DEFAULT: 'hsl(44, 56%, 95%)'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
  			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		},
  		keyframes: {
  			'shimmer-slide': {
  				to: {
  					transform: 'translate(calc(100cqw - 100%), 0)'
  				}
  			},
  			'spin-around': {
  				'0%': {
  					transform: 'translateZ(0) rotate(0)'
  				},
  				'15%, 35%': {
  					transform: 'translateZ(0) rotate(90deg)'
  				},
  				'65%, 85%': {
  					transform: 'translateZ(0) rotate(270deg)'
  				},
  				'100%': {
  					transform: 'translateZ(0) rotate(360deg)'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
