// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LVZC Wiki',
  description: 'Your wiki description',
  base: '/LVZC-Wiki/', // Add this back - it's needed for GitHub Pages
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],
    
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dentaku1992/LVZC-Wiki' }
    ]
  }
})