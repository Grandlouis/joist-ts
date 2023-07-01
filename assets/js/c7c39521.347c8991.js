"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[722],{5318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var o=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return a?o.createElement(m,l(l({ref:t},c),{},{components:a})):o.createElement(m,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5770:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=a(2685),n=(a(7378),a(5318));const i={title:"Load-Safe Relations",sidebar_position:3},l=void 0,r={unversionedId:"goals/load-safe-relations",id:"goals/load-safe-relations",title:"Load-Safe Relations",description:"Joist models all relations as async-by-default, i.e. you must access them via await calls:",source:"@site/docs/goals/load-safe-relations.md",sourceDirName:"goals",slug:"/goals/load-safe-relations",permalink:"/docs/goals/load-safe-relations",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/goals/load-safe-relations.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Load-Safe Relations",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Avoiding N+1s",permalink:"/docs/goals/avoiding-n-plus-1s"},next:{title:"Great Tests",permalink:"/docs/goals/great-tests"}},s={},p=[{value:"Background",id:"background",level:2},{value:"Joist Relations are Async By Default",id:"joist-relations-are-async-by-default",level:2},{value:"But Async is Kinda Annoying",id:"but-async-is-kinda-annoying",level:2},{value:"The Magic Escape Hatch",id:"the-magic-escape-hatch",level:2},{value:"Best of Both Worlds",id:"best-of-both-worlds",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Joist models all relations as async-by-default, i.e. you must access them via ",(0,n.kt)("inlineCode",{parentName:"p"},"await")," calls:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"// Returns the publisher if already fetched, otherwise makes a (batched) SQL call \nconst publisher = await author.publisher.load();\nconst books = await author.books.load();\n")),(0,n.kt)("p",null,'We call this "load safe", because you can\'t accidentally access unloaded data, which results in a runtime error.'),(0,n.kt)("p",null,"Which is great, but then to improve ergonomics and avoid tedious ",(0,n.kt)("inlineCode",{parentName:"p"},"await Promise.all")," calls, Joist also supports marking, in the type system, which relations it knows are loaded, to enable synchronous ",(0,n.kt)("inlineCode",{parentName:"p"},".get"),", non-",(0,n.kt)("inlineCode",{parentName:"p"},"await"),"-d access."),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"One of the main affordances of ORMs is that relationships (relations) between tables in the database (i.e. foreign keys) are modelled as references & collections on the classes/entities in the domain model."),(0,n.kt)("p",null,"For example, in most ORMs a ",(0,n.kt)("inlineCode",{parentName:"p"},"books.author_id")," foreign key column means the ",(0,n.kt)("inlineCode",{parentName:"p"},"Author")," entity will have an ",(0,n.kt)("inlineCode",{parentName:"p"},"author.books")," collection (which loads all books for that author), and the ",(0,n.kt)("inlineCode",{parentName:"p"},"Book")," entity will have a ",(0,n.kt)("inlineCode",{parentName:"p"},"book.author")," reference (which loads the book's author)."),(0,n.kt)("p",null,"In all ORMs, these references & collections are inherently lazy: because you don't have your entire relational database in memory, objects start out with just a single/few rows loaded (i.e. a single ",(0,n.kt)("inlineCode",{parentName:"p"},"authors")," row with ",(0,n.kt)("inlineCode",{parentName:"p"},"id=1")," loaded as an ",(0,n.kt)("inlineCode",{parentName:"p"},"Author#1"),' instance) and then lazily loaded the data you need from there (i.e. you "walk the object graph" from that ',(0,n.kt)("inlineCode",{parentName:"p"},"Author#1")," to the related data you need)."),(0,n.kt)("h2",{id:"joist-relations-are-async-by-default"},"Joist Relations are Async By Default"),(0,n.kt)("p",null,"Because of the inherently lazy nature of references & collections, Joist takes the strong, type-safe opinion that if they ",(0,n.kt)("em",{parentName:"p"},"might")," be unloaded, then they ",(0,n.kt)("em",{parentName:"p"},"must")," be marked as ",(0,n.kt)("inlineCode",{parentName:"p"},"async/await"),"."),(0,n.kt)("p",null,"For example, you have to access ",(0,n.kt)("inlineCode",{parentName:"p"},"author.books")," via an ",(0,n.kt)("inlineCode",{parentName:"p"},"await"),"-d promise:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'const author = await em.load(Author, "a:1");\nconst books = await author.books.load();\n')),(0,n.kt)("p",null,'And you must do this each time, even if technically in the code path that you\'re in, you "know" that ',(0,n.kt)("inlineCode",{parentName:"p"},"books")," has already been loaded, i.e.:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'const author = await em.load(Author, "a:1");\n// Call another method that happens to loads books\nsomeComplicatedLogicThatLoadsBooks(author);\n// You still can\'t do `books.get`, even though "we know" (but the compiler\n// does not know) that the collection is technically already cached in-memory\nconst books = await author.books.load();\n')),(0,n.kt)("h2",{id:"but-async-is-kinda-annoying"},"But Async is Kinda Annoying"),(0,n.kt)("p",null,'While Joist\'s "async by default" approach is the safest, it is admittedly tedious when you get to double/triple levels of ',(0,n.kt)("inlineCode",{parentName:"p"},"await"),"s, i.e. to go from an ",(0,n.kt)("inlineCode",{parentName:"p"},"Author")," to their ",(0,n.kt)("inlineCode",{parentName:"p"},"Book"),"s to each ",(0,n.kt)("inlineCode",{parentName:"p"},"Book"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"BookReview"),"s:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'const author = await em.load(Author, "a:1");\nawait Promise.all((await author.books.load()).map(async (book) => {\n  // For each book load the reviews\n  return Promise.all((await book.reviews.load()).map(async (review) => {\n    console.log(review.name);\n  })); \n}));\n')),(0,n.kt)("p",null,"Yuck."),(0,n.kt)("p",null,'Given this complication, some ORMs in the JavaScript/TypeScript space sometimes fudge the "collections must be async" approach, and allow you to model collections as ',(0,n.kt)("em",{parentName:"p"},"synchronous"),", i.e. you're allowed to do:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'const author = await em.load(Author, "a:1");\n// I promise I loaded books\nawait author.books.load();\n// Now access it w/o promises\nauthor.books.get.length;\n')),(0,n.kt)("p",null,"Which is nice! But the wrinkle is that we're now trusting ourselves to only access ",(0,n.kt)("inlineCode",{parentName:"p"},"books")," ",(0,n.kt)("em",{parentName:"p"},"after")," an explicit ",(0,n.kt)("inlineCode",{parentName:"p"},"load"),", and if we forget, i.e. when our code paths end up being complex enough that it's hard to tell, then we'll get a runtime error that ",(0,n.kt)("inlineCode",{parentName:"p"},"books.get")," is not allowed to be called"),(0,n.kt)("p",null,"Because of this lack of safety, Joist avoids this approach, and instead has something fancier."),(0,n.kt)("h2",{id:"the-magic-escape-hatch"},"The Magic Escape Hatch"),(0,n.kt)("p",null,"Ideally what we want is to have relations lazy-by-default, except when we've explicitly told TypeScript that we've loaded them. This is what Joist does."),(0,n.kt)("p",null,"In Joist, populate hints (which tell the ORM to pre-fetch data before it's actually accessed) also ",(0,n.kt)("em",{parentName:"p"},"change the type of the entity"),", and mark relations that were explicitly listed in the hint as loaded."),(0,n.kt)("p",null,"This looks like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'const book = await em.populate(\n  originalBook,\n  // Tell Joist we want `{ author: "publisher" } preloaded\n  { author: "publisher" });\n// The `populate` return type is now "special"/MarkLoaded `Book`\n// that has `author` and `publisher` marked as "get"-able\nexpect(book.author.get.firstName).toEqual("a1");\nexpect(book.author.get.publisher.get.name).toEqual("p1");\n')),(0,n.kt)("p",null,"Note that ",(0,n.kt)("inlineCode",{parentName:"p"},"originalBook"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"originalBook.author")," reference does ",(0,n.kt)("em",{parentName:"p"},"not")," have ",(0,n.kt)("inlineCode",{parentName:"p"},".get")," available (just the safe ",(0,n.kt)("inlineCode",{parentName:"p"},".load")," which returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"); only the modified ",(0,n.kt)("inlineCode",{parentName:"p"},"Book")," type returned from ",(0,n.kt)("inlineCode",{parentName:"p"},"em.populate")," has the ",(0,n.kt)("inlineCode",{parentName:"p"},".get")," method added ",(0,n.kt)("inlineCode",{parentName:"p"},"author.book"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can avoid having two ",(0,n.kt)("inlineCode",{parentName:"p"},"originalBook")," / ",(0,n.kt)("inlineCode",{parentName:"p"},"book")," variables by passing populate hints directly to ",(0,n.kt)("inlineCode",{parentName:"p"},"EntityManager.load"),", which will then return the appropriate ",(0,n.kt)("inlineCode",{parentName:"p"},".get"),"-able references:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'const book = await em.load(\n  Book,\n  "a:1",\n  { author: "publisher" });\nexpect(book.author.get.firstName).toEqual("a1");\nexpect(book.author.get.publisher.get.name).toEqual("p1");\n'))),(0,n.kt)("p",null,"Joist's ",(0,n.kt)("inlineCode",{parentName:"p"},"populate")," approach also works for multiple levels, i.e. our triple-nested ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise.all"),"-hell example can be written with a single ",(0,n.kt)("inlineCode",{parentName:"p"},"await")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'const author = await em.load(\n  Author,\n  "a:1",\n  { books: "reviews" },\n);\nauthor.books.get.forEach((book) => {\n  book.reviews.get.forEach((review) => {\n    console.log(review.name);\n  });\n})\n')),(0,n.kt)("h2",{id:"best-of-both-worlds"},"Best of Both Worlds"),(0,n.kt)("p",null,'This combination of "async by default" and "populate hint mapped types" brings the best of both worlds:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Data that we are unsure of its loaded-ness, must be ",(0,n.kt)("inlineCode",{parentName:"li"},"await"),"-d, while"),(0,n.kt)("li",{parentName:"ul"},"Data that we (and, more importantly, the TypeScript compiler) are sure of its loaded-ness, can be accessed synchronously")))}d.isMDXComponent=!0}}]);