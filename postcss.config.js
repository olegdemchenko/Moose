const Autoprefixer = require('autoprefixer');
const CssNano = require('cssnano');
const CssMqPacker = require('css-mqpacker');


module.exports = {
  plugins: [
  //  Autoprefixer(),
  //  CssNano(),
    CssMqPacker(),
  ]
}