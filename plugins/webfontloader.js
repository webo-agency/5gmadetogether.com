var WebFont = require('webfontloader');
 
export default ({ app, env }) => {
  app.$WebFontLoad = WebFont.load({
    google: {
      families: [env.GOOGLE_FONTS]
    }
  });
}
