import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "@/style/index.scss";
createApp(App).use(ElementPlus, { size: "small", zIndex: 3000, locale: zhCn }).mount("#app");
