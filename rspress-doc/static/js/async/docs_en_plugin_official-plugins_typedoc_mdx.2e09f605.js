(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["docs_en_plugin_official-plugins_typedoc_mdx"],{13197:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r,i=t("66791"),s=t("190");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"rspressdoc-plugin-typedoc",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspressdoc-plugin-typedoc",children:"#"}),"@rspress/doc-plugin-typedoc"]}),"\n",(0,i.jsxs)(n.p,{children:["Integration of ",(0,i.jsx)(n.a,{href:"https://github.com/TypeStrong/typedoc",target:"_blank",rel:"noopener noreferrer",children:"TypeDoc"}),"'s Rspress Plugin for Automatically Generating API Documentation for TS Modules."]}),"\n",(0,i.jsxs)(n.h2,{id:"installation",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#installation",children:"#"}),"Installation"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",meta:"",children:"# npm\nnpm install @rspress/doc-plugin-typedoc\n# yarn\nyarn add @rspress/doc-plugin-typedoc\n# pnpm\npnpm install @rspress/doc-plugin-typedoc\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"usage",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"}),"Usage"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:"",children:"import { defineConfig } from 'rspress/config';\nimport { pluginTypeDoc } from '@rspress/doc-plugin-typedoc';\nimport path from 'path';\n\nexport default defineConfig({\n  plugins: [\n    pluginTypeDoc({\n      entryPoints: [\n        path.join(__dirname, 'src', 'foo.ts'),\n        path.join(__dirname, 'src', 'bar.ts'),\n      ],\n    }),\n  ],\n});\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="src/foo.ts"',children:"/**\n * This is an add function.\n */\nexport function add(\n  /**\n   * This is param1.\n   */\n  param1: string,\n  /**\n   * This is param2.\n   */\n  param2: number,\n) {\n  return 1;\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="src/bar.ts"',children:"/**\n * This is a multi function.\n */\nexport function multi(\n  /**\n   * This is param1.\n   */\n  param1?: string,\n  /**\n   * This is param2.\n   */\n  param2?: number,\n) {\n  return 1;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When you start/build the project, the plugin will automatically generate an ",(0,i.jsx)(n.code,{children:"api"})," directory in your document root directory. The directory structure is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",meta:"",children:"api\n├── README.md\n├── documentation.json\n├── functions\n│   ├── bar.multi.md\n│   └── foo.add.md\n├── interfaces\n│   ├── foo.RunTestsOptions.md\n│   └── foo.TestMessage.md\n└── modules\n    ├── bar.md\n    └── foo.md\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This means that the plugin will internally call TypeDoc to automatically generate API documentation for your modules, including module lists, ",(0,i.jsx)(n.code,{children:"Interface"})," details, function details (parameters, return values, description), etc. It will also generate a ",(0,i.jsx)(n.code,{children:"documentation.json"})," file for subsequent sidebar rendering."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that the documentation is regenerated every time you start the project to reflect the latest module content. Therefore, we recommend adding the ",(0,i.jsx)(n.code,{children:"api"})," directory to ",(0,i.jsx)(n.code,{children:".gitignore"}),". If you customize the output directory with the ",(0,i.jsx)(n.code,{children:"outDir"})," parameter below, you should also add it to ",(0,i.jsx)(n.code,{children:".gitignore"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Also, we do not recommend modifying or adding documents in the ",(0,i.jsx)(n.code,{children:"api"})," directory because these documents will be overwritten each time the project is started due to changes in module content."]}),"\n",(0,i.jsxs)(n.h2,{id:"parameter-description",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#parameter-description",children:"#"}),"Parameter Description"]}),"\n",(0,i.jsxs)(n.h3,{id:"entrypoints",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entrypoints",children:"#"}),"entryPoints"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string[]"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Specifies the absolute path of the TS modules for which documentation should be generated."}),"\n",(0,i.jsxs)(n.h3,{id:"outdir",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outdir",children:"#"}),"outDir"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"api"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Customize the output directory for the documentation. You need to provide a relative path, such as ",(0,i.jsx)(n.code,{children:"api/custom"}),"."]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fplugin%2Fofficial-plugins%2Ftypedoc.mdx"]={toc:[{id:"installation",text:"Installation",depth:2},{id:"usage",text:"Usage",depth:2},{id:"parameter-description",text:"Parameter Description",depth:2},{id:"entrypoints",text:"entryPoints",depth:3},{id:"outdir",text:"outDir",depth:3}],title:"@rspress/doc-plugin-typedoc",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}}}]);