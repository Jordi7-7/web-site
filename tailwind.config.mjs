/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				float: {
				  '0%, 100%': { transform: 'translateY(0)' },
				  '50%': { transform: 'translateY(-10px)' },
				},
			  },
			  animation: {
				float: 'float 3s ease-in-out infinite',
			  },
			clipPath: {
				'custom-clip': 'polygon(100% 0, 0 0, 0 100%, 69% 100%, 69% 81%, 85% 81%, 85% 67%, 100% 67%)',
			}
			  ,
			backgroundImage: {
				'hero-image':"url('/hero-image.jpg')"
			},
			colors: {
				'primary':'#2986FE',
				'gray-bg':'#f9f9fb',
				'gray-text':'#6E6D7A'
			}
		},
	},
	plugins: [
		require('tailwind-clip-path'),
	],
}
