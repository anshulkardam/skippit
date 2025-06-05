/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Primary “feel-good” blue shades
        primary: {
          DEFAULT: "#3B82F6", // blue-500 → main action color
          light: "#DBEAFE", // blue-100 → backgrounds/cards
          dark: "#1D4ED8", // blue-700 → pressed/active states
          bg: "#EFF6FF", // blue-50  → overall app background
        },
        // Neutral grays for text/background balance
        neutral: {
          light: "#F3F4F6", // gray-100 → off-white surfaces
          DEFAULT: "#6B7280", // gray-500 → secondary text
          dark: "#374151", // gray-700 → primary text
        },
        // Accent/feedback (e.g., success states, badges)
        "accent-teal": "#14B8A6", // teal-500
      },
      fontFamily: {
        Poppins_400Regular: ["Poppins_400Regular"],
        Poppins_500Medium: ["Poppins_500Medium"],
        Poppins_600SemiBold: ["Poppins_600SemiBold"],
        Poppins_700Bold: ["Poppins_700Bold"],
      },
    },
  },
  plugins: [],
};
