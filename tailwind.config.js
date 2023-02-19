/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          lightred: {
            regular: 'hsl(0, 100%, 67%)',
            blurred: 'hsla(0, 100%, 67%, 0.08)',
          },
          orangeyyellow: {
            regular: 'hsl(39, 100%, 56%)',
            blurred: 'hsla(39, 100%, 56%, 0.08)',
          },
          greenteal: {
            regular: 'hsl(166, 100%, 37%)',
            blurred: 'hsla(166, 100%, 37%, 0.08)'
          },
          cobalblue: {
            regular: 'hsl(234, 85%, 45%)',
            blurred: 'hsla(234, 85%, 45%, 0.08)'
          },
        },
        gradient: {
          light: {
            slateblue: 'hsl(252, 100%, 67%)',
            royalblue: 'hsl(241, 81%, 54%)'
          },
          violet: {
            blue: 'hsla(256, 72%, 46%, 1)',
          },
          persian: {
            blue: 'hsla(241, 72%, 46%, 0)'
          }
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          pale: {
            blue: 'hsl(221, 100%, 96%)',
          },
          light: {
            lavender: 'hsl(241, 100%, 89%)',
          },
          dark: {
            gray: {
              blue: 'hsl(224, 30%, 27%)'
            }
          }
        }
      },
      fontFamily: {
        body: ['Hanken Grotesk']
      }

    },
  },
  plugins: [],
}
