(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["docs_zh_plugin_system_introduction_mdx"],{91144:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var r,i=s("66791"),l=s("190");function h(e){var n=Object.assign({h1:"h1",a:"a",p:"p",img:"img",strong:"strong",ul:"ul",li:"li",code:"code"},(0,l.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"介绍",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"}),"介绍"]}),"\n",(0,i.jsx)(n.p,{children:"插件机制是 Rspress 至关重要的部分，它可以让你在搭建站点的过程中，方便地扩展框架的功能。那么，你可以通过插件扩展哪些功能呢？我们先来看看 Rspress 的整体架构。"}),"\n",(0,i.jsx)(n.p,{children:"Rspress 的整体架构如下图所示："}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/edenx-doc/arch.png",alt:"Rspress 架构图"})}),"\n",(0,i.jsxs)(n.p,{children:["框架整体分为",(0,i.jsx)(n.strong,{children:"Node 端"}),"和",(0,i.jsx)(n.strong,{children:"浏览器运行时"}),"两部分。通过插件机制，你可以轻松地扩展这两部分的功能。具体来说，你可以扩展如下的能力:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.a,{href:"/zh/plugin/system/plugin-api.html#markdown",children:[(0,i.jsx)(n.strong,{children:"Markdown/MDX"})," 编译功能"]}),"。你可以通过添加 ",(0,i.jsx)(n.a,{href:"https://github.com/remarkjs/remark",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.code,{children:"remark"})}),"/",(0,i.jsx)(n.a,{href:"https://github.com/rehypejs/rehype",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.code,{children:"rehype"})})," 插件，扩展 Markdown/MDX 的语法和功能。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/zh/plugin/system/plugin-api.html#addpages",children:(0,i.jsx)(n.strong,{children:"添加自定义页面"})}),"。在框架约定式路由的基础，你也可以通过插件，添加新路由，比如添加一个 ",(0,i.jsx)(n.code,{children:"/blog"})," 路由，用于展示博客列表，内容由你自己定义。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/zh/plugin/system/plugin-api.html#builderconfig",children:(0,i.jsx)(n.strong,{children:"定制构建工具的行为"})}),"。在框架插件中，你可以自定义底层构建工具 ",(0,i.jsx)(n.a,{href:"https://rspack.dev",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," 的配置，如 ",(0,i.jsx)(n.code,{children:"define"}),"、",(0,i.jsx)(n.code,{children:"alias"}),"，也可以添加自定义 Rspack 插件。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/zh/plugin/system/plugin-api.html#extendpagedata",children:(0,i.jsx)(n.strong,{children:"扩展页面元数据"})}),"。针对每个页面，框架内部会计算出一些元数据，如 ",(0,i.jsx)(n.code,{children:"title"}),"、",(0,i.jsx)(n.code,{children:"description"})," 等等，你可以通过插件，扩展这些元数据的计算逻辑，并在运行时通过 ",(0,i.jsx)(n.a,{href:"/zh/api/client-api/api-runtime.html#usepagedata",children:"usePageData"})," hook 访问到。"]}),"\n",(0,i.jsxs)(n.li,{children:["在构建流程前后插入一些",(0,i.jsx)(n.a,{href:"/zh/plugin/system/plugin-api.html#beforebuild/afterbuild",children:(0,i.jsx)(n.strong,{children:"自定义逻辑"})}),"。如在构建流程结束后关闭一些事件监听器。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/zh/plugin/system/plugin-api.html#globaluicomponents",children:(0,i.jsx)(n.strong,{children:"添加全局组件"})}),"。Rspress 内部使用 React 进行渲染，你可以通过定义全局 React 组件来灵活地扩展",(0,i.jsx)(n.code,{children:"页面运行时"}),"的功能，比如",(0,i.jsx)(n.code,{children:"添加全局的 BackToTop(返回顶部) 组件"}),"、",(0,i.jsx)(n.code,{children:"添加全局副作用逻辑"}),"。"]}),"\n"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fplugin%2Fsystem%2Fintroduction.mdx"]={toc:[],title:"介绍",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}}}]);