/** @type {import('postcss-load-config').Config} */
import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';

const config = {
  plugins: [
    autoprefixer,
    postcssNested
  ]
};

export default config;