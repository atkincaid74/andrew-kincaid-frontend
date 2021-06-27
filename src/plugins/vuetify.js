import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg",
  },
  theme: {
    options: {
      customProperties: true,
    },
    dark: true,
    themes: {
      light: {
        primary: "#eebbbb",
        secondary: "#607d8b",
        accent: "#00bcd4",
        blackWhite: "#FFF",
        error: "#f44336",
        warning: "#ff9800",
        info: "#ffc107",
        success: "#4caf50",
      },
      dark: {
        primary: "#eebbbb",
        secondary: "#607d8b",
        accent: "#00bcd4",
        blackWhite: "#000",
        error: "#db3f35",
        warning: "#d37000",
        info: "#D89C07",
        success: "#4a964b",
      },
    },
  },
});
