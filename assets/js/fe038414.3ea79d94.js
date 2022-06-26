"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[696],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5493:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(2685),i=n(1244),a=(n(7378),n(5318)),o=["components"],s={title:"Changed Fields",sidebar_position:4},l=void 0,c={unversionedId:"querying/changed-fields",id:"querying/changed-fields",title:"Changed Fields",description:"Each entity tracks which of its fields has changed within the current unit of work/EntityManager:",source:"@site/docs/querying/changed-fields.md",sourceDirName:"querying",slug:"/querying/changed-fields",permalink:"/docs/querying/changed-fields",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/querying/changed-fields.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Changed Fields",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create/Update/Delete",permalink:"/docs/querying/create-update-delete"},next:{title:"Bulk Operations",permalink:"/docs/querying/bulk-operations"}},u={},d=[{value:"Audit Trails",id:"audit-trails",level:3}],p={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Each entity tracks which of its fields has changed within the current unit of work/",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const a1 = em.load(Author, "1");\n\n// Nothing has changed at first\nexpect(a1.changes.firstName.hasChanged).toBeFalsey();\n\n// Now perform some business logic\na1.firstName = "a2";\n\n// And the field shows up has changed\nexpect(a1.changes.firstName.hasChanged).toBeTruthy();\nexpect(a1.changes.firstName.originalValue).toEqual("a1");\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"changes")," API has three methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"changes.firstName.hasChanged")," - is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," whenever ",(0,a.kt)("inlineCode",{parentName:"li"},"firstName")," has been set, either on a new entity or an existing entity"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"changes.firstName.hasUpdated")," - is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," only when ",(0,a.kt)("inlineCode",{parentName:"li"},"firstName")," has been changed on an existing entity"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"changes.firstName.originalValue")," - is the original value, only for an existing entity")),(0,a.kt)("h3",{id:"audit-trails"},"Audit Trails"),(0,a.kt)("p",null,"Note the ",(0,a.kt)("inlineCode",{parentName:"p"},"changes")," API is only for the current in-memory changes being made to an entity, it's not an audit trail."),(0,a.kt)("p",null,"That said, Joist entities can be used with 3rd-party audit trail solutions like ",(0,a.kt)("a",{parentName:"p",href:"https://pgxn.org/dist/cyanaudit/"},"CyanAudit"),"."))}f.isMDXComponent=!0}}]);