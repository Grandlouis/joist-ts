"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[185],{5318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(2685),o=(n(7378),n(5318));const r={title:"Quick Tour",sidebar_position:0},s=void 0,i={unversionedId:"getting-started/tour",id:"getting-started/tour",title:"Quick Tour",description:'This page gives a quick overview/scan of "what using Joist looks like". Joist\'s docs dive into these features in more detail, and see Installation for a true "getting started".',source:"@site/docs/getting-started/tour.md",sourceDirName:"getting-started",slug:"/getting-started/tour",permalink:"/docs/getting-started/tour",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/getting-started/tour.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Quick Tour",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/docs/getting-started"}},l={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'This page gives a quick overview/scan of "what using Joist looks like". Joist\'s docs dive into these features in more detail, and see ',(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started"},"Installation"),' for a true "getting started".'),(0,o.kt)("p",null,"With Joist, you start by creating/updating your database schema, using ",(0,o.kt)("inlineCode",{parentName:"p"},"node-pg-migrate")," or whatever migration tool you like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Start your postgres database\ndocker-compose up db --wait\n# Apply the latest migrations\nnpm run migrate\n")),(0,o.kt)("p",null,"Then invoke Joist's code generation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm run joist-codegen\n")),(0,o.kt)("p",null,"To automatically get super-clean domain objects created (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/goals/code-generation"},"Code Generation"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/entities/Author.ts\nexport class Author extends AuthorCodegen {\n  // ...empty placeholder for your custom methods/business logic...\n}\n\n// src/entities/AuthorCodegen.ts\nexport class AuthorCodegen {\n  // ...all the boilerplate fields & m2o/o2m/m2m relations generated for you...\n  readonly books: Collection<Author, Book> = hasOne(...);\n  get firstName(): string { ... }\n  set firstName(): string { ... }\n}\n")),(0,o.kt)("p",null,"Joist generates both sides of relations, and will keep them automatically in sync (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/modeling/relations"},"Relations"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const a1 = em.load(Author, "a:1", "books");\n// Create a new book for a1\nconst b1 = new Book(em, { title: "b1", author: a1 });\n// a1.books already has b1 in it, so your view of data is always consistent\nexpect(a1.books.get.includes(b1)).toBe(true);\n')),(0,o.kt)("p",null,"You can create your own derived relations for common paths in your domain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'class Author extends AuthorCodegen {\n  // Use hasManyThrough for simple paths that include everything\n  readonly reviews: Collection<Author, Review> = hasManyThrough((a) => a.books.reviews);\n  \n  // Use hasManyDerived to do filtering if needed\n  readonly publicReviews: Collection<Author, Review> = hasManyDerived(\n    { books: "reviews" },\n    (a) => a.flatMap(a.books.get).flatMap(b => b.reviews.get).filter(r => r.isPublic)\n  );  \n}\n')),(0,o.kt)("p",null,"Or derived fields that will be reactively calculated (and updated in the database) when their dependencies change (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/modeling/derived-fields"},"Derived Fields"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'class Author extends AuthorCodegen {\n  readonly numberOfBooks: PersistedAsyncProperty<Author, number> =\n    hasPersistedAsyncProperty(\n     "numberOfBooks",\n     ["books"],\n     (a) => a.books.get.length,\n    );\n}\n\n// Now we can filter/sort by numberOfBooks in queries b/c its a column in the db\nconst prolificAuthors = await em.find(Author, { numberOfBooks: { gt: 100 } });\n')),(0,o.kt)("p",null,"You write validation rules that can be per-field, per-entity or even ",(0,o.kt)("em",{parentName:"p"},"reactive across multiple entities"),", i.e. in ",(0,o.kt)("inlineCode",{parentName:"p"},"Author.ts")," (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/modeling/validation-rules"},"Validation Rules"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { authorConfig as config } from "./entities";\n\nexport class Author extends AuthorCodegen {}\n\n// Required rules for `NOT NULL` columns are automatically added in AuthorCodegen\n\n// Anytime a book is associated/disassociated to/from this author, run this rule\nconfig.addRule("books", (author) => {\n  if (author.books.get.length > 10) {\n    return "Too many books";\n  }\n});\n')),(0,o.kt)("p",null,"You load/save entities via a per-request ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager")," that acts as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/unit-of-work"},"Unit of Work")," and on ",(0,o.kt)("inlineCode",{parentName:"p"},"em.flush")," will batch any changes made during the current request in an atomic transaction, only after running all validation rules & updating any derived values (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/entity-manager"},"Entity Manager"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const a1 = em.load(Author, "a:1");\na1.firstName = "Allen";\na2.lastName = "Zed";\n// Runs validation against all created/updated entities, calls lifecycle hooks,\n// updates derived values, and issues bulk INSERTs/UPDATEs in a transaction\nawait em.flush();\n')),(0,o.kt)("p",null,"To avoid tedious ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise.all"),", you can use deep load a subgraph via populate hints (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/goals/type-safe-relations"},"Type Safe Relations"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Use 1 await to preload a tree of data\nconst loaded = await a1.populate({\n  books: { reviews: "comments" },\n  publisher: {},\n});\n\n// No more await Promise.all\nloaded.books.get.forEach((book) => {\n  book.reviews.get.forEach((review) => {\n    console.log(review.name);\n  });\n})\n')),(0,o.kt)("p",null,"Loading any references or collections within the domain model is guaranteed to be N+1 safe, regardless of where the ",(0,o.kt)("inlineCode",{parentName:"p"},"populate")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," calls happen within the code-path (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/goals/avoiding-n-plus-1s"},"Avoiding N+1 Queries"),")."),(0,o.kt)("p",null,"To find entities, you can use an ergonomic ",(0,o.kt)("inlineCode",{parentName:"p"},"em.find"),' API that combines joins and conditions in a single "join literal" (see ',(0,o.kt)("a",{parentName:"p",href:"/docs/features/queries-find"},"Finding Entities"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const books = await em.find(\n  Book,\n  {\n    author: { publisher: { name: "p1" } },\n    status: BookStatus.Published,\n  },\n  { orderBy: { name: "desc" } }\n);\n')),(0,o.kt)("p",null,"Or if you have complex conditions, you can use dedicated conditions to do cross-table ",(0,o.kt)("inlineCode",{parentName:"p"},"AND"),"s and ",(0,o.kt)("inlineCode",{parentName:"p"},"OR"),"s (also see ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/queries-find"},"Finding Entities"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const [p, b] = aliases(Publisher, Book);\nconst books = await em.find(\n  Book,\n  { as: b, author: { publisher: p } },\n  {\n    conditions: { or: [p.name.eq("p1"), b.status.eq(BookStatus.Published)] },     \n    orderBy: { name: "desc" },\n  }\n);\n')),(0,o.kt)("p",null,"For lower-level, complex queries that do sums, group bys, etc., Joist currently defers to existing query builder libraries like Knex."),(0,o.kt)("p",null,"You can test all of your behavior with integrated test factories (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/testing/test-factories"},"Test Factories"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import {  newEntityManager } from "./setupTests";\n\ndescribe("Author", () => {\n  it("can have reactive validation rules", async () => {\n    const em = newEntityManager();\n    // Given the book and author start out with acceptable names\n    const a1 = new Author(em, { firstName: "a1" });\n    const b1 = new Book(em, { title: "b1", author: a1 });\n    await em.flush();\n    // When the book name is later changed to collide with the author\n    b1.title = "a1";\n    // Then the validation rule is ran even though it\'s on the author entity\n    await expect(em.flush()).rejects.toThrow(\n        "Validation error: Author:1 A book title cannot be the author\'s firstName",\n    );\n  });\n})\n')),(0,o.kt)("p",null,'And tweak your factories to provide "valid by default" data to keep your tests succinct:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export function newAuthor(em: EntityManager, opts: FactoryOpts<Author> = {}): DeepNew<Author> {\n  return newTestInstance(em, Author, opts, {\n    // firstName has a unique constraint, so make it unique  \n    firstName: `a${testIndex}`,\n    // Authors should be popular by default, but only in tests, not prod\n    isPopular: true,\n  });\n}\n")),(0,o.kt)("p",null,"Finally, Joist has a number of other nifty features, like ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/tagged-ids"},"Tagged Ids"),", automatic handling of ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/soft-deletes"},"Soft Deletes"),", support for ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/class-table-inheritance"},"Class Table Inheritance"),", and more."))}p.isMDXComponent=!0}}]);