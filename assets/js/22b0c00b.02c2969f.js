"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[105],{5318:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7378);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(o),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return o?n.createElement(k,l(l({ref:t},p),{},{components:o})):n.createElement(k,l({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1883:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=o(2685),a=(o(7378),o(5318));const r={title:"Large Collections",sidebar_position:4},l=void 0,i={unversionedId:"features/large-collections",id:"features/large-collections",title:"Large Collections",description:"In Joist, large collections are one-to-many collections (like author.books) that would fundamentally load too much data (like a single author having 100k books), such that we want to prevent code from accidentally loading the collection by mistake.",source:"@site/docs/features/large-collections.md",sourceDirName:"features",slug:"/features/large-collections",permalink:"/docs/features/large-collections",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/features/large-collections.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Large Collections",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Entity Cloning",permalink:"/docs/features/cloning"},next:{title:"Optimistic Locking",permalink:"/docs/features/optimistic-locking"}},s={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Joist, large collections are one-to-many collections (like ",(0,a.kt)("inlineCode",{parentName:"p"},"author.books"),") that would fundamentally load too much data (like a single author having 100k books), such that we want to prevent code from accidentally loading the collection by mistake."),(0,a.kt)("p",null,"Normally, ",(0,a.kt)("inlineCode",{parentName:"p"},"joist-codegen")," automatically generates loadable one-to-many collections in your domain modal. For example, given a ",(0,a.kt)("inlineCode",{parentName:"p"},"books.author_id")," foreign key, your code can immediately do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const author = await em.load(Author, "a:1");\nconst books = await author.books.load();\n')),(0,a.kt)("p",null,"Or use ",(0,a.kt)("inlineCode",{parentName:"p"},"books")," in a load hint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const author = await em.load(Author, "a:1", "books");\nconsole.log(author.books.get);\n')),(0,a.kt)("p",null,"Both of which will load/preload the full ",(0,a.kt)("inlineCode",{parentName:"p"},"author.books")," collection into memory for easy access."),(0,a.kt)("p",null,"Usually this is great, ",(0,a.kt)("em",{parentName:"p"},"unless")," we know when designing the schema that ",(0,a.kt)("inlineCode",{parentName:"p"},"author.books.load()")," is fundamentally likely to pull in too much data and blow our up ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),"'s entity limit (which is 10,000 entities by default)."),(0,a.kt)("p",null,"In this scenario, we can tell Joist to treat ",(0,a.kt)("inlineCode",{parentName:"p"},"books")," as a large collection, by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"large: true")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"joist-config.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entities": {\n    "Author": {\n      "relations": {\n        "books": { "large": true }\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Now, ",(0,a.kt)("inlineCode",{parentName:"p"},"joist-codegen")," still generates an ",(0,a.kt)("inlineCode",{parentName:"p"},"Author.books")," property, however it will be typed as a ",(0,a.kt)("inlineCode",{parentName:"p"},"LargeCollection")," which:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Does not have a ",(0,a.kt)("inlineCode",{parentName:"li"},".load()")," method, and"),(0,a.kt)("li",{parentName:"ul"},"Cannot be used in a load hint")),(0,a.kt)("p",null,'Both of which prevent the collection from accidentally being fully loaded into memory, and prevents developers from having to "just know" not to load ',(0,a.kt)("inlineCode",{parentName:"p"},"author.books")," while writing business logic."),(0,a.kt)("p",null,"Instead, the ",(0,a.kt)("inlineCode",{parentName:"p"},"LargeCollection")," relation only supports a few known-safe methods that work without fully loading it into memory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const author = await em.load(Author, "a:1");\nconst b1 = await em.load(Book, "b:1");\n\n// Adding/removing the book\nauthor.books.add(b1);\nauthor.books.remove(b1);\n\n// Probing if `b1` is in `author.books`\nawait author.books.includes(b1);\n\n// Probing if `bookId` is in `author.books`\nconst b2 = await author.books.find(bookId);\n')))}u.isMDXComponent=!0}}]);