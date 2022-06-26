"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,k=d["".concat(l,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1808:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(2685),i=n(1244),r=(n(7378),n(5318)),o=["components"],s={title:"Schema Assumptions",sidebar_position:3},l=void 0,p={unversionedId:"getting-started/schema-assumptions",id:"getting-started/schema-assumptions",title:"Schema Assumptions",description:"Joist makes several assumptions about your database schema, as described below.",source:"@site/docs/getting-started/schema-assumptions.md",sourceDirName:"getting-started",slug:"/getting-started/schema-assumptions",permalink:"/docs/getting-started/schema-assumptions",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/getting-started/schema-assumptions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Schema Assumptions",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting-started"},next:{title:"Overview",permalink:"/docs/goals"}},u={},m=[{value:"Entity Tables",id:"entity-tables",level:2},{value:"Singular vs. Plural",id:"singular-vs-plural",level:3},{value:"camelCase or snake_case",id:"camelcase-or-snake_case",level:3},{value:"Timestamp Columns",id:"timestamp-columns",level:3},{value:"Enum Tables",id:"enum-tables",level:2},{value:"Many-to-many Join Tables",id:"many-to-many-join-tables",level:2},{value:"Deferred Foreign Key Constraints",id:"deferred-foreign-key-constraints",level:2}],d={toc:m};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Joist makes several assumptions about your database schema, as described below."),(0,r.kt)("h2",{id:"entity-tables"},"Entity Tables"),(0,r.kt)("p",null,"Joist expects entity tables (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"authors"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"books"),") to have a single primary key column, ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", that is either:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"serial")," type, that uses a sequence called ",(0,r.kt)("inlineCode",{parentName:"li"},"${tableName}_id_seq"),", or"),(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"uuid")," type")),(0,r.kt)("h3",{id:"singular-vs-plural"},"Singular vs. Plural"),(0,r.kt)("p",null,"You can use either singular table names, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"book"),", or plural table names, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"books"),"."),(0,r.kt)("h3",{id:"camelcase-or-snake_case"},"camelCase or snake_case"),(0,r.kt)("p",null,"Joist will work with column names that are camelCase or snake_case."),(0,r.kt)("h3",{id:"timestamp-columns"},"Timestamp Columns"),(0,r.kt)("p",null,"Entity tables can optionally have ",(0,r.kt)("inlineCode",{parentName:"p"},"created_at")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," columns, which when present Joist will auto-manage the setting of ",(0,r.kt)("inlineCode",{parentName:"p"},"created_at")," when creating entities, and updating ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," when updating entities."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"joist-codegen.json"),", you can configure the names of the ",(0,r.kt)("inlineCode",{parentName:"p"},"timestampColumns"),", which defaults to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestampColumns": {\n    "createdAt": { "names": ["created_at", "createdAt"], "optional": true },\n    "updatedAt": { "names": ["updated_at", "updatedAt"], "optional": true }\n  }\n}\n')),(0,r.kt)("p",null,"For example, if you want to strictly require ",(0,r.kt)("inlineCode",{parentName:"p"},"created_at")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," on all entities in your application's schema, you can use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestampColumns": {\n    "createdAt": { "names": ["created_at"], "optional": false },\n    "updatedAt": { "names": ["updated_at"], "optional": false }\n  }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"}," If you have non-Joist clients that update entities tables, or use bulk/raw SQL updates, you can create triggers that mimic this functionality (but will not overwrite ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"s / ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),"s that do set the columns), see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stephenh/joist-ts/blob/main/packages/migration-utils/src/utils.ts#L73"},"joist-migration-utils"),"."),(0,r.kt)("p",{parentName:"div"},"(This methods use ",(0,r.kt)("inlineCode",{parentName:"p"},"node-pg-migrate"),", but you can use whatever migration library you prefer to apply the DDL.)"))),(0,r.kt)("h2",{id:"enum-tables"},"Enum Tables"),(0,r.kt)("p",null,"Joist can model enums (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"EmployeeStatus"),") as their own database tables with a row-per-value."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"employee_status")," might have two rows like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"id  | code          | name\n----+---------------+---------------\n1   | FULL_TIME     | Full Time\n2   | PART_TIME     | Part Time\n")),(0,r.kt)("p",null,"And Joist will generate code that looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"enum EmployeeStatus {\n  FullTime,\n  PartTime,\n}\n")),(0,r.kt)("p",null,'This "enums-as-tables" approach allows the entities reference to the enum, i.e. ',(0,r.kt)("inlineCode",{parentName:"p"},"Employee.status")," pointing to the ",(0,r.kt)("inlineCode",{parentName:"p"},"EmployeeStatus")," enum, to use foreign keys to the enum table, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"employees.status_id")," is a foreign key to the ",(0,r.kt)("inlineCode",{parentName:"p"},"employee_status")," table. This enables:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Data integrity, ensuring that all ",(0,r.kt)("inlineCode",{parentName:"li"},"status_id")," values are valid statuses, and"),(0,r.kt)("li",{parentName:"ol"},"Allows Joist's code generator to tell both that ",(0,r.kt)("inlineCode",{parentName:"li"},"employees.status_id")," is a) of the type ",(0,r.kt)("inlineCode",{parentName:"li"},"EmployeeStatus")," and b) how many enum values ",(0,r.kt)("inlineCode",{parentName:"li"},"EmployeeStatus")," has.")),(0,r.kt)("p",null,"Joist expects enum tables to have three columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," primary key/serial"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"code")," i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"FOO_BAR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"Foo Bar"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"joist-migration-utils")," package has ",(0,r.kt)("inlineCode",{parentName:"p"},"createEnumTable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"addEnumValue"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"updateEnumValue")," helper methods to use in your migrations."),(0,r.kt)("p",null,"And, as mentioned, entities that want to use this enum should have a foreign key that references the appropriate enum table."),(0,r.kt)("p",null,"If you do not wish to use enums as tables, native enums can be used as well, and Joist will generate the Typescript enum."),(0,r.kt)("h2",{id:"many-to-many-join-tables"},"Many-to-many Join Tables"),(0,r.kt)("p",null,"Joist expects join tables to have three or four columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," primary key/serial"),(0,r.kt)("li",{parentName:"ul"},"One foreign key column for 1st side"),(0,r.kt)("li",{parentName:"ul"},"One foreign key column for 2nd side"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"created_at")," ",(0,r.kt)("inlineCode",{parentName:"li"},"timestamptz")," (optional)")),(0,r.kt)("p",null,"(",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," is not applicable to join tables.)"),(0,r.kt)("h2",{id:"deferred-foreign-key-constraints"},"Deferred Foreign Key Constraints"),(0,r.kt)("p",null,'Joist\'s goal of "batch all operations" can be difficult to achieve and still satisfy foreign key constraints, particularly as multiple types of entities are flushed to the database in a single transaction.'),(0,r.kt)("p",null,"For example, when dealing with a publisher/author pair of entities, i.e. sometimes the ",(0,r.kt)("inlineCode",{parentName:"p"},"publisher")," needs to be flushed first to satisfy an ",(0,r.kt)("inlineCode",{parentName:"p"},"author.publisher_id")," foreign key constraint, and other times the ",(0,r.kt)("inlineCode",{parentName:"p"},"author")," needs to be flushed first to satisfy a (say) ",(0,r.kt)("inlineCode",{parentName:"p"},"publisher.top_author_id")," foreign key constraint. Or, even trickier, if mixing ",(0,r.kt)("inlineCode",{parentName:"p"},"author")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"publisher")," ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),"s in the same transaction; should we delete authors then insert publishers, or delete publishers then insert authors, etc."),(0,r.kt)("p",null,'The easiest way for Joist to deal with this, and still keep it\'s "batch everything" goal, is to rely on deferred foreign key constraints, which tells Postgres that ',(0,r.kt)("em",{parentName:"p"},"temporarily")," violating foreign key constraints in the middle of a transaction is fine,\nas long as at ",(0,r.kt)("inlineCode",{parentName:"p"},"COMMIT")," time, the right values are in place and satisfy the checks."),(0,r.kt)("p",null,"To turn this capability on, you need to create your foreign keys with this syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE "authors" (\n  ...\n  "publisher_id" integer REFERENCES "publishers" DEFERRABLE INITIALLY DEFERRED,\n  ...\n);\n')),(0,r.kt)("p",null,"See the ",(0,r.kt)("inlineCode",{parentName:"p"},"joist-migration-utils")," utility methods, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"createEntityTable")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"foreignKey")," to always apply these defaults for you."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you need to convert your existing foreign keys to deferrable, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"pg-structure")," in a migration to loop over them like:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const db = await newPgStructure({ includeSchemas: "public" });\nfor (const table of db.tables) {\n  for (const constraint of table.constraints) {\n    if (constraint instanceof ForeignKey) {\n      await b.db.query(`\n        ALTER TABLE ${table.name}\n        ALTER CONSTRAINT ${constraint.name}\n        DEFERRABLE INITIALLY DEFERRED\n      `);\n    }\n  }\n}\n')))))}c.isMDXComponent=!0}}]);