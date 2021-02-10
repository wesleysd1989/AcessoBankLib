import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'lib/index.js',
  output: [
    {
      dir: 'dist',
    },
  ],
  plugins: [
    external({
      includeDependencies: true,
    }),
    resolve(),
    babel({
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        'transform-react-remove-prop-types',
      ],
      exclude: 'node_modules/**',
    }),
  ],
};
