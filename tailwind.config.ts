// tailwind.config.js
import themer from "@tailus/themer";

module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        "./node_modules/@tailus/themer-**/dist/**/*.{js,ts}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Albert Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [
        themer({
            palette: {
                extend: "oz",
            },
            radius: "smoothest",
            background: "light",
            border: "light",
            padding: "large"
        })
    ],
};
