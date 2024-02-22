/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        ct: {
          'text-black': '#1F2328',
          default: {
            border: '#D0D7DE',
            bg: '#F6F8FA',
            hover: '#EBECF0',
            text: '#24292F',
          },
          primary: {
            bg: '#1F883D',
            border: '#1F793A',
            hover: '#187733',
            text: '#fff',
          },
          icon: '#636C76',
        },
      },
      dropShadow: {
        iconButton: '0px 1px 0px 0px rgba(27,31,35,0.4)',
      },
    },
  },
  plugins: [],
}
