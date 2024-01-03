module.exports = {
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
      {
        files: '*.astro',
        options: {
          parser: 'astro',
        },
      },
    ],
    "singleQuote": false,
    "jsxSingleQuote": false,
    "bracketSameLine": true,
    "endOfLine": "auto",
  };