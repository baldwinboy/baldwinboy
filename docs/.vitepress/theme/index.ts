import DefaultTheme from "vitepress/theme";
import VPSwiper from './components/VPSwiper.vue'
import "./daisyui-override.css";
import "./style.css";

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('VPSwiper', VPSwiper)
    },
}
