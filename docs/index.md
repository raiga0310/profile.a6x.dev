---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "raiga0310"
  actions:
    - theme: brand
      text: プロフィール
      link: /profile
    - theme: alt
      text: 経歴
      link: /history
    - theme: alt
      text: スキル･経験
      link: /skills
    - theme: alt
      text:  Contact
      link: /contacts

features:
  - title: プログラミング
    details: 趣味でRustを中心に開発｡TypeScriptやC++を次点で使うことがおおいです｡<br>インターンではPHPでバックエンド領域にアサインされています｡
  - title: 創作
    details: 最近はサボリ気味｡5千字程度の小説をたまに書きます｡読むのも好きです｡
  - title: 散歩
    details: 休日朝早く起きられたら8時間くらい歩いたり自転車ころがしたり｡
---

<script lang="ts" setup>
  import Products from "./.vitepress/theme/components/Products.vue"
</script>

<Products />
