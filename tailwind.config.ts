import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Minecraft Theme
				minecraft: {
					sky: {
						light: 'hsl(var(--mc-sky-light))',
						dark: 'hsl(var(--mc-sky-dark))'
					},
					grass: 'hsl(var(--mc-grass))',
					dirt: 'hsl(var(--mc-dirt))',
					stone: 'hsl(var(--mc-stone))',
					wood: 'hsl(var(--mc-wood))'
				},
				// K-Pop Neon Theme
				neon: {
					pink: 'hsl(var(--neon-pink))',
					purple: 'hsl(var(--neon-purple))',
					blue: 'hsl(var(--neon-blue))',
					cyan: 'hsl(var(--neon-cyan))',
					yellow: 'hsl(var(--neon-yellow))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				// Premium Minecraft animations
				'float-minecraft': {
					'0%, 100%': { transform: 'translateY(0px) rotateY(0deg)' },
					'50%': { transform: 'translateY(-12px) rotateY(180deg)' }
				},
				'block-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(102, 187, 106, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(102, 187, 106, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.2)' 
					}
				},
				'pixel-shimmer': {
					'0%': { filter: 'hue-rotate(0deg) brightness(1)' },
					'25%': { filter: 'hue-rotate(90deg) brightness(1.1)' },
					'50%': { filter: 'hue-rotate(180deg) brightness(1.2)' },
					'75%': { filter: 'hue-rotate(270deg) brightness(1.1)' },
					'100%': { filter: 'hue-rotate(360deg) brightness(1)' }
				},
				// Premium K-Pop animations
				'neon-pulse-luxury': {
					'0%, 100%': { 
						filter: 'drop-shadow(0 0 10px currentColor) drop-shadow(0 0 20px currentColor) brightness(1) saturate(1)',
						transform: 'scale(1)'
					},
					'50%': { 
						filter: 'drop-shadow(0 0 30px currentColor) drop-shadow(0 0 60px currentColor) brightness(1.3) saturate(1.5)',
						transform: 'scale(1.02)'
					}
				},
				'holographic-shift': {
					'0%': { filter: 'hue-rotate(0deg) brightness(1) saturate(1)' },
					'33%': { filter: 'hue-rotate(120deg) brightness(1.2) saturate(1.3)' },
					'66%': { filter: 'hue-rotate(240deg) brightness(1.1) saturate(1.4)' },
					'100%': { filter: 'hue-rotate(360deg) brightness(1) saturate(1)' }
				},
				'cyber-glitch': {
					'0%, 100%': { 
						transform: 'translateX(0) skewX(0deg)',
						filter: 'brightness(1)'
					},
					'10%': { 
						transform: 'translateX(-2px) skewX(-1deg)',
						filter: 'brightness(1.3) hue-rotate(90deg)'
					},
					'20%': { 
						transform: 'translateX(2px) skewX(1deg)',
						filter: 'brightness(0.8) hue-rotate(180deg)'
					},
					'30%': { transform: 'translateX(0) skewX(0deg)', filter: 'brightness(1)' }
				},
				'particle-float': {
					'0%, 100%': { transform: 'translateY(0) translateX(0) scale(1) rotate(0deg)' },
					'25%': { transform: 'translateY(-20px) translateX(10px) scale(1.1) rotate(90deg)' },
					'50%': { transform: 'translateY(-10px) translateX(-5px) scale(0.9) rotate(180deg)' },
					'75%': { transform: 'translateY(-30px) translateX(-10px) scale(1.05) rotate(270deg)' }
				},
				'glass-morph': {
					'0%': { backdropFilter: 'blur(10px) saturate(100%)' },
					'50%': { backdropFilter: 'blur(20px) saturate(150%)' },
					'100%': { backdropFilter: 'blur(10px) saturate(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Premium Minecraft animations
				'float-minecraft': 'float-minecraft 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'block-glow': 'block-glow 3s ease-in-out infinite',
				'pixel-shimmer': 'pixel-shimmer 8s linear infinite',
				// Premium K-Pop animations
				'neon-pulse-luxury': 'neon-pulse-luxury 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'holographic-shift': 'holographic-shift 6s ease-in-out infinite',
				'cyber-glitch': 'cyber-glitch 0.3s ease-in-out infinite',
				'particle-float': 'particle-float 12s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
				'glass-morph': 'glass-morph 4s ease-in-out infinite'
			},
			transitionTimingFunction: {
				'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'premium': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
