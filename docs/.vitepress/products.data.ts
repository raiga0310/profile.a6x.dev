import { createContentLoader } from "vitepress";

export default createContentLoader("products/**/*.md", { includeSrc: true });
