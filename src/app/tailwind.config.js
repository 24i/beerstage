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
                    primary: '#fbbc0a'
                }
            }
        ]
    }
}
