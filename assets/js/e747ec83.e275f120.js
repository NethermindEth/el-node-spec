"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[291],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,f=d["".concat(s,".").concat(u)]||d[u]||y[u]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},i="Glossary",l={unversionedId:"glossary",id:"glossary",title:"Glossary",description:"- Glossary",source:"@site/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/docs/glossary",draft:!1,editUrl:"https://github.com/NethermindEth/el-node-spec/edit/main/docs/docs/glossary.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Key Management Best Practices for Node Operators",permalink:"/docs/keys/node-operators"}},s={},c=[{value:"AVS (Actively Validated Service)",id:"avs-actively-validated-service",level:2},{value:"AVS Node",id:"avs-node",level:2},{value:"Strategy contract",id:"strategy-contract",level:2},{value:"Eigenlayer Operator",id:"eigenlayer-operator",level:2}],p={toc:c},d="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"glossary"},"Glossary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#glossary"},"Glossary"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#avs-actively-validated-service"},"AVS (Actively Validated Service)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#avs-node"},"AVS Node")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#strategy-contract"},"Strategy contract")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#eigenlayer-operator"},"Eigenlayer Operator"))))),(0,n.kt)("h2",{id:"avs-actively-validated-service"},"AVS (Actively Validated Service)"),(0,n.kt)("p",null,"Collection of services or middleware software that is built on top of EigenLayer."),(0,n.kt)("h2",{id:"avs-node"},"AVS Node"),(0,n.kt)("p",null,"An AVS Node is a node that runs the AVS software as an ",(0,n.kt)("a",{parentName:"p",href:"#eigenlayer-operator"},"Eigenlayer Operator"),". Can be defined as a collection of Docker services declared in a Docker Compose file."),(0,n.kt)("h2",{id:"strategy-contract"},"Strategy contract"),(0,n.kt)("p",null,"A strategy in EigenLayer is a contract that holds staker deposits, meaning it controls one or more asset(s) that can be restaked. At the launch of EigenLayer, the system will feature only simple strategies which may hold a single token. However, the design of EigenLayer's strategies is flexible and open-ended. In the future, strategies could be deployed which implement more intricate logic, including integrations with decentralized finance (DeFi) platforms."),(0,n.kt)("h2",{id:"eigenlayer-operator"},"Eigenlayer Operator"),(0,n.kt)("p",null,"Eigenlayer Operators act as AVS nodes by opting in to validating AVSs by running their AVS software."))}y.isMDXComponent=!0}}]);