import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [{
  input: 'src/index.js',
  output: {
    file: 'rollup-build/index.js',
    format: 'cjs'
  },
  plugins: [nodeResolve()]
}, {
  input: 'src/index.js',
  output: {
    file: 'rollup-build/esm/index.js',
    format: 'esm'
  },
  plugins: [nodeResolve()]
}, {
  input: 'src/index.js',
  output: {
    file: 'rollup-build/umd/index.js',
    format: 'umd',
    name: 'umd-biuld'
  },
  plugins: [nodeResolve()]
}]
