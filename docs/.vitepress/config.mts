import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "raiga0310's portfolio",
  description: "A VitePress Site",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["mata", { property: "og:image", content: "https://github.com/raiga0310.png"}],
    ["meta", { property: "og:site_name", content: "raiga0310" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Products', link: '/products/index'}
    ],

    sidebar: [
      {
        text: 'コンテンツ',
        items: [
          { text: 'プロフィール', link: '/profile' },
          { text: '経歴', link: '/history' },
          { text: 'スキル･経験', link: '/skills'},
          { text: 'Contact', link: '/contacts'}
        ],
      },
      {
        text: '開発物',
        items: [
          { text: 'ShowerTime', link: '/products/shower_time/' },
          { text: 'Midi-bevy', link: '/products/midi_bevy/' },
          { text: 'GarbageCollector', link: '/products/garbage_collector/' },
          { text: 'vxbot shuttle', link: '/products/vxbot_shuttle/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/raiga0310' }
    ],
    footer: {
      message: '',
      copyright: 'Copyright © 2024 raiga0310 All rights reserved.'
    }
  },
  async transformHead(context) {
    return [
      ["meta", { property: "og:title", content: context.pageData.title }],
      ["meta", { property: "og:url", content: `https://profile.a6x.dev/${context.pageData.filePath.replace(/^\//, "").replace(/\.md$/, "/")}` }],
    ];
  },
})
