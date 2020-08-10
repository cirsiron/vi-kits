// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './index.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  plugins: [ commonjs(), resolve() ],
  external: ['lodash'] // 指出应将哪些模块视为外部模块
};