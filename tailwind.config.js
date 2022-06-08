module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1000px',
      xl: '1440px',
    },
    colors: {
      'primary-1': '#fff7ed',
      'primary-2': '#ffedd5',
      'primary-3': '#fed7aa',
      'primary-4': '#fdba74',
      'primary-5': '#fb923c',
      'primary-6': '#f97316',
      'primary-11': '#ea580c',
      'primary-8': '#c2410c',
      'primary-9': '#9a3412',
      'primary-10': '#7c2d12',
        /*Secondary Colors */
      'secondary-1': '#eff6ff',
      'secondary-2': '#dbeafe',
      'secondary-3': '#bfdbfe',
      'secondary-4': '#93c5fd',
      'secondary-5': '#60a5fa',
      'secondary-6': '#3b82f6',
      'secondary-7': '#2563eb',
      'secondary-8': '#1d4ed8',
      'secondary-9': '#1e40af',
      'secondary-10': '#1e3a8a',
      'white': '#ffffff',
    },
    gridTemplateColumns: {
      'autofill-sm': 'repeat(auto-fill, minmax(170px, 1fr))',
      'autofill-lg': 'repeat(auto-fit, minmax(260px, 1fr))',
      'autofill-details': 'repeat(auto-fit, minmax(250px, 1fr))',
      'grid-sm': 'repeat(2, 2fr)',
      'grid-thumbs': 'repeat(auto-fill, minmax(80px, 1fr))',
      'grid-checkout-pg': 'repeat(5, 1fr)',
      '2': 'repeat(2, 1fr)',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      zoomInOut: {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(0.8)' }
      },
      bounce: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-15px)' },
      }
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
      zoomInOut: 'zoomInOut 1s ease-in-out infinite',
      bounce: 'bounce 1s ease-in-out infinite',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            hr: {
              borderColor: theme('colors.gray.200'),
              borderTopWidth: '1px',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            'ol > li::before': {
              color: theme('colors.gray.900'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.900'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
