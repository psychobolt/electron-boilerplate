module.exports = function config(api) {
  return {
    presets: [
      ['@babel/preset-env', {
        targets: {
          node: 'current',
        },
        forceAllTransforms: api.env('production'),
        useBuiltIns: 'entry',
        corejs: '3.0.0',
      }],
      '@babel/preset-flow',
    ],
    plugins: [
      // Stage 1
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-do-expressions',
      // Stage 2
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-throw-expressions',
      // Stage 3
      '@babel/plugin-transform-runtime',
      '@babel/plugin-syntax-dynamic-import',
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true,
        },
      ],
      '@babel/plugin-proposal-json-strings',
    ],
    env: {
      test: {
        plugins: [
          'dynamic-import-node',
        ],
      },
    },
  };
};
