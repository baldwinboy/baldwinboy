import VPSwiper from "@cssnr/vitepress-swiper";
import "@cssnr/vitepress-swiper/style.css";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import "./daisyui-override.css";

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('VPSwiper', VPSwiper)
    },
}
