export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0e0c0d',
        surface: '#161214',
        border: '#2e2428',
        blush: '#e8a0b0',
        'blush-light': '#f0c0cc',
        cream: '#f5efe8',
        muted: '#8a7880',
      },
      boxShadow: {
        glow: '0 30px 80px rgba(232, 160, 176, 0.18)',
      },
      backgroundImage: {
        grain: 'radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 40%)',
      },
    },
  },
  plugins: [],
}
