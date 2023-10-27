"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[814],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=i,f=p["".concat(o,".").concat(d)]||p[d]||u[d]||a;return r?n.createElement(f,c(c({ref:t},m),{},{components:r})):n.createElement(f,c({ref:t},m))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:i,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:2,id:"metrics-examples"},c="Implementation reference",s={unversionedId:"spec/metrics/metrics-examples",id:"spec/metrics/metrics-examples",title:"Implementation reference",description:"This guide is intended to showcase the practical application of the Prometheus metrics using authentic examples. Examples used are:",source:"@site/docs/spec/metrics/metrics-examples.md",sourceDirName:"spec/metrics",slug:"/spec/metrics/metrics-examples",permalink:"/docs/spec/metrics/metrics-examples",draft:!1,editUrl:"https://github.com/NethermindEth/el-node-spec/edit/main/docs/docs/spec/metrics/metrics-examples.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"metrics-examples"},sidebar:"sidebar",previous:{title:"Prometheus Metrics Specification",permalink:"/docs/spec/metrics/metrics-prom-spec"},next:{title:"Plugin",permalink:"/docs/category/plugin"}},o={},l=[{value:"EigenDA Example",id:"eigenda-example",level:2},{value:"Prometheus Metrics",id:"prometheus-metrics",level:2},{value:"Economics metrics",id:"economics-metrics",level:3},{value:"Perfomance metrics",id:"perfomance-metrics",level:3},{value:"RPC metrics",id:"rpc-metrics",level:3}],m={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"implementation-reference"},"Implementation reference"),(0,i.kt)("p",null,"This guide is intended to showcase the practical application of the Prometheus metrics using authentic examples. Examples used are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"EigenDA")),(0,i.kt)("p",null,"Some metrics and endpoints are very straightforward, but having a reference for the responses and labels can be helpful."),(0,i.kt)("h2",{id:"eigenda-example"},"EigenDA Example"),(0,i.kt)("h2",{id:"prometheus-metrics"},"Prometheus Metrics"),(0,i.kt)("h3",{id:"economics-metrics"},"Economics metrics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'eigen_fees_earned_total{token="rETH", unit="wei", strategy="0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2"}')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'eigen_slashing_status{avs="eigenDA"}')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'eigen_registered_stakes{quorum_number=1, quorum_name="beaconChainEth"}'))),(0,i.kt)("h3",{id:"perfomance-metrics"},"Perfomance metrics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eigen_performance_score"))),(0,i.kt)("h3",{id:"rpc-metrics"},"RPC metrics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'eigen_rpc_request_duration_seconds{method="eth_getBlockByNumber", client_version="nethermind/v1.17.2"}')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'eigen_rpc_request_total{method="eth_estimateGas", client_version="nethermind/v1.17.2"}'))))}u.isMDXComponent=!0}}]);