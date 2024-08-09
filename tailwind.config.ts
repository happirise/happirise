import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        home_main: "url('/images/home_main.png')",
        home_work: "url('/images/home_work.png')",
        home_company: "url('/images/home_company.png')",
      },
      boxShadow: {
        home_work: '10px 10px 0px rgba(0, 0, 0, 0.6)',
        home_company: '-10px 10px 0px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};
export default config;
