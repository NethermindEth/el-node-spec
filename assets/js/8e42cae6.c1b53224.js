"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,y=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return n?r.createElement(y,o(o({ref:t},d),{},{components:n})):r.createElement(y,o({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1,id:"intro"},o="Introduction",s={unversionedId:"keys/intro",id:"keys/intro",title:"Introduction",description:"This section presents key management suggestions for both developers and users. Within the context of EigenLayer, Middleware providers (developers) ought to be acquainted with proper practices concerning key loading, particularly signing keys, while stakers (users) should understand how to manage them effectively.",source:"@site/docs/keys/intro.md",sourceDirName:"keys",slug:"/keys/intro",permalink:"/docs/keys/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/keys/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"intro"},sidebar:"sidebar",previous:{title:"Keys Management",permalink:"/docs/category/keys-management"},next:{title:"Key Security Considerations for Middleware Developers",permalink:"/docs/keys/middleware-developers"}},l={},c=[{value:"Keys",id:"keys",level:2},{value:"Signing keys",id:"signing-keys",level:3},{value:"Withdrawal keys",id:"withdrawal-keys",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This section presents key management suggestions for both developers and users. Within the context of EigenLayer, Middleware providers (developers) ought to be acquainted with proper practices concerning key loading, particularly signing keys, while stakers (users) should understand how to manage them effectively."),(0,i.kt)("h2",{id:"keys"},"Keys"),(0,i.kt)("p",null,"Central to every Proof of Stake mechanism lies a signature scheme. Signatures serve to authenticate the identity of every validator, enabling the attribution of their actions, whether positive or negative, to them. Focusing on Ethereum validator keys exemplifies keys necessitating optimal security and accessibility measures, as they may maintain a robust connection with Middleware services, further underlining their importance."),(0,i.kt)("p",null,"A validator's honesty can be confirmed by examining their signed messages, while malicious behavior can be demonstrated through messages that contravene consensus rules."),(0,i.kt)("p",null,"Indeed, in Ethereum, a validator's identity is synonymous with their public key. To be precise, each validator possesses two sets: a signing and withdrawal keys."),(0,i.kt)("h3",{id:"signing-keys"},"Signing keys"),(0,i.kt)("p",null,"A\xa0",(0,i.kt)("em",{parentName:"p"},"signing key"),"\xa0is the key a validator needs to sign attestations and propose blocks. Because a validator needs to sign a message at least once per epoch, the client software must have custody of the key."),(0,i.kt)("h3",{id:"withdrawal-keys"},"Withdrawal keys"),(0,i.kt)("p",null,"Because the client software is always connected to the internet, there is a chance that one\u2019s signing key is compromised. To reduce the impact of such a breach, the actions a validator can perform are split between two keys."),(0,i.kt)("p",null,"The signing key, as explained above, is used for the validator to perform their duties. On the other hand, the\xa0",(0,i.kt)("em",{parentName:"p"},"withdrawal key"),"\xa0has the power to control a validator's funds (transferring and withdrawing ETH)."),(0,i.kt)("p",null,"A validator should only need to use their withdrawal keys a few times over the lifetime of being a validator. This means they can be put into cold storage and stored with high security (offline)."))}p.isMDXComponent=!0}}]);