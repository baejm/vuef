import Vue from "vue";
import Vuetify, { VSnackbar } from "vuetify/lib";
import VuetifyToast from "vuetify-toast-snackbar";

Vue.use(Vuetify, {
  components: {
    VSnackbar
  }
});

const opts = {}; // your options

const vueObj = new Vuetify(opts);

export default vueObj;

Vue.use(VuetifyToast, {
  $vuetify: vueObj.framework
});
