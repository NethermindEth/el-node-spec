"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6501:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"Introduction",sidebar_position:1},a=void 0,s={unversionedId:"monitoring/intro",id:"monitoring/intro",title:"Introduction",description:"Deploying the Monitoring Stack is the responsibility of a Middleware setup wizard tool and is the set of following services:",source:"@site/docs/monitoring/intro.md",sourceDirName:"monitoring",slug:"/monitoring/intro",permalink:"/middleware-spec/docs/monitoring/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/monitoring/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Monitoring Stack",permalink:"/middleware-spec/docs/category/monitoring-stack"},next:{title:"Prometheus",permalink:"/middleware-spec/docs/monitoring/prometheus"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Deploying the ",(0,o.kt)("strong",{parentName:"p"},"Monitoring Stack")," is the responsibility of a Middleware setup wizard tool and is the set of following services:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Prometheus")," as center point of metrics collection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Node Exporter")," to collect metrics from the host machine."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Grafana")," to visualize the metrics collected by Prometheus, both host and middleware metrics.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Monitoring Stack diagram",src:r(9472).Z,width:"2028",height:"1204"})),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/monitoring/prometheus"},"Prometheus")," instance would be deployed initially with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/monitoring/node-exporter"},"Node Exporter")," as the only target. Middleware targets would be added dynamically by the tool when a new middleware is deployed. Grafana will be deployed initially with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/monitoring/grafana#host-metrics"},"Host Metrics")," dashboard to visualize metrics from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/monitoring/node-exporter"},"Node Exporter")," and monitoring host resources."),(0,o.kt)("p",null,"Grafana supports alerting. The user can configure custom alerts for host and middleware metrics. These alerts are sent to the user via Alert Contact Points, which could be configured with the Middleware setup wizard tool."))}u.isMDXComponent=!0},9472:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/monitoring-stack-53cd34b584912f64600e6cc4d0b6f09d.png"}}]);