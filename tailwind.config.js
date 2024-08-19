/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
        "node_modules/preline/dist/*.js",
    ],
    theme: {
        extend: {
            colors: {
                first: "#F8EDED",
                second: "#FF8225",
                third: "#B43F3F",
                fourth: "#173B45",
            },
        },
    },
    plugins: [require("preline/plugin")],
};
