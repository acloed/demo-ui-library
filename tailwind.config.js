module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    // Toggle dark-mode based on data-mode="dark"
    // darkMode: ['class', '[data-mode="dark"]'],
    theme: {
      extend: {},
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
          '"Saira Condensed"',
        ],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
        courierNew: ['"Courier New"', 'sans-serif'],
      },
    },
    plugins: [],
  };