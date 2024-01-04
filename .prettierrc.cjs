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
    "singleQuote": true,
    "jsxSingleQuote": true,
    "bracketSameLine": true,
    "endOfLine": "auto",
  };