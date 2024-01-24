## Productページへの追加手順

1. `/products/[product_name]/index.md`を作成
2. `/.vitepress/config.mts`に下記のように

<details>
<summary>diff</summary>

```diff

//snip...

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //...
  themeConfig: {
    //...
    sidebar: [
        //...
      {
        text: '開発物',
        items: [
            //...
-         { text: 'vxbot shuttle', link: '/products/vxbot_shuttle/' }
+         { text: 'vxbot shuttle', link: '/products/vxbot_shuttle/' },
+         { text: '[product_name]', link: '/products/[product_name]'}
        ]
      }
    ],
    //...
})
```
</details>
