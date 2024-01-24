import { createContentLoader } from "vitepress";

export default createContentLoader("products/**/*.md", { 
    includeSrc: false,
    transform(raw) {
        return raw.filter(page => page.url != "/products/");
    }
});
