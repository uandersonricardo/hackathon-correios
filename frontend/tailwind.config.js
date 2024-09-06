const animate = require('tailwindcss-animate')

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',

  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}'
  ],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Trebuchet MS', 'arial', 'helvetica', 'Open Sans', 'sans-serif']
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        correios: {
          DEFAULT: '#ffe600',
          dark: '#00416b',
          light: '#007bb3'
        },
        primary: {
          0: '#000000',
          10: '#001F33',
          20: '#00416B',
          30: '#006399',
          40: '#0083CA',
          50: '#00A5FF',
          60: '#33B7FF',
          70: '#66C9FF',
          80: '#99DBFF',
          90: '#CCEDFF',
          95: '#E5F6FF',
          99: '#FAFDFF',
          100: '#FFFFFF'
        },

        secondary: {
          0: '#000000',
          10: '#59410D',
          20: '#8E640B',
          30: '#CD992B',
          40: '#FFC20E',
          50: '#FFD400',
          60: '#FFE600',
          70: '#FFF34D',
          80: '#FFF780',
          90: '#FFF7B3',
          95: '#FFFDE5',
          99: '#FFFFFA',
          100: '#FFFFFF'
        },
        error: {
          0: '#000000',
          10: '#3D0000',
          20: '#700000',
          30: '#A30000',
          40: '#D50000',
          50: '#FF0A0A',
          60: '#FF3D3D',
          70: '#FF7070',
          80: '#FFA3A3',
          90: '#FFD6D6',
          95: '#FFEBEB',
          99: '#FFFAFA',
          100: '#FFFFFF'
        },
        neutral: {
          0: '#000000',
          10: '#1E1D1B',
          20: '#3F3E3B',
          30: '#5E5C5A',
          40: '#72706E',
          50: '#9B9996',
          60: '#BAB8B5',
          70: '#DEDCD9',
          80: '#EDEBE8',
          90: '#EDEBE8',
          95: '#FBF9F6',
          99: '#FDFDFB',
          100: '#FFFFFF'
        },
        'neutral-variant': {
          0: '#000000',
          10: '#3C3630',
          20: '#4C433C',
          30: '#584F46',
          40: '#675D51',
          50: '#807364',
          60: '#998E82',
          70: '#BDB4AB',
          80: '#D1CCC7',
          90: '#EFEDEA',
          95: '#F9F8F6',
          99: '#FDFDFC',
          100: '#FFFFFF'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' }
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out'
      }
    }
  },
  plugins: [animate]
}
