import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: './images/logo/logo_sqr_trans.png',
  
  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/Cniuts' },
    { icon: 'bilibili', link: 'https://example.net' }
  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  aside: true, // 页内侧边栏， 默认显示在右侧
  outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  copyright: true,

  prevPage: true,   // 是否启用上一页链接
  nextPage: true,   // 是否启用下一页链接
  createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: 'Powered by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
    copyright: 'Copyright © 2025 <a target="_blank" href="https://cniuts.pages.dev/">初桐小栈Cniuts</a>,保留所有权利',
  },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: './images/logo/logo_sqr_trans.png',
    name: 'DocuCenter',
    description: '一个基于 VuePress Plume 主题的文档中心',
    circle: true,
    location: '中国',
    organization: '<a target="_blank" href="https://cniuts.pages.dev/">初桐小栈Cniuts</a>',
  },
  navbar,
  notes,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  bulletin: {
    layout: 'bottom-right',
    contentType: 'markdown',
    title: '提示',
    content: '此网站正在建设中，内容将陆续更新。<br>官方邮箱：<cniuts@hotmail.com>',
  },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true,        // 启用 页面间跳转过渡动画
    postList: true,    // 启用 博客文章列表过渡动画
    appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },
  
})
