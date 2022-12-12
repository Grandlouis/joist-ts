"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[746],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(2685),o=(n(7378),n(5318));const i={title:"Bulk Operations",position:4},a=void 0,l={unversionedId:"querying/bulk-operations",id:"querying/bulk-operations",title:"Bulk Operations",description:"Joist aims for best-in-class performance by performing all INSERT, UPDATE, DELETE, and even SELECT operations in bulk/batch.",source:"@site/docs/querying/bulk-operations.md",sourceDirName:"querying",slug:"/querying/bulk-operations",permalink:"/docs/querying/bulk-operations",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/querying/bulk-operations.md",tags:[],version:"current",frontMatter:{title:"Bulk Operations",position:4},sidebar:"tutorialSidebar",previous:{title:"Changed Fields",permalink:"/docs/querying/changed-fields"},next:{title:"Cascading Deletions",permalink:"/docs/querying/cascade-deletions"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Joist aims for best-in-class performance by performing all ",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE"),", and even ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," operations in bulk/batch."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you save 100 new authors, Joist will execute 1 SQL ",(0,o.kt)("inlineCode",{parentName:"li"},"INSERT")," statement."),(0,o.kt)("li",{parentName:"ul"},"If you update 500 books, Joist will also execute 1 SQL ",(0,o.kt)("inlineCode",{parentName:"li"},"UPDATE")," statement.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This capability, especially for bulk ",(0,o.kt)("inlineCode",{parentName:"p"},"UPDATE"),"s, currently uses a Postgres-specific ",(0,o.kt)("inlineCode",{parentName:"p"},"UPDATE"),' syntax, which is currently a benefit of Joist\'s "unapologetically Postgres-only (for now)" approach.')))}u.isMDXComponent=!0}}]);