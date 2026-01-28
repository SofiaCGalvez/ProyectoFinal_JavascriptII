module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Si SVGO los quita, tu sprite se queda "vacío" en producción
          removeUselessDefs: false,
          removeHiddenElems: false,
          cleanupIds: false,
        },
      },
    },
  ],
};