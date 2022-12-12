"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[449],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=d(n),h=a,c=g["".concat(s,".").concat(h)]||g[h]||u[h]||r;return n?i.createElement(c,o(o({ref:t},p),{},{components:n})):i.createElement(c,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(2685),a=(n(7378),n(5318));const r={title:"Tagged Ids",sidebar_position:3},o=void 0,l={unversionedId:"features/tagged-ids",id:"features/tagged-ids",title:"Tagged Ids",description:'Joist automatically "tags" entity ids, which means prefixing them with a per-entity identifier.',source:"@site/docs/features/tagged-ids.md",sourceDirName:"features",slug:"/features/tagged-ids",permalink:"/docs/features/tagged-ids",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/features/tagged-ids.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Tagged Ids",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Unit of Work",permalink:"/docs/features/unit-of-work"},next:{title:"graphql-filters",permalink:"/docs/features/graphql-filters"}},s={},d=[{value:"Rationale",id:"rationale",level:2},{value:"Avoiding &quot;Wrong Id&quot; Bugs",id:"avoiding-wrong-id-bugs",level:3},{value:"Easier Debugging",id:"easier-debugging",level:3},{value:"Convenient for GraphQL Integration",id:"convenient-for-graphql-integration",level:3},{value:"But I&#39;m Not Using GraphQL",id:"but-im-not-using-graphql",level:3},{value:"Running SQL Queries",id:"running-sql-queries",level:2},{value:"Tag Assignment",id:"tag-assignment",level:2},{value:"Untagged Id Fallback",id:"untagged-id-fallback",level:2},{value:"Disabling Tagged Ids",id:"disabling-tagged-ids",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Joist automatically "tags" entity ids, which means prefixing them with a per-entity identifier.'),(0,a.kt)("p",null,"For example, this code prints ",(0,a.kt)("inlineCode",{parentName:"p"},'"a:1"')," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const a = await em.findOneOrFail(Author, { firstName: "first" });\n// Outputs `a:1`\nconsole.log(a.id);\n')),(0,a.kt)("p",null,"In the database, the ",(0,a.kt)("inlineCode",{parentName:"p"},"authors.id")," column is still an auto-increment integer and really the int value of ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," for this row, Joist has just stringified and ",(0,a.kt)("inlineCode",{parentName:"p"},"a:")," prefixed the value."),(0,a.kt)("h2",{id:"rationale"},"Rationale"),(0,a.kt)("p",null,"There are a few reasons for this feature:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Avoiding "Wrong Id" Bugs'),(0,a.kt)("li",{parentName:"ul"},"Easier debugging"),(0,a.kt)("li",{parentName:"ul"},"Convenient for GraphQL integration")),(0,a.kt)("h3",{id:"avoiding-wrong-id-bugs"},'Avoiding "Wrong Id" Bugs'),(0,a.kt)("p",null,"Knowing the entity type for each id eliminates a class of bugs where ids are passed incorrectly across entity types."),(0,a.kt)("p",null,"For example, a bug like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const id = someAuthor.id;\n// ...lots of lines of code go by...\n// Oops, I used an "author id" to find a book...\nconst book = em.load(Book, id);\n')),(0,a.kt)("p",null,'Frustratingly, often these "wrong id" bugs will actually work during local testing, because every table only has a few rows of ',(0,a.kt)("inlineCode",{parentName:"p"},"id 1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"id 2"),", so it's easy to have ",(0,a.kt)("inlineCode",{parentName:"p"},"id 1")," taken from the ",(0,a.kt)("inlineCode",{parentName:"p"},"authors")," table and accidentally work when looking it up in the ",(0,a.kt)("inlineCode",{parentName:"p"},"books")," table."),(0,a.kt)("p",null,"Note that, within backend code, Joist's entities also use strongly-typed ids (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"Author.id")," returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthorId"),') to help prevent this with static type checking, but typed ids only prevent "wrong id" bugs that happen internally in the backend code (so, technically within our above example, we could get a compile error that ',(0,a.kt)("inlineCode",{parentName:"p"},"id")," needs to be a ",(0,a.kt)("inlineCode",{parentName:"p"},"BookId"),", which is great)."),(0,a.kt)("p",null,'So tagged ids extends "typed ids"-style protection to API calls, i.e. if a client calls the API for "author ',(0,a.kt)("inlineCode",{parentName:"p"},"a:1"),'" and then makes a subsequent API call that accidentally uses ',(0,a.kt)("inlineCode",{parentName:"p"},"a:1")," as a book id, Joist will throw a runtime error that it expected a ",(0,a.kt)("inlineCode",{parentName:"p"},"b:...")," prefixed id."),(0,a.kt)("h3",{id:"easier-debugging"},"Easier Debugging"),(0,a.kt)("p",null,"It makes debugging easier because seeing ids like ",(0,a.kt)("inlineCode",{parentName:"p"},"a:1")," in the logs, you immediately know which entity that was for, without having to also prefix your logging statements with ",(0,a.kt)("inlineCode",{parentName:"p"},"authorId=${...}"),", or when the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," is in JSON payloads."),(0,a.kt)("h3",{id:"convenient-for-graphql-integration"},"Convenient for GraphQL Integration"),(0,a.kt)("p",null,"In GraphQL, there is a dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," type for id fields. It is not required to use, i.e. you can have ",(0,a.kt)("inlineCode",{parentName:"p"},"id: Integer!")," in a GraphQL schema, but the ",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," type is encouraged/more idiomatic because it is opaque, meaning it hides the ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"'s implementation details from the client."),(0,a.kt)("p",null,'I.e., to an external client, it shouldn\'t really matter if your internal id is "a number" or "a uuid" or "a string", and so having this ',(0,a.kt)("inlineCode",{parentName:"p"},"ID")," type is how GraphQL represents that opaqueness (pragmatically, the GraphQL ",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," type ends up being mapped to string in client languages like TypeScript or Go, since a string value can effectively encode/represent other types like a number, or a uuid, albeit with some overhead)."),(0,a.kt)("p",null,'So while Joist is technically GraphQL-agnostic, if you are implementing a GraphQL system (which is what drove Joist\'s original development), the GraphQL layer already wants "the id is a string", so it is convenient if the ',(0,a.kt)("inlineCode",{parentName:"p"},"Author")," entity's ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," is already a string, as then your resolver layer doesn't have to constantly map back/forth from integers to strings for output, and strings to ",(0,a.kt)("inlineCode",{parentName:"p"},"parseInt"),"-d integers for input."),(0,a.kt)("p",null,'Joist does all of that internally, i.e. "string/number mapping" between the API/entity domain layer and the database columns.'),(0,a.kt)("h3",{id:"but-im-not-using-graphql"},"But I'm Not Using GraphQL"),(0,a.kt)("p",null,"Even if you're not using GraphQL, both benefits/rationale of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Id implementations should be opaque to external clients, and"),(0,a.kt)("li",{parentName:"ul"},'Tagged ids prevent "wrong id" bugs')),(0,a.kt)("p",null,'Are applicable to any system, so ideally you could apply the "id is a string" approach to your REST or GRPC or other APIs.'),(0,a.kt)("p",null,"That said, if you have an existing ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"-based API that you can't change, Joist provides ",(0,a.kt)("inlineCode",{parentName:"p"},"deTagId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"deTagIds"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"tagId")," methods to convert to/from tagged ids to the actual number value."),(0,a.kt)("h2",{id:"running-sql-queries"},"Running SQL Queries"),(0,a.kt)("p",null,"When writing raw SQL queries, you can get the numeric value using ",(0,a.kt)("inlineCode",{parentName:"p"},"deTagId")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'  const query = someKnexQuery();\n  query.whereIn("books.id", deTagId(getMetadata(Book), bookId));\n')),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"deTagId")," accepts the ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," entity as its 1st parameter because it still applies the tagged id runtime check, i.e. ensure that ",(0,a.kt)("inlineCode",{parentName:"p"},"bookId")," starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"b:..."),"."),(0,a.kt)("p",null,"If you need to detag a value without knowing the entity type, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"unsafeDeTagIds"),"."),(0,a.kt)("h2",{id:"tag-assignment"},"Tag Assignment"),(0,a.kt)("p",null,"For the tag names, when you add a new table, Joist guesses a tag name to use by abbreviating the table name, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"book_reviews")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"br")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"foo_bar_zazzes")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"fbz"),"."),(0,a.kt)("p",null,"If there is a collision, i.e. the ",(0,a.kt)("inlineCode",{parentName:"p"},"br")," abbreviation is already taken by an existing table in ",(0,a.kt)("inlineCode",{parentName:"p"},"joist-config.json"),", then Joist will use the full entity name, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"bookReview"),"."),(0,a.kt)("p",null,"The guessed tag name is then stored ",(0,a.kt)("inlineCode",{parentName:"p"},"joist-config.json"),", where you can easily change it if Joist initially guesses wrong."),(0,a.kt)("p",null,"However, once you have a given tagged id deployed in production, you should probably never change it (i.e. change the ",(0,a.kt)("inlineCode",{parentName:"p"},"bookReview")," tag to ",(0,a.kt)("inlineCode",{parentName:"p"},"bkr"),"), because even though Joist internally would immediately start using the new tag value (after the change is deployed), if any other external systems have copies of your ids (like you've stored ",(0,a.kt)("inlineCode",{parentName:"p"},"bookReview:1")," in an external/3rd party system), those externally-stored ids will now be incorrect, and Joist will be unload to load them."),(0,a.kt)("h2",{id:"untagged-id-fallback"},"Untagged Id Fallback"),(0,a.kt)("p",null,"If you do happen to given Joist untagged ids, it will still work, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const id = "1";\n// This will work, the `a:` prefix is not strictly required\nconst a = await em.load(Author, id);\n')),(0,a.kt)("h2",{id:"disabling-tagged-ids"},"Disabling Tagged Ids"),(0,a.kt)("p",null,"If you're migrating an existing system to Joist, or just don't want to use tagged ids (although you should try them and see!), you can disable them in the ",(0,a.kt)("inlineCode",{parentName:"p"},"joist-config.json")," file by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"idType"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "idType": "untagged-string"\n}\n')),(0,a.kt)("p",null,"This will change the return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"Author.id")," from ",(0,a.kt)("inlineCode",{parentName:"p"},'"a:1"')," to just ",(0,a.kt)("inlineCode",{parentName:"p"},'"1"'),"."),(0,a.kt)("p",null,"Note the value is still a string; we've not added support for returning numbers yet, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stephenh/joist-ts/issues/368"},"#368"),"."))}u.isMDXComponent=!0}}]);