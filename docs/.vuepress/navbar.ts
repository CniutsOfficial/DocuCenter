import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '初桐小栈', link: 'https://cniuts.pages.dev/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '公告', link: '/notice/README.md' },
  //{
  //  text: '笔记',
  //  items: [{ text: '', link: '' }]
  //},
])
