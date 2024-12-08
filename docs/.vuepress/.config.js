// module.exports = {
//     lang: 'fr-FR',
//     title: 'Content Tutos',
//     description: 'Gestion de Tutoriels',
// }

import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'fr-FR',
  title: 'Dev TUTOS',
  description: 'Mes Super Tutos',
  head: [
    ['link', { rel: 'icon', href: '/icons/android-chrome-512x512.png' }],
    ['link', { rel: 'icon', href: '/icons/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/apple-touch-icon.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/android-chrome-512x512.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
  ],
  
})