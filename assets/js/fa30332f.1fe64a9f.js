"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[141],{5318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),c=o,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},923:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(2685),o=(a(7378),a(5318));const i={title:"Lifecycle Hooks",sidebar_position:4},r=void 0,l={unversionedId:"modeling/lifecycle-hooks",id:"modeling/lifecycle-hooks",title:"Lifecycle Hooks",description:'Joist supports hooks that can run business logic at varies stages in an entity\'s lifecycle, for example to implement business logic like "when an author is updated, always do x/y/z".',source:"@site/docs/modeling/lifecycle-hooks.md",sourceDirName:"modeling",slug:"/modeling/lifecycle-hooks",permalink:"/docs/modeling/lifecycle-hooks",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/modeling/lifecycle-hooks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Lifecycle Hooks",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Validation Rules",permalink:"/docs/modeling/validation-rules"},next:{title:"Enum Tables",permalink:"/docs/modeling/enum-tables"}},s={},d=[{value:"Setup",id:"setup",level:3},{value:"Available Hooks",id:"available-hooks",level:3},{value:"Allowed Behavior",id:"allowed-behavior",level:3},{value:"Wire Calls",id:"wire-calls",level:4},{value:"Hooks vs. Validation Rules",id:"hooks-vs-validation-rules",level:3}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Joist supports hooks that can run business logic at varies stages in an entity\'s lifecycle, for example to implement business logic like "when an author is updated, always do x/y/z".'),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("p",null,"All hooks are set up by the entity's ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { authorConfig as config } from "./entities";\n\nexport class Author extends AuthorCodegen {}\n\n// Create a draft book for all authors\nconfig.beforeCreate("books", (a, { em }) => {\n  if (a.books.get.length === 0) {\n    em.create(Book, { author: a, status: BookStatus.Draft });\n  }\n})\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"At first, it seems odd that Joist's hooks are not methods on the class itself, as this would be a more traditional place for ORM-driven business logic."),(0,o.kt)("p",{parentName:"admonition"},"However, being added via the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," API has a few benefits:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The hook methods all take load hints, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},'"books"')," in the above ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeCreate")," example, which makes the ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," param typed as ",(0,o.kt)("inlineCode",{parentName:"p"},'Loaded<Author, "books">')," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"Author"),"."),(0,o.kt)("p",{parentName:"li"},"This allows the hook's business logic to be written with as few ",(0,o.kt)("inlineCode",{parentName:"p"},"await"),"s as possible, such that ideally the lambda itself can be synchronous (although you can make it ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," if necessary)."),(0,o.kt)("p",{parentName:"li"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeCreate")," was written as a method, then an additional local variable (similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),") would need to be created, as ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," is not aware of the hook's load hint.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It's easier to keep business logic small & decoupled, because if you have multiple operations to perform on ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeCreate"),", you can have two entirely separate hooks, each with separate load hints and their own lambdas."),(0,o.kt)("p",{parentName:"li"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeCreate")," was a single ",(0,o.kt)("inlineCode",{parentName:"p"},"Author.beforeCreate")," method, then its implementation would just get bigger and more complex as it handles additional business requirements.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It's trivial to reuse hook logic across entities without relying on multiple inheritance."),(0,o.kt)("p",{parentName:"li"},"For example, we could have a method like ",(0,o.kt)("inlineCode",{parentName:"p"},"addSoftDeleteHooks(config)")," that, for any given entity's config, adds some shared business logic to the entity.")))),(0,o.kt)("h3",{id:"available-hooks"},"Available Hooks"),(0,o.kt)("p",null,"Joist supports the following hooks, listed in the order that they are fired:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"beforeCreate")," fired when an entity is created / ",(0,o.kt)("inlineCode",{parentName:"li"},"INSERT"),"-d for the first time"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"beforeUpdate")," fired when an entity is updated / ",(0,o.kt)("inlineCode",{parentName:"li"},"UPDATE"),"-d"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"beforeFlush")," fired when an entity is either created or updated (but not deleted)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"beforeDelete")," fired when an entity is deleted / ",(0,o.kt)("inlineCode",{parentName:"li"},"DELETE"),"-d"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"afterValidation")," fired after an entity is created or updated, and all validation rules have passed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"afterCommit")," fired when an entity is created, or updated, or deleted and the transaction has committed")),(0,o.kt)("h3",{id:"allowed-behavior"},"Allowed Behavior"),(0,o.kt)("p",null,"Hooks are allowed to create/update/delete other entities."),(0,o.kt)("p",null,"For example, a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," can ",(0,o.kt)("inlineCode",{parentName:"p"},"em.create")," a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," in an ",(0,o.kt)("inlineCode",{parentName:"p"},"Author.beforeCreate")," hook.  Or a deleted ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," could ",(0,o.kt)("inlineCode",{parentName:"p"},"em.delete")," its ",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"s in an ",(0,o.kt)("inlineCode",{parentName:"p"},"Author.beforeDelete")," hook."),(0,o.kt)("p",null,"Any entities that are created/updated/deleted by a hook will themselves have their appropriate hooks ran, although only if those entity's hooks have not already been run (to avoid cycles of a book-touches-author/author-touches-book infinitely recursing)."),(0,o.kt)("h4",{id:"wire-calls"},"Wire Calls"),(0,o.kt)("p",null,"Making RPC calls to 3rd party systems can be problematic, and so we recommend:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Do not make RPC calls from any non-",(0,o.kt)("inlineCode",{parentName:"p"},"afterCommit")," hook."),(0,o.kt)("p",{parentName:"li"},"It is very likely that hooks will run but then your ",(0,o.kt)("inlineCode",{parentName:"p"},"em.flush")," later fails due to unrelated validation rules, at which point your transaction/changes won't be committed and you've likely made an unnecessary/incorrect wire call."),(0,o.kt)("p",{parentName:"li"},"(Any non-",(0,o.kt)("inlineCode",{parentName:"p"},"afterCommit")," hook also will not have ids assigned yet for newly-created entities, and often these ids are necessary for communicating with the 3rd party system.)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Only pragmatically make wire calls in the ",(0,o.kt)("inlineCode",{parentName:"p"},"afterCommit")," hook."),(0,o.kt)("p",{parentName:"li"},"While ",(0,o.kt)("inlineCode",{parentName:"p"},"afterCommit"),' is the "safest" place to make a wire call, because it\'s only called after the transaction has been committed, there is still a chance that either a) ',(0,o.kt)("inlineCode",{parentName:"p"},"em.flush")," commits but the machine crashes before running ",(0,o.kt)("inlineCode",{parentName:"p"},"afterCommit"),", or b) your ",(0,o.kt)("inlineCode",{parentName:"p"},"afterCommit")," fails but now will not retry."))),(0,o.kt)("p",null,"Because of these wrinkles, our general recommendation is to use a ",(0,o.kt)("a",{parentName:"p",href:"https://brandur.org/job-drain"},"job drain"),' pattern, where hooks only create "intentions" of work to be done (background jobs), this intention is atomically saved to the database in the same transaction as your business logic (for an example a ',(0,o.kt)("inlineCode",{parentName:"p"},"jobs")," table), and then you have a separate background job runner that handles invoking (and retrying if necessary) the intended action of calling/syncing with the 3rd party system."),(0,o.kt)("h3",{id:"hooks-vs-validation-rules"},"Hooks vs. Validation Rules"),(0,o.kt)("p",null,"Hooks run before validation rules, and are allowed to mutate entities that may currently be invalid."),(0,o.kt)("p",null,"Valiation rules run after hooks, and are not allowed to mutate entities: they must be side effect free."),(0,o.kt)("p",null,'For example, you could have a validation rule of "Author must have at least one book", and a hook that "creates a default book for new authors", and when you do ',(0,o.kt)("inlineCode",{parentName:"p"},"em.create(Author)")," without any books, then first the hook would run and create a single book, such that when the validation rule runs, it passes."),(0,o.kt)("p",null,"Similarly, hooks can set required fields before the missing values trigger validation rules."),(0,o.kt)("p",null,"Validation rules are only ran once per ",(0,o.kt)("inlineCode",{parentName:"p"},"em.flush"),", and only after all hooks, and all transitively-ran hooks, have finished."))}u.isMDXComponent=!0}}]);