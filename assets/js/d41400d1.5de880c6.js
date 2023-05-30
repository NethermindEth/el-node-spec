"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,g=p["".concat(c,".").concat(s)]||p[s]||d[s]||i;return n?a.createElement(g,o(o({ref:t},f),{},{components:n})):a.createElement(g,o({ref:t},f))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={title:"Configuration",sidebar_position:2},o=void 0,l={unversionedId:"graft/config",id:"graft/config",title:"Configuration",description:"Configuration file could be used to list all the data sources required to build dashboards and panels. This file is the graft.yml file in the current directory by default but could be specified using the global flag --config/-c. E.g.:",source:"@site/docs/graft/config.md",sourceDirName:"graft",slug:"/graft/config",permalink:"/docs/graft/config",draft:!1,editUrl:"https://github.com/NethermindEth/el-node-spec/edit/main/docs/docs/graft/config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuration",sidebar_position:2},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/graft/intro"},next:{title:"Dashboards",permalink:"/docs/graft/dashboards"}},c={},u=[{value:"Connect to Grafana instance",id:"connect-to-grafana-instance",level:3},{value:"Initialize configuration",id:"initialize-configuration",level:3},{value:"Configuration diff",id:"configuration-diff",level:3},{value:"Configuration file",id:"configuration-file",level:4},{value:"Diff output",id:"diff-output",level:4},{value:"Apply configuration",id:"apply-configuration",level:3}],f={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Configuration file could be used to list all the data sources required to build dashboards and panels. This file is the ",(0,r.kt)("inlineCode",{parentName:"p"},"graft.yml")," file in the current directory by default but could be specified using the global flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--config/-c"),". E.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"datasources:\n  - uid: el-eigenDA-datasource\n    name: Eigen DA\n    type: prometheus\n    url: http://prometheus:9090\n    access: proxy\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"uid")," property is a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," identifier inside the Grafana database. To know more about the importance of the good usage of this property, check the ",(0,r.kt)("a",{parentName:"p",href:"./the-uid-importance"},"The UID importance")," section.")),(0,r.kt)("h3",{id:"connect-to-grafana-instance"},"Connect to Grafana instance"),(0,r.kt)("p",null,"Environment variables listed below are used to connect to the Grafana instance, if they are not set, the default values will be used:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GRAFANA_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"http://localhost:3000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GRAFANA_USER"),(0,r.kt)("td",{parentName:"tr",align:null},"admin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GRAFANA_PASSWORD"),(0,r.kt)("td",{parentName:"tr",align:null},"admin")))),(0,r.kt)("h3",{id:"initialize-configuration"},"Initialize configuration"),(0,r.kt)("p",null,"To initialize the configuration file in the current directory and the Eigen Layer folder in the Grafana instance run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"graft init\n")),(0,r.kt)("p",null,"After running this command, the ",(0,r.kt)("inlineCode",{parentName:"p"},"graft.yml")," file will be created in the current directory and the Eigen Layer folder will be created in the Grafana instance."),(0,r.kt)("h3",{id:"configuration-diff"},"Configuration diff"),(0,r.kt)("p",null,"Configuration diff is the difference between the current configuration file and the current state of the Grafana instance, specifically the data sources. To view the configuration diff use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"graft config diff\n")),(0,r.kt)("p",null,"This command will display the differences between the current state and the previous state, e.g:"),(0,r.kt)("h4",{id:"configuration-file"},"Configuration file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"datasources:\n  - name: Eigen DA\n    uid: el-eigen_da\n    type: prometheus\n    url: http://prometheus:9090\n    access: proxy\n")),(0,r.kt)("h4",{id:"diff-output"},"Diff output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ graft config diff\n+ DATA SOURCE Eigen DA (el-eigen_da)\n  + Name: Eigen DA\n  + UID: el-eigen_da\n  + Type: prometheus\n  + URL: http://prometheus:9090\n  + Access: proxy\n")),(0,r.kt)("h3",{id:"apply-configuration"},"Apply configuration"),(0,r.kt)("p",null,"To apply the configuration in the configuration file to the Grafana instance, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"graft config apply\n")),(0,r.kt)("p",null,"This will create all the data sources listed in the configuration file in the Grafana instance."))}d.isMDXComponent=!0}}]);