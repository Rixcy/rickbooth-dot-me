module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    // purge: false,
    theme: {
        fontFamily: {
            title: ['Arvo', 'serif'],
            body: ['Lato', 'sans-serif'],
        },
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
    plugins: [require('@tailwindcss/typography')],
}
