"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[237,11],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3679:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a=n(1884),r=n(353),o=n(9821),i=n(8944),l=n(7378),s=n(7055),c="features_xdhU",u="container_Pe1m",p=n(2685),d=n(1244),m=n(5318),g=["components"],f={toc:[{value:"What Does using Joist Look Like?",id:"what-does-using-joist-look-like",level:2}]};function h(e){var t=e.components,n=(0,d.Z)(e,g);return(0,m.kt)("wrapper",(0,p.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"what-does-using-joist-look-like"},"What Does using Joist Look Like?"),(0,m.kt)("p",null,"Joist's docs dive into these features in more detail, but as a quick tldr..."),(0,m.kt)("p",null,"You start by creating/updating your database schema, using ",(0,m.kt)("inlineCode",{parentName:"p"},"node-pg-migrate")," or whatever migration library you like:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-shell"},"# Apply the latest migrations\nnpm run migrate\n# Now generate the updated domain model\nnpm run joist-codegen\n")),(0,m.kt)("p",null,"You get clean domain objects created automatically:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-typescript"},"class Author extends AuthorCodegen {\n  // Where you eventually add custom methods/business logic\n}\n")),(0,m.kt)("p",null,"You write validation rules that can be per-field, per-entity or cross-entity, i.e. in ",(0,m.kt)("inlineCode",{parentName:"p"},"Author.ts"),":"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-typescript"},'import { authorConfig as config } from "./entities";\n\n// Anytime an author gets a book added or removed (i.e. via code calling\n// `book.author.set(...)`), call this business rule.\nconfig.addRule("books", (author) => {\n  if (author.books.get.length > 10) {\n    return "Too many books";\n  }\n});\n')),(0,m.kt)("p",null,"You can load/save entities in a Unit of Work-style ",(0,m.kt)("inlineCode",{parentName:"p"},"EntityManager")," that will batch save any changes made during the current request (only after running all validation rules & updating any derived values):"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-typescript"},'const a1 = em.load(Author, "a:1");\na1.firstName = "Allen";\na2.lastName = "Zed";\n// Runs validation, lifecycle hooks, and issues INSERTs/UPDATEs\nawait em.flush();\n')),(0,m.kt)("p",null,"You can use GraphQL-style deep preloading to de-",(0,m.kt)("inlineCode",{parentName:"p"},"await")," business logic:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-typescript"},'// Use 1 await to preload a tree of data\nconst loaded = await a1.populate({\n  books: "reviews",\n  publisher: {},\n});\n\n// No more await Promise.all\nloaded.books.get.forEach((book) => {\n  book.reviews.get.forEach((review) => {\n    console.log(review.name);\n  });\n})\n')))}h.isMDXComponent=!0;l.Fragment,l.Fragment;function v(){return l.createElement("section",{className:c},l.createElement("div",{className:u+" container"},l.createElement("div",{className:"markdown"},l.createElement(s.default,null)),l.createElement("div",{className:"markdown"},l.createElement(h,null))))}var y="heroBanner_qdFl",k="button_JGCe";function b(){var e=(0,r.Z)().siteConfig;return l.createElement("header",{className:(0,i.Z)("hero hero--primary",y)},l.createElement("div",{className:"container"},l.createElement("h1",{className:"hero__title"},e.title),l.createElement("p",{className:"hero__subtitle"},e.tagline),l.createElement(a.Z,{to:"/docs/getting-started"},l.createElement("a",{className:k},"Get Started"))))}function N(){var e=(0,r.Z)().siteConfig;return l.createElement(o.Z,{title:"Hello from "+e.title,description:"Description will go into a meta tag in <head />"},l.createElement(b,null),l.createElement("main",null,l.createElement(v,null)))}},7055:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(2685),r=n(1244),o=(n(7378),n(5318)),i=["components"],l={title:"Goals",slug:"/goals",sidebar_label:"Overview",sidebar_position:0},s=void 0,c={unversionedId:"goals/overview",id:"goals/overview",title:"Goals",description:"The high-level goal of Joist is to bring ActiveRecord-level productivity to TypeScript/Node projects.",source:"@site/docs/goals/overview.md",sourceDirName:"goals",slug:"/goals",permalink:"/docs/goals",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/goals/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Goals",slug:"/goals",sidebar_label:"Overview",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Code Generation",permalink:"/docs/goals/code-generation"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The high-level goal of Joist is to bring ",(0,o.kt)("a",{parentName:"p",href:"https://guides.rubyonrails.org/active_record_basics.html"},"ActiveRecord"),"-level productivity to TypeScript/Node projects."),(0,o.kt)("p",null,"This is a lofty goal, and Joist has just started down that road, but that is the standard Joist strives for and ideally can surpass."),(0,o.kt)("p",null,"The major goals are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("a",{parentName:"li",href:"/docs/goals/code-generation"},"code generation")," to move fast and remove boilerplate"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/goals/avoiding-n-plus-1s"},"Avoid N+1s")," through first-class ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/graphql/dataloader"},"dataloader")," integration"),(0,o.kt)("li",{parentName:"ul"},"Differentiate ",(0,o.kt)("a",{parentName:"li",href:"/docs/goals/type-safe-relations"},"loaded vs. unloaded collections")," in the type system"),(0,o.kt)("li",{parentName:"ul"},"Enable ",(0,o.kt)("a",{parentName:"li",href:"/docs/goals/great-tests"},"great testing")," with built-in factories and other support"),(0,o.kt)("li",{parentName:"ul"},"Provide a variety of primitives of domain modeling options")))}m.isMDXComponent=!0}}]);