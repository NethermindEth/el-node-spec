"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8185],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,y=p["".concat(l,".").concat(h)]||p[h]||u[h]||s;return r?n.createElement(y,a(a({ref:t},d),{},{components:r})):n.createElement(y,a({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:2,id:"middleware-developers"},a="Key Security Considerations for Developers",i={unversionedId:"keys/middleware-developers",id:"keys/middleware-developers",title:"Key Security Considerations for Developers",description:"When working with keys in Nodes or related tools, it is essential to consider the security aspects associated with key access and decryption. Keys should be encrypted either using a password or passphrase, understanding the unique security concerns posed by different access layers is crucial. By proactively addressing these concerns, you can enhance the overall security and integrity of the keys within your system:",source:"@site/docs/keys/developers.md",sourceDirName:"keys",slug:"/keys/middleware-developers",permalink:"/docs/keys/middleware-developers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/keys/developers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"middleware-developers"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/keys/intro"},next:{title:"Key Management Best Practices for Solo Stakers",permalink:"/docs/keys/solo-stakers"}},l={},c=[{value:"Key Management Recommendation for Developers",id:"key-management-recommendation-for-developers",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"key-security-considerations-for-developers"},"Key Security Considerations for Developers"),(0,o.kt)("p",null,"When working with keys in Nodes or related tools, it is essential to consider the security aspects associated with key access and decryption. Keys should be encrypted either using a password or passphrase, understanding the unique security concerns posed by different access layers is crucial. By proactively addressing these concerns, you can enhance the overall security and integrity of the keys within your system:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Prompt for the passphrase and store it in memory:"),"  In this scenario, the input must remain hidden to prevent the secret phrase from being stored in the terminal session or used buffer. Attackers might search for this secret in the buffer history. The key should not be stored locally or remotely unless encrypted via the AVS's proprietary methods.\n"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Request the path to a file containing the passphrase:"),"  Here, buffer vulnerability issues are absent unless the secret is printed or logged. However, an attacker with access to the machine running the service could potentially access this file.\n"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Retrieve the key remotely:"),"  Encrypting the validator key offers markedly improved protection when the decryption passphrase is stored remotely. Since the passphrase is not located within the validator client's storage, obtaining an unencrypted key from on-disk data becomes impossible. Instead, an attacker would need to execute considerably more advanced attacks, such as extracting the decrypted key from memory or impersonating the validator client process to receive the decryption key.","  Nonetheless, despite the increased difficulty, a sophisticated attack could still potentially acquire the validator key. Moreover, the user may inadvertently sign undesirable messages.\n"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Utilize remote signers:"),"  Employing remote signers involves delegating the signing process to an external service or device, which can offer additional security layers. The users are responsible for the availability and security of the remote signers, however, it is crucial to establish secure communication channels and verify the trustworthiness of the remote signer to prevent unauthorized access or tampering.")),(0,o.kt)("p",null,"Supporting both local and remote signer methods is a good practice. "),(0,o.kt)("p",null,"A good choice for a remote signer is ",(0,o.kt)("a",{parentName:"p",href:"https://docs.web3signer.consensys.net/"},"Web3signer"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open-source signing service developed under the Apache 2.0 license, developed by Consensys, and written in Java. "),(0,o.kt)("li",{parentName:"ul"},"Capable of signing on multiple platforms using private keys stored in an external vault, or encrypted on a disk."),(0,o.kt)("li",{parentName:"ul"},"Can sign payloads using secp256k1 and BLS12-381 signing keys (AWS HSM can't at the moment, spring 2023)."),(0,o.kt)("li",{parentName:"ul"},"Web3Signer uses REST APIs, and all the major Ethereum Consensus clients support it.")),(0,o.kt)("h2",{id:"key-management-recommendation-for-developers"},"Key Management Recommendation for Developers"),(0,o.kt)("p",null,"The Node can implement a feasible and sufficient method of loading the keys. This is asking for a path to a keystore folder. This keystore needs to follow some structure either the Service knows how to read, or an AVS ",(0,o.kt)("a",{parentName:"p",href:"/docs/plugin/intro"},"plugin")," knows how to transform to something the Service knows how to read."),(0,o.kt)("p",null,"Usually, the plugin idea is the most recommended because the Service has the freedom to use whatever structure they need or want for the keystore. Also, no constraint is being put on users or key generation tools. This also fits the idea of the ",(0,o.kt)("a",{parentName:"p",href:"../wizard/intro"},"AVS setup wizard tool")," supporting such plugins. Apart from the wizard domain, users could use this plugin (as a Service command/subcommand) to process the raw keystore if they go for a manual setup."),(0,o.kt)("p",null,"Plugins could be made to generate the keys directly to a keystore folder the Service knows how to read. Generation would be made according to user inputs. Third party tools could be used to generate keystores."),(0,o.kt)("p",null,"Ideally, after providing the keystore path to the Service, it would listen to any changes to the folder so it could handle the keys automatically without requiring a restart. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"By keys, we refer to any kind of secret, either in plain text or encrypted.")),(0,o.kt)("p",null,"This keystore structure requires a strict specifications on the file names, folder names, and contents within the keystore. Plugins can help enormously to get the burden of maintaining such structure off the user."),(0,o.kt)("p",null,"The path to this keystore folder can be provided via an environment variable or argument. Either way, a target for an option in ",(0,o.kt)("a",{parentName:"p",href:"/docs/packaging/profiles"},"the profile file")," of the packaging proposal for Nodes can be used to allow the AVS setup wizard tool to get his path from the user."))}u.isMDXComponent=!0}}]);