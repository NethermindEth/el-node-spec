"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5001],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),d=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,k=s["".concat(m,".").concat(u)]||s[u]||c[u]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2,id:"metrics-prom-spec"},o="Prometheus Metrics Specification",l={unversionedId:"metrics/metrics-prom-spec",id:"metrics/metrics-prom-spec",title:"Prometheus Metrics Specification",description:"The table below defines metrics which may be captured by Nodes which expose metrics to Prometheus. Nodes may expose additional metrics however these should not use the eigen prefix. The label avsname allows identification of Nodes and we strongly recommend to use that label in any additional or custom metric the Node provides.",source:"@site/docs/metrics/metrics-prom.md",sourceDirName:"metrics",slug:"/metrics/metrics-prom-spec",permalink:"/docs/metrics/metrics-prom-spec",draft:!1,editUrl:"https://github.com/NethermindEth/el-node-spec/edit/main/docs/docs/metrics/metrics-prom.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"metrics-prom-spec"},sidebar:"sidebar",previous:{title:"EigenLayer Node API",permalink:"/docs/metrics/metrics-api"},next:{title:"Implementation reference",permalink:"/docs/metrics/metrics-examples"}},m={},d=[{value:"Notation examples",id:"notation-examples",level:2}],p={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"prometheus-metrics-specification"},"Prometheus Metrics Specification"),(0,r.kt)("p",null,"The table below defines metrics which may be captured by Nodes which expose metrics to Prometheus. Nodes may expose additional metrics however these should not use the ",(0,r.kt)("inlineCode",{parentName:"p"},"eigen_")," prefix. The label ",(0,r.kt)("inlineCode",{parentName:"p"},"avs_name")," allows identification of Nodes and we strongly recommend to use that label in any additional or custom metric the Node provides."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"),(0,r.kt)("th",{parentName:"tr",align:null},"Labels"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eigen_fees_earned_total")),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of fees earned in ",(0,r.kt)("inlineCode",{parentName:"td"},"<token>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avs_name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"token"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eigen_slashing_incurred_total")),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of slashing incurred in ",(0,r.kt)("inlineCode",{parentName:"td"},"<token>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avs_name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"token"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eigen_balance_total")),(0,r.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"Node total balance in ",(0,r.kt)("inlineCode",{parentName:"td"},"<token>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avs_name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"token"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eigen_performance_score")),(0,r.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"The performance metric is a score between 0 and 100 and each developer can define their own way of calculating the score. The score is calculated based on the performance of the Node and the performance of the backing  services."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avs_name"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eigen_rpc_request_duration_seconds")),(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration of json-rpc ",(0,r.kt)("inlineCode",{parentName:"td"},"<method>")," in seconds"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avs_name"),",",(0,r.kt)("inlineCode",{parentName:"td"},"method"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"client"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"version"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eigen_rpc_request_total")),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"Total of json-rpc ",(0,r.kt)("inlineCode",{parentName:"td"},"<method>")," requests"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avs_name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"method"),",",(0,r.kt)("inlineCode",{parentName:"td"},"client"),",",(0,r.kt)("inlineCode",{parentName:"td"},"version"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eigen_version")),(0,r.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"Version metadata"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avs_name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"commit"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"runtime"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"version"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"spec_version"))))),(0,r.kt)("h2",{id:"notation-examples"},"Notation examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'eigen_fees_earned_total{avs_name="EigenDA", token="ETH"}')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'eigen_slashing_incurred_total{avs_name="EigenDA", token="ETH"}')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'eigen_total_balance_total{avs_name="EigenDA", token="ETH"}')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'eigen_performance_score{avs_name="EigenDA"}')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'eigen_rpc_request_duration_seconds{avs_name="EigenDA", method="eth_getBlockByNumber", client="nethermind", version="1.17.2"}')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'eigen_rpc_request_total{avs_name="EigenDA", method="eth_getBlockByNumber", client="nethermind", version="1.17.2"}')," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'eigen_version{avs_name="EigenDA", commit="120f4c8db352845f93b0e86a46b5f807297e4ac3", runtime=".NET 7.0.3", version="1.17.2", spec_version="1.0.0"}'))))}c.isMDXComponent=!0}}]);