module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('daisyui')
    ],

    daisyui: {
        themes: [
            {
                custom: {
                    'primary': '#fbbc0a',
                    'secondary': '#4a4b4c',
                    'base-100': '#2a2a2a'
                }
            }
        ]
    }
}
