// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LVZC Wiki',
  description: 'Kennisbank Liga van Vlaamse Zweefvliegclubs',
  base: '/LVZC-Wiki/',
  lang: 'nl-NL',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'ZweefApp', link: '/zweefapp/' },
      { text: 'Instructeurs', link: '/instructeurs/' },
      { text: 'Piloten', link: '/piloten/' }
    ],
    
    sidebar: {
      '/zweefapp/': [
        {
          text: 'Administrators',
          items: [
            { text: 'Overzicht', link: '/zweefapp/' }
          ]
        }
      ],
      
      '/instructeurs/': [
        {
          text: 'Instructeurs',
          items: [
            { text: 'Overzicht', link: '/instructeurs/' }
          ]
        }
      ],
      
      '/piloten/': [
        {
          text: 'Piloten',
          items: [
            { text: 'Overzicht', link: '/piloten/' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dentaku1992/LVZC-Wiki' }
    ],
    
    footer: {
      message: 'Liga van Vlaamse Zweefvliegclubs vzw',
      copyright: 'Copyright © 2026 LVZC'
    },
    
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Zoeken',
            buttonAriaLabel: 'Zoeken'
          },
          modal: {
            noResultsText: 'Geen resultaten voor',
            resetButtonTitle: 'Reset zoekopdracht',
            footer: {
              selectText: 'om te selecteren',
              navigateText: 'om te navigeren',
              closeText: 'om te sluiten'
            }
          }
        }
      }
    },
    
    docFooter: {
      prev: 'Vorige pagina',
      next: 'Volgende pagina'
    },
    
    outline: {
      label: 'Op deze pagina',
      level: [2, 3]
    },
    
    lastUpdated: {
      text: 'Laatst bijgewerkt'
    }
  }
})