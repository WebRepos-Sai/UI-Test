module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        MThin: ['Montserrat-Thin', 'sans-serif'],
        MLight: ['Montserrat-Light', 'sans-serif'],
        MRegular: ['Montserrat-Regular', 'sans-serif'],
        MMedium: ['Montserrat-Medium', 'sans-serif'],
        MSBold: ['Montserrat-SemiBold', 'sans-serif'],
        MBold: ['Montserrat-Bold', 'sans-serif'],
        MExtra: ['Montserrat-ExtraBold', 'sans-serif'],
      },

      colors: {
        primary: "#1d1d1b",
        secondary: "#00335b",
        LogoBG: "#132323",
        mini: "#484848",
        faded: "#b4b4b4",
        email: "#595958",
        line:"#d3d3d3",
        circle:"#eeeeee",
      },
      letterSpacing: {
        tightest: '-.075em',
         tighter: '-.05em',
        tight: '-.025em',
         normal: '0',
        wide: '.025em',
         wider: '.05em',
        widest: '.25em',
       }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
