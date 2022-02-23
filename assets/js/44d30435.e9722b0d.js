"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[592],{5318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5792:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(2685),i=n(1244),l=(n(7378),n(5318)),o=["components"],r={title:"Partial Update APIs"},s=void 0,p={unversionedId:"features/partial-update-apis",id:"features/partial-update-apis",title:"Partial Update APIs",description:'Joist has built-in support for building "partial update"-style APIs on top of your domain model.',source:"@site/docs/features/partial-update-apis.md",sourceDirName:"features",slug:"/features/partial-update-apis",permalink:"/docs/features/partial-update-apis",editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/features/partial-update-apis.md",tags:[],version:"current",frontMatter:{title:"Partial Update APIs"},sidebar:"tutorialSidebar",previous:{title:"Optimistic Locking",permalink:"/docs/features/optimistic-locking"}},d=[{value:"Unsetting Fields with <code>null</code> Marker",id:"unsetting-fields-with-null-marker",children:[],level:2},{value:"Saving Parents with Children",id:"saving-parents-with-children",children:[],level:2},{value:"Incremental Collection Updates",id:"incremental-collection-updates",children:[],level:2},{value:"Legacy Incremental Collection Updates",id:"legacy-incremental-collection-updates",children:[],level:2}],m={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'Joist has built-in support for building "partial update"-style APIs on top of your domain model.'),(0,l.kt)("p",null,"Partial update APIs, whether they are implemented over REST or GraphQL or GRPC, typically follow the conventions of:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A create or update can include only a subset of fields, and any field not included in the subset is left as-is"),(0,l.kt)("li",{parentName:"ul"},"An update can use ",(0,l.kt)("inlineCode",{parentName:"li"},"null"),' as a marker to mean "unset this field"'),(0,l.kt)("li",{parentName:"ul"},"Updating a parent's collection of children can be done incrementally, i.e. w/o knowing the full set of children")),(0,l.kt)("p",null,"Joist has dedicated ",(0,l.kt)("inlineCode",{parentName:"p"},"EntityManager.createOrUpdatePartial")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Entity.setPartial")," APIs to help implement APIs that follow these conventions with as little boilerplate as possible."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"These methods are particularly useful for implementing GraphQL APIs, where Joist's normal ",(0,l.kt)("inlineCode",{parentName:"p"},"EntityManager.create")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Entity.set")," methods have TypeScript types that are too strict for GraphQL's looser/less strict type system."),(0,l.kt)("p",{parentName:"div"},"For example, a ",(0,l.kt)("inlineCode",{parentName:"p"},"SaveAuthorInput")," ",(0,l.kt)("inlineCode",{parentName:"p"},"firstName")," that is generated by ",(0,l.kt)("a",{parentName:"p",href:"https://graphql-code-generator.com"},"graphql-code-generator")," might be typed as ",(0,l.kt)("inlineCode",{parentName:"p"},"firstName: string | null | undefined")," which does not match Joist's more idiomatic ",(0,l.kt)("inlineCode",{parentName:"p"},"Author.firstName: string | undefined")," typing."))),(0,l.kt)("h2",{id:"unsetting-fields-with-null-marker"},"Unsetting Fields with ",(0,l.kt)("inlineCode",{parentName:"h2"},"null")," Marker"),(0,l.kt)("p",null,"A common pattern for partial-update style APIs is to treat ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," differently, i.e. ",(0,l.kt)("inlineCode",{parentName:"p"},"{ firstName: null }"),' specifically means "unset the ',(0,l.kt)("inlineCode",{parentName:"p"},"firstName"),' property", while ',(0,l.kt)("inlineCode",{parentName:"p"},"firstName")," being not present (i.e. either ",(0,l.kt)("inlineCode",{parentName:"p"},"{ firstName: undefined }")," or an empty ",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),') means "do not change ',(0,l.kt)("inlineCode",{parentName:"p"},"firstName"),'".'),(0,l.kt)("p",null,"As mentioned, in a GraphQL input type this might be typed as ",(0,l.kt)("inlineCode",{parentName:"p"},"SaveAuthorInput")," having a ",(0,l.kt)("inlineCode",{parentName:"p"},"firstName: string | null | undefined")," field."),(0,l.kt)("p",null,"Normally the ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"-ness of input's ",(0,l.kt)("inlineCode",{parentName:"p"},"firstName")," will cause issues with Joist's \"preferred ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),'" convention:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// This is typed as string | null | undefined\nconst { firstName } = saveAuthorInput;\nconst author = em.load(Author, "1");\n// The normal `.set` will not compile\nauthor.set({ firstName });\n}\n')),(0,l.kt)("p",null,"Instead, Joist provides a ",(0,l.kt)("inlineCode",{parentName:"p"},"setPartial")," that allows code to opt-in to the partial-semantic behavior and an RPC layer's potentially-less-strict typing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// This is typed as string | null | undefined\nconst { firstName } = saveAuthorInput;\nconst author = em.load(Author, "1");\n// Compiles successfully\nauthor.setPartial({ firstName });\n}\n')),(0,l.kt)("p",null,"Specifically, the semantics of ",(0,l.kt)("inlineCode",{parentName:"p"},"Entity.setPartial")," is that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For a required field ",(0,l.kt)("inlineCode",{parentName:"li"},"firstName"),": ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'{ firstName: "foo" }')," will update ",(0,l.kt)("inlineCode",{parentName:"li"},"firstName")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{ firstName: undefined }")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"{}")," will do nothing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{ firstName: null }")," will be a runtime error b/c ",(0,l.kt)("inlineCode",{parentName:"li"},"firstName")," is required and cannot be ",(0,l.kt)("inlineCode",{parentName:"li"},"null")))),(0,l.kt)("li",{parentName:"ul"},"For an optional field ",(0,l.kt)("inlineCode",{parentName:"li"},"lastName"),": ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'{ lastName: "bar" }')," will update ",(0,l.kt)("inlineCode",{parentName:"li"},"lastName")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{ lastName: undefined }")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"{}")," will do nothing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{ lastName: null }")," will unset ",(0,l.kt)("inlineCode",{parentName:"li"},"lastName")," (i.e. set it as ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),")")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"EntityManager.createPartial")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"EntityManager.createOrUpdatePartial")," methods both have these semantics as well."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Arguably, the ideal partial-update type for ",(0,l.kt)("inlineCode",{parentName:"p"},"Author")," in this scenario would be:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface SaveAuthorInput {\n  firstName: string | undefined;\n  lastName: string | null | undefined;\n}\n")),(0,l.kt)("p",{parentName:"div"},"But sometimes it's a challenge to get the RPC framework, e.g. GraphQL in this instance, to generate a type that exactly matches this, which is why Joist offers these more flexible ",(0,l.kt)("inlineCode",{parentName:"p"},"setPartial")," methods."))),(0,l.kt)("h2",{id:"saving-parents-with-children"},"Saving Parents with Children"),(0,l.kt)("p",null,"To save both a parent and multiple potentially-new-or-existing children, Joist provides ",(0,l.kt)("inlineCode",{parentName:"p"},"EntityManager.createOrUpdatePartial"),"."),(0,l.kt)("p",null,"An example usage is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// Given some RPC types (in this instance GraphQL)\ninterface SaveAuthorInput {\n  id?: string | null;\n  firstName?: string | null;\n  books?: SaveBookInput[];\n}\ninterface SaveBookInput {\n  id?: string | null;\n  title?: string | null;\n  \n}\n\n// When the client\'s request comes in...\nconst input: SaveAuthorInput = {\n  // Updating author 1\n  id: "a:1",\n  // To have 3 books\n  books: [\n    // And the 1st book is new\n    { title: "new book" },\n    // And the 2nd book already exists but has no changes\n    { id: "b:1" },\n    // And the 3rd book already exists but has a new title \n    { id: "b:2", title: "updated" },\n  ]\n}\n\n// Then we can apply all of those changes via\n// a single call\nawait em.createOrUpdatePartial(Author, input);\n')),(0,l.kt)("p",null,"Admittedly, your RPC/GraphQL API convention for parent/children inputs has to fairly closely follow what Joist's own partial update / ",(0,l.kt)("inlineCode",{parentName:"p"},"createOrUpdatePartial")," convention, but assuming you do so, Joist can reduce a very large amount of CRUD boilerplate in an RPC/GraphQL API."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Unlike ",(0,l.kt)("inlineCode",{parentName:"p"},"EntityManager.create"),", which is synchronous, ",(0,l.kt)("inlineCode",{parentName:"p"},"EntityManager.createOrUpdatePartial")," is async and needs to be ",(0,l.kt)("inlineCode",{parentName:"p"},"await"),"-d because it may require SQL calls to look up existing entities, e.g. the ",(0,l.kt)("inlineCode",{parentName:"p"},"b:1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"b:2")," IDs in the above example."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Joist's ",(0,l.kt)("inlineCode",{parentName:"p"},"createOrUpdatePartial")," behavior, while developed independently, is effectively similar Objection.js's ",(0,l.kt)("a",{parentName:"p",href:"https://vincit.github.io/objection.js/guide/query-examples.html#graph-upserts"},(0,l.kt)("inlineCode",{parentName:"a"},"upsertGraph"))," operation."))),(0,l.kt)("h2",{id:"incremental-collection-updates"},"Incremental Collection Updates"),(0,l.kt)("p",null,"Joist's default behavior for any collection set (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"Entity.set"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Entity.setPartial"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"EntityManger.createOrUpdatePartial"),", etc.) is for the collection to be exhaustively set to the new value, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = newAuthor(em);\n// Start out with two books\nauthor.set({ books: [b1, b2] });\n// Later set with a third book\nauthor.set({ books: [b3] });\n// Passes b/c `set` has implicitly removed the 1st two books\nexpect(author.books.get.length).toEqual(1);\n")),(0,l.kt)("p",null,"However, when partially updating entities via an RPC call, it's often convenient to change only a single child of the collection, especially for APIs where the child itself doesn't have a dedicated operation (i.e. saving an invoice line item can only be done via the invoice API)."),(0,l.kt)("p",null,"To support these APIs, ",(0,l.kt)("inlineCode",{parentName:"p"},"setPartial")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"createOrUpdatePartial")," will both opt-in to incremental collection semantics if they detect an extra ",(0,l.kt)("inlineCode",{parentName:"p"},"op")," hint key on the children. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'const author = newAuthor(em);\n// Start out with two books\nauthor.set({ books: [b1, b2] });\n// Later add a third book\nauthor.setPartial({ books: [\n  // And include the `op` hint\n  { op: "include", title: "b3" }\n]});\n// Passes b/c `setPartial` saw `op` and worked incrementally\nexpect(author.books.get.length).toEqual(3);\n')),(0,l.kt)("p",null,"The valid values of an ",(0,l.kt)("inlineCode",{parentName:"p"},"op")," keyword are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'{ op: "delete", id: ... }')," will remove the child and ",(0,l.kt)("inlineCode",{parentName:"li"},"EntityManager.delete")," it for hard deletion"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'{ op: "remove", id: ... }')," will remove the child but not call ",(0,l.kt)("inlineCode",{parentName:"li"},"EntityManager.delete")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'{ op: "include", id: ... }')," will include (i.e. add if needed, or just update if it already an existing child) the child")),(0,l.kt)("p",null,"If any child has an ",(0,l.kt)("inlineCode",{parentName:"p"},"op")," key, then all children must have an ",(0,l.kt)("inlineCode",{parentName:"p"},"op")," key, to be the most clear/consistent to the caller that incremental semantics are being used.  "),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"op")," key is not an actual column stored in your database or domain model, i.e. the ",(0,l.kt)("inlineCode",{parentName:"p"},"Book")," entity should not have an ",(0,l.kt)("inlineCode",{parentName:"p"},"op")," field."),(0,l.kt)("p",{parentName:"div"},"Instead, ",(0,l.kt)("inlineCode",{parentName:"p"},"op")," can be just an extra key on the RPC/GraphQL input types to specifically driven Joist's incremental collection semantics."),(0,l.kt)("p",{parentName:"div"},"The key name ",(0,l.kt)("inlineCode",{parentName:"p"},"op")," was chosen for both succinctness and also low probably of overlapping with real fields in the domain model."))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Because incremental semantics are enabled by the presence of an ",(0,l.kt)("inlineCode",{parentName:"p"},"op")," key, if the collection is empty it will fundamentally look like an exhaustive set that clears the collection."),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// An empty collection will always clear the books, and can't be\n// treated as a incremental operation\nauthor.setPartial({ books: [] });\n")),(0,l.kt)("p",{parentName:"div"},'This means that if a client is trying to optimize its call by sending "only changed children", when no children have been changed then it should not include the child key in the payload at all, to avoid unintentionally clearing the collection.'),(0,l.kt)("p",{parentName:"div"},"Technically, Joist currently supports a 4th ",(0,l.kt)("inlineCode",{parentName:"p"},'{ op: "incremental" }'),' keyword that can act as a "fake child" and will be ignored (i.e. not treated as an entity to add/remove from the collection), but will still enable incremental semantics and so avoid the "empty list clears the collection" gotcha.'))),(0,l.kt)("h2",{id:"legacy-incremental-collection-updates"},"Legacy Incremental Collection Updates"),(0,l.kt)("p",null,"Joist's initial version of incremental updates used separate ",(0,l.kt)("inlineCode",{parentName:"p"},"delete")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"remove")," keys instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"op"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'const author = newAuthor(em);\n// Start out with three books\nauthor.set({ books: [b1, b2, b3] });\n// Then delete b1, remove b2, leave b3 alone, and add b4\nauthor.setPartial({ books: [\n  { id: "b:1", delete: true },\n  { id: "b:2", remove: true },\n  { id: "b:4" },\n]});\n')),(0,l.kt)("p",null,"These are still supported, but are soft-deprecated and the ",(0,l.kt)("inlineCode",{parentName:"p"},"op")," key is preferred going forward."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"We moved away from ",(0,l.kt)("inlineCode",{parentName:"p"},"delete")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"remove")," keywords for two reasons:"),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"They are more likely to overlap with existing fields in the domain model, and"),(0,l.kt)("li",{parentName:"ol"},"It is ergonomically easier for our frontend UI to bind to an always-present ",(0,l.kt)("inlineCode",{parentName:"li"},"op")," key, and just flip its value from ",(0,l.kt)("inlineCode",{parentName:"li"},"include"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"delete")," when the user toggles adding/removing rows, instead of adding/removing entire ",(0,l.kt)("inlineCode",{parentName:"li"},"delete")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"remove")," keys.")))))}c.isMDXComponent=!0}}]);