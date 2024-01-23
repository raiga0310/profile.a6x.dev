import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "raiga0310's portfolio",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Profile', link: '/profile' },
      { text: 'History', link: '/history'},
      { text: 'Skills', link: '/skills'},
      { text: 'Contacts', link: '/contacts'},
    ],

    sidebar: [
      {
        text: 'コンテンツ',
        items: [
          { text: 'プロフィール', link: '/profile' },
          { text: '経歴', link: '/history' },
          { text: 'スキル･経験', link: '/skills'},
          { text: 'Contact', link: '/contacts'}
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
  }
})
