"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[405],{5318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5543:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var o=n(5773),a=n(808),i=(n(7378),n(5318)),r=["components"],s={title:"Code Generation",sidebar_position:1},l=void 0,c={unversionedId:"goals/code-generation",id:"goals/code-generation",isDocsHomePage:!1,title:"Code Generation",description:"One of the primary ways Joist achieves ActiveRecord-level productivity and DRY-ness is by leveraging continual, schema-driven code generation.",source:"@site/docs/goals/code-generation.md",sourceDirName:"goals",slug:"/goals/code-generation",permalink:"/docs/goals/code-generation",editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/goals/code-generation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Code Generation",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/goals"},next:{title:"Avoiding N+1s",permalink:"/docs/goals/avoiding-n-plus-1s"}},d=[{value:"Evergreen Code Generation",id:"evergreen-code-generation",children:[],level:3},{value:"Custom Business Logic",id:"custom-business-logic",children:[],level:3},{value:"Declarative Customizations (TODO)",id:"declarative-customizations-todo",children:[],level:3},{value:"Pros/Cons",id:"proscons",children:[],level:3}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One of the primary ways Joist achieves ActiveRecord-level productivity and DRY-ness is by leveraging ",(0,i.kt)("strong",{parentName:"p"},"continual, schema-driven code generation"),"."),(0,i.kt)("p",null,"I.e. for an ",(0,i.kt)("inlineCode",{parentName:"p"},"authors")," table, the initial ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.ts")," file is as clean & simple as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { AuthorCodegen } from "./entities";\n\nexport class Author extends AuthorCodegen {}\n')),(0,i.kt)("p",null,"Similar to ActiveRecord, Joist automatically adds all the columns to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," class for free, without you having to re-type them in your domain object. It does this for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Primitive columns, i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"first_name")," can be set via ",(0,i.kt)("inlineCode",{parentName:"li"},'author.firstName = "bob"')),(0,i.kt)("li",{parentName:"ul"},"Foreign key columns, i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"book.author_id")," can be set via ",(0,i.kt)("inlineCode",{parentName:"li"},"book.author.set(...)"),", and"),(0,i.kt)("li",{parentName:"ul"},"Foreign key collections, i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"Author.books")," can be loaded via ",(0,i.kt)("inlineCode",{parentName:"li"},"await author.books.load()"),"."),(0,i.kt)("li",{parentName:"ul"},"One-to-one relations, many-to-many collections, etc.")),(0,i.kt)("p",null,"These columns/fields are added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthorCodegen.ts")," file, which looks (heavily redacted for clarity) something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// This is all generated code\nexport abstract class AuthorCodegen extends BaseEntity {\n   readonly books: Collection<Author, Book> = hasMany(\n           bookMeta,\n           "books",\n           "author",\n           "author_id",\n   );\n\n   readonly publisher: Reference<Author, Publisher, undefined> = hasOne(\n           publisherMeta,\n           "publisher",\n           "authors",\n   );\n\n   // ...\n\n   get id(): AuthorId | undefined {\n      return this.__orm.data["id"];\n   }\n\n   get firstName(): string {\n      return this.__orm.data["firstName"];\n   }\n\n   set firstName(firstName: string) {\n      setField(this, "firstName", firstName);\n   }\n}   \n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note that, while ActiveRecord leverages Ruby's runtime meta-programming to add getter & setters when your program starts up, Joist does this via build-time code generation (i.e. by running a ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run joist-codegen")," command)."),(0,i.kt)("p",{parentName:"div"},"This approach allows the generated types to be seen by the TypeScript compiler and IDEs, and so provides your codebase a type-safe view of your database."))),(0,i.kt)("h3",{id:"evergreen-code-generation"},"Evergreen Code Generation"),(0,i.kt)("p",null,"Joist's code generation runs continually (although currently invoked by hand, i.e. individual ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run joist-codegen")," commands), after every migration/schema change, so your domain objects will always 1-to-1 match your schema, without having to worry about them mismatching or tediously keeping the two in sync."),(0,i.kt)("h3",{id:"custom-business-logic"},"Custom Business Logic"),(0,i.kt)("p",null,"Even though Joist's code generation runs continually, it only touches the ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.ts")," once."),(0,i.kt)("p",null,"After that, all of Joist's updates are made only to the separate ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthorCodegen.ts")," file."),(0,i.kt)("p",null,"This makes ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.ts"),' a safe space to add any custom business logic you might need, separate from the boilerplate of the various getters, setters, and relations that are isolated into "codegen" base class, and always overwritten.'),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"../features/lifecycle-hooks"},"Lifecycle Hooks")," and ",(0,i.kt)("a",{parentName:"p",href:"../features/derived-fields"},"Derived Fields")," for examples of how to add business logic."),(0,i.kt)("h3",{id:"declarative-customizations-todo"},"Declarative Customizations (TODO)"),(0,i.kt)("p",null,"If you do need to customize how a column is mapped, Joist ",(0,i.kt)("em",{parentName:"p"},"should")," (these are not implemented yet) have two levers to pull:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Declare a schema-wide rule based on the column's type and/or naming convention"),(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-codegen.json")," config file, define all ",(0,i.kt)("inlineCode",{parentName:"p"},"timestampz")," columns should be mapped as type ",(0,i.kt)("inlineCode",{parentName:"p"},"MyCustomDateTime"),"."),(0,i.kt)("p",{parentName:"li"},"This would be preferable to per-column configuration/annotations because you could declare the rule once, and have it apply to all applicable columns in your schema.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Declare a specific user type for a column."),(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-codegen.json")," config file, define the column's specific user type."))),(0,i.kt)("h3",{id:"proscons"},"Pros/Cons"),(0,i.kt)("p",null,"This approach (continual, verbatim mapping of the database schema to your object model) generally assumes you have a modern/pleasant schema to work with, and you don't need your object model to look dramatically different from your database tables."),(0,i.kt)("p",null,"And specifically Joist's assertion is that this 1-1 restriction is a feature, because it should largely help avoid the ",(0,i.kt)("a",{parentName:"p",href:"https://blog.codinghorror.com/object-relational-mapping-is-the-vietnam-of-computer-science/"},"horror stories of ORMs"),", where the ORM is asked to do non-trivial translation between a database schema and object model that are fundamentally at odds."))}u.isMDXComponent=!0}}]);