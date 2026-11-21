/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#071426',
        deep: '#102C50',
        electric: '#2563EB',
        cyanGlow: '#22D3EE',
        mist: '#C2D4E8'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        glow: '0 0 28px rgba(34, 211, 238, 0.22)',
        blueGlow: '0 0 32px rgba(37, 99, 235, 0.35)'
      }
    }
  },
  plugins: []
};
