// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LVZC Wiki',
  description: 'Kennisbank voor Liga van Vlaamse Zweefvliegclubs',
  base: '/LVZC-Wiki/',
  lang: 'nl-NL',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Administrators', link: '/zweefapp/' },
      { text: 'Instructeurs', link: '/instructeurs/' },
      { text: 'Piloten', link: '/piloten/' }
    ],
    
    sidebar: {
      '/zweefapp/': [
        {
          text: 'Communicatie & Instellingen',
          collapsed: false,
          items: [
            { text: 'Overzicht', link: '/zweefapp/' },
            { text: 'Communicatie en Contacten', link: '/zweefapp/communicatie' },
            { text: 'Club Settings', link: '/zweefapp/club-settings' }
          ]
        },
        {
          text: 'Ledenadministratie',
          collapsed: false,
          items: [
            { text: 'Lidmaatschap Beheer', link: '/zweefapp/lidmaatschap' },
            { text: 'Privacy en Gegevens', link: '/zweefapp/privacy' },
            { text: 'Thuisclub Wijzigen', link: '/zweefapp/thuisclub' }
          ]
        },
        {
          text: 'DTO & Clusters',
          collapsed: false,
          items: [
            { text: 'DTO Cluster', link: '/zweefapp/dto-cluster' },
            { text: 'LVZC Cluster', link: '/zweefapp/lvzc-cluster' }
          ]
        },
        {
          text: 'Technisch & Geavanceerd',
          collapsed: false,
          items: [
            { text: 'API Toegang', link: '/zweefapp/api' },
            { text: 'Liga Toegang', link: '/zweefapp/liga-toegang' }
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
      message: 'Liga van Vlaamse Zweefvliegclubs',
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
    },

    editLink: {
      pattern: 'https://github.com/Dentaku1992/LVZC-Wiki/edit/main/docs/:path',
      text: 'Bewerk deze pagina op GitHub'
    }
  }
})