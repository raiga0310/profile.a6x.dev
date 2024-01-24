import { createContentLoader } from "vitepress";

export default createContentLoader("products/**/index.md", { includeSrc: true });
