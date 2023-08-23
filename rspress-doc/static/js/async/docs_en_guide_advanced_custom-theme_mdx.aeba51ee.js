(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["docs_en_guide_advanced_custom-theme_mdx"],{6475:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var o,r=n("66791"),a=n("190");function s(e){var t=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",h3:"h3",code:"code",pre:"pre",h4:"h4"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"custom-theme",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-theme",children:"#"}),"Custom Theme"]}),"\n",(0,r.jsx)(t.p,{children:"This article will tell you how to develop custom theme."}),"\n",(0,r.jsxs)(t.h2,{id:"extensions-based-on-the-default-theme",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#extensions-based-on-the-default-theme",children:"#"}),"Extensions based on the default theme"]}),"\n",(0,r.jsx)(t.p,{children:"In most cases, you don't want to develop a theme from scratch, but want to extend it based on the default theme. At this time, you can refer to the following methods for theme development."}),"\n",(0,r.jsxs)(t.div,{className:"modern-directive tip",children:[(0,r.jsx)(t.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(t.div,{className:"modern-directive-content",children:(0,r.jsxs)(t.p,{children:["\nIf you want to develop a custom theme from scratch, you can go to ",(0,r.jsx)(t.a,{href:"/guide/advanced/custom-theme.html#redevelop-a-custom-theme",children:"Redevelop a custom theme"}),"."]})})]}),"\n",(0,r.jsxs)(t.h3,{id:"1-basic-structure",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#1-basic-structure",children:"#"}),"1. Basic structure"]}),"\n",(0,r.jsxs)(t.p,{children:["By default, you need to create a ",(0,r.jsx)(t.code,{children:"theme"})," directory under the project root directory, and then create an ",(0,r.jsx)(t.code,{children:"index.ts"})," or ",(0,r.jsx)(t.code,{children:"index.tsx"})," file under the ",(0,r.jsx)(t.code,{children:"theme"})," directory, which is used to export the theme content."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",meta:"",children:"├── theme\n│   └── index.tsx\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can write the ",(0,r.jsx)(t.code,{children:"theme/index.tsx"})," file as follows:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",meta:'title="theme/index.tsx"',children:"import Theme from 'rspress/theme';\n\nconst Layout = () => <Theme.Layout beforeNavTitle={<div>some content</div>} />;\n\nexport default {\n  ...Theme,\n  Layout,\n};\n\nexport * from 'rspress/theme';\n"})}),"\n",(0,r.jsxs)(t.p,{children:["On the one hand, you need to export a theme configuration object through ",(0,r.jsx)(t.code,{children:"export default"}),", on the other hand, you need to export all named exported content through ",(0,r.jsx)(t.code,{children:"export * from 'rspress/theme'"})," so as to ensure your theme works fine."]}),"\n",(0,r.jsxs)(t.h3,{id:"2-use-slot",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#2-use-slot",children:"#"}),"2. Use slot"]}),"\n",(0,r.jsx)(t.p,{children:"It is worth noting that the Layout component has designed a series of props to support slot elements. You can use these props to extend the layout of the default theme. For example, change the above Layout component to the following form:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",meta:"",children:"import Theme from 'rspress/theme';\n\n// Show all props below\nconst Layout = () => (\n  <Theme.Layout\n    /* Before home hero */\n    beforeHero={<div>beforeHero</div>}\n    /* After home hero */\n    afterHero={<div>afterHero</div>}\n    /* Before home features */\n    beforeFeatures={<div>beforeFeatures</div>}\n    /* After home features */\n    afterFeatures={<div>afterFeatures</div>}\n    /* Before doc footer */\n    beforeDocFooter={<div>beforeDocFooter</div>}\n    /* Doc page front */\n    beforeDoc={<div>beforeDoc</div>}\n    /* Doc page end */\n    afterDoc={<div>afterDoc</div>}\n    /* Before the nav bar */\n    beforeNav={<div>beforeNav</div>}\n    /* Before the title of the nav bar in the upper left corner */\n    beforeNavTitle={<span>\uD83D\uDE04</span>}\n    /* After the title of the nav bar in the upper left corner\n     */\n    afterNavTitle={<div>afterNavTitle</div>}\n    /* Above the right outline column */\n    beforeOutline={<div>beforeOutline</div>}\n    /* Below the outline column on the right */\n    afterOutline={<div>afterOutline</div>}\n    /* Top of the entire page */\n    top={<div>top</div>}\n    /* Bottom of the entire page */\n    bottom={<div>bottom</div>}\n  />\n);\n\nexport default {\n  ...Theme,\n  Layout,\n};\n\nexport * from 'rspress/theme';\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"3-custom-home-page-and-404-page",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#3-custom-home-page-and-404-page",children:"#"}),"3. Custom Home page and 404 page"]}),"\n",(0,r.jsx)(t.p,{children:"To extend the components of the default theme, in addition to slots, you can also customize the Home page and 404 page, such as:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",meta:'title="theme/index.tsx"',children:"import Theme from 'rspress/theme';\n\nconst Layout = () => <Theme.Layout beforeNavTitle={<div>some content</div>} />;\n\n// Custom Home Page\nconst HomeLayout = () => <div>Home</div>;\n// Custom 404 page\nconst NotFoundLayout = () => <div>404</div>;\n\nexport default {\n  ...Theme,\n  Layout,\n  HomeLayout,\n  NotFoundLayout,\n};\n\nexport * from 'rspress/theme';\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Of course, you may need to use page data during the development process, you can get it through the Hook ",(0,r.jsx)(t.a,{href:"/api/client-api/api-runtime.html#usepagedata",children:(0,r.jsx)(t.code,{children:"usePageData"})}),"."]}),"\n",(0,r.jsxs)(t.h2,{id:"redevelop-a-custom-theme",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#redevelop-a-custom-theme",children:"#"}),"Redevelop a custom theme"]}),"\n",(0,r.jsx)(t.p,{children:"If you're developing a custom theme from scratch, you need to understand the basic structure of the theme and the runtime API."}),"\n",(0,r.jsxs)(t.h3,{id:"1-basic-structure-1",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#1-basic-structure-1",children:"#"}),"1. Basic structure"]}),"\n",(0,r.jsxs)(t.p,{children:["By default, you need to create a ",(0,r.jsx)(t.code,{children:"theme"})," directory under the project root directory, and then create an ",(0,r.jsx)(t.code,{children:"index.ts"})," or ",(0,r.jsx)(t.code,{children:"index.tsx"})," file under the ",(0,r.jsx)(t.code,{children:"theme"})," directory, which is used to export the theme content."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",meta:"",children:"├── theme\n│   └── index.tsx\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.code,{children:"theme/index.tsx"})," file, you need to export a Layout component, which is the entry component of your theme:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",meta:"",children:"// theme/index.tsx\nfunction Layout() {\n  return <div>Custom Theme Layout</div>;\n}\n\n// The setup function will be called when the page is initialized. It is generally used to monitor global events, and it can be an empty function\nconst setup = () => {};\n\n// Export Layout component and setup function\n// Note: both must export\nexport { Layout, setup };\n"})}),"\n",(0,r.jsx)(t.p,{children:"Layout component will be used to render the layout of the entire document site, you can introduce your custom components in this component, for example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",meta:"",children:"// theme/index.tsx\nimport { Navbar } from './Navbar';\n\nfunction Layout() {\n  return (\n    <div>\n      <Navbar />\n      <div>Custom Theme Layout</div>\n    </div>\n  );\n}\n\nconst setup = () => {};\n\nexport { Layoutm, setup };\n\n// theme/Navbar.tsx\nexport function Navbar() {\n  return <div>Custom Navbar</div>;\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"So the question is, how does the theme component get the page data and the content of the body MDX component? Next, let's take a look at the related APIs."}),"\n",(0,r.jsxs)(t.h3,{id:"2-runtime-api",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#2-runtime-api",children:"#"}),"2. Runtime API"]}),"\n",(0,r.jsxs)(t.h4,{id:"usepagedata",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#usepagedata",children:"#"}),"usePageData"]}),"\n",(0,r.jsx)(t.p,{children:"Get information about all data on the site, such as:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",meta:"",children:"import { usePageData } from 'rspress/runtime';\n\nfunction MyComponent() {\n  const pageData = usePageData();\n  return <div>{pageData.title}</div>;\n}\n"})}),"\n",(0,r.jsxs)(t.h4,{id:"uselang",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#uselang",children:"#"}),"useLang"]}),"\n",(0,r.jsx)(t.p,{children:"Get the current language information, such as:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",meta:"",children:"import { useLang } from 'rspress/runtime';\n\nfunction MyComponent() {\n  const lang = useLang();\n  return <div>{lang}</div>;\n}\n"})}),"\n",(0,r.jsxs)(t.h4,{id:"content",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#content",children:"#"}),"Content"]}),"\n",(0,r.jsx)(t.p,{children:"Get MDX component content, such as:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",meta:"",children:"import { Content } from 'rspress/runtime';\n\nfunction Layout() {\n  return (\n    <div>\n      <Content />\n    </div>\n  );\n}\n"})}),"\n",(0,r.jsxs)(t.h4,{id:"route-hook",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#route-hook",children:"#"}),"Route Hook"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://reactrouter.com/",target:"_blank",rel:"noopener noreferrer",children:"react-router-dom"})," is used inside the framework to implement routing, so you can directly use the Hook of ",(0,r.jsx)(t.code,{children:"react-router-dom"}),", for example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",meta:"",children:"import { useLocation } from 'rspress/runtime';\n\nfunction Layout() {\n  const location = useLocation();\n  return <div>Current location: {location.pathname}</div>;\n}\n"})})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguide%2Fadvanced%2Fcustom-theme.mdx"]={toc:[{id:"extensions-based-on-the-default-theme",text:"Extensions based on the default theme",depth:2},{id:"1-basic-structure",text:"1. Basic structure",depth:3},{id:"2-use-slot",text:"2. Use slot",depth:3},{id:"3-custom-home-page-and-404-page",text:"3. Custom Home page and 404 page",depth:3},{id:"redevelop-a-custom-theme",text:"Redevelop a custom theme",depth:2},{id:"1-basic-structure-1",text:"1. Basic structure",depth:3},{id:"2-runtime-api",text:"2. Runtime API",depth:3},{id:"usepagedata",text:"usePageData",depth:4},{id:"uselang",text:"useLang",depth:4},{id:"content",text:"Content",depth:4},{id:"route-hook",text:"Route Hook",depth:4}],title:"Custom Theme",frontmatter:{}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}}}]);