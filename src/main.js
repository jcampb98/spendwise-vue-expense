import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "../src/styles/style.css";
import App from "./App.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiSolidPencilAlt, HiSolidTrash, FaRegularFilePdf } from "oh-vue-icons/icons";
import { inject } from '@vercel/analytics';
 
inject();

addIcons(HiSolidPencilAlt, HiSolidTrash, FaRegularFilePdf);

const app = createApp(App);
app.use(Toast);
app.component("v-icon", OhVueIcon);
app.mount("#app");
