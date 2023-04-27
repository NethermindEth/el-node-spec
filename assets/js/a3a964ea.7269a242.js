"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[687],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6088:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"The UID importance"},o=void 0,l={unversionedId:"graft/the-uid-importance",id:"graft/the-uid-importance",title:"The UID importance",description:"The uid property is a unique string identifier inside the Grafana database. The good usage of this property is important because all the relations between objects (folder \u2194\xa0panel \u2194\xa0dashboard \u2194\xa0datasource) uses this property. The user has the power to define these properties while initializing any of the objects. Take in mind that the uid is a value that will present in the backup files that the end user will import on its Grafana instance, so a good name pattern is useful to avoid collisions between multiple Middleware collections, we propose to use this name pattern:",source:"@site/docs/graft/the-uid-importance.md",sourceDirName:"graft",slug:"/graft/the-uid-importance",permalink:"/docs/graft/the-uid-importance",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graft/the-uid-importance.md",tags:[],version:"current",frontMatter:{title:"The UID importance"},sidebar:"sidebar",previous:{title:"Demo",permalink:"/docs/graft/demo"}},p={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"uid")," property is a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," identifier inside the Grafana database. The good usage of this property is important because all the relations between objects (folder \u2194\xa0panel \u2194\xa0dashboard \u2194\xa0datasource) uses this property. The user has the power to define these properties while initializing any of the objects. Take in mind that the ",(0,a.kt)("inlineCode",{parentName:"p"},"uid")," is a value that will present in the backup files that the end user will import on its Grafana instance, so a good name pattern is useful to avoid collisions between multiple Middleware collections, we propose to use this name pattern:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"el-[middleware]-[type]-[name]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"middleware")," is the Middleware project name, e.g.: ",(0,a.kt)("inlineCode",{parentName:"li"},"eigenDA")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type")," is the type of the object: ",(0,a.kt)("inlineCode",{parentName:"li"},"folder"),",   ",(0,a.kt)("inlineCode",{parentName:"li"},"datasource"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"dashboard"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"panel"))))}d.isMDXComponent=!0}}]);