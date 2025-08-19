import DefaultTheme from "vitepress/theme";
import "./styles.css";
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import { useData, useRoute } from "vitepress";
import { reactive, toRefs } from "vue";

export default {
  ...DefaultTheme,
  setup() {
    const data = reactive(useData());
    const { frontmatter } = toRefs(data);
    const route = useRoute();
    giscusTalk(
      {
        repo: "zoumingyin/place-keep-doc",
        repoId: "R_kgDOPgRQ8w", // 从 giscus 获得
        category: "Announcements",
        categoryId: "DIC_kwDOPgRQ884CuVJ3",
        mapping: "pathname",
        inputPosition: "bottom",
        lang: "zh-CN",
        lightTheme: "light",
        darkTheme: "transparent_dark",
        homePageShowComment: false,
      },
      { frontmatter, route },
      true
    );
  },
};
