
module.exports = {
    plugins: [
      require('postcss-cssnext')(),
      require('postcss-modules')({
        scopeBehaviour: 'global' // can be 'global' or 'local',
      }),
      require('cssnano')()
    ]
  }