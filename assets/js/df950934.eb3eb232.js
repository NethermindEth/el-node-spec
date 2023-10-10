"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8820],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:4,id:"node-operators"},o="Key Management Best Practices for Node Operators",i={unversionedId:"keys/node-operators",id:"keys/node-operators",title:"Key Management Best Practices for Node Operators",description:"For Node Operators, such as institutional stakers or those managing numerous validator keys, staking services like Twinstake can be advantageous, as they allow for continuous fund control while combining technical, risk, and treasury management expertise. With such services, there is no need to maintain infrastructure or develop safe key signing or management mechanisms. However, some Node Operators possess the resources to deploy and maintain the required infrastructure for running nodes effectively for multiple validator keys. A detailed blog discussing various security layers can be found here.",source:"@site/docs/keys/node-operators.md",sourceDirName:"keys",slug:"/keys/node-operators",permalink:"/docs/keys/node-operators",draft:!1,editUrl:"https://github.com/NethermindEth/el-node-spec/edit/main/docs/docs/keys/node-operators.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"node-operators"},sidebar:"sidebar",previous:{title:"Key Management Best Practices for Solo Stakers",permalink:"/docs/keys/solo-stakers"},next:{title:"Glossary",permalink:"/docs/glossary"}},c={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"key-management-best-practices-for-node-operators"},"Key Management Best Practices for Node Operators"),(0,a.kt)("p",null,"For Node Operators, such as institutional stakers or those managing numerous validator keys, staking services like ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://twinstake.io/"},"Twinstake"))," can be advantageous, as they allow for continuous fund control while combining technical, risk, and treasury management expertise. With such services, there is no need to maintain infrastructure or develop safe key signing or management mechanisms. However, some Node Operators possess the resources to deploy and maintain the required infrastructure for running nodes effectively for multiple validator keys. A detailed blog discussing various security layers can be found ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://www.attestant.io/posts/protecting-validator-keys/"},"here")),"."),(0,a.kt)("p",null,"Below are a few recommendations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Secure keys, including secrets such as passphrases or mnemonics, using services like AWS Secrets Manager or Hashicorp Vault. These services can be seamlessly integrated with automated mechanisms that safely retrieve secrets or keys (e.g., remote signers). If resources permit, consider running your own Hashicorp Vault instance, which grants full custody of keys and secrets while sacrificing the service provider's availability and security guarantees."),(0,a.kt)("li",{parentName:"ul"},"Avoid generating all keys with the same mnemonic. Minimize the attack surface by employing a new mnemonic for every 200 or 1000 validator keys, depending on your preference. This approach also reduces the risk of losing key generation capabilities if a single mnemonic is lost, and limits the impact if an attacker gains access to a few mnemonics."),(0,a.kt)("li",{parentName:"ul"},"Use a remote signer like ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/ConsenSys/web3signer"},"Web3signer"))," or, better yet, distributed signers to eliminate single points of failure."),(0,a.kt)("li",{parentName:"ul"},"Develop a custom solution involving tailor-made tools. For instance, use Web3signer for remote signing and store keys on AWS Secrets Manager. A custom tool can manage automatic key storage in Secrets Manager and facilitate interactions with Web3signer.")))}m.isMDXComponent=!0}}]);