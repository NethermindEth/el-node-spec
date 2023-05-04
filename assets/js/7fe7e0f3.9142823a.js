"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9295],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),i=a(6010),o=a(2466),l=a(6550),s=a(1980),c=a(7392),u=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,c]=m({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),k=(()=>{const e=s??p;return h({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,i]),tabValues:i}}var k=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(p(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},o,{className:(0,i.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},491:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),i=a(4866),o=a(5162);const l={sidebar_position:1,id:"packaging"},s="Packaging procedure",c={unversionedId:"packaging/packaging",id:"packaging/packaging",title:"Packaging procedure",description:"Middleware Services in the EigenLayer Protocol under the proposed specification comprise of Docker containers running alongside backing services such as databases, indexers, and utility services. Middleware developers are responsible for defining these services and their options well to work correctly. The objective is to create a standard interface to manage the setup, configuration, and updates of these Middleware Services.",source:"@site/docs/packaging/packaging.mdx",sourceDirName:"packaging",slug:"/packaging/",permalink:"/docs/packaging/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packaging/packaging.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"packaging"},sidebar:"sidebar",previous:{title:"Packaging & Upgrading",permalink:"/docs/category/packaging--upgrading"},next:{title:"Manifest file",permalink:"/docs/packaging/manifest"}},u={},p=[{value:"Middleware package",id:"middleware-package",level:2},{value:"Package source",id:"package-source",level:3},{value:"Structure",id:"structure",level:3},{value:"Profile",id:"profile",level:3},{value:"Tap structure",id:"tap-structure",level:2},{value:"Checksum",id:"checksum",level:3},{value:"Publishing the checksum",id:"publishing-the-checksum",level:4}],d={toc:p},h="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"packaging-procedure"},"Packaging procedure"),(0,r.kt)("p",null,"Middleware Services in the EigenLayer Protocol under the proposed specification comprise of Docker containers running alongside backing services such as databases, indexers, and utility services. Middleware developers are responsible for defining these services and their options well to work correctly. The objective is to create a standard interface to manage the setup, configuration, and updates of these Middleware Services."),(0,r.kt)("p",null,"The package for a specific version of a Middleware service will consist of a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"docker-compose.yml"))," file, a manifest file defining the package version and additional information (if the upgrade is optional or recommended, etc), and a set of profiles or different configurations for the package. "),(0,r.kt)("p",null,"Middleware providers will publish their packages following the format defined ",(0,r.kt)("a",{parentName:"p",href:"#middleware-package"},"below")," in a separate git repository (Tap) called ",(0,r.kt)("inlineCode",{parentName:"p"},"eigen-<middleware name>"),", which involves Middleware providers initializing a git repository with the required and standard structure that will be defined later. The ",(0,r.kt)("a",{parentName:"p",href:"../wizard/intro"},"Middleware setup wizard")," would rely on this structure to get package information and install the Middleware service."),(0,r.kt)("p",null,"Middleware providers manage these repositories, and with each new release, they update the tap with the corresponding configuration files. The new package will only be considered correct if it follows the required structure and if a git tag is created with it in the tap repository."),(0,r.kt)("p",null,"The EigenLayer organization will maintain a core git repository that will serve as an index for all the published Middleware services containing the URLs of all the packaging repositories. Middleware providers have to create a Pull Request to this core repository to register their Middleware service."),(0,r.kt)("p",null,"As an ",(0,r.kt)("strong",{parentName:"p"},"alternative to centralized git hosting"),", we suggest using distributed ledger technology (DLT), such as a blockchain, to store and manage Middleware services' configuration files and metadata. Middleware providers would submit their configuration files, updates, and other relevant information to the DLT network."),(0,r.kt)("p",null,"This approach would require Middleware providers to interact with the DLT network, submitting transactions and querying data. As a result, the management process becomes decentralized and transparent."),(0,r.kt)("p",null,"Decentralized git hosting such as ",(0,r.kt)("a",{parentName:"p",href:"https://gitopia.com"},"Gitopia")," can be used as an alternative to Github."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"While this decentralized approach is interesting and offers some unique benefits, it may not be the most practical solution for managing Middleware services due to the added complexity and potential performance issues. However, it's worth considering as an alternative to more traditional centralized or repository-based approaches.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Eigen Layer Middleware Specification is designed for ",(0,r.kt)("strong",{parentName:"p"},"Linux")," systems. The packaging structure and its functionality rely on the use of Docker and Docker Networking, including host networking, which needs to be better supported on Windows and Mac OS.")),(0,r.kt)("h2",{id:"middleware-package"},"Middleware package"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All commands used in this section are for demonstration purposes only")),(0,r.kt)("p",null,"A middleware service is a collection of Docker services declared in a Docker Compose file. Middleware developers are responsible for defining these services and their options well to work correctly."),(0,r.kt)("p",null,"The objective of a middleware package is to provide all the necessary files to set up a middleware in an on-premise setup using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose")," as a service manager."),(0,r.kt)("h3",{id:"package-source"},"Package source"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Git repository")),(0,r.kt)("h3",{id:"structure"},"Structure"),(0,r.kt)("p",null,"A package is a set of profiles, which means each middleware version could have a collection of profiles inside that the user could select at setup time, like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tool add some/middleware -v v1.0.0 [profile] [options...]\n")),(0,r.kt)("p",null,"Profiles are suitable for creating specialized setups of the same version for different scenarios like different networks."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.yml")," file at the project's root is the entry point to define the project's structure, with information about the version of the middleware and the list of profiles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./\n\u251c\u2500\u2500 profile1/\n\u2502   \u251c\u2500\u2500 alerts/\n\u2502   \u251c\u2500\u2500 dashboards/\n\u2502   \u251c\u2500\u2500 panels/\n\u2502   \u251c\u2500\u2500 .env\n\u2502   \u251c\u2500\u2500 docker-compose.yml\n\u2502   \u2514\u2500\u2500 profile.yml\n\u251c\u2500\u2500 profile2/\n\u2502   \u251c\u2500\u2500 alerts/\n\u2502   \u251c\u2500\u2500 dashboards/\n\u2502   \u251c\u2500\u2500 panels/\n\u2502   \u251c\u2500\u2500 .env\n\u2502   \u251c\u2500\u2500 docker-compose.yml\n\u2502   \u2514\u2500\u2500 profile.yml\n\u2514\u2500\u2500 manifest.yml\n")),(0,r.kt)("h3",{id:"profile"},"Profile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./\n\u251c\u2500\u2500 alerts/\n\u251c\u2500\u2500 dashboards/\n\u251c\u2500\u2500 panels/\n\u251c\u2500\u2500 .env\n\u251c\u2500\u2500 docker-compose.yml\n\u2514\u2500\u2500 profile.yml\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"alerts")," folder (optional) contains files following the ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/file-provisioning/#provision-alert-rules"},"Grafana file provisioning format for alert rules"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dashboards")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"panels")," folders contain the Grafana Dashboards and ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/manage-library-panels/"},"Library Panels")," respectively."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".env")," contains a list of environment variables used in the Docker Compose file. To know more about environment variables substitution in a Docker Compose file follow ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/environment-variables/set-environment-variables/#substitute-with-an-env-file"},"this link"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," is a standard Docker Compose file declaring all the services, volumes, networks, etc. required for the middleware."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"profile.yml")," is the file that contains options to configure the profile."),(0,r.kt)("h2",{id:"tap-structure"},"Tap structure"),(0,r.kt)("p",null,"The Tap should contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md"),", and a folder with the contents described ",(0,r.kt)("a",{parentName:"p",href:"#structure"},"above")," named after the git tag that represents the release of a new package. Optionally, a ",(0,r.kt)("inlineCode",{parentName:"p"},"checksum.txt")," file can be provided. The following directory structure can be used as reference:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./\n\u251c\u2500\u2500 v1.0.0/\n\u2502   \u251c\u2500\u2500 mainnet/\n\u2502   \u2502   \u251c\u2500\u2500 alerts/\n\u2502   \u2502   \u251c\u2500\u2500 dashboards/\n\u2502   \u2502   \u251c\u2500\u2500 panels/\n\u2502   \u2502   \u251c\u2500\u2500 .env\n\u2502   \u2502   \u251c\u2500\u2500 docker-compose.yml\n\u2502   \u2502   \u2514\u2500\u2500 profile.yml\n\u2502   \u251c\u2500\u2500 goerli/\n\u2502   \u2502   \u251c\u2500\u2500 alerts/\n\u2502   \u2502   \u251c\u2500\u2500 dashboards/\n\u2502   \u2502   \u251c\u2500\u2500 panels/\n\u2502   \u2502   \u251c\u2500\u2500 .env\n\u2502   \u2502   \u251c\u2500\u2500 docker-compose.yml\n\u2502   \u2502   \u2514\u2500\u2500 profile.yml\n\u2502   \u2514\u2500\u2500 manifest.yml\n\u251c\u2500\u2500 checksum.txt\n\u2514\u2500\u2500 README.md\n")),(0,r.kt)("h3",{id:"checksum"},"Checksum"),(0,r.kt)("p",null,"Calculating a checksum of the package is important to ensure the integrity and authenticity of the data being transferred or stored. A checksum is a value calculated from the content of the package, and can be used to verify that the package has not been altered or corrupted. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Providing a checksum is ",(0,r.kt)("strong",{parentName:"p"},"optional"),", but it's highly recommended to ensure the integrity of the package.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The package's checksum ",(0,r.kt)("strong",{parentName:"p"},"MUST")," be calculated using the ",(0,r.kt)("strong",{parentName:"p"},"SHA-256")," hashing algorithm. ")),(0,r.kt)("p",null,"The following script can be used to calculate the package checksum and generate the required ",(0,r.kt)("inlineCode",{parentName:"p"},"checksum.txt"),":"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"unix",label:"Linux/Unix/macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# Check if a package root argument is provided\nif [ -z "$1" ]; then\n  echo "Usage: $0 <package_root>"\n  exit 1\nfi\n\n# Set the package root directory and the output file\npackage_root="$1"\noutput_file="checksums.txt"\n\n# Remove the output file if it exists\nrm -f "$output_file"\n\n# Iterate through all files in the package, calculate their SHA-256 checksum, and save the result to the output file\nfind "$package_root" -type f -not -path "*/.git/*" -exec sha256sum {} \\; | sort -k 2 > "$output_file"\n\n# Print the final checksum of the output file\nsha256sum "$output_file"\n')),(0,r.kt)("p",null,"  Save this script as ",(0,r.kt)("inlineCode",{parentName:"p"},"calculate_checksum.sh")," in any directory, give it executable permissions with ",(0,r.kt)("inlineCode",{parentName:"p"},"chmod +x calculate_checksum.sh"),", and run it with ",(0,r.kt)("inlineCode",{parentName:"p"},"./calculate_checksum.sh /path/to/package_root")," providing the package root directory path as an argument. The output will be a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"checksums.txt")," containing the checksums of all files within the package, sorted by file path. The final checksum of the ",(0,r.kt)("inlineCode",{parentName:"p"},"checksums.txt")," file will be printed to the console.")),(0,r.kt)(o.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Set the package root directory and the output file\n$packageRoot = ".\\"\n$outputFile = "checksums.txt"\n\n# Remove the output file if it exists\nif (Test-Path $outputFile) {\n    Remove-Item $outputFile\n}\n\n# Iterate through all files in the package, calculate their SHA-256 checksum, and save the result to the output file\nGet-ChildItem -Path $packageRoot -Recurse -File -Exclude ".git" |\nForEach-Object {\n    $hash = (Get-FileHash -Path $_.FullName -Algorithm SHA256).Hash.ToLower()\n    Add-Content -Path $outputFile -Value "$hash *$($_.FullName)"\n}\n\n# Sort the output file by file path\n(Get-Content $outputFile) | Sort-Object | Set-Content $outputFile\n\n# Print the final checksum of the output file\n(Get-FileHash -Path $outputFile -Algorithm SHA256).Hash.ToLower()\n')),(0,r.kt)("p",null,"  Save this script as ",(0,r.kt)("inlineCode",{parentName:"p"},"calculate_checksum.ps1")," in any directory, and run it with ",(0,r.kt)("inlineCode",{parentName:"p"},'powershell -ExecutionPolicy Bypass -File .\\calculate_checksum.ps1 "C:\\path\\to\\package_root"')," providing the package root directory path as an argument. The output will be a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"checksums.txt")," containing the checksums of all files within the package, sorted by file path. The final checksum of the ",(0,r.kt)("inlineCode",{parentName:"p"},"checksums.txt")," file will be printed to the console."))),(0,r.kt)("h4",{id:"publishing-the-checksum"},"Publishing the checksum"),(0,r.kt)("p",null,"In addition to including the ",(0,r.kt)("inlineCode",{parentName:"p"},"checksum.txt")," file within the package uploaded to the tap repository, it is recommended that the checksum of the ",(0,r.kt)("inlineCode",{parentName:"p"},"checksum.txt")," file be published on the release page, download page, or within the README. This enables users to calculate the package checksum, verify its consistency with the ",(0,r.kt)("inlineCode",{parentName:"p"},"checksum.txt")," file in the package, and compare it to the published checksum."),(0,r.kt)("p",null,"Furthermore, ongoing discussions are aimed at developing a method for publishing the checksum on-chain, with the intention of enhancing the security and robustness of the process."))}m.isMDXComponent=!0}}]);